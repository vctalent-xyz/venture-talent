import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Terminal, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest">
          <Terminal className="w-3 h-3" />
          About VentureTalent.io
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Access to the <span className="text-primary">highest talent bar.</span>
        </h1>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            We are not a generic agency. We are a recruiting partner designed for founders who need access to elite talent networks and the highest-caliber candidates.
          </p>
          <p>
            The traditional recruiting model is broken. Generalist recruiters don't have access to top-tier talent networks or understand how to evaluate high-bar candidates. They flood your inbox with low-quality resumes, wasting your most valuable asset: time.
          </p>
          <p>
            <strong className="text-white">VentureTalent.io is different.</strong> We operate with the speed and intensity of a startup. We leverage our deep talent network, embed ourselves in your culture, and connect you with the top 1% of talent that isn't looking for a job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-card border border-white/10 p-6">
            <h3 className="text-xl font-bold mb-4">Our DNA</h3>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Founder-first mindset</li>
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Technical fluency</li>
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> High-signal, low-noise</li>
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Long-term partnership</li>
            </ul>
          </div>
          
          <div className="bg-card border border-white/10 p-6">
            <h3 className="text-xl font-bold mb-4">Our Network</h3>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Elite engineering talent</li>
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Top-tier research & domain experts</li>
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Senior leadership & executives</li>
              <li className="flex items-center gap-2"><span className="text-primary">{">"}</span> Early stage company builders</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-bold mb-6">Ready to upgrade your hiring?</h3>
          <Link href="/contact">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold font-mono uppercase">
              Get in touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
