import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, LineChart } from "lucide-react";

export default function OfferResearch() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <a className="text-xs font-mono text-muted-foreground hover:text-primary mb-8 block">&larr; BACK TO HOME</a>
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-sm">
            <LineChart className="text-blue-400 w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Investor & Research Map</h1>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Specialized talent mapping for early stage companies, ML research teams, and AI startups. Find the brains building the next breakthrough.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">The Niche</h3>
              <p className="text-muted-foreground">
                Finding ML Researchers, Data Scientists, and Research Engineers is incredibly difficult. These candidates are often hidden in universities, research labs, or working at other companies. We track them.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold text-white mb-4">Deliverables</h3>
              <p className="text-muted-foreground mb-4">
                We provide deep landscape analysis and introductions to key figures in specific research domains.
              </p>
              <ul className="space-y-3">
                {[
                  "Global Research Talent Mapping",
                  "Academic & PhD Pipeline Access",
                  "ML Research & Data Science Search",
                  "Research Publication & Contribution History",
                  "Technical Diligence on Candidates"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-mono">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className="col-span-1">
            <div className="bg-card border border-white/10 p-6 sticky top-24">
              <h4 className="font-bold text-lg mb-2">Map Specs</h4>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Type</span>
                  <span>Search / Map</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Roles</span>
                  <span>Research / ML</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/5 py-2">
                  <span className="text-muted-foreground">Speed</span>
                  <span>4-6 Weeks</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-bold font-mono uppercase">
                  Start Mapping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
