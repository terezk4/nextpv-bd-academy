import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextPV BD Academy',
  description: 'NextPV Business Development Onboarding Training — Interactive E-Learning Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50">
          <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-sm">NextPV BD Academy</span>
                  <span className="hidden sm:inline text-gray-400 text-xs ml-2">Business Development Training</span>
                </div>
              </div>
              <nav className="flex items-center gap-4 text-sm">
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                <a href="/reference" className="text-gray-600 hover:text-blue-600 transition-colors">Reference</a>
              </nav>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            {children}
          </main>
          <footer className="mt-16 border-t border-slate-200 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-xs text-gray-400">
              NextPV BD Academy — Internal Training Platform — v2.0 Feb 2026
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
