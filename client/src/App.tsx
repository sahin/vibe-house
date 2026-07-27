import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WhyNow from "./pages/WhyNow";
import BiologicalFounder from "./pages/BiologicalFounder";
import CuratedProducts from "./pages/CuratedProducts";
import EventsSeries from "./pages/EventsSeries";
import BrandGuidelines from "./pages/BrandGuidelines";
import AccommodationCalendar from "./pages/AccommodationCalendar";
import AccommodationDashboard from "./pages/AccommodationDashboard";
import AccommodationBookings from "./pages/AccommodationBookings";
import AccommodationUpcoming from "./pages/AccommodationUpcoming";
import AccommodationHistory from "./pages/AccommodationHistory";
import AccommodationLayout from "./components/AccommodationLayout";
import AccommodationPasswordGate from "./components/AccommodationPasswordGate";

/**
 * Accommodation sub-app — password-gated with its own layout and sub-routes.
 */
function AccommodationApp() {
  const [location] = useLocation();
  return (
    <AccommodationPasswordGate>
      <AccommodationLayout>
        {location === "/accommodation" && <AccommodationCalendar />}
        {location === "/accommodation/calendar" && <AccommodationCalendar />}
        {location === "/accommodation/dashboard" && <AccommodationDashboard />}
        {location === "/accommodation/bookings" && <AccommodationBookings />}
        {location === "/accommodation/upcoming" && <AccommodationUpcoming />}
        {location === "/accommodation/history" && <AccommodationHistory />}
      </AccommodationLayout>
    </AccommodationPasswordGate>
  );
}

/**
 * Routes are defined at both / and /about/location/ so the same pages
 * render under both prefixes.  Internal links are handled by the h()
 * helper from useBranding which adds /about/location when appropriate.
 * This avoids double-prefixing that would occur with wouter's Router
 * base prop combined with h().
 */
function Routes() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Root routes */}
      <Route path={"/"} component={Home} />
      <Route path={"/why"} component={WhyNow} />
      <Route path={"/biological-founder"} component={BiologicalFounder} />
      <Route path={"/the-founders-pharmacy"} component={CuratedProducts} />
      <Route path={"/events-series"} component={EventsSeries} />
      <Route path={"/brand"} component={BrandGuidelines} />

      {/* Lovie routes — same pages served under /about/location/ */}
      <Route path={"/about/location"} component={Home} />
      <Route path={"/about/location/"} component={Home} />
      <Route path={"/about/location/why"} component={WhyNow} />
      <Route path={"/about/location/biological-founder"} component={BiologicalFounder} />
      <Route path={"/about/location/the-founders-pharmacy"} component={CuratedProducts} />
      <Route path={"/about/location/events-series"} component={EventsSeries} />
      <Route path={"/about/location/brand"} component={BrandGuidelines} />

      {/* Accommodation routes — password-protected dashboard */}
      <Route path="/accommodation" component={AccommodationApp} />
      <Route path="/accommodation/:rest*" component={AccommodationApp} />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Routes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
