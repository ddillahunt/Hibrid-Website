import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function RouteScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import Home from "./pages/Home";
import Services from "./pages/Services";
import BecomePorter from "./pages/BecomePorter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import PropertyManagement from "./pages/PropertyManagement";
import RequestQuote from "./pages/RequestQuote";
import Resident from "./pages/Resident";
import BulkPickup from "./pages/BulkPickup";

export default function App() {
  return (
    <Router basename="/Hibrid-Website">
      <RouteScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/become-porter"
              element={<BecomePorter />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/property-management" element={<PropertyManagement />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/resident" element={<Resident />} />
            <Route path="/bulk-pickup" element={<BulkPickup />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}