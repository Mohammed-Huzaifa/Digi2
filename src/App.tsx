import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import BusinessOperations from "./pages/BusinessOperations";
import RecruitingAgent from "./pages/RecruitingAgent";
import AgentUsecases from "./pages/AgentUsecases";
import AgentUsecaseDetail from "./pages/AgentUsecaseDetail";


function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/business-operations" component={BusinessOperations} />
        <Route path="/enterprise">
          <Redirect to="/business-operations" />
        </Route>
        <Route path="/recruiting-agent" component={RecruitingAgent} />
        <Route path="/agent-usecases" component={AgentUsecases} />
        <Route path="/agent-usecases/:slug" component={AgentUsecaseDetail} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

6200781514

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
