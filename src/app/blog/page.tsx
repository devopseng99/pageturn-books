import Link from 'next/link';

const posts = [
  {
    title: 'How Elena Marsh Turned a Personal Essay into a Bestselling Novel',
    category: 'Creator Story',
    date: 'Mar 25, 2026',
    excerpt: 'From a 2,000-word essay to a 300-page literary sensation — Elena shares her journey from first draft to PageTurn bestseller.',
    readTime: '8 min read',
  },
  {
    title: 'The Rise of Direct-to-Reader Publishing',
    category: 'Industry Insight',
    date: 'Mar 20, 2026',
    excerpt: 'Why more authors are choosing platforms like PageTurn over traditional publishing houses, and what it means for the future of books.',
    readTime: '6 min read',
  },
  {
    title: '5 Narrative Nonfiction Techniques Every Fiction Writer Should Know',
    category: 'Writing Tips',
    date: 'Mar 15, 2026',
    excerpt: 'Cross-pollinate your fiction with these proven nonfiction storytelling techniques that bring authenticity to any genre.',
    readTime: '5 min read',
  },
  {
    title: 'Inside Our Book Club: March Picks and Discussion Highlights',
    category: 'Community',
    date: 'Mar 10, 2026',
    excerpt: 'This month we dove into Rivers of Salt — here are the most thought-provoking discussion points from our 12,000+ member community.',
    readTime: '4 min read',
  },
  {
    title: 'Announcing PageTurn Events: Live Author Readings Come to 10 Cities',
    category: 'Platform Update',
    date: 'Mar 5, 2026',
    excerpt: 'We are expanding our author events program to 10 major cities. Here is what to expect and how to participate.',
    readTime: '3 min read',
  },
  {
    title: 'James Okonkwo on Writing Memoir Without Losing the Story',
    category: 'Creator Story',
    date: 'Feb 28, 2026',
    excerpt: 'The acclaimed memoirist shares his approach to balancing personal truth with narrative craft in his latest work.',
    readTime: '7 min read',
  },
  {
    title: 'Building Your Author Platform: A Step-by-Step Guide',
    category: 'Writing Tips',
    date: 'Feb 22, 2026',
    excerpt: 'From your first newsletter subscriber to a thriving reader community — practical advice for authors at every stage.',
    readTime: '10 min read',
  },
  {
    title: 'Pre-Orders: Why They Matter and How to Maximize Them',
    category: 'Strategy',
    date: 'Feb 15, 2026',
    excerpt: 'Pre-orders signal demand, build anticipation, and can make or break a launch. Here is how our top authors use them.',
    readTime: '5 min read',
  },
];

const categories = ['All', 'Creator Story', 'Writing Tips', 'Industry Insight', 'Community', 'Platform Update', 'Strategy'];

const gradients = [
  'from-amber-600 to-red-800',
  'from-red-900 to-amber-700',
  'from-amber-500 to-amber-800',
  'from-stone-600 to-amber-700',
  'from-red-800 to-stone-700',
  'from-amber-700 to-red-700',
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-bookshelf mb-2">The PageTurn Journal</h1>
          <p className="text-amber-800/60">Creator stories, publishing insights, and content strategy tips</p>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${cat === 'All' ? 'bg-bookshelf text-parchment' : 'bg-amber-100 text-bookshelf hover:bg-amber-200'}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto bg-gradient-to-br from-bookshelf to-cloth flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-parchment/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-parchment/40 font-serif">Featured Story</p>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-medium text-cloth bg-red-50 px-2 py-1 rounded-full w-fit">{posts[0].category}</span>
              <h2 className="text-2xl font-bold text-bookshelf mt-3 mb-3">{posts[0].title}</h2>
              <p className="text-amber-800/60 leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-amber-800/40">
                <span>{posts[0].date}</span>
                <span>&#183;</span>
                <span>{posts[0].readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, i) => (
            <article key={post.title} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className={`h-40 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}>
                <span className="text-parchment/20 text-4xl font-serif">{post.title[0]}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-cloth bg-red-50 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-amber-800/40">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-bookshelf mb-2 group-hover:text-cloth transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-amber-800/60 leading-relaxed mb-3">{post.excerpt}</p>
                <span className="text-xs text-amber-800/40">{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-bookshelf mb-3">Never Miss a Story</h2>
          <p className="text-amber-800/60 mb-6 max-w-lg mx-auto">Get weekly publishing insights, author interviews, and content strategy tips delivered to your inbox.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg border border-amber-200 bg-white text-amber-900 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-bookshelf/30"
              readOnly
            />
            <button className="px-6 py-2.5 bg-bookshelf text-parchment rounded-lg font-semibold hover:bg-amber-900 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
