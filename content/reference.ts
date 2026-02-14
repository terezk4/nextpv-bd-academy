import type { ReferenceFramework, FlashcardDeckData } from '@/lib/types';

export const frameworks: ReferenceFramework[] = [
  {
    id: 'spin',
    title: 'SPIN Selling',
    acronym: 'SPIN',
    tagline: 'A diagnostic discovery framework that builds urgency from within the prospect.',
    steps: [
      {
        label: 'S — Situation',
        description: 'Get the context you need. 1–2 questions maximum. Do not linger here.',
        example: '"Can you walk me through your current PV setup?" / "Who is currently managing your safety function?"',
      },
      {
        label: '⚡ Challenger Insert',
        description: 'Plant a teaching moment between Situation and Problem. One specific insight that reframes their situation. Must end with a question.',
        example: '"One thing we see consistently with companies at your stage is that CRO-bundled PV creates a data consolidation problem before MAA. Has that come up in your planning?"',
      },
      {
        label: 'P — Problem',
        description: 'Understand specifically what is not working. Stay here longer than feels comfortable. Follow the thread they give you — not your checklist.',
        example: '"What is the most frustrating part of managing PV right now?" / "Where do you feel most exposed from a compliance standpoint?"',
      },
      {
        label: 'I — Implication',
        description: 'Connect the problem to its real consequences. Critical rule: the implication must come from them, not from you. Ask — do not assert.',
        example: '"What happens to your MAA timeline if inspection preparation takes longer than expected?" / "What would that mean for your fundraising?"',
      },
      {
        label: 'N — Need-Payoff',
        description: 'Guide the prospect to state, in their own words, what a good outcome looks like. This is where they sell themselves.',
        example: '"If you could solve the vendor coordination problem, what would that free your team to focus on?" / "What would an ideal PV partner look like to you, day to day?"',
      },
    ],
    whenToUse: 'Every discovery call. Execute in sequence. Do not skip steps. Do not present until Need-Payoff is complete.',
  },
  {
    id: 'fab',
    title: 'FAB: Feature → Advantage → Benefit',
    acronym: 'FAB',
    tagline: 'A structure for presenting value that is grounded in what the prospect told you.',
    steps: [
      {
        label: 'F — Feature',
        description: 'What the service or capability actually is. Factual and specific.',
        example: '"Our consolidated service model handles both database management and PV operations under one contract and one team."',
      },
      {
        label: 'A — Advantage',
        description: 'What makes this feature better or different than the alternative. A specific contrast — not a general claim.',
        example: '"...eliminates the vendor hand-off layer entirely, unlike a multi-vendor model where coordination falls on your team."',
      },
      {
        label: 'B — Benefit',
        description: "What this means for the prospect in their specific context. Must use their language from discovery. Never generic.",
        example: '"...which means your team recovers the 15–20 hours a week currently lost to coordination and can redirect that to actual PV strategy work."',
      },
    ],
    whenToUse: 'Solution presentation. After discovery and Need-Payoff. Maximum 2–3 FAB statements per conversation. Always anchor to their words.',
  },
  {
    id: 'lara',
    title: 'LARA: Objection Handling',
    acronym: 'LARA',
    tagline: 'A framework for handling objections without defending, arguing, or capitulating.',
    steps: [
      {
        label: 'L — Listen',
        description: 'Fully. Do not interrupt. Do not start formulating your response while they are still talking. Let them finish completely.',
        example: 'Silence. Let them speak without interjecting.',
      },
      {
        label: 'A — Acknowledge',
        description: 'Validate the concern before you address it. Not agreeing — demonstrating that you heard them.',
        example: '"That\'s a fair concern." / "Cost is always worth examining carefully — I appreciate you raising it directly." / "I understand why that would be your first question."',
      },
      {
        label: 'R — Respond',
        description: 'Address the substance with insight, data, or reframing. Not argument or assertion. Reframe what the alternative actually costs.',
        example: '"What are you comparing this to specifically? When we account for the hidden costs of CRO bundling — coordination overhead, data consolidation before MAA — the comparison often looks quite different."',
      },
      {
        label: 'A — Ask',
        description: 'Confirm you addressed the concern. Never assume your response landed. Ask a real question.',
        example: '"Does that change how you\'re looking at the comparison?" / "Does that answer the question about cost?" / "What would it take to feel confident about this approach?"',
      },
    ],
    whenToUse: 'Every objection. In that order, always. Remember: the best objection handling happens in discovery — if you\'ve done great Implication work, many objections never arise.',
  },
  {
    id: 'bant-plus',
    title: 'BANT+ Qualification',
    acronym: 'BANT+',
    tagline: 'Confirm deal fundamentals before investing in proposal development.',
    steps: [
      {
        label: 'B — Budget',
        description: 'Confirm budget range before proposal development. Not to eliminate — to scope correctly.',
        example: '"To ensure our proposal aligns with your planning, what budget range are you working with for PV optimization?"',
      },
      {
        label: 'A — Authority',
        description: 'Map who is involved in making the decision. Also reveals the buying committee.',
        example: '"Who else would need to be involved in evaluating a new PV approach?"',
      },
      {
        label: 'N — Need',
        description: 'Confirm the need is genuine and driven by a specific business problem.',
        example: '"What\'s driving the timeline for addressing these PV challenges?"',
      },
      {
        label: 'T — Timeline',
        description: 'Understand when they need a solution in place. Affects urgency and stage assignment.',
        example: '"When would you ideally want a new solution in place?"',
      },
      {
        label: '+ — Buying Committee + Champion',
        description: 'Has the full buying committee been mapped? Is there a champion who can facilitate introductions to decision-makers? Never single-thread a deal.',
        example: '"Who will be most influential in the final decision?" / "Would it be helpful if we set up a brief conversation with your CMO directly?"',
      },
    ],
    whenToUse: 'After discovery, before proposing. All criteria should be at least partially confirmed. If Budget or Authority is missing, do not invest in full proposal.',
  },
  {
    id: 'stall-prevention',
    title: 'Stall Prevention Tactics',
    tagline: 'Four common deal stalls and how to prevent them before they happen.',
    steps: [
      {
        label: 'Stall 1: "No Urgency" (Stage 2)',
        description: 'Root cause: The problem has not been made concrete. Prevention: Use stronger Implication questions in discovery. Ask what happens to their launch timeline, inspection risk, budget if the problem continues.',
        example: '"What happens to your MAA timeline if you don\'t address this before Q3?" If you cannot create urgency from real implications, the deal may not be real.',
      },
      {
        label: 'Stall 2: "Committed to CRO" (Stage 3)',
        description: 'Root cause: Prospect perceives disruption risk > benefit. Prevention: Reframe as complementary. "We work alongside CROs routinely — not either/or." Ask about CRO contract renewal date.',
        example: '"Have you benchmarked CRO PV costs vs. a specialized provider? When is your CRO contract renewal?"',
      },
      {
        label: 'Stall 3: "Champion Can\'t Get Alignment" (Stage 4)',
        description: 'Root cause: Single-threaded. Prevention: Build the internal case for them. Offer executive briefing. Ask to meet the economic buyer directly.',
        example: '"What materials would help you present this to the CMO?" / "Would it be useful if we set up a brief conversation with your stakeholders directly?"',
      },
      {
        label: 'Stall 4: "Going Dark After Proposal" (Stage 6)',
        description: 'Root cause: Internal decision made without you, or champion lost momentum. Prevention: Before sending, get a specific decision timeline. Schedule follow-up before hitting send. Send value-adds, not nudges.',
        example: '"When do you expect to make a decision?" → Schedule follow-up before sending. During wait: send regulatory insight or case example.',
      },
    ],
    whenToUse: 'Recognize and prevent stalls before they happen. Prevention is always better than cure. Review at each stage gate.',
  },
];

