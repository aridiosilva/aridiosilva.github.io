import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aridio Silva | AI Systems Architecture & Governance',
  description: 'Independent Researcher focused on SGAEIA, Agentic AI, Edge Intelligence, Zero-Trust, and AI Governance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark bg-slate-950 text-slate-100 antialiased">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between">
        <div className="max-w-3xl w-full mx-auto px-6 py-10 flex-grow flex flex-col">
          <header className="flex justify-between items-center py-4 border-b border-slate-800 mb-10">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-100 hover:text-blue-400 transition-colors">
              aridiosilva<span className="text-blue-500">.com</span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-slate-400">
              <Link href="/sgaeia" className="hover:text-white transition-colors text-blue-400 font-mono">SGAEIA</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Research</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </nav>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 gap-4">
            <div>© 2026 Aridio Silva • Independent Researcher</div>
            <div className="flex gap-4">
              <a href="https://github.com/aridiosilva" target="_blank" rel="noreferrer" className="hover:text-slate-300">GitHub</a>
              <a href="https://orcid.org/0009-0008-2411-6995" target="_blank" rel="noreferrer" className="hover:text-slate-300">ORCID</a>
              <a href="https://scholar.google.com/citations?user=rPn5O48AAAAJ" target="_blank" rel="noreferrer" className="hover:text-slate-300">Scholar</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}