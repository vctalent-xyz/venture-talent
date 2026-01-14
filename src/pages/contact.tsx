import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Terminal, CheckCircle2, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  project: z.string().min(2, "Project/Company name is required"),
  needs: z.string().min(10, "Tell us a bit more about who you need to hire"),
});

// Web3Forms API key - set via environment variable
// For local dev: create .env.local with VITE_WEB3FORMS_ACCESS_KEY=your_key
// For production: set as GitHub Actions secret (WEB3FORMS_ACCESS_KEY)
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      needs: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!WEB3FORMS_ACCESS_KEY) {
      toast({
        title: "Configuration Error",
        description: "Form submission is not configured. Please contact us directly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission from ${values.project}`,
          from_name: values.name,
          email: values.email,
          name: values.name,
          project: values.project,
          needs: values.needs,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Message Sent",
          description: "We've received your inquiry. A partner will be in touch shortly.",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 max-w-5xl mx-auto">
        
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest rounded-sm">
              <Terminal className="w-3 h-3" />
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's build your <br/> team.</h1>
            <p className="text-xl text-muted-foreground">
              High-signal recruiting for early stage founders. Tell us what you're building, and we'll tell you how we can help.
            </p>
          </div>
        </div>

        <div className="bg-card border border-white/10 p-6 md:p-8">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Received.</h3>
              <p className="text-muted-foreground">
                We'll review your stack and requirements and get back to you within 24 hours.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="mt-6"
              >
                Send another
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="founder@company.com" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase">Company / Project</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Startup Name" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="needs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase">Hiring Needs</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="We need a Senior ML Engineer and a Data Scientist..." 
                          className="min-h-[120px] bg-black/20 border-white/10 focus:border-primary resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-black font-bold font-mono uppercase h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>

      </div>
    </div>
  );
}
