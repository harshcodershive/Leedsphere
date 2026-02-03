import React from "react";

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Refund &amp; Cancellation Policy
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <p className="text-sm text-slate-400 mb-8">Last updated: 3 February 2026</p>
        <p className="text-xl leading-relaxed mb-8">
          This Refund &amp; Cancellation Policy ("Policy") applies to all subscriptions and services provided by <strong className="text-white">LEED SPHERE TECHNOLOGIES LTD</strong> ("Leedsphere," "we," "our," or "us") through the Leedsphere operational CRM platform.
        </p>
        <p className="mb-8">
          By purchasing or subscribing to our Services, you agree to this Policy.
        </p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">1. Subscription-Based Services</h2>
        <p>Leedsphere is offered on a <strong className="text-white">subscription basis</strong> (monthly, yearly, or otherwise as displayed at checkout). Access to the Services is provided immediately upon successful payment.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">2. Free Trials (If Applicable)</h2>
        <p>If a free trial is offered:</p>
        <ul>
          <li>No charges apply during the trial period</li>
          <li>You may cancel anytime before the trial ends</li>
          <li>If not cancelled, your subscription will automatically convert to a paid plan</li>
        </ul>
        <p>No refunds are issued for charges incurred after trial conversion.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">3. Refund Eligibility</h2>

        <h3 className="text-white mt-6">a. General Policy</h3>
        <p>All subscription fees are <strong className="text-white">non-refundable</strong>, except where:</p>
        <ul>
          <li>Required by applicable law</li>
          <li>Explicitly stated otherwise at checkout</li>
          <li>Approved at our sole discretion in exceptional circumstances</li>
        </ul>

        <h3 className="text-white mt-6">b. First-Time Subscriptions</h3>
        <p>For <strong className="text-white">first-time customers</strong>, we may consider refund requests if:</p>
        <ul>
          <li>The request is submitted within <strong className="text-white">7 days</strong> of the initial purchase</li>
          <li>The Services have not been materially used</li>
          <li>No abuse or policy violation is detected</li>
        </ul>
        <p>Approval is not guaranteed and remains at our discretion.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">4. Non-Refundable Cases</h2>
        <p>Refunds will <strong className="text-white">not</strong> be issued for:</p>
        <ul>
          <li>Partial billing periods</li>
          <li>Unused time after cancellation</li>
          <li>Failure to cancel before renewal</li>
          <li>Downgrades or plan changes</li>
          <li>Account suspension due to policy violations</li>
          <li>User error or misunderstanding of features</li>
        </ul>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">5. Cancellation Policy</h2>
        <p>You may cancel your subscription at any time:</p>
        <ul>
          <li>Through your account dashboard, or</li>
          <li>By contacting our support team</li>
        </ul>
        <p>Cancellation will stop <strong className="text-white">future billing</strong>, but your access will continue until the end of the current billing cycle.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">6. Chargebacks &amp; Payment Disputes</h2>
        <p>If you initiate a chargeback or payment dispute without contacting us first:</p>
        <ul>
          <li>Your account may be suspended or terminated</li>
          <li>Access to the Services may be revoked</li>
        </ul>
        <p>We encourage users to contact us before raising disputes so we can resolve issues promptly.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">7. Refund Method &amp; Processing Time</h2>
        <p>Approved refunds:</p>
        <ul>
          <li>Are processed via the <strong className="text-white">original payment method</strong></li>
          <li>Follow the timelines of the payment gateway used</li>
          <li>Typically take <strong className="text-white">5–10 business days</strong> to reflect, depending on the provider and bank</li>
        </ul>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">8. Taxes &amp; Fees</h2>
        <p>Any applicable taxes, transaction fees, or currency conversion charges are <strong className="text-white">non-refundable</strong>, unless required by law.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">9. Changes to This Policy</h2>
        <p>We reserve the right to update this Policy at any time. Updates will be posted on this page with a revised "Last updated" date. Continued use of the Services indicates acceptance of the updated Policy.</p>

        <hr className="border-slate-700 my-8" />

        <h2 className="text-2xl text-white mt-10 mb-4">10. Contact Us</h2>
        <p>For refund or cancellation requests, contact us at:</p>
        <p className="mt-4">
          <strong className="text-white">LEED SPHERE TECHNOLOGIES LTD</strong><br />
          support@leedsphere.com<br />
          +44 7367109730
        </p>
      </div>
    </div>
  );
}
