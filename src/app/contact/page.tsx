'use client';

import { useState } from 'react';

const inquiryTypes = [
  { label: 'Manuscript Submission', desc: 'Submit your work for editorial review' },
  { label: 'Author Support', desc: 'Help with your account, sales, or tools' },
  { label: 'Partnership Inquiry', desc: 'Bookstore, library, or organizational partnerships' },
  { label: 'Press & Media', desc: 'Interview requests, review copies, press kit' },
  { label: 'Events', desc: 'Author readings, book signings, book club events' },
  { label: 'General', desc: 'Everything else' },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bookshelf mb-3">Get in Touch</h1>
          <p className="text-amber-800/60 max-w-2xl mx-auto">
            Whether you&apos;re an author with a manuscript, a bookstore seeking a partnership, or a reader with a question — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-bookshelf mb-2">Message Sent!</h2>
                <p className="text-amber-800/60 mb-6">Thank you for reaching out. Our team will respond within 1-2 business days.</p>
                <button
                  onClick={() => { setSubmitted(false); setName(''); setEmail(''); setType(''); setMessage(''); }}
                  className="px-6 py-2.5 bg-bookshelf text-parchment rounded-lg font-medium hover:bg-amber-900 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-xl font-bold text-bookshelf mb-6">Send Us a Message</h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-bookshelf mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bookshelf mb-1.5">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Inquiry Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                    required
                  >
                    <option value="">Select an inquiry type</option>
                    {inquiryTypes.map((t) => (
                      <option key={t.label} value={t.label}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-bookshelf text-parchment rounded-lg font-semibold hover:bg-amber-900 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-bookshelf mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cloth mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-bookshelf text-sm">Address</p>
                    <p className="text-sm text-amber-800/60">142 Literary Lane<br />Brooklyn, NY 11201</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cloth mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-bookshelf text-sm">Email</p>
                    <p className="text-sm text-amber-800/60">hello@pageturnbooks.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cloth mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-bookshelf text-sm">Hours</p>
                    <p className="text-sm text-amber-800/60">Mon-Fri: 9am - 6pm EST<br />Sat: 10am - 4pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-bookshelf mb-4">Inquiry Types</h3>
              <div className="space-y-3">
                {inquiryTypes.map((t) => (
                  <div key={t.label} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cloth mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-bookshelf text-sm">{t.label}</p>
                      <p className="text-xs text-amber-800/50">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl h-48 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-8 h-8 text-bookshelf/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-bookshelf/40 text-sm">Brooklyn, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
