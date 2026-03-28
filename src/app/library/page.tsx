'use client';

import { useState } from 'react';

const books = [
  { id: 1, title: 'The Midnight Garden', author: 'Elena Marsh', genre: 'Literary Fiction', year: 2024, rating: 4.8, preorder: false },
  { id: 2, title: 'Rivers of Salt', author: 'James Okonkwo', genre: 'Narrative Nonfiction', year: 2024, rating: 4.9, preorder: false },
  { id: 3, title: 'Whispers in Amber', author: 'Sofia Delacroix', genre: 'Historical Fiction', year: 2023, rating: 4.7, preorder: false },
  { id: 4, title: 'The Last Cartographer', author: 'Henrik Solvang', genre: 'Literary Fiction', year: 2024, rating: 4.6, preorder: false },
  { id: 5, title: 'Bone & Bloom', author: 'Ayesha Patel', genre: 'Poetry Collection', year: 2023, rating: 4.9, preorder: false },
  { id: 6, title: 'Under Foreign Skies', author: 'Marco Bellini', genre: 'Narrative Nonfiction', year: 2024, rating: 4.5, preorder: false },
  { id: 7, title: 'The Glass Meridian', author: 'Lin Zhao', genre: 'Literary Fiction', year: 2025, rating: 0, preorder: true },
  { id: 8, title: 'Songs for the Unborn', author: 'Kemi Adeyemi', genre: 'Poetry Collection', year: 2025, rating: 0, preorder: true },
  { id: 9, title: 'The Orchard Keeper', author: 'Clara Whitfield', genre: 'Historical Fiction', year: 2023, rating: 4.4, preorder: false },
  { id: 10, title: 'Tides of Mercury', author: 'Raj Mehta', genre: 'Narrative Nonfiction', year: 2024, rating: 4.7, preorder: false },
  { id: 11, title: 'A Catalog of Winds', author: 'Ingrid Bjornsson', genre: 'Literary Fiction', year: 2023, rating: 4.3, preorder: false },
  { id: 12, title: 'Fractured Light', author: 'Tomás Rivera', genre: 'Literary Fiction', year: 2025, rating: 0, preorder: true },
];

const genres = ['All', 'Literary Fiction', 'Narrative Nonfiction', 'Historical Fiction', 'Poetry Collection'];
const sortOptions = ['Newest', 'Highest Rated', 'Title A-Z'];

const gradients = [
  'from-amber-700 to-red-900',
  'from-red-800 to-amber-900',
  'from-amber-600 to-yellow-800',
  'from-stone-700 to-amber-800',
  'from-red-900 to-stone-800',
  'from-amber-800 to-red-800',
];

export default function LibraryPage() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('Newest');

  const filtered = books
    .filter((b) => genre === 'All' || b.genre === genre)
    .filter((b) => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'Newest') return b.year - a.year;
      if (sort === 'Highest Rated') return b.rating - a.rating;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-bookshelf mb-2">Book Catalog</h1>
          <p className="text-amber-800/60">Browse our complete collection of literary fiction and narrative nonfiction</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${genre === g ? 'bg-bookshelf text-parchment' : 'bg-amber-100 text-bookshelf hover:bg-amber-200'}`}
              >
                {g}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
          >
            {sortOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <p className="text-sm text-amber-800/50 mb-6">{filtered.length} books found</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((book) => (
            <div key={book.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${gradients[book.id % gradients.length]} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-parchment/40 text-5xl font-serif">{book.title[0]}</span>
                </div>
                {book.preorder && (
                  <span className="absolute top-3 right-3 bg-cloth text-parchment text-xs font-bold px-2 py-1 rounded-full">
                    Pre-Order
                  </span>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-cloth bg-red-50 px-2 py-0.5 rounded-full">{book.genre}</span>
                <h3 className="font-bold text-bookshelf mt-2 group-hover:text-cloth transition-colors">{book.title}</h3>
                <p className="text-sm text-amber-800/60 mt-1">by {book.author}</p>
                <div className="flex items-center justify-between mt-3">
                  {book.rating > 0 ? (
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 text-sm">{'★'.repeat(Math.floor(book.rating))}</span>
                      <span className="text-xs text-amber-800/50">{book.rating}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-amber-800/40">Coming {book.year}</span>
                  )}
                  <span className="text-xs text-amber-800/40">{book.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
