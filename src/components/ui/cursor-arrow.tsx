import { useEffect, useRef, useCallback } from "react";

export const CursorArrow = ({ targetRef }: { targetRef: React.RefObject<HTMLElement> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !ctxRef.current || !targetRef.current) return;

    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rect = targetRef.current.getBoundingClientRect();

    const x0 = mousePos.current.x;
    const y0 = mousePos.current.y;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Check distance - only draw if within "10 radius/rem" (~250px field)
    const dx = cx - x0;
    const dy = cy - y0;
    const distToCenter = Math.sqrt(dx * dx + dy * dy);
    
    // Only activate the arrow if we are within roughly 250px of the button
    if (distToCenter > 250) return;

    const angle = Math.atan2(dy, dx);

    const x1 = cx - Math.cos(angle) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(angle) * (rect.height / 2 + 12);

    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x0, y0);

    // Dynamic curve setup
    const lineX = x1 - x0;
    const lineY = y1 - y0;
    const lineLen = Math.sqrt(lineX * lineX + lineY * lineY);
    
    // Perpendicular normal vector for the curve offset
    // Based on direction, we curve slightly outwards
    const nx = -lineY / lineLen;
    const ny = lineX / lineLen;
    
    // Create the sweeping arc by placing control point perpendicularly offset
    // The curve magnitude is proportional to length (0.25x)
    const cpX = (x0 + x1) / 2 + nx * (lineLen * 0.25);
    const cpY = (y0 + y1) / 2 + ny * (lineLen * 0.25);

    ctx.quadraticCurveTo(cpX, cpY, x1, y1);
    ctx.setLineDash([10, 5]);
    ctx.stroke();

    // Arrow head - pointing along the tangent of the curve at the end point
    const tangentAngle = Math.atan2(y1 - cpY, x1 - cpX);

    const headlen = 10;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headlen * Math.cos(tangentAngle - Math.PI / 6),
      y1 - headlen * Math.sin(tangentAngle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headlen * Math.cos(tangentAngle + Math.PI / 6),
      y1 - headlen * Math.sin(tangentAngle + Math.PI / 6)
    );
    ctx.stroke();
  }, [targetRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const move = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    resize();

    const loop = () => {
      drawArrow();
      animationRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [drawArrow]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};
