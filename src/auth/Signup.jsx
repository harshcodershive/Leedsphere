import React, { useState, useEffect, memo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Input from '../shared/ui/Input';
import Button from '../shared/ui/Button';
import { useAuthStore } from '../store';
import { cn } from '../shared/utils/cn';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollToTop } from '../shared/hooks/useScrollToTop';

// --- VISUAL CONSTANTS ---
const INPUT_CLASS = "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus-visible:ring-offset-0 focus-visible:border-purple-600 focus-visible:ring-4 focus-visible:ring-purple-600/10";
const LABEL_CLASS = "text-slate-700 font-semibold mb-1.5";

const LEFT_CONTENT_SIGNUP = {
    heading: "Where teams communicate and collaborate.",
    text: "Leedsphere brings conversations, files, and tools into one shared workspace. Stay aligned, move faster, and get work done together.",
    bullets: ["Organize conversations in channels", "Chat and collaborate in real time", "Find everything with powerful search"]
};

const LEFT_CONTENT_LOGIN = {
    heading: "Welcome back to Leedsphere.",
    text: "Sign in to continue where your team left off. Your workspace is ready for you.",
    bullets: null
};

// --- MEMOIZED LEFT COLUMN ---
const AuthLeftColumn = memo(({ authMode }) => {
    const content = authMode === 'signup' ? LEFT_CONTENT_SIGNUP : LEFT_CONTENT_LOGIN;

    return (
        <div className="hidden lg:flex lg:w-1/2 bg-slate-50 flex-col justify-center px-12 xl:px-24 relative overflow-hidden border-r border-slate-200">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/60 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />

            <div className="relative z-10 max-w-lg">
                <div className="mb-8">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-purple-500/20 mb-6">
                        <span className="text-xl font-bold">L</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={authMode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{ willChange: "opacity, transform" }}
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
                                {content.heading}
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {content.text}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {content.bullets && (
                    <div className="space-y-4">
                        {content.bullets.map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-slate-700 font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
});

// --- MEMOIZED RIGHT COLUMN (Main component logic moved here or kept in parent, but static parts memoized) ---
// Note: Since FormData updates on every keystroke, the Input fields will re-render.
// We can't memoize the whole form easily without decoupling state. 
// But isolating the Left Column is the biggest win.

const Signup = memo(function Signup({ initialAuthMode = "signup" }) {
  useScrollToTop();
  const navigate = useNavigate();
  const location = useLocation();
  const { signup, login, isLoading, error, isAuthenticated, clearError } = useAuthStore();
  
  // UI ONLY State for toggling modes
  const [authMode, setAuthMode] = useState(initialAuthMode);
  
  useEffect(() => {
    setAuthMode(initialAuthMode);
  }, [initialAuthMode]);

  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    companyName: '',
    teamSize: '',
    password: '' 
  });
  
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      if (authMode === 'login') {
          const from = location.state?.from?.pathname || '/app';
          navigate(from, { replace: true });
      } else {
          navigate('/app', { replace: true });
      }
    }
  }, [isAuthenticated, navigate, location, authMode]);

  useEffect(() => {
    clearError();
    setFormErrors({});
  }, [clearError, authMode]);

  const validate = () => {
    const errors = {};
    if (authMode === 'signup') {
        if (!formData.firstName) errors.firstName = 'First name is required';
        if (!formData.lastName) errors.lastName = 'Last name is required';
        if (!formData.email) errors.email = 'Work email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email address';
        if (!formData.companyName) errors.companyName = 'Company name is required';
        if (!formData.teamSize) errors.teamSize = 'Team size is required';
        if (!formData.password) errors.password = 'Password is required';
        else if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters';
    } else {
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (authMode === 'signup') {
        const fullName = `${formData.firstName} ${formData.lastName}`.trim();
        await signup(fullName, formData.email, formData.password);
    } else {
        await login(formData.email, formData.password);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white text-slate-900 font-sans">
      
      <AuthLeftColumn authMode={authMode} />

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-white">
         <motion.div 
           layout // Smooth layout transition if height changes
           className="w-full max-w-[440px]"
           style={{ willChange: "transform" }}
         >
             <div className="lg:hidden mb-8 text-center">
                 <div className="inline-flex w-10 h-10 bg-purple-600 rounded-lg items-center justify-center text-white shadow-lg shadow-purple-500/30">
                     <span className="text-xl font-bold">L</span>
                 </div>
             </div>

             <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {authMode === 'signup' ? 'Create your Leedsphere workspace' : 'Sign in to your workspace'}
                 </h2>
                 <p className="text-sm text-slate-500 mt-2 font-medium">
                    {authMode === 'signup' ? 'Bring your team together in one place.' : 'Welcome back! Please enter your details.'}
                 </p>
             </div>

             <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50">
                 <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-md"
                      >
                        {error}
                      </motion.div>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={authMode}
                            initial={{ opacity: 0, x: authMode === 'signup' ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: authMode === 'signup' ? -20 : 20 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="space-y-5"
                            style={{ willChange: "opacity, transform" }}
                        >
                            {authMode === 'signup' ? (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Input
                                                label="First name"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                error={formErrors.firstName}
                                                disabled={isLoading}
                                                className={INPUT_CLASS}
                                                labelClassName={LABEL_CLASS}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                label="Last name"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                error={formErrors.lastName}
                                                disabled={isLoading}
                                                className={INPUT_CLASS}
                                                labelClassName={LABEL_CLASS}
                                            />
                                        </div>
                                    </div>

                                    <Input
                                        label="Work email"
                                        type="email"
                                        placeholder="name@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        error={formErrors.email}
                                        disabled={isLoading}
                                        className={INPUT_CLASS}
                                        labelClassName={LABEL_CLASS}
                                    />

                                    <Input
                                        label="Company name"
                                        placeholder="e.g. Acme Corp"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        error={formErrors.companyName}
                                        disabled={isLoading}
                                        className={INPUT_CLASS}
                                        labelClassName={LABEL_CLASS}
                                    />

                                    <div className="space-y-1.5">
                                        <label className={`text-sm leading-none ${LABEL_CLASS}`}>Team size</label>
                                        <div className="relative">
                                            <select
                                                className={cn(
                                                    "flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-600/10 focus-visible:border-purple-600 disabled:cursor-not-allowed disabled:opacity-50 appearance-none pr-8",
                                                    "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400",
                                                    formErrors.teamSize && "border-red-500 focus-visible:ring-red-500/10",
                                                    "transition-all duration-200"
                                                )}
                                                value={formData.teamSize}
                                                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                                                disabled={isLoading}
                                            >
                                                <option value="" disabled className="text-slate-400">Select team size...</option>
                                                <option value="1-10">1-10 employees</option>
                                                <option value="11-50">11-50 employees</option>
                                                <option value="51-200">51-200 employees</option>
                                                <option value="200+">200+ employees</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                            </div>
                                        </div>
                                        {formErrors.teamSize && <p className="text-sm font-medium text-red-600">{formErrors.teamSize}</p>}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Input // LOGIN EMAIL
                                        label="Email"
                                        type="email"
                                        placeholder="name@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        error={formErrors.email}
                                        disabled={isLoading}
                                        className={INPUT_CLASS}
                                        labelClassName={LABEL_CLASS}
                                    />
                                </>
                            )}

                            <Input // SHARED PASSWORD FIELD
                                label="Password"
                                type="password"
                                placeholder={authMode === 'signup' ? "Create a password" : "Your password"}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                error={formErrors.password}
                                disabled={isLoading}
                                className={INPUT_CLASS}
                                labelClassName={LABEL_CLASS}
                            />
                            
                            {authMode === 'login' && (
                                <div className="text-right">
                                    <Link to="#" className="text-sm text-purple-600 hover:underline">Forgot password?</Link>
                                </div>
                            )}

                            <div className="pt-2">
                                <Button 
                                type="submit" 
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-base shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 transition-all duration-150 transform active:scale-[0.98]" 
                                isLoading={isLoading}
                                >
                                    {authMode === 'signup' ? 'Start free trial' : 'Sign in'}
                                </Button>
                                {authMode === 'signup' && (
                                    <p className="text-xs text-center text-slate-500 mt-4 font-medium">
                                        No credit card required.
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                 </form>
             </div>

             <div className="mt-8 text-center text-sm">
                <span className="text-slate-500">
                    {authMode === 'signup' ? 'Already have a workspace? ' : 'New to Leedsphere? '}
                </span>
                <button 
                  onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                  className="font-semibold text-purple-600 hover:text-purple-500 hover:underline transition-colors focus:outline-none"
                >
                  {authMode === 'signup' ? 'Sign in' : 'Create an account'}
                </button>
             </div>
         </motion.div>
         
         <div className="mt-8 lg:absolute lg:bottom-8 lg:right-1/4 lg:translate-x-1/2 text-xs text-slate-400 font-medium">
            &copy; 2026 Leedsphere Ltd.
         </div>
      </div>
    </div>
  );
});

export default Signup;
