import Link from 'next/link';

const steps = [
  { num: '01', title: 'Create', desc: 'Write and refine your manuscript in our Creator Studio with editorial support.' },
  { num: '02', title: 'Publish', desc: 'Our team reviews, designs, and prepares your book for multi-channel distribution.' },
  { num: '03', title: 'Connect', desc: 'Reach readers directly through our store, events, and book club community.' },
];

const partners = [
  'Independent Booksellers Alliance',
  'National Book Foundation',
  'PEN International',
  'World Literature Forum',
  'Literary Arts Council',
  'Narrative Nonfiction Guild',
];

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-bookshelf mb-4">Our Story</h1>
          <p className="text-lg text-amber-800/60 max-w-3xl mx-auto leading-relaxed">
            PageTurn Books was founded on a simple belief: great literature deserves a direct path from author to reader, free from the constraints of corporate publishing.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="h-80 rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-20 h-20 text-bookshelf/30 mx-auto mb-3" viewBox="0 0 32 32" fill="currentColor">
                <rect x="4" y="2" width="8" height="28" rx="1" />
                <rect x="13" y="4" width="7" height="24" rx="1" opacity="0.7" />
                <rect x="21" y="3" width="7" height="26" rx="1" opacity="0.4" />
              </svg>
              <p className="text-bookshelf/40 font-serif text-lg">Est. 2019</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-bookshelf mb-4">A Haven for Literary Voices</h2>
            <div className="space-y-4 text-amber-800/70 leading-relaxed">
              <p>
                We started as a small collective of editors and authors who believed that literary fiction and narrative nonfiction needed a different kind of publisher — one that prioritized the relationship between writer and reader above all else.
              </p>
              <p>
                Today, we&apos;ve published over 2,400 titles from 850+ authors worldwide. Our direct-to-reader model ensures that authors earn more from their work while readers discover books curated for quality, not commercial trends.
              </p>
              <p>
                From our flagship bookstore events to our thriving online book club, we&apos;ve built a community where the love of great writing is the only currency that matters.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-bookshelf text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-book flex items-center justify-center mx-auto mb-4">
                  <span className="text-parchment font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-bookshelf mb-2">{step.title}</h3>
                <p className="text-amber-800/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-bookshelf rounded-2xl p-12 text-parchment mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Community</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '850+', label: 'Published Authors' },
              { value: '2,400+', label: 'Titles in Catalog' },
              { value: '45', label: 'Literary Awards Won' },
              { value: '12K+', label: 'Book Club Members' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-amber-200 mb-1">{s.value}</div>
                <div className="text-amber-200/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-bookshelf text-center mb-4">Our Partners</h2>
          <p className="text-center text-amber-800/60 mb-10">Proud to collaborate with organizations that champion literature</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div key={p} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center mx-auto mb-3">
                  <span className="text-bookshelf font-bold">{p[0]}</span>
                </div>
                <p className="font-medium text-bookshelf text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-bookshelf mb-4">Ready to Share Your Story?</h2>
          <p className="text-amber-800/60 mb-8 max-w-xl mx-auto">
            Whether you&apos;re a first-time author or an established voice, PageTurn Books is your home for literary publishing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/studio" className="px-8 py-3 bg-bookshelf text-parchment rounded-lg font-semibold hover:bg-amber-900 transition-colors">
              Start Writing
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-bookshelf text-bookshelf rounded-lg font-semibold hover:bg-bookshelf hover:text-parchment transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
