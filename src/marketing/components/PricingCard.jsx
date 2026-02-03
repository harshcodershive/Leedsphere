import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import RevealSection from "./RevealSection";
import { useStripeCheckout } from "../../shared/hooks/useStripeCheckout";

export default function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  plan,
  isPopular = false,
  delay = 0
}) {
  const { startCheckout } = useStripeCheckout();
  return (
    <RevealSection delay={delay} className="h-full">
      <div className={`h-full p-8 rounded-2xl border flex flex-col transition-all duration-300 backdrop-blur-md ${
        isPopular 
          ? "bg-white/90 dark:bg-slate-900/90 border-purple-200 dark:border-purple-800 shadow-xl shadow-purple-500/10 relative overflow-hidden" 
          : "bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md"
      }`}>
        
        {isPopular && (
          <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl">
            Popular
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px]">{description}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-slate-900 dark:text-white">{price}</span>
            {price !== "Custom" && <span className="text-slate-500 dark:text-slate-400">/mo</span>}
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {ctaLink ? (
          <Link
            to={ctaLink}
            className={`block w-full py-3 rounded-lg text-center font-medium transition-colors ${
              isPopular
                ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20"
                : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
            }`}
          >
            {ctaText}
          </Link>
        ) : (
          <button
            onClick={() => startCheckout(plan)}
            className={`block w-full py-3 rounded-lg text-center font-medium transition-colors ${
              isPopular
                ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20"
                : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
            }`}
          >
            {ctaText}
          </button>
        )}
      </div>
    </RevealSection>
  );
}
