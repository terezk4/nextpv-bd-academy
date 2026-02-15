# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (required before deploy)
npm run start    # Serve production build locally
```

**Note:** The project lives inside a OneDrive-synced folder. If `npm run build` fails with `EPERM`, OneDrive is locking `.next/`. Fix with:
```bash
powershell -Command "Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue"
npm run build
```

## Architecture

**Next.js 16 App Router** with Tailwind CSS v4. No backend — all data is TypeScript files, all state is `localStorage`.

### Data flow

```
content/*.ts  →  page/component imports  →  renders content
localStorage  ←→  hooks/useProgress.ts  ←→  all interactive components
```

**All training content lives in `content/`** — this is the only place to edit when updating training material:
- `sessions.ts` — 6 session objects with `sections[]`, `mistakes[]`, `resources[]`
- `quizzes.ts` — 24 MCQ questions (4 per session), each with `correctIndex` and `explanation`
- `scenarios.ts` — 6 end-of-session role-play scenarios with 3 options each (`isIdeal: true` marks the correct one)
- `reference.ts` — Framework cards (`frameworks[]`) and flashcard decks (`flashcardDecks[]`)

### Session unlock logic

Session N+1 unlocks when: `quizScores[N] >= 70` AND `scenariosViewed[N] === true`. Implemented in `hooks/useProgress.ts → isSessionUnlocked()`.

### Page → component split (important for static rendering)

`app/session/[id]/page.tsx` is a **server component** (no `'use client'`). All interactive logic lives in `components/SessionPageClient.tsx` which is a client component. This split exists because Next.js App Router requires server components at the page level when using dynamic routes.

### Interactive components

| Component | Purpose | Completion signal |
|---|---|---|
| `QuizBlock` | MCQ quiz, immediate per-question feedback | `onComplete(score)` callback |
| `ScenarioBlock` | 3-option role-play, shows feedback on submit | `onComplete()` callback |
| `FlashcardDeck` | Flip-card review, tracks per-card views | `onCardViewed(cardId)` callback |
| `ChecklistBlock` | Practice exercise checklist | `onToggle(key)` per item |
| `DecisionTree` | Click-through diagnostic branching | No completion — diagnostic only |
| `ContentRenderer` | Renders `ContentSection` objects (text/table/callout) | Display only |

Decision trees for buyer-phase diagnosis (Session 2) and stall-type diagnosis (Session 4) are defined inline in `SessionPageClient.tsx` as `Record<string, DecisionNode>`.

### Progress schema (localStorage key: `nextpv_bd_academy_progress`)

```typescript
{
  completedSessions: number[]          // [1, 2, 3]
  quizScores: Record<number, number>   // { 1: 85, 2: 72 }
  scenariosViewed: Record<number, boolean>
  checklistItems: Record<string, boolean>  // key format: "s1-ex1"
  flashcardsViewed: Record<string, boolean>
  lastVisited: number
}
```

## Deployment

Hosted on Vercel (GitHub auto-deploy). Repo: `github.com/terezk4/nextpv-bd-academy`. Push to `master` → auto-redeploys.

To deploy manually from CLI (after `vercel login`):
```bash
vercel --scope tkorecka-gmailcoms-projects
```
