import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6 max-w-2xl mx-auto">
        <div className="space-y-12 animate-in fade-in-50 duration-700">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-light">Let's talk</h1>
            <p className="text-muted-foreground">
              You can contact me on the following platforms or using the form
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="mailto:isajohannes2077@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/rainald-isabella-2544a2237/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="bg-muted border-border"
              />
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-muted border-border"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                required
                rows={6}
                className="bg-muted border-border resize-none"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
