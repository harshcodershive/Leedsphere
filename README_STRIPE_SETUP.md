# Stripe Integration Setup Guide

## Quick Setup (5 Minutes)

This guide shows you how to use your existing Stripe publishable key and price IDs with the Leedsphere SaaS application.

---

## What You Need

You already have:
- ✅ **Stripe Publishable Key** (starts with `pk_test_` or `pk_live_`)
- ✅ **Price IDs** from your existing products (start with `price_`)

---

## Step 1: Find Your Price IDs

1. Log in to **Stripe Dashboard**: https://dashboard.stripe.com
2. Navigate to **Products**
3. Click on one of your products (e.g., "Starter Plan")
4. You'll see the pricing information
5. Click on the **price** (e.g., "$199.00 per month")
6. Look for **"API ID"** - this is your Price ID
7. Copy the Price ID (it looks like `price_1Abc2DefGhIjKlMn`)

Repeat for all three plans (Starter, Pro, Enterprise).

---

## Step 2: Create .env File

1. In your project root, create a new file called `.env`
2. Copy the contents from `.env.example`
3. Update with your actual Stripe credentials:

```bash
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_key_here
VITE_STRIPE_PRICE_STARTER=price_your_starter_price_id
VITE_STRIPE_PRICE_PRO=price_your_pro_price_id
VITE_STRIPE_PRICE_ENTERPRISE=price_your_enterprise_price_id
```

**Example:**
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51RqX1qPTdVz7ag2GVrUC6SmGX03NAyvwa1InSZkRU8vSUztLnlrgXVekmpEFesNnugwGhRTQtSzq1pyt4YeLU27g00jmkQfZHA
VITE_STRIPE_PRICE_STARTER=price_1QaLzmPTdVz7ag2GV4VJcNHM
VITE_STRIPE_PRICE_PRO=price_1QaM0XPTdVz7ag2GVABCDeFGH
VITE_STRIPE_PRICE_ENTERPRISE=price_1QaM1YPTdVz7ag2GVXYZabcde
```

---

## Step 3: Install Stripe Package (Already Done)

The `@stripe/stripe-js` package should already be installed. If not, run:

```bash
npm install @stripe/stripe-js
```

---

## Step 4: Restart Development Server

After updating `.env`, restart your dev server:

```bash
# Stop current server (Ctrl+C)
npm run dev
```

**Important:** Vite only loads environment variables at startup, so you must restart after changes.

---

## Step 5: Test the Integration

### 5.1 Navigate to Pricing
1. Open your browser to `http://localhost:5173`
2. Scroll to the pricing section
3. You should see:
   - Starter: $199/month
   - Pro: $499/month (with "Most Popular" badge)
   - Enterprise: $999/month

### 5.2 Test Stripe Checkout
1. Click **"Start 14-day trial"** on the Starter plan
2. You should be redirected to Stripe's hosted checkout page
3. The checkout should show:
   - Your product name
   - $199/month price
   - Email input field
   - Payment details section

### 5.3 Use Test Card (Test Mode Only)

If you're using **Test Mode** (`pk_test_...`), use these test cards:

**Successful Payment:**
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., `12/34`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

**Other Test Cards:**
- Declined: `4000 0000 0000 0002`
- Requires 3D Secure: `4000 0025 0000 3155`

Full list: https://stripe.com/docs/testing#cards

### 5.4 Complete Checkout
1. Fill in test card details
2. Enter email: `test@example.com`
3. Click **"Subscribe"** or **"Pay"**
4. You should be redirected to: `http://localhost:5173/app?session_id=cs_test_...`
5. Check browser console - you should see: ✅ Stripe checkout completed successfully!

### 5.5 Test Cancel Flow
1. Click "Start 14-day trial" again
2. On Stripe checkout page, click **browser back button**
3. You should return to: `http://localhost:5173/pricing?canceled=true`
4. Check console: ❌ Checkout was canceled by user

---

## Troubleshooting

### "Payment system not configured" alert?
**Problem:** Environment variables not loaded

**Solution:**
1. Make sure `.env` file exists in project root (not in `src/`)
2. Variable names must start with `VITE_`
3. No spaces around `=` sign
4. Restart dev server with `npm run dev`

### Checkout doesn't redirect to Stripe?
**Problem:** Invalid price ID or publishable key

**Solution:**
1. Check that price IDs start with `price_`
2. Verify publishable key starts with `pk_test_` or `pk_live_`
3. Check browser console for error messages
4. Make sure the price IDs are from the same mode (test/live) as your publishable key

### "Stripe failed to load" error?
**Problem:** Internet connection or publishable key issue

**Solution:**
1. Check internet connection
2. Verify publishable key is correct
3. Check browser console for detailed errors
4. Try opening Stripe Dashboard to verify your account is active

### Test card declined in Test Mode?
**Problem:** Using wrong card number

**Solution:**
- Use exactly: `4242 4242 4242 4242`
- Make sure your Stripe Dashboard is in Test Mode
- Any future expiry and any CVC work

---

## Test Mode vs Live Mode

