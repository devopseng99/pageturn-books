'use client';

import { useState } from 'react';
import Link from 'next/link';

const featuredBooks = [
  { title: 'The Midnight Garden', author: 'Elena Marsh', genre: 'Literary Fiction', rating: 4.8 },
  { title: 'Rivers of Salt', author: 'James Okonkwo', genre: 'Narrative Nonfiction', rating: 4.9 },
  { title: 'Whispers in Amber', author: 'Sofia Delacroix', genre: 'Historical Fiction', rating: 4.7 },
  { title: 'The Last Cartographer', author: 'Henrik Solvang', genre: 'Literary Fiction', rating: 4.6 },
  { title: 'Bone & Bloom', author: 'Ayesha Patel', genre: 'Poetry Collection', rating: 4.9 },
  { title: 'Under Foreign Skies', author: 'Marco Bellini', genre: 'Narrative Nonfiction', rating: 4.5 },
];

const stats = [
  { value: '2,400+', label: 'Books Published' },
  { value: '850+', label: 'Authors' },
  { value: '1.2M', label: 'Readers Worldwide' },
  { value: '45', label: 'Literary Awards' },
];

const testimonials = [
  { name: 'Elena Marsh', role: 'Novelist', text: 'PageTurn gave my debut novel the care and attention it deserved. Their editorial team is extraordinary.' },
  { name: 'James Okonkwo', role: 'Memoirist', text: 'From manuscript to bookshelf, the process was seamless. My book reached readers I never thought possible.' },
  { name: 'Sofia Delacroix', role: 'Historical Fiction Author', text: 'The direct-to-reader model means I connect with my audience in ways traditional publishing never allowed.' },
];

export default function Home() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const visibleBooks = featuredBooks.slice(carouselIdx, carouselIdx + 3);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-parchment py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-200/80 font-medium mb-3 tracking-wide uppercase text-sm">Independent Literary Publisher</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Stories That <span className="text-amber-200">Stay With You</span>
              </h1>
              <p className="text-lg text-amber-100/80 mb-8 leading-relaxed">
                We publish literary fiction and narrative nonfiction that challenges, illuminates, and endures. Direct from our shelves to your hands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/library" className="px-8 py-3 bg-parchment text-bookshelf font-semibold rounded-lg hover:bg-amber-100 transition-colors">
                  Browse Catalog
                </Link>
                <Link href="/about" className="px-8 py-3 border-2 border-amber-200/50 text-amber-100 font-semibold rounded-lg hover:bg-amber-900/30 transition-colors">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`rounded-lg shadow-2xl ${i === 2 ? 'mt-0' : 'mt-8'}`}>
                  <div className={`h-64 rounded-lg ${i === 1 ? 'bg-gradient-to-br from-amber-200 to-amber-400' : i === 2 ? 'bg-gradient-to-br from-red-800 to-red-950' : 'bg-gradient-to-br from-amber-100 to-amber-300'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-amber-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-bookshelf mb-1">{stat.value}</div>
                <div className="text-sm text-amber-800/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-bookshelf">Featured Books</h2>
              <p className="text-amber-800/60 mt-2">Hand-picked by our editorial team</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCarouselIdx(Math.max(0, carouselIdx - 1))}
                disabled={carouselIdx === 0}
                className="p-2 rounded-full border border-bookshelf/30 text-bookshelf hover:bg-bookshelf hover:text-parchment transition-colors disabled:opacity-30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => setCarouselIdx(Math.min(featuredBooks.length - 3, carouselIdx + 1))}
                disabled={carouselIdx >= featuredBooks.length - 3}
                className="p-2 rounded-full border border-bookshelf/30 text-bookshelf hover:bg-bookshelf hover:text-parchment transition-colors disabled:opacity-30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleBooks.map((book) => (
              <div key={book.title} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="h-56 gradient-book relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-parchment/60 text-6xl font-serif">{book.title[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-cloth bg-red-50 px-2 py-1 rounded-full">{book.genre}</span>
                  <h3 className="text-lg font-bold text-bookshelf mt-3 group-hover:text-cloth transition-colors">{book.title}</h3>
                  <p className="text-sm text-amber-800/60 mt-1">by {book.author}</p>
                  <div className="flex items-center gap-1 mt-3">
                    <span className="text-amber-500">{'★'.repeat(Math.floor(book.rating))}</span>
                    <span className="text-sm text-amber-800/50 ml-1">{book.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Club CTA */}
      <section className="py-16 bg-bookshelf/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full gradient-book flex items-center justify-center flex-shrink-0">
              <svg className="w-12 h-12 text-parchment" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-bookshelf mb-2">Join the PageTurn Book Club</h3>
              <p className="text-amber-800/70">Monthly curated reads, author Q&As, and exclusive early access to new releases. Connect with readers who share your love for great literature.</p>
            </div>
            <Link href="/contact" className="px-8 py-3 bg-bookshelf text-parchment font-semibold rounded-lg hover:bg-amber-900 transition-colors whitespace-nowrap">
              Join Free
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-bookshelf text-center mb-4">Author Voices</h2>
          <p className="text-center text-amber-800/60 mb-12">What our published authors say about working with us</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-xl shadow-md">
                <svg className="w-8 h-8 text-amber-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-amber-900/80 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bookshelf to-cloth flex items-center justify-center text-parchment font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-bookshelf text-sm">{t.name}</div>
                    <div className="text-xs text-amber-800/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-bookshelf/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-bookshelf text-center mb-10">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: 'Apr 5', title: 'Author Reading: Elena Marsh', desc: 'Hear Elena read from her latest novel, The Midnight Garden' },
              { date: 'Apr 12', title: 'Book Club Meeting', desc: 'Discussing Rivers of Salt by James Okonkwo' },
              { date: 'Apr 20', title: 'Writing Workshop', desc: 'Narrative nonfiction craft with Sofia Delacroix' },
            ].map((event) => (
              <div key={event.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-block bg-cloth text-parchment text-xs font-bold px-3 py-1 rounded-full mb-4">{event.date}</div>
                <h3 className="font-bold text-bookshelf mb-2">{event.title}</h3>
                <p className="text-sm text-amber-800/60">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
