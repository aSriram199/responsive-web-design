import instagramSvg from "@/assets/instagram.svg";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground py-8 mt-auto">
    <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
      <p className="text-sm sm:text-base">
        Designed and Developed by Web Designing Team | Avishkar 2K26
      </p>
      <a
        href="https://instagram.com/Avishkar.2K26"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-footer-foreground hover:text-primary transition-colors"
      >
        <img src={instagramSvg} alt="Instagram" className="w-6 h-6 hover:scale-105 transition-transform" />
        <span className="text-sm">Avishkar.2K26</span>
      </a>
    </div>
  </footer>
);

export default Footer;
