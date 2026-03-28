'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Debut Author',
    price: 'Free',
    period: '',
    description: 'Perfect for first-time authors testing the waters',
    features: [
      '1 published book',
      '5 GB manuscript storage',
      'Basic sales dashboard',
      'PageTurn Store listing',
      'Community forum access',
      '30% revenue share to platform',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Published Pro',
    price: '$29',
    period: '/month',
    description: 'For active authors building their readership',
    features: [
      'Unlimited published books',
      '50 GB storage',
      'Advanced analytics & reports',
      'Multi-channel distribution',
      'Pre-order campaigns',
      'Author events hosting',
      'Priority editorial review',
      '15% revenue share to platform',
    ],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Publishing House',
    price: '$149',
    period: '/month',
    description: 'For publishers managing multiple authors and titles',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Team accounts (up to 20)',
      'Custom branding & imprint',
      'API access',
      'Dedicated account manager',
      'Bulk print ordering',
      'Custom revenue terms',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const comparisons = [
  { feature: 'Published Books', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Storage', free: '5 GB', pro: '50 GB', enterprise: 'Unlimited' },
  { feature: 'Distribution Channels', free: '1', pro: '6+', enterprise: '6+' },
  { feature: 'Analytics', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced + API' },
  { feature: 'Pre-orders', free: '-', pro: 'Yes', enterprise: 'Yes' },
  { feature: 'Events Hosting', free: '-', pro: 'Yes', enterprise: 'Yes' },
  { feature: 'Editorial Review', free: 'Standard', pro: 'Priority', enterprise: 'Dedicated' },
  { feature: 'Revenue Share', free: '70/30', pro: '85/15', enterprise: 'Custom' },
  { feature: 'Support', free: 'Community', pro: 'Email + Chat', enterprise: '24/7 Dedicated' },
  { feature: 'Print on Demand', free: '-', pro: 'Yes', enterprise: 'Bulk Orders' },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bookshelf mb-3">Publishing Plans</h1>
          <p className="text-amber-800/60 max-w-2xl mx-auto">Choose the plan that fits your publishing journey. All plans include access to our literary community.</p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-bookshelf' : 'text-amber-800/40'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors ${annual ? 'bg-bookshelf' : 'bg-amber-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-bookshelf' : 'text-amber-800/40'}`}>
              Annual <span className="text-green-600 text-xs">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-md p-8 relative ${plan.popular ? 'ring-2 ring-bookshelf shadow-xl' : ''}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bookshelf text-parchment text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-bookshelf">{plan.name}</h3>
              <p className="text-sm text-amber-800/50 mt-1 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-bookshelf">
                  {plan.price === 'Free' ? 'Free' : annual ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}` : plan.price}
                </span>
                {plan.period && <span className="text-amber-800/50">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-amber-900/70">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-bookshelf text-parchment hover:bg-amber-900'
                    : 'border-2 border-bookshelf text-bookshelf hover:bg-bookshelf hover:text-parchment'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-bookshelf mb-6 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-amber-100">
                  <th className="text-left py-3 text-sm font-medium text-amber-800/50">Feature</th>
                  <th className="text-center py-3 text-sm font-medium text-amber-800/50">Debut Author</th>
                  <th className="text-center py-3 text-sm font-bold text-bookshelf">Published Pro</th>
                  <th className="text-center py-3 text-sm font-medium text-amber-800/50">Publishing House</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-amber-50">
                    <td className="py-3 text-sm text-amber-900/70">{row.feature}</td>
                    <td className="py-3 text-sm text-center text-amber-800/60">{row.free}</td>
                    <td className="py-3 text-sm text-center font-medium text-bookshelf">{row.pro}</td>
                    <td className="py-3 text-sm text-center text-amber-800/60">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
