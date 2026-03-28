'use client';

import { useState } from 'react';

const metrics = [
  { label: 'Total Readers', value: '12,847', change: '+12%', up: true },
  { label: 'Books Sold', value: '3,241', change: '+8%', up: true },
  { label: 'Revenue', value: '$48,620', change: '+15%', up: true },
  { label: 'Avg Rating', value: '4.7', change: '+0.1', up: true },
];

const topBooks = [
  { title: 'Rivers of Salt', author: 'James Okonkwo', sales: 842, revenue: '$12,630' },
  { title: 'The Midnight Garden', author: 'Elena Marsh', sales: 654, revenue: '$9,810' },
  { title: 'Bone & Bloom', author: 'Ayesha Patel', sales: 521, revenue: '$7,815' },
  { title: 'Whispers in Amber', author: 'Sofia Delacroix', sales: 489, revenue: '$7,335' },
  { title: 'The Last Cartographer', author: 'Henrik Solvang', sales: 412, revenue: '$6,180' },
];

const recentReviews = [
  { book: 'Rivers of Salt', reader: 'BookLover42', rating: 5, text: 'Absolutely stunning. Okonkwo\'s prose is luminous.' },
  { book: 'The Midnight Garden', reader: 'LitFicFan', rating: 4, text: 'Beautifully atmospheric, though the middle section dragged slightly.' },
  { book: 'Bone & Bloom', reader: 'PoetryNerd', rating: 5, text: 'Every poem is a revelation. This collection will stay with me.' },
];

const sidebarLinks = [
  { label: 'Overview', active: true },
  { label: 'Sales', active: false },
  { label: 'Readers', active: false },
  { label: 'Reviews', active: false },
  { label: 'Events', active: false },
  { label: 'Settings', active: false },
];

export default function DashboardPage() {
  const [period, setPeriod] = useState('30d');

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-md p-4 lg:sticky lg:top-24">
              <h3 className="font-bold text-bookshelf mb-3 px-3">Dashboard</h3>
              {sidebarLinks.map((link) => (
                <button
                  key={link.label}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    link.active ? 'bg-bookshelf text-parchment' : 'text-amber-800/60 hover:bg-amber-50 hover:text-bookshelf'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-bookshelf">Publisher Dashboard</h1>
                <p className="text-amber-800/60 mt-1">Welcome back. Here&apos;s how your books are performing.</p>
              </div>
              <div className="flex gap-2 bg-amber-100 rounded-lg p-1">
                {['7d', '30d', '90d', '1y'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${period === p ? 'bg-white text-bookshelf shadow-sm' : 'text-amber-800/50 hover:text-bookshelf'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white rounded-xl shadow-md p-5">
                  <p className="text-sm text-amber-800/50">{m.label}</p>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-2xl font-bold text-bookshelf">{m.value}</span>
                    <span className={`text-sm font-medium ${m.up ? 'text-green-600' : 'text-red-600'}`}>{m.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-bold text-bookshelf mb-4">Sales Over Time</h2>
              <div className="h-64 bg-gradient-to-t from-amber-100/50 to-transparent rounded-lg flex items-end justify-around px-4 pb-4">
                {[35, 42, 28, 55, 48, 62, 45, 70, 58, 75, 82, 68].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className="w-full max-w-[24px] bg-gradient-to-t from-bookshelf to-cloth rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-xs text-amber-800/30">
                      {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Books */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-bold text-bookshelf mb-4">Top Selling Books</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-amber-800/50 border-b border-amber-100">
                      <th className="pb-3 font-medium">#</th>
                      <th className="pb-3 font-medium">Book</th>
                      <th className="pb-3 font-medium">Author</th>
                      <th className="pb-3 font-medium text-right">Sales</th>
                      <th className="pb-3 font-medium text-right">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topBooks.map((book, i) => (
                      <tr key={book.title} className="border-b border-amber-50 last:border-0">
                        <td className="py-3 text-sm text-amber-800/40">{i + 1}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-11 gradient-book rounded flex-shrink-0" />
                            <span className="font-medium text-bookshelf text-sm">{book.title}</span>
                          </div>
                        </td>
                        <td className="py-3 text-sm text-amber-800/60">{book.author}</td>
                        <td className="py-3 text-sm text-amber-800/70 text-right">{book.sales}</td>
                        <td className="py-3 text-sm font-medium text-bookshelf text-right">{book.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-bold text-bookshelf mb-4">Recent Reviews</h2>
              <div className="space-y-4">
                {recentReviews.map((r) => (
                  <div key={r.reader} className="p-4 rounded-lg bg-amber-50/50">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium text-bookshelf text-sm">{r.book}</span>
                        <span className="text-amber-800/40 text-sm ml-2">by {r.reader}</span>
                      </div>
                      <span className="text-amber-500 text-sm">{'★'.repeat(r.rating)}</span>
                    </div>
                    <p className="text-sm text-amber-800/70">{r.text}</p>
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
