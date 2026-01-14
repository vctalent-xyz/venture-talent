import { ArrowRight, Crosshair, Users, LineChart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 bg-primary rounded-full" />
              High-Signal Recruiting
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-mono">
              We help founders make the hire that unlocks the next phase.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
              Seed through Series B. High bar. The cost of a wrong hire is months of runway and momentum.
            </p>
            
            <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto font-mono tracking-wide">
              Recruiting for frontier tech: AI, infra, robotics, hard tech, deep research.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 font-bold font-mono h-12 px-8 uppercase tracking-wide">
                  Book Intro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight font-mono">Why hiring fails before interviews start</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Vague roles attract the wrong people. Weak signals mean you're meeting candidates who won't pass the bar.</p>
            <p>You waste time in meetings that go nowhere. The right person never shows up because they don't know you're looking.</p>
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight font-mono">
            Precision {">"} Volume
          </h2>
          <ul className="grid md:grid-cols-3 gap-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span className="text-sm">Clear roles mean candidates know what they're applying for</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span className="text-sm">Strong signals let you skip discovery calls</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span className="text-sm">Fewer meetings, more hires</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How We Work */}
      <section className="container mx-auto px-4">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-12 text-center">How We Work</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-white/10 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                <Crosshair className="text-primary" />
              </div>
              <CardTitle className="text-xl font-bold font-mono">Embedded Sourcing Pod</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p><strong className="text-white">Who it's for:</strong> Teams with 2-3 open roles in the same domain.</p>
                <p><strong className="text-white">When it makes sense:</strong> You need focused sourcing, not a full hiring function.</p>
                <p><strong className="text-white">The outcome:</strong> You get candidates. You run interviews. We handle the hunt.</p>
              </div>
              <Link href="/offers/sourcing" className="mt-6 block">
                <a className="flex items-center text-primary text-sm font-mono font-bold">
                  EXPLORE PODS <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-white/10 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <div className="w-10 h-10 bg-purple-500/10 flex items-center justify-center mb-4">
                <Users className="text-purple-400" />
              </div>
              <CardTitle className="text-xl font-bold font-mono">Fractional Talent Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p><strong className="text-white">Who it's for:</strong> Seed through Series B companies building a hiring function.</p>
                <p><strong className="text-white">When it makes sense:</strong> You need hiring systems, not just sourcing.</p>
                <p><strong className="text-white">The outcome:</strong> We design your process, build your pipeline, and close candidates.</p>
              </div>
              <Link href="/offers/fractional" className="mt-6 block">
                <a className="flex items-center text-purple-400 text-sm font-mono font-bold">
                  VIEW PARTNERSHIP <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-white/10 hover:border-blue-500/50 transition-colors">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center mb-4">
                <LineChart className="text-blue-400" />
              </div>
              <CardTitle className="text-xl font-bold font-mono">Research & Talent Maps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p><strong className="text-white">Who it's for:</strong> Companies hiring researchers, domain experts, or hard-to-find talent.</p>
                <p><strong className="text-white">When it makes sense:</strong> The talent pool is small and hidden.</p>
                <p><strong className="text-white">The outcome:</strong> You get a map of who exists, where they are, and how to reach them.</p>
              </div>
              <Link href="/offers/research" className="mt-6 block">
                <a className="flex items-center text-blue-400 text-sm font-mono font-bold">
                  SEE MAPS <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* The System */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 leading-tight tracking-tight font-mono">The Execution System</h2>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Diagnose. Hunt. Filter. Close.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Diagnose", desc: "We define the role, the bar, and who fits your culture." },
            { step: "02", title: "Hunt", desc: "We find candidates who aren't looking and reach out directly." },
            { step: "03", title: "Filter", desc: "We screen hard. You only meet people who pass the bar." },
            { step: "04", title: "Close", desc: "We structure offers and negotiate to get the hire done." }
          ].map((s, i) => (
            <div key={i} className="bg-card border border-white/10 p-6">
              <div className="font-mono text-xs text-primary mb-2">{s.step}</div>
              <h3 className="text-xl font-bold mb-2 text-primary font-mono">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground font-mono text-sm mt-12">This is not a funnel. It's a decision system.</p>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center max-w-3xl space-y-6 pt-12">
        <p className="text-xl text-muted-foreground">
          If you're hiring for Seed through Series B, let's talk. We'll tell you if we can help and how.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold font-mono h-12 px-8 uppercase tracking-wide">
            Book Intro
          </Button>
        </Link>
      </section>
    </div>
  );
}
