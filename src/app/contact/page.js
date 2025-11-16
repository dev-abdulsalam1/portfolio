"use client"
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/dev-abdulsalam1" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/abdulsalam-hassan-296739368/" },
    { icon: Mail, label: "Email", url: "mailto:abdulsalamhassan1031@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-background/70 font-medium">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s build something
            <br />
            <span className="text-background/70">impactful together.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 min-h-32"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-background text-foreground hover:bg-background/90 group"
              size="lg"
            >
              Send Message
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Connect with me</h3>
              <p className="text-background/70">
                Feel free to reach out through any of these platforms. I&apos;m always
                open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/10 hover:bg-background/20 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-background/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
