import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WhyNow from "./pages/WhyNow";
import BiologicalFounder from "./pages/BiologicalFounder";
import CuratedProducts from "./pages/CuratedProducts";

const LOVIE_BASE = "/about/location";

function Routes() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/why"} component={WhyNow} />
      <Route path={"/biological-founder"} component={BiologicalFounder} />
      <Route path={"/the-founders-pharmacy"} component={CuratedProducts} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Detect whether the current URL starts with /about/location.
 * If so, wouter uses that as the base path so all routes work under both
 * / and /about/location/ prefixes.
 */
function getBasePath(): string {
  if (typeof window !== "undefined" && window.location.pathname.startsWith(LOVIE_BASE)) {
    return LOVIE_BASE;
  }
  return "";
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const base = getBasePath();

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          {base ? (
            <WouterRouter base={base}>
              <Routes />
            </WouterRouter>
          ) : (
            <Routes />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
