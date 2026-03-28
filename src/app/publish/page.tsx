'use client';

import { useState } from 'react';

const steps = ['Draft', 'Review', 'Schedule', 'Publish'];

const channels = [
  { name: 'PageTurn Store', desc: 'Direct-to-reader sales on our platform', enabled: true },
  { name: 'Amazon Kindle', desc: 'Kindle Direct Publishing distribution', enabled: false },
  { name: 'Apple Books', desc: 'Apple Books Store distribution', enabled: false },
  { name: 'Barnes & Noble', desc: 'Nook Press distribution', enabled: false },
  { name: 'Audiobook', desc: 'Audio edition via partner narrators', enabled: false },
  { name: 'Print on Demand', desc: 'Physical copies via our print partners', enabled: false },
];

export default function PublishPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['PageTurn Store']);

  const toggleChannel = (name: string) => {
    setSelectedChannels((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-bookshelf mb-2">Publish</h1>
          <p className="text-amber-800/60">Take your manuscript from draft to published book</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <button
                    onClick={() => setCurrentStep(i)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      i <= currentStep ? 'bg-bookshelf text-parchment' : 'bg-amber-100 text-amber-800/40'
                    }`}
                  >
                    {i < currentStep ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </button>
                  <span className={`text-xs mt-2 font-medium ${i <= currentStep ? 'text-bookshelf' : 'text-amber-800/40'}`}>
                    {step}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 ${i < currentStep ? 'bg-bookshelf' : 'bg-amber-100'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Step Content */}
            {currentStep === 0 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold text-bookshelf mb-4">Draft Review Checklist</h2>
                <div className="space-y-3">
                  {[
                    'Manuscript is complete and proofread',
                    'All chapters are numbered and titled',
                    'Front matter (dedication, epigraph) is in place',
                    'Back matter (acknowledgments, author bio) is ready',
                    'Metadata (title, genre, description) is filled in',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-amber-300 text-bookshelf focus:ring-bookshelf" />
                      <span className="text-amber-900/80">{item}</span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="mt-6 px-6 py-2.5 bg-bookshelf text-parchment rounded-lg font-medium hover:bg-amber-900 transition-colors"
                >
                  Submit for Review
                </button>
              </div>
            )}

            {currentStep === 1 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold text-bookshelf mb-4">Editorial Review</h2>
                <div className="bg-amber-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bookshelf to-cloth flex items-center justify-center text-parchment font-bold text-sm">SM</div>
                    <div>
                      <p className="font-medium text-bookshelf">Sarah Mitchell</p>
                      <p className="text-xs text-amber-800/50">Senior Editor</p>
                    </div>
                  </div>
                  <p className="text-amber-900/70 text-sm leading-relaxed">
                    &ldquo;Strong opening chapter. The pacing in Part II could benefit from tightening — I&apos;ve left inline comments. The ending is superb. A few minor copyediting notes throughout.&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-amber-800/60 mb-6">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> 3 chapters approved</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> 2 chapters with notes</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300" /> 1 chapter pending</span>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 bg-bookshelf text-parchment rounded-lg font-medium hover:bg-amber-900 transition-colors"
                >
                  Approve & Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold text-bookshelf mb-4">Schedule Publication</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-bookshelf mb-1.5">Publication Date</label>
                    <input type="date" className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bookshelf mb-1.5">Pre-order Window</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30">
                      <option>No pre-orders</option>
                      <option>2 weeks before</option>
                      <option>1 month before</option>
                      <option>3 months before</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bookshelf mb-1.5">Launch Event</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30">
                      <option>None</option>
                      <option>Virtual reading + Q&A</option>
                      <option>In-store signing event</option>
                      <option>Book club launch</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="mt-6 px-6 py-2.5 bg-bookshelf text-parchment rounded-lg font-medium hover:bg-amber-900 transition-colors"
                >
                  Confirm Schedule
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-bookshelf mb-2">Ready to Publish!</h2>
                <p className="text-amber-800/60 mb-6">Your book is scheduled and will be distributed to {selectedChannels.length} channel(s).</p>
                <button className="px-8 py-3 bg-bookshelf text-parchment rounded-lg font-semibold hover:bg-amber-900 transition-colors">
                  Publish Now
                </button>
              </div>
            )}

            {/* Distribution Channels */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-bookshelf mb-4">Distribution Channels</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {channels.map((ch) => (
                  <button
                    key={ch.name}
                    onClick={() => toggleChannel(ch.name)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedChannels.includes(ch.name)
                        ? 'border-bookshelf bg-amber-50'
                        : 'border-amber-100 hover:border-amber-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-bookshelf">{ch.name}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedChannels.includes(ch.name) ? 'border-bookshelf bg-bookshelf' : 'border-amber-300'}`}>
                        {selectedChannels.includes(ch.name) && (
                          <svg className="w-3 h-3 text-parchment" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-amber-800/50">{ch.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Analytics Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-bookshelf mb-4">Projected Reach</h3>
              <div className="space-y-4">
                {[
                  { label: 'Estimated First Month Sales', value: '1,200' },
                  { label: 'Pre-order Interest', value: '340' },
                  { label: 'Email List Reach', value: '8,500' },
                  { label: 'Social Media Impressions', value: '45K' },
                ].map((m) => (
                  <div key={m.label} className="flex justify-between items-center">
                    <span className="text-sm text-amber-800/60">{m.label}</span>
                    <span className="font-bold text-bookshelf">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-bookshelf mb-4">Publishing Timeline</h3>
              <div className="space-y-4">
                {[
                  { date: 'Mar 15', event: 'Final edits due', done: true },
                  { date: 'Mar 22', event: 'Cover design approval', done: true },
                  { date: 'Apr 1', event: 'Pre-orders open', done: false },
                  { date: 'Apr 15', event: 'Publication day', done: false },
                ].map((t) => (
                  <div key={t.event} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-1 ${t.done ? 'bg-green-500' : 'bg-amber-300'}`} />
                    <div>
                      <p className="text-sm font-medium text-bookshelf">{t.event}</p>
                      <p className="text-xs text-amber-800/40">{t.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
