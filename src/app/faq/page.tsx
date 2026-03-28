'use client';

import { useState } from 'react';

const faqCategories = [
  {
    name: 'Publishing',
    questions: [
      { q: 'How do I submit a manuscript to PageTurn Books?', a: 'Start by creating an account and uploading your manuscript in our Creator Studio. Our editorial team reviews all submissions within 4-6 weeks. We accept literary fiction, narrative nonfiction, poetry collections, essay collections, and memoir.' },
      { q: 'What formats do you accept for manuscripts?', a: 'We accept .docx, .pdf, and plain text files. For the best editorial experience, we recommend .docx with standard formatting (12pt, double-spaced, 1-inch margins).' },
      { q: 'How long does the publishing process take?', a: 'From accepted manuscript to published book, the typical timeline is 3-6 months. This includes editorial review, copyediting, cover design, formatting, and distribution setup.' },
      { q: 'Can I publish previously self-published work?', a: 'Yes, as long as you hold the rights. We will work with you to re-edit and repackage the work for our catalog, giving it a fresh presentation for our readership.' },
    ],
  },
  {
    name: 'Monetization',
    questions: [
      { q: 'How does the revenue share work?', a: 'Our Debut Author (free) plan offers a 70/30 split (70% to you). Published Pro authors keep 85% of revenue. Publishing House accounts negotiate custom terms. Revenue is calculated on net sales after payment processing fees.' },
      { q: 'When and how do I get paid?', a: 'Payments are processed monthly on the 15th for the previous month\'s sales. We support direct deposit (ACH), PayPal, and wire transfer for international authors.' },
      { q: 'Do you offer advances?', a: 'We offer modest advances for Publishing House accounts and select Pro authors with proven track records. Most authors prefer our higher revenue share model, which typically outperforms traditional advances over time.' },
    ],
  },
  {
    name: 'Copyright',
    questions: [
      { q: 'Do I retain copyright of my work?', a: 'Absolutely. You retain full copyright ownership of your work. PageTurn Books receives a non-exclusive license to distribute your book through our channels for the duration of your agreement.' },
      { q: 'Can I publish with other platforms simultaneously?', a: 'Pro and Publishing House accounts can distribute through multiple channels. Debut Author accounts are exclusive to the PageTurn Store during their agreement period.' },
      { q: 'What happens if I want to leave PageTurn?', a: 'You can remove your books from our catalog at any time with 30 days notice. Your content, rights, and reader data belong to you.' },
    ],
  },
  {
    name: 'Distribution',
    questions: [
      { q: 'Where will my book be available?', a: 'Depending on your plan, your book can be listed on the PageTurn Store, Amazon Kindle, Apple Books, Barnes & Noble, and through our print-on-demand partners. Pro and Publishing House accounts get multi-channel distribution.' },
      { q: 'Do you offer print books?', a: 'Yes! Pro and Publishing House accounts have access to our print-on-demand service. Publishing House accounts can also place bulk print orders at discounted rates for events and bookstore distribution.' },
      { q: 'Can I set up pre-orders?', a: 'Pro and Publishing House accounts can create pre-order campaigns up to 3 months before publication. Pre-orders help build anticipation and provide valuable demand signals.' },
    ],
  },
  {
    name: 'Analytics',
    questions: [
      { q: 'What analytics do I have access to?', a: 'All accounts get basic sales data. Pro accounts unlock advanced analytics including reader demographics, reading completion rates, review sentiment analysis, and comparative market data. Publishing House accounts get API access for custom reporting.' },
      { q: 'Can I export my data?', a: 'Yes. All analytics data can be exported as CSV. Publishing House accounts also have API access for integration with their own reporting tools.' },
    ],
  },
  {
    name: 'Support',
    questions: [
      { q: 'How do I contact support?', a: 'Debut Authors have access to our community forum and knowledge base. Pro accounts get email and live chat support. Publishing House accounts have a dedicated account manager available 24/7.' },
      { q: 'Do you offer editorial services?', a: 'Yes. All manuscripts go through our editorial review process. Pro accounts get priority review with detailed feedback. Publishing House accounts receive dedicated editorial support throughout the writing and revision process.' },
      { q: 'Can I host author events through PageTurn?', a: 'Pro and Publishing House accounts can host virtual and in-person events through our platform. We handle ticketing, promotion, and logistics. Our events program is currently active in 10 major cities.' },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bookshelf mb-3">Frequently Asked Questions</h1>
          <p className="text-amber-800/60">Everything you need to know about publishing with PageTurn Books</p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-xl font-bold text-bookshelf mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full gradient-book flex items-center justify-center flex-shrink-0">
                  <span className="text-parchment text-xs font-bold">{category.name[0]}</span>
                </div>
                {category.name}
              </h2>
              <div className="space-y-2">
                {category.questions.map((item) => {
                  const key = `${category.name}-${item.q}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={key} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-50/50 transition-colors"
                      >
                        <span className="font-medium text-bookshelf pr-4">{item.q}</span>
                        <svg
                          className={`w-5 h-5 text-amber-800/40 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-amber-800/70 leading-relaxed text-sm border-t border-amber-50">
                          <p className="pt-4">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-bookshelf mb-3">Still Have Questions?</h2>
          <p className="text-amber-800/60 mb-6">Our team is here to help you on your publishing journey.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-bookshelf text-parchment rounded-lg font-semibold hover:bg-amber-900 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
