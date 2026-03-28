'use client';

import { useState } from 'react';

export default function StudioPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Literary Fiction');
  const [description, setDescription] = useState('');
  const [manuscript, setManuscript] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [activeTab, setActiveTab] = useState<'write' | 'metadata' | 'preview'>('write');

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bookshelf mb-2">Creator Studio</h1>
          <p className="text-amber-800/60">Write, edit, and prepare your manuscript for publication</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-amber-100 rounded-lg p-1">
              {(['write', 'metadata', 'preview'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-colors capitalize ${activeTab === tab ? 'bg-white text-bookshelf shadow-sm' : 'text-amber-800/60 hover:text-bookshelf'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'write' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-amber-100">
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 font-bold">B</button>
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 italic">I</button>
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 underline">U</button>
                  <div className="w-px h-6 bg-amber-200" />
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 text-sm">H1</button>
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 text-sm">H2</button>
                  <div className="w-px h-6 bg-amber-200" />
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 text-sm">Quote</button>
                  <button className="p-2 rounded hover:bg-amber-50 text-amber-800/60 text-sm">List</button>
                </div>
                <textarea
                  value={manuscript}
                  onChange={(e) => setManuscript(e.target.value)}
                  placeholder="Begin writing your manuscript here...

Chapter One

The morning light crept through the curtains like a secret being whispered..."
                  className="w-full h-96 bg-parchment rounded-lg p-6 text-amber-900 placeholder-amber-800/30 leading-relaxed font-serif text-lg border border-amber-100 focus:outline-none focus:ring-2 focus:ring-bookshelf/20 resize-none"
                />
                <div className="flex justify-between items-center mt-4 text-sm text-amber-800/50">
                  <span>{manuscript.split(/\s+/).filter(Boolean).length} words</span>
                  <span>Auto-saved</span>
                </div>
              </div>
            )}

            {activeTab === 'metadata' && (
              <div className="bg-white rounded-xl shadow-md p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Book Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your book title"
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Author Name</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your name as it will appear on the cover"
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Genre</label>
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                  >
                    <option>Literary Fiction</option>
                    <option>Narrative Nonfiction</option>
                    <option>Historical Fiction</option>
                    <option>Poetry Collection</option>
                    <option>Essay Collection</option>
                    <option>Memoir</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write a compelling description for your book jacket..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bookshelf mb-1.5">Target Publication Date</label>
                  <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 bg-parchment text-amber-900 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bookshelf mb-3">Cover Image</label>
                  <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center bg-amber-50/50">
                    <svg className="w-10 h-10 mx-auto text-amber-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-amber-800/50">Drag & drop your cover image or click to browse</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="max-w-lg mx-auto">
                  <div className="h-72 gradient-book rounded-lg mb-8 flex items-center justify-center">
                    <div className="text-center text-parchment">
                      <p className="text-3xl font-serif font-bold mb-2">{title || 'Your Title'}</p>
                      <p className="text-amber-200/70">{author || 'Author Name'}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-cloth bg-red-50 px-2 py-1 rounded-full">{genre}</span>
                  <h2 className="text-2xl font-bold text-bookshelf mt-3 mb-3">{title || 'Untitled Manuscript'}</h2>
                  <p className="text-sm text-amber-800/60 mb-4">by {author || 'Unknown Author'}</p>
                  <p className="text-amber-800/70 leading-relaxed">{description || 'No description provided yet.'}</p>
                  {scheduleDate && <p className="text-sm text-amber-800/40 mt-4">Scheduled for {scheduleDate}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-bookshelf mb-4">Recent Manuscripts</h3>
              <div className="space-y-3">
                {[
                  { title: 'The Glass Meridian', status: 'In Progress', words: 45200 },
                  { title: 'Songs for the Unborn', status: 'Draft', words: 12800 },
                  { title: 'Fractured Light', status: 'Review', words: 68400 },
                ].map((m) => (
                  <div key={m.title} className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 cursor-pointer transition-colors">
                    <div className="w-10 h-14 gradient-book rounded flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-bookshelf truncate">{m.title}</p>
                      <p className="text-xs text-amber-800/50">{m.words.toLocaleString()} words</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${m.status === 'In Progress' ? 'bg-blue-50 text-blue-700' : m.status === 'Draft' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`}>
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-bookshelf mb-4">Writing Tips</h3>
              <ul className="space-y-3 text-sm text-amber-800/70">
                <li className="flex gap-2">
                  <span className="text-cloth mt-0.5">&#9679;</span>
                  Write consistently — even 500 words a day adds up.
                </li>
                <li className="flex gap-2">
                  <span className="text-cloth mt-0.5">&#9679;</span>
                  Read your work aloud to catch rhythm issues.
                </li>
                <li className="flex gap-2">
                  <span className="text-cloth mt-0.5">&#9679;</span>
                  Let your first draft be imperfect — revision is where the magic happens.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
