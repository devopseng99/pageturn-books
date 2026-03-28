import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bookshelf text-parchment mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="2" width="8" height="28" rx="1" fill="#FDE68A" />
                <rect x="13" y="4" width="7" height="24" rx="1" fill="#991B1B" />
                <rect x="21" y="3" width="7" height="26" rx="1" fill="#FEF3C7" />
              </svg>
              PageTurn Books
            </h3>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              Independent book publisher specializing in literary fiction and narrative nonfiction with direct-to-reader sales and author events.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li><Link href="/library" className="hover:text-parchment transition-colors">Library</Link></li>
              <li><Link href="/studio" className="hover:text-parchment transition-colors">Creator Studio</Link></li>
              <li><Link href="/publish" className="hover:text-parchment transition-colors">Publish</Link></li>
              <li><Link href="/blog" className="hover:text-parchment transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li><Link href="/about" className="hover:text-parchment transition-colors">About</Link></li>
              <li><Link href="/pricing" className="hover:text-parchment transition-colors">Plans</Link></li>
              <li><Link href="/faq" className="hover:text-parchment transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-parchment transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-amber-200/70 mb-4">Join our newsletter for new releases and author events.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md bg-amber-900/50 text-parchment placeholder-amber-200/40 text-sm border border-amber-900/30 focus:outline-none focus:border-amber-200/50"
                readOnly
              />
              <button className="px-4 py-2 bg-cloth text-parchment rounded-md text-sm font-medium hover:bg-red-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-900/30 text-center text-sm text-amber-200/50">
          <p>&copy; {new Date().getFullYear()} PageTurn Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
