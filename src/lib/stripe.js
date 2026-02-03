/**
 * Stripe Payment Links Integration
 * Simple redirect-based checkout using Stripe Payment Links
 * No SDK, no special settings needed - just redirects!
 */

// Debug: Log environment variables
console.log('🔧 Stripe Payment Links Configuration:');
console.log('Starter Link:', import.meta.env.VITE_STRIPE_PAYMENT_LINK_STARTER ? '✅ Loaded' : '❌ NOT LOADED');
console.log('Pro Link:', import.meta.env.VITE_STRIPE_PAYMENT_LINK_PRO ? '✅ Loaded' : '❌ NOT LOADED');
console.log('Enterprise Link:', import.meta.env.VITE_STRIPE_PAYMENT_LINK_ENTERPRISE ? '✅ Loaded' : '❌ NOT LOADED');

/**
 * Redirect to Stripe Payment Link for subscription
 * @param {string} plan - Plan name: 'starter', 'pro', or 'enterprise'
 */
export const redirectToCheckout = (plan) => {
  console.log('🚀 Redirecting to Stripe Payment Link for plan:', plan);

  const paymentLinks = {
    starter: import.meta.env.VITE_STRIPE_PAYMENT_LINK_STARTER,
    pro: import.meta.env.VITE_STRIPE_PAYMENT_LINK_PRO,
    enterprise: import.meta.env.VITE_STRIPE_PAYMENT_LINK_ENTERPRISE,
  };

  const paymentLink = paymentLinks[plan.toLowerCase()];

  console.log('🔗 Payment Link URL:', paymentLink || '❌ NOT FOUND');

  if (!paymentLink || paymentLink.includes('REPLACE_THIS')) {
    console.error(`❌ No payment link configured for plan: ${plan}`);
    alert(`Setup Required: Payment link missing for ${plan} plan.

Please create a payment link in Stripe Dashboard:
1. Go to https://dashboard.stripe.com/products
2. Click on your ${plan} product
3. Click "Create payment link"
4. Copy the link and add it to your .env file
5. Restart the dev server`);
    return;
  }

  console.log('✅ Redirecting to Stripe Payment Link...');

  // Simple redirect - no SDK needed!
  window.location.href = paymentLink;
};

/**
 * Get checkout session ID from URL (after success redirect)
 * @returns {string|null} Session ID or null
 */
export const getCheckoutSessionId = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('session_id');
};

/**
 * Check if user canceled checkout
 * @returns {boolean}
 */
export const wasCheckoutCanceled = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('canceled') === 'true';
};
