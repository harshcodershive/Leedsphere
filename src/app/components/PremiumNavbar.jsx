import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md h-16 shadow-sm border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-transparent h-20 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-slate-900 dark:text-white">
           <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
             <span className="text-xl">L</span>
           </div>
           Leedsphere
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
           <Link to="/product" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Product</Link>
           <Link to="/solutions" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Solutions</Link>
           <Link to="/pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</Link>
           <Link to="/resources" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Resources</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
           <Link to="/login" className="text-sm font-medium text-slate-900 dark:text-white hover:text-purple-600 transition-colors">Log in</Link>
           <Link to="/signup" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20">
             Get Started
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
          >
             <div className="flex flex-col p-4 gap-4">
                <Link to="/product" className="text-sm font-medium text-slate-600 dark:text-slate-300">Product</Link>
                <Link to="/solutions" className="text-sm font-medium text-slate-600 dark:text-slate-300">Solutions</Link>
                <Link to="/pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300">Pricing</Link>
                <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
                <Link to="/login" className="text-sm font-medium text-slate-900 dark:text-white">Log in</Link>
                <Link to="/signup" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium text-center">Get Started</Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
