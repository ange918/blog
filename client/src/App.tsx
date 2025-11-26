import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CategoryPage from "@/pages/category";
import ArticlePage from "@/pages/article";
import ContactPage from "@/pages/contact";
import LegalPage from "@/pages/legal";
import { ScrollToTop } from "@/components/scroll-to-top";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/categorie/:slug" component={CategoryPage} />
        <Route path="/article/:slug" component={ArticlePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/mentions-legales" component={LegalPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
