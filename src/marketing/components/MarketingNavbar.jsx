import { useState, useEffect, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import BookDemoModal from "./BookDemoModal";

// Static data moved outside to prevent re-creation
const NAV_LINKS = [
  { name: "Product", href: "/product" },
  { name: "Solutions", href: "/solutions" },
  { name: "Integrations", href: "/integrations" },
  { name: "Resources", href: "/resources" },
  { name: "Pricing", href: "/#pricing", isAnchor: true },
];

const MarketingNavbar = memo(function MarketingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle anchor link clicks (like Pricing)
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('/#', '');

    // If already on home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Toggles state when user scrolls down more than 20px
      // React automatically batches updates, so this is efficient
      const shouldBeScrolled = window.scrollY > 20;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    // Passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <>
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
             <span className="text-xl font-bold">L</span>
           </div>
           <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"}`}>
             Leedsphere
           </span>
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
           {NAV_LINKS.map((link) => (
             link.isAnchor ? (
               <button
                 key={link.name}
                 onClick={(e) => handleAnchorClick(e, link.href)}
                 className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 transition-colors relative group"
               >
                 {link.name}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
               </button>
             ) : (
               <Link
                 key={link.name}
                 to={link.href}
                 className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 transition-colors relative group"
               >
                 {link.name}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
               </Link>
             )
           ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-4">
           {/* Language Selector (Placeholder) */}
           <button 
             className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
             aria-label="Change language"
           >
             <Globe className="w-4 h-4" />
           </button>
           
           <div className="h-4 w-px bg-slate-200 dark:bg-slate-700"></div>

           <Link to="/login" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors">
             Login
           </Link>
           
           <button
             onClick={() => setIsDemoOpen(true)}
             className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
               isScrolled
                 ? "border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                 : "border-slate-300 text-slate-800 hover:bg-black/5 dark:border-slate-600 dark:text-white"
             }`}
           >
             Book a demo
           </button>

           <Link 
             to="/signup" 
             className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-0.5"
           >
             Create your workspace
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
             <div className="flex flex-col p-6 gap-6">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    link.isAnchor ? (
                      <button
                        key={link.name}
                        onClick={(e) => {
                          handleAnchorClick(e, link.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-800"></div>
                <div className="flex flex-col gap-4">
                    <Link to="/login" className="text-base font-medium text-slate-900 dark:text-white">Login</Link>
                    <Link to="/signup" className="px-4 py-3 rounded-xl bg-purple-600 text-white text-base font-medium text-center shadow-lg shadow-purple-500/20">
                      Create your workspace
                    </Link>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
});

export default MarketingNavbar;