export const flashcardDecks: FlashcardDeckData[] = [
  {
    id: 'spin-deck',
    title: 'SPIN Framework Cards',
    description: 'Master the SPIN question types with examples',
    cards: [
      {
        id: 'spin-s',
        front: 'Situation Questions',
        back: 'Purpose: Get context. 1–2 max. Do not linger.',
        example: '"Walk me through your current PV setup." / "Who manages your safety function?" / "How many products are you monitoring?"',
      },
      {
        id: 'spin-c',
        front: 'Challenger Insert',
        back: 'A teaching moment between S and P. One specific insight. Ends with a question. Takes 30–45 seconds.',
        example: '"One thing we see with companies at your stage is that CRO-bundled PV creates a data consolidation problem before MAA. Has that come up in your planning?"',
      },
      {
        id: 'spin-p',
        front: 'Problem Questions',
        back: 'Core of discovery. Ask about frustration, exposure, delay. Follow the thread, not your checklist. Open-ended only.',
        example: '"What\'s the most frustrating part of managing PV?" / "Where do you feel most exposed from a compliance standpoint?" / "When was your last inspection — how did it go?"',
      },
      {
        id: 'spin-i',
        front: 'Implication Questions',
        back: 'Connect problem to consequences. The implication MUST come from them. Ask — never assert. This is where urgency is built.',
        example: '"What happens to your MAA timeline if this drags out?" / "What would a finding in the next inspection cost you — direct and indirect?" / "How does that affect your fundraising timeline?"',
      },
      {
        id: 'spin-n',
        front: 'Need-Payoff Questions',
        back: 'Let them sell themselves. Guide them to state what a good outcome looks like. Use THEIR language back to them.',
        example: '"If you could solve the coordination problem, what would that free your team to focus on?" / "What would bulletproof inspection readiness let you stop worrying about?"',
      },
    ],
  },
  {
    id: 'fab-deck',
    title: 'FAB Framework Cards',
    description: 'Practice the Feature-Advantage-Benefit formula',
    cards: [
      {
        id: 'fab-formula',
        front: 'The FAB Formula',
        back: '"Our [Feature] [Advantage], which means [Benefit in their context]."',
        example: '"Our consolidated model eliminates the vendor hand-off layer, which means your team recovers 15–20 hours a week for actual PV strategy work."',
      },
      {
        id: 'fab-feature',
        front: 'Feature',
        back: 'What the service actually IS. Factual and specific. Not a claim.',
        example: '"Consolidated database management and PV operations under one contract and one team."',
      },
      {
        id: 'fab-advantage',
        front: 'Advantage',
        back: 'What makes the feature better than the alternative. A specific contrast — not a general claim.',
        example: '"Eliminates the vendor hand-off layer entirely — unlike a multi-vendor model where coordination falls on your internal team."',
      },
      {
        id: 'fab-benefit',
        front: 'Benefit',
        back: 'What this means for the prospect. MUST use their language from discovery. Never generic.',
        example: 'They said "actual PV strategy work" → your Benefit uses "actual PV strategy work" — not "operational efficiency" or "compliance optimization."',
      },
      {
        id: 'fab-rules',
        front: 'Two Rules of FAB',
        back: '1. Never present more than 2–3 FABs in one conversation. More = noise.\n2. Benefit MUST use their language. Words carry specific weight to specific people.',
        example: 'If they said "audit exposure" → your Benefit addresses "audit exposure" not "compliance risk" even if they are synonyms.',
      },
    ],
  },
  {
    id: 'lara-deck',
    title: 'LARA Objection Handling',
    description: 'Master the four steps of objection handling',
    cards: [
      {
        id: 'lara-l',
        front: 'L — Listen',
        back: 'Fully. Do not interrupt. Do not start formulating your response while they are talking. Resist the instinct to defend.',
        example: 'Silence. Let them finish. Then pause before responding.',
      },
      {
        id: 'lara-a1',
        front: 'A — Acknowledge',
        back: 'Validate BEFORE addressing. This is not agreeing — it\'s proving you heard them. Without this step, your response will feel defensive.',
        example: '"That\'s a fair concern." / "I understand why that would be your first question." / "Cost is always worth examining carefully — I appreciate you raising it directly."',
      },
      {
        id: 'lara-r',
        front: 'R — Respond',
        back: 'Use insight, data, or reframing — NOT argument or assertion. Do not defend the price. Reframe what the price includes and what the alternative actually costs.',
        example: '"What are you comparing this to specifically? When we account for the hidden costs of CRO bundling..."',
      },
      {
        id: 'lara-a2',
        front: 'A — Ask (second A)',
        back: 'Confirm you addressed the concern. Never assume your response landed. Ask a real question — not a close.',
        example: '"Does that change how you\'re looking at the comparison?" / "Does that answer the question about cost?" / "What would it take to feel confident about this?"',
      },
      {
        id: 'lara-principle',
        front: 'The Most Important LARA Principle',
        back: 'The best objection handling happens in DISCOVERY, not after the presentation. Objections are usually a signal that discovery was incomplete.',
        example: 'If you have done strong Implication work and the prospect has articulated their own need through Need-Payoff, most objections never arise.',
      },
    ],
  },
  {
    id: 'bant-deck',
    title: 'BANT+ Qualification',
    description: 'Know your qualification criteria before proposing',
    cards: [
      {
        id: 'bant-b',
        front: 'B — Budget',
        back: 'Confirm budget range before investing in proposal development. Not to eliminate — to scope correctly.',
        example: '"To ensure our proposal aligns with your planning, what budget range are you working with for PV optimization?"',
      },
      {
        id: 'bant-a',
        front: 'A — Authority',
        back: 'Map who is involved in the decision. Also reveals the buying committee. Never single-thread.',
        example: '"Who else would need to be involved in evaluating a new PV approach?"',
      },
      {
        id: 'bant-n',
        front: 'N — Need',
        back: 'Confirm the need is genuine and specific. What is driving the timeline? What problem are they actually solving?',
        example: '"What\'s driving the timeline for addressing these PV challenges?"',
      },
      {
        id: 'bant-t',
        front: 'T — Timeline',
        back: 'When do they need a solution in place? This affects urgency and stage assignment. Vague timeline = lower priority.',
        example: '"When would you ideally want a new solution in place?"',
      },
      {
        id: 'bant-plus',
        front: '+ — Champion + Buying Committee',
        back: 'Has the buying committee been mapped? Is there a champion who can facilitate introductions? This is the + that makes BANT+ work.',
        example: '"Who will be most influential in the final decision?" / Never propose before meeting both technical validator AND decision-maker.',
      },
    ],
  },
];
