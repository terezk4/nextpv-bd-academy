'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import { ContentEditsProvider, useContentEdits } from '@/hooks/useContentEdits';
import { EditableText } from '@/components/EditableText';

function SignInScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl border border-slate-200 p-6">
      <h1 className="text-xl font-bold text-slate-900 mb-2">Sign In</h1>
      <p className="text-sm text-slate-600 mb-5">
        Use your email to continue to NextPV BD Academy.
      </p>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const ok = signIn(email);
          if (!ok) setError('Enter a valid email address.');
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          placeholder="your.email@company.com"
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

function ShellContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, mounted, signOut } = useAuth();
  const { clearAllEdits } = useContentEdits();

  const navigateTo = (path: string) => {
    router.push(path);
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        const current = (window.location.pathname.replace(/\/+$/, '') || '/');
        const target = (path.replace(/\/+$/, '') || '/');
        if (current !== target) {
          window.location.assign(path);
        }
      }, 300);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-500">
          Loading...
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <div>
              <span className="font-bold text-gray-900 text-sm">
                <EditableText editKey="layout.brand" text="NextPV BD Academy" label="Header brand" />
              </span>
              <span className="hidden sm:inline text-gray-400 text-xs ml-2">
                <EditableText editKey="layout.subtitle" text="Business Development Training" label="Header subtitle" />
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => navigateTo('/')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <EditableText editKey="layout.nav.home" text="Home" label="Nav Home" />
              </button>
              <button
                type="button"
                onClick={() => navigateTo('/reference')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <EditableText editKey="layout.nav.reference" text="Reference" label="Nav Reference" />
              </button>
            </nav>

            {user && (
              <div className="flex items-center gap-2">
                <span className="hidden md:inline text-xs text-slate-500">{user.email}</span>
                {user.isAdmin && (
                  <>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-100 border border-amber-300 px-2 py-1 rounded-full">
                      Admin
                    </span>
                    <button
                      type="button"
                      onClick={clearAllEdits}
                      className="hidden md:inline text-xs text-slate-500 hover:text-slate-700"
                    >
                      Clear Edits
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={signOut}
                  className="text-xs text-slate-500 hover:text-slate-700 border border-slate-200 rounded-md px-2 py-1"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {!user ? (
          <SignInScreen />
        ) : (
          <>
            {user.isAdmin && (
              <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                Admin edit mode is active. Click any editable text to edit and save. Inside links/buttons use Alt+Click.
              </div>
            )}
            {children}
          </>
        )}
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-xs text-gray-400">
          <EditableText
            editKey="layout.footer"
            text="NextPV BD Academy - Internal Training Platform - v2.0 Feb 2026"
            label="Footer text"
          />
        </div>
      </footer>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ContentEditsProvider>
        <ShellContent>{children}</ShellContent>
      </ContentEditsProvider>
    </AuthProvider>
  );
}