### Test Mode (Development)
- Publishable key: `pk_test_...`
- Price IDs: `price_test_...` or regular `price_...` created in test mode
- Use test cards: `4242 4242 4242 4242`
- No real money charged
- Perfect for development

### Live Mode (Production)
- Publishable key: `pk_live_...`
- Price IDs: `price_...` created in live mode
- Real cards only
- Real money charged
- Requires completed Stripe verification

---

## Mapping Your Prices

Make sure your price IDs match the correct plans:

| Plan | Price | Your Price ID Should Be For |
|------|-------|---------------------------|
| Starter | $199/mo | Your $199/month product |
| Pro | $499/mo | Your $499/month product |
| Enterprise | $999/mo | Your $999/month product |

If your products have different prices, update the prices in [PricingPreview.jsx](src/marketing/components/PricingPreview.jsx:11,27,45) to match.

---

## Production Deployment

When deploying to production:

### 1. Switch to Live Mode
1. Go to Stripe Dashboard
2. Toggle from **Test mode** to **Live mode**
3. Complete Stripe business verification if needed

### 2. Get Live Credentials
1. Copy **Live publishable key** (`pk_live_...`)
2. Get price IDs from your live mode products
3. Make sure products exist in Live mode (recreate if needed)

### 3. Update Environment Variables
Set these in your hosting platform (Vercel, Netlify, etc.):

```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
VITE_STRIPE_PRICE_STARTER=price_your_live_starter_id
VITE_STRIPE_PRICE_PRO=price_your_live_pro_id
VITE_STRIPE_PRICE_ENTERPRISE=price_your_live_enterprise_id
```

### 4. Test with Real Card (Small Amount)
Before going fully live:
1. Deploy to staging environment
2. Test with a real card (small amount)
3. Verify checkout flow works
4. Check that success redirect works
5. Cancel a checkout to test cancel flow

### 5. Monitor Stripe Dashboard
After going live:
- Check **Payments** for successful transactions
- Monitor **Customers** for new subscribers
- Review **Subscriptions** for active plans
- Set up **Email receipts** in Stripe settings

---

## Security Best Practices

✅ **DO:**
- Use test mode during development
- Keep `.env` file in `.gitignore` (already done)
- Use environment variables in hosting platform
- Monitor Stripe Dashboard regularly
- Set up Stripe email notifications

❌ **DON'T:**
- Never commit `.env` to version control
- Never expose Secret Key (only use Publishable Key)
- Never hardcode API keys in source code
- Never use live mode keys in development

---

## How It Works

### Technical Flow:

1. User clicks "Start 14-day trial"
2. `PricingCard.jsx` calls `startCheckout('starter')`
3. `useStripeCheckout` hook calls `redirectToCheckout('starter')`
4. `stripe.js` loads Stripe SDK with your publishable key
5. Stripe SDK calls `redirectToCheckout()` with price ID
6. User redirected to Stripe hosted checkout page
7. User completes payment
8. Stripe redirects back to your app with `session_id`
9. `useStripeCheckout` hook detects session ID and logs success

**Files involved:**
- [PricingCard.jsx](src/marketing/components/PricingCard.jsx) - Button click
- [useStripeCheckout.js](src/shared/hooks/useStripeCheckout.js) - Hook logic
- [stripe.js](src/lib/stripe.js) - Stripe SDK integration

---

## Need Help?

### Common Questions:

**Q: Where do I find my publishable key?**
A: Stripe Dashboard → Developers → API keys → Publishable key

**Q: Where do I find price IDs?**
A: Stripe Dashboard → Products → Click product → Click price → Copy "API ID"

**Q: Can I use different prices?**
A: Yes! Just update the prices in `PricingPreview.jsx` to match your Stripe products

**Q: Do I need a Stripe account?**
A: Yes, but you mentioned you already have one with products set up

**Q: Can I customize the checkout page?**
A: The hosted checkout has limited customization. For more control, you'd need Stripe Checkout Sessions with a backend.

**Q: How do I handle webhooks?**
A: Webhooks require a backend server. For now, the checkout flow works without webhooks.

### Resources:

- **Stripe Documentation**: https://stripe.com/docs
- **Stripe Testing**: https://stripe.com/docs/testing
- **Price API**: https://stripe.com/docs/api/prices
- **Checkout API**: https://stripe.com/docs/payments/checkout
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe Support**: https://support.stripe.com

---

## Next Steps (Optional)

Once basic checkout works, you can:

1. **Add Webhooks** (requires backend):
   - Automatically provision subscriptions
   - Handle subscription updates
   - Process cancellations

2. **Customer Portal**:
   - Allow users to manage subscriptions
   - Update payment methods
   - View invoices

3. **Advanced Features**:
   - Usage-based billing
   - Metered pricing
   - Multiple subscription tiers per user
   - Team billing

4. **Analytics**:
   - Track conversion rates
   - Monitor MRR (Monthly Recurring Revenue)
   - Analyze plan popularity

---

**That's it! You're all set up.** 🎉

Just copy your price IDs to `.env` and you're ready to accept payments!
