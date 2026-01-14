import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Crosshair } from "lucide-react";

export default function OfferSourcing() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <a className="text-xs font-mono text-muted-foreground hover:text-primary mb-8 block">&larr; BACK TO HOME</a>
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm">
            <Crosshair className="text-primary w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Embedded Sourcing Pod</h1>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          A dedicated sourcing engine for early stage companies plugged directly into your team. We handle the hunt; you handle the close.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
              <p className="text-muted-foreground">
                Founders spend 30-40% of their time sourcing. It's high-effort, low-leverage work. Agencies send irrelevant resumes. You need a specialized team that understands what "ML engineer with production experience" actually looks like.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
              <p className="text-muted-foreground mb-4">
                We deploy a sourcing pod (1 Researcher + 1 Senior Recruiter) to your specialized searches. We map the market, identify top passive talent, and generate high-signal intro calls.
              </p>
              <ul className="space-y-3">
                {[
                  "Market Mapping & Competitor Analysis",
                  "Custom Outreach Campaigns",
                  "Technical Screening & Filtering",
                  "Weekly Pipeline Reports",
                  "Direct Slack Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-mono">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className="col-span-1">
            <div className="bg-card border border-white/10 p-6 sticky top-24">
              <h4 className="font-bold text-lg mb-2">Pod Specs</h4>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Duration</span>
                  <span>Monthly Sprint</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Capacity</span>
                  <span>2-3 Roles</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Stack</span>
                  <span>ML, Data, AI</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-primary text-black font-bold font-mono uppercase">
                  Deploy Pod
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
