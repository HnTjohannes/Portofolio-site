import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdMSmBLjvd0KEC6QPmuWjoRlkmh0I81pKp8xyxPxkfkm8XO9A/formResponse";
const ENTRY_NAME = "entry.615725663";
const ENTRY_EMAIL = "entry.837152990";
const ENTRY_MESSAGE = "entry.842332849";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new URLSearchParams();
    formBody.append(ENTRY_NAME, formData.name);
    formBody.append(ENTRY_EMAIL, formData.email);
    formBody.append(ENTRY_MESSAGE, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });

      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-12 animate-in fade-in-50 duration-700">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-light">About Me</h1>
            <p className="text-muted-foreground">
              Game designer passionate about creating immersive worlds and experiences
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Photo */}
            <div className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
              <img
                src="/headshot.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio Text & Resume */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-light">Bio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hi I’m Rainald. in 2023  I discoverd that I not only can play games but also make them. since then I worked non-stop to join the industry from building projects, to following studdies and internships and even attend events to learn as much as I can about game development and everything connected to it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Now my focus lies in improving my skills as a Level designer and creating memorable experiences for players looking to grow with the industry. I am always looking for jobs / oppertunities to broaden my horizon and improve myself with new experiences and people.  Contact me if you have some questions or want to chat.
                </p>
              </div>

              {/* Resume Download */}
              <Button variant="outline" className="w-full gap-2" asChild>
                <a href="/resume-gold.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8 pt-8 border-t border-border">
            <h2 className="text-2xl font-light text-center">Get in Touch</h2>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:isajohannes2077@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>isajohannes2077@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rainald-isabella-2544a2237/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Rainald JP Isabella</span>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="bg-muted border-border resize-none"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
