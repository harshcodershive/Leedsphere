import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { redirectToCheckout, getCheckoutSessionId, wasCheckoutCanceled } from '../../lib/stripe';

/**
 * Custom hook for handling Stripe checkout flow
 * Manages redirects, success handling, and cancel states
 *
 * @returns {Object} - Object containing startCheckout function
 */
export const useStripeCheckout = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Handle successful checkout redirect
    const sessionId = getCheckoutSessionId();
    if (sessionId) {
      console.log('✅ Stripe checkout completed successfully!', sessionId);
      // In a production app, you would:
      // 1. Verify the session server-side
      // 2. Provision the user's subscription
      // 3. Update the user's account status
      // For now, we just log the success
    }

    // Handle canceled checkout
    if (wasCheckoutCanceled()) {
      console.log('❌ Checkout was canceled by user');
      // Optional: Show a toast notification or modal
      // You could use a toast library here
    }
  }, [searchParams]);

  /**
   * Initiate checkout for a specific plan
   * @param {string} plan - Plan identifier ('starter', 'pro', or 'enterprise')
   */
  const startCheckout = (plan) => {
    redirectToCheckout(plan);
  };

  return { startCheckout };
};
