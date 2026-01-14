import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Users } from "lucide-react";

export default function OfferFractional() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <a className="text-xs font-mono text-muted-foreground hover:text-primary mb-8 block">&larr; BACK TO HOME</a>
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-sm">
            <Users className="text-purple-400 w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Fractional Talent Partner</h1>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Your "Head of Talent" on demand. We build your hiring OS, manage the pipeline, and close the best talent for you.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">Why Fractional?</h3>
              <p className="text-muted-foreground">
                Series A/B startups need sophisticated recruiting ops but aren't ready for a full-time VP of Talent. We bridge that gap. We bring the systems, tools, and networks of a mature org to your scaling startup.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold text-white mb-4">Scope of Work</h3>
              <p className="text-muted-foreground mb-4">
                Full ownership of the recruiting function. From writing JDs that convert to designing interview loops that predict success.
              </p>
              <ul className="space-y-3">
                {[
                  "Hiring Roadmap Strategy",
                  "ATS Implementation & Optimization",
                  "Employer Branding & Career Page",
                  "Interviewer Training for Engineering Leads",
                  "Offer Negotiation & Closing Strategy",
                  "Executive Search Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-mono">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className="col-span-1">
            <div className="bg-card border border-white/10 p-6 sticky top-24">
              <h4 className="font-bold text-lg mb-2">Partner Specs</h4>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Commitment</span>
                  <span>Retainer</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Focus</span>
                  <span>Systems + Hires</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Stage</span>
                  <span>Seed - Series B</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-purple-500 text-white hover:bg-purple-600 font-bold font-mono uppercase">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
