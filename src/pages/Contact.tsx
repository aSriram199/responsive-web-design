import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Contact Us</h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Info */}
          <div className="bg-card border-2 border-foreground/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Email, call, or complete the form to resolve queries about Avishkar
            </p>
            <p className="text-center">
              <a href="mailto:avishkar2k26@gmail.com" className="text-primary text-sm underline">avishkar2k26@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground text-center">Venkat Ajay - 9014454476</p>
            <p className="text-sm text-muted-foreground text-center">Lohitaksh - 8651909766</p>

            <div className="pt-4 space-y-3">
              <div>
                <h3 className="font-bold text-sm text-foreground text-center">Help Desk Support</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">Our support team is available from 3:30 PM - 4:20 PM to address any concerns or queries at Pratham Block</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground text-center">Event Inquiries</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">For Event-related questions or press inquiries, please contact us at given numbers</p>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground text-center">Feedback and Suggestions</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">We value your feedback and are continuously working to improvise our work.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border-2 border-foreground/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display mb-6 text-foreground">You can reach us anytime</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">First name</label>
                  <Input placeholder="First name" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Last name</label>
                  <Input placeholder="Last name" />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Email</label>
                <Input type="email" placeholder="Your email" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Phone number</label>
                <Input placeholder="Phone number" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Message</label>
                <Textarea placeholder="How can we help?" rows={4} />
              </div>
              <Button className="w-full" type="submit">Send Message</Button>
              <div className="flex items-center gap-2">
                <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} />
                <span className="text-xs text-muted-foreground">You agree to our friendly privacy policy.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
