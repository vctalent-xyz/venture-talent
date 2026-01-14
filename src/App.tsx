import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import OfferSourcing from "@/pages/offers/sourcing";
import OfferFractional from "@/pages/offers/fractional";
import OfferResearch from "@/pages/offers/research";
import Contact from "@/pages/contact";
import Layout from "@/components/layout/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/offers/sourcing" component={OfferSourcing} />
        <Route path="/offers/fractional" component={OfferFractional} />
        <Route path="/offers/research" component={OfferResearch} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
