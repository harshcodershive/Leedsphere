import RevealSection from "./RevealSection";
import PricingCard from "./PricingCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PricingPreview() {
  const plans = [
    {
      title: "Starter",
      plan: "starter",
      price: "$199",
      description: "Perfect for startups and small teams ready to scale.",
      features: [
        "Up to 50 team members",
        "Unlimited channels & messages",
        "10GB file storage",
        "Basic integrations",
        "Email support"
      ],
      ctaText: "Start 14-day trial",
      ctaLink: null,
      delay: 0.1
    },
    {
      title: "Pro",
      plan: "pro",
      price: "$499",
      description: "For growing teams that demand premium features and support.",
      features: [
        "Up to 250 team members",
        "Advanced workflow automation",
        "100GB file storage",
        "Premium integrations & APIs",
        "Priority 24/7 support",
        "Advanced analytics"
      ],
      ctaText: "Start 14-day trial",
      ctaLink: null,
      isPopular: true,
      delay: 0.2
    },
    {
      title: "Enterprise",
      plan: "enterprise",
      price: "$999",
      description: "Enterprise-grade security, compliance, and dedicated support.",
      features: [
        "Unlimited team members",
        "Enterprise SSO & SAML 2.0",
        "Unlimited storage",
        "Custom integrations & SLAs",
        "Dedicated account manager",
        "Advanced security & compliance",
        "On-premise deployment option"
      ],
      ctaText: "Contact sales",
      ctaLink: "mailto:sales@leedsphere.com",
      delay: 0.3
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white/40 dark:bg-slate-950/20 border-t border-slate-100/30 dark:border-slate-800/30 backdrop-blur-md scroll-mt-24">
      <div className="container mx-auto px-4">
        <RevealSection effect="cinematic">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Enterprise-grade collaboration for teams of all sizes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Choose the plan that scales with your business. Start with a 14-day free trial, cancel anytime.
            </p>
          </RevealSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
           {plans.map((plan, idx) => (
             <PricingCard key={idx} {...plan} />
           ))}
        </div>

        {/* Final CTA Block */}
        <div className="max-w-4xl mx-auto text-center">
           <RevealSection>
              <div className="relative p-12 rounded-3xl bg-slate-900 dark:bg-white overflow-hidden shadow-2xl">
                 {/* Background decorative glow */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 dark:from-purple-100 dark:to-blue-100 opacity-50 z-0"></div>
                 
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-slate-900 mb-6">
                      Start collaborating with your team today
                    </h2>
                    <p className="text-lg text-slate-300 dark:text-slate-600 mb-10 max-w-xl mx-auto">
                      Join 10,000+ teams who use Leedsphere to communicate like pros. Easy to set up.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                       <Link 
                         to="/signup"
                         className="px-8 py-3.5 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 inline-flex items-center gap-2"
                       >
                         Get Started
                         <ArrowRight className="w-4 h-4" />
                       </Link>
                       <Link 
                         to="/login"
                         className="px-8 py-3.5 rounded-full bg-transparent border border-white/20 dark:border-slate-300 text-white dark:text-slate-700 font-medium hover:bg-white/10 dark:hover:bg-slate-100 transition-colors"
                       >
                         Already have a workspace?
                       </Link>
                    </div>
                 </div>
              </div>
           </RevealSection>
        </div>
        </RevealSection>

      </div>
    </section>
  );
}
