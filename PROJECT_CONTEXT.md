# Project Context

Last updated: 2026-02-15
Repo: https://github.com/terezk4/nextpv-bd-academy
Production URL: https://nextpv-bd-academy.vercel.app

## What is implemented

1. Sign-in (email-based) with local session storage.
2. Admin mode for: tereza.korecka@nextpvservices.com
3. Per-user progress tracking (stored by email key in localStorage).
4. Inline text editing for admin across app content.
5. Session access control for users (unlock by previous quiz >= 70% + scenario viewed).
6. Admin unlock override (admin can open all sessions from start).
7. Quiz retry flow for low scores (includes retry button and reset logic).
8. Navigation hardening:
   - Back/Home/Next controls in session pages use explicit router navigation with fallback redirect.
   - Header Home/Reference controls use explicit router navigation with fallback redirect.

## Important behavior notes

1. Data persistence is browser-local only right now:
   - auth user
   - progress
   - content edits
   This means edits/progress are not shared between different browsers/devices/users.
2. Admin editing inside buttons/links:
   - normal click navigates
   - Alt+Click edits text

## Key files changed

- app/layout.tsx
- app/page.tsx
- app/reference/page.tsx
- components/AppShell.tsx
- components/EditableText.tsx
- components/SessionPageClient.tsx
- components/SessionCard.tsx
- components/ContentRenderer.tsx
- components/ChecklistBlock.tsx
- components/QuizBlock.tsx
- components/ScenarioBlock.tsx
- components/DecisionTree.tsx
- components/FlashcardDeck.tsx
- hooks/useAuth.tsx
- hooks/useContentEdits.tsx
- hooks/useProgress.ts

## Deployment and build notes

1. Vercel deploy was successful multiple times; latest alias points to:
   - https://nextpv-bd-academy.vercel.app
2. On local Windows/OneDrive, .next may be file-locked during rebuild.
   Quick fix used:
   - cmd /c rmdir /s /q .next

## Suggested next step (if needed)

If shared admin edits/progress are required across team members, add backend storage (for example Supabase or Firebase) and replace localStorage persistence.
