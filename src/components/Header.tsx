'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/library', label: 'Library' },
  { href: '/studio', label: 'Studio' },
  { href: '/publish', label: 'Publish' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/pricing', label: 'Plans' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bookshelf text-parchment sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="2" width="8" height="28" rx="1" fill="#FDE68A" />
              <rect x="13" y="4" width="7" height="24" rx="1" fill="#991B1B" />
              <rect x="21" y="3" width="7" height="26" rx="1" fill="#FEF3C7" />
            </svg>
            PageTurn Books
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-900/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-amber-900/50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-amber-900/30 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm font-medium hover:bg-amber-900/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
