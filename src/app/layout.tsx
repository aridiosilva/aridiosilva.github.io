import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aridio Silva | AI Research & Systems Engineering',
  description: 'Researching reliable AI agents, long-term memory, MCP, and governance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-slate-950 text-slate-100 antialiased">
      <body className="max-w-3xl mx-auto px-6 py-10 min-h-screen flex flex-col justify-between font-sans">
        <header className="flex justify-between items-center py-4 border-b border-slate-800 mb-10">
          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
            aridiosilva<span className="text-blue-500">.com</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 gap-4">
          <div>© 2026 Aridio Silva</div>
          <div className="flex gap-4">
            <a href="https://github.com/aridiosilva" target="_blank" className="hover:text-slate-300">GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-slate-300">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}