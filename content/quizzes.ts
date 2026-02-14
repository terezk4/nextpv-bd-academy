import type { QuizQuestion } from '@/lib/types';

export const quizzes: QuizQuestion[] = [
  // Session 1
  {
    id: 'q1-1',
    sessionId: 1,
    question: 'What is the correct order of the NextPV selling principle?',
    options: [
      'Tell first, then ask questions to confirm',
      'Ask first. Teach second. Tell third.',
      'Pitch the features, then discover the needs',
      'Send a capabilities deck, then follow up',
    ],
    correctIndex: 1,
    explanation:
      '"Ask first. Teach second. Tell third." is the core mental shift. Discovery must come before any explanation of what NextPV does.',
  },
  {
    id: 'q1-2',
    sessionId: 1,
    question: 'A prospect says "Our biggest challenge is coordinating between our CRO, database vendor, and QPPV consultant." Which NextPV positioning pillar does this map to?',
    options: ['Innovation', 'Trust', 'Partnership', 'Cost Efficiency'],
    correctIndex: 2,
    explanation:
      'Partnership — solving complex, multi-vendor coordination problems alongside the client. This maps directly to "We solve complex problems alongside clients, not as a task executor."',
  },
  {
    id: 'q1-3',
    sessionId: 1,
    question: 'Which of these is an example of trust language (not hype language)?',
    options: [
      '"We\'re the best PV provider in Europe."',
      '"We have an industry-leading track record."',
      '"Zero critical findings across our client base in three years."',
      '"Our team is highly experienced and proven."',
    ],
    correctIndex: 2,
    explanation:
      'Trust language is specific, measurable, and grounded in client experience. "Zero critical findings in three years" is specific and verifiable. The others are vague claims.',
  },
  {
    id: 'q1-4',
    sessionId: 1,
    question: 'A new BD rep opens a first call with: "NextPV offers QPPV services, medical writing, gap analysis, and audits." What is wrong with this opening?',
    options: [
      'Nothing — it is important to explain all services upfront',
      'The services listed are incorrect',
      'It pitches before discovering the prospect\'s situation and needs',
      'The rep should only mention one service at a time',
    ],
    correctIndex: 2,
    explanation:
      'This opening violates Principle 1: Discovery Before Pitch. Opening with features signals you don\'t understand their situation. Experienced buyers shut down. Always discover first.',
  },

  // Session 2
  {
    id: 'q2-1',
    sessionId: 2,
    question: 'A prospect says: "We\'ve already spoken to two other providers and we\'re looking to make a decision in the next month." Which buyer phase are they in?',
    options: ['Phase 1: Awareness', 'Phase 2: Consideration', 'Phase 3: Decision', 'Phase 4: Implementation'],
    correctIndex: 1,
    explanation:
      'Phase 2: Consideration. They have acknowledged the problem and are actively evaluating options. They need differentiation and proof — not education.',
  },
  {
    id: 'q2-2',
    sessionId: 2,
    question: 'What is the minimum number of stakeholders you should have engaged before sending a proposal?',
    options: ['One (your primary contact)', 'Two', 'Three', 'The entire buying committee'],
    correctIndex: 1,
    explanation:
      'The rule is: always expand to at least two stakeholders before you propose anything. Single-threading is a high-risk position that can cause deals to disappear.',
  },
  {
    id: 'q2-3',
    sessionId: 2,
    question: 'You are engaging a mid-stage biotech where the Head of PV is interested. Which is the correct next move?',
    options: [
      'Send the proposal to the Head of PV immediately',
      'Wait for the Head of PV to introduce you to the CMO/CFO',
      'Proactively expand to the CMO or CFO before proposing',
      'Continue discovery with the Head of PV until the deal is closed',
    ],
    correctIndex: 2,
    explanation:
      'Proactively expand to the CMO or CFO. The Head of PV is a technical validator but rarely has budget authority. You must meet decision-makers before sending a proposal.',
  },
  {
    id: 'q2-4',
    sessionId: 2,
    question: 'A prospect is in Phase 3 (Decision) and you ask: "Can you walk me through your current PV setup?" What mistake are you making?',
    options: [
      'Nothing — Situation questions are always valuable',
      'Asking Phase 1 questions to a Phase 3 buyer — they need proof, not education',
      'Starting with a discovery question before the CTA',
      'Not using the SPIN framework correctly',
    ],
    correctIndex: 1,
    explanation:
      'A Phase 3 buyer has already decided they have a problem and is evaluating vendors. Re-opening basic discovery makes them feel like you haven\'t been paying attention. They need confidence and proof now.',
  },

  // Session 3
  {
    id: 'q3-1',
    sessionId: 3,
    question: 'Which SPIN question type is most responsible for building urgency in a prospect?',
    options: ['Situation', 'Problem', 'Implication', 'Need-Payoff'],
    correctIndex: 2,
    explanation:
      'Implication questions connect problems to real consequences. The emotional weight of a problem is not in the problem itself — it is in what happens because of it. This is where urgency is built.',
  },
  {
    id: 'q3-2',
    sessionId: 3,
    question: 'The Challenger insert should be placed at which point in the SPIN sequence?',
    options: [
      'Before Situation questions',
      'Between Situation and Problem questions',
      'After Problem questions',
      'After Need-Payoff questions',
    ],
    correctIndex: 1,
    explanation:
      'The Challenger insert goes between Situation and Problem. After you have enough context (Situation), you introduce a teaching moment that reframes their situation before you ask Problem questions.',
  },
  {
    id: 'q3-3',
    sessionId: 3,
    question: '"That must be creating timeline risk." What is wrong with this statement during discovery?',
    options: [
      'Nothing — empathy statements help build rapport',
      'It is an assertion, not a question — you are telling them the implication instead of asking them to discover it',
      'Timeline is not relevant to PV discovery',
      'You should not mention risk during discovery',
    ],
    correctIndex: 1,
    explanation:
      'Implications must come from the prospect, not from you. "That must be creating timeline risk" is you asserting. The correct approach: "What happens to your timeline when that occurs?" — letting them discover the consequence.',
  },
  {
    id: 'q3-4',
    sessionId: 3,
    question: 'What is the critical gate between discovery and presentation?',
    options: [
      'The prospect has agreed to receive a proposal',
      'The prospect has explicitly named what they need in their own words',
      'All SPIN questions have been asked',
      'A 30-minute call has been completed',
    ],
    correctIndex: 1,
    explanation:
      'The gate is: the prospect has explicitly stated what they need. "Do not begin presenting until you have completed Need-Payoff and the prospect has explicitly named what they need." If you present before this, your proposal will miss the target.',
  },

  // Session 4
  {
    id: 'q4-1',
    sessionId: 4,
    question: 'What is the BANT+ qualification criterion that goes beyond standard BANT?',
    options: [
      'Benchmarking the competitor pricing',
      'Ensuring the buying committee is mapped and a champion identified',
      'Confirming the prospect\'s annual revenue',
      'Verifying the technical requirements of the service',
    ],
    correctIndex: 1,
    explanation:
      'The "+" in BANT+ is: Has the buying committee been mapped? Is there a champion who can facilitate introductions? This prevents single-threading and late-stage surprises.',
  },
  {
    id: 'q4-2',
    sessionId: 4,
    question: 'You have sent a proposal. The prospect has read it but you have no bid defense meeting scheduled. What stage should this deal be in?',
    options: [
      'Stage 7: Awarded',
      'Stage 6: Submitted — with a critical warning flag',
      'Stage 5: Proposal in Preparation',
      'This should not happen — never send without a confirmed bid defense meeting',
    ],
    correctIndex: 3,
    explanation:
      'The non-negotiable rule: before you send the proposal, confirm "When can we walk through this together?" If they will not commit to a review meeting, do not send the proposal. This is how proposals get ghosted.',
  },
  {
    id: 'q4-3',
    sessionId: 4,
    question: 'A prospect says: "We\'re committed to our CRO." What is the correct prevention tactic for this Stall 2?',
    options: [
      'Argue that their CRO is not providing adequate PV services',
      'Accept the objection and close the deal as Lost',
      'Reframe as complementary: "We work alongside CROs routinely — this is not either/or." Then ask about CRO contract renewal.',
      'Offer a discount to make switching more attractive',
    ],
    correctIndex: 2,
    explanation:
      'Stall 2 prevention: reframe as complementary, not competing. Position NextPV as working alongside the CRO. Ask about the CRO contract renewal date — the renewal window is a natural re-entry point.',
  },
  {
    id: 'q4-4',
    sessionId: 4,
    question: 'What is "stage inflation" and why is it dangerous?',
    options: [
      'Overcharging for services in the proposal stage',
      'Moving a deal forward in the pipeline because the conversation went well — not because exit criteria were met',
      'Having too many deals in one pipeline stage',
      'Spending too much time on Stage 1 leads',
    ],
    correctIndex: 1,
    explanation:
      'Stage inflation = moving a deal forward based on good feelings, not evidence. It leads to missed forecasts and wasted proposals. Deals advance only when the buyer has said or done something specific that meets the exit criteria.',
  },

  // Session 5
  {
    id: 'q5-1',
    sessionId: 5,
    question: 'In the FAB framework, what must the Benefit always use?',
    options: [
      'Industry standard terminology',
      'NextPV official messaging from the capabilities deck',
      "The prospect's own language from discovery",
      'A quantified ROI figure',
    ],
    correctIndex: 2,
    explanation:
      'Rule 2 of FAB: The Benefit must use their language. If they said "audit exposure," your Benefit must address audit exposure — not "compliance risk" or "operational efficiency," even if those are synonyms.',
  },
  {
    id: 'q5-2',
    sessionId: 5,
    question: 'What does the "A" (second A) in LARA stand for?',
    options: ['Argue', 'Align', 'Ask', 'Acknowledge'],
    correctIndex: 2,
    explanation:
      'LARA = Listen, Acknowledge, Respond, Ask. The final step — Ask — is confirming that you addressed their concern: "Does that answer the question about cost?" Never assume your response landed.',
  },
  {
    id: 'q5-3',
    sessionId: 5,
    question: 'A prospect says "It\'s too expensive." You respond: "Our price is very competitive in the market." What mistake have you made?',
    options: [
      'You should have asked for a discount first',
      'You made an assertion the prospect has no reason to believe — defending instead of reframing',
      'You should have immediately sent a cost comparison spreadsheet',
      'Nothing — this is the correct LARA response',
    ],
    correctIndex: 1,
    explanation:
      'This is defending with assertion. The LARA approach: Acknowledge the concern, then Respond by reframing what the price includes and what the alternative actually costs. Ask "Does that change how you\'re looking at the comparison?"',
  },
  {
    id: 'q5-4',
    sessionId: 5,
    question: 'What does it mean that "the best objection handling happens in discovery"?',
    options: [
      'You should prepare LARA responses before the discovery call',
      'If you build strong implications and get the prospect to articulate their own need, most objections will never arise',
      'Discovery calls are the best time to raise and dismiss objections',
      'You should ask about potential objections during SPIN questioning',
    ],
    correctIndex: 1,
    explanation:
      'Objections are usually a signal that discovery was incomplete. When a prospect has fully articulated their own need through Need-Payoff questioning, they have already sold themselves. Objections arise when they haven\'t fully processed the value.',
  },

  // Session 6
  {
    id: 'q6-1',
    sessionId: 6,
    question: 'What is the purpose of a "break-up email" (Touch 6 in the outreach sequence)?',
    options: [
      'To permanently end the business relationship',
      'To clearly close the sequence and often generate responses from people who were reading but not replying',
      'To apologize for sending too many emails',
      'To offer a final discount to convert the prospect',
    ],
    correctIndex: 1,
    explanation:
      '"Let me know if this is off the table so I stop sending emails." This often generates responses from people who were reading but not replying. Ambiguity is worse than clarity — break-up emails create a decision point.',
  },
  {
    id: 'q6-2',
    sessionId: 6,
    question: 'Which of these is a valid "trigger event" for personalizing an outreach message?',
    options: [
      'The prospect\'s company was founded more than 5 years ago',
      'The prospect has more than 500 LinkedIn connections',
      'The prospect just announced Phase III initiation',
      'The prospect\'s industry is growing',
    ],
    correctIndex: 2,
    explanation:
      'Trigger events are timely, specific signals: funding announcements, Phase milestones, EMA/FDA approvals, executive changes, conference speaking roles. "Phase III initiation" is a high-value trigger that creates natural urgency around PV readiness.',
  },
  {
    id: 'q6-3',
    sessionId: 6,
    question: 'A prospect at a conference says "Send me your capabilities deck." What is the correct response?',
    options: [
      'Promise to email the full capabilities deck that evening',
      'Acknowledge, ask what specific topic interests them most, then secure a follow-up call commitment',
      'Decline and insist on a formal discovery call instead',
      'Send the capabilities deck with a generic cover note',
    ],
    correctIndex: 1,
    explanation:
      'Apply the "Just Send Me Information" LARA response: Acknowledge, then ask "To make sure I send you relevant material, what\'s your specific interest: gap analysis, medical writing, QPPV, or something else?" Then ask "When would be a good time to check in after you\'ve reviewed it?" Never send into a void.',
  },
  {
    id: 'q6-4',
    sessionId: 6,
    question: 'What is the NextPV benchmark for email response rate from first outreach messages?',
    options: ['1–2%', '5–8%', '15–20%', '25–30%'],
    correctIndex: 1,
    explanation:
      'The NextPV benchmark is 5–8% response rate from first outreach messages. Email open rate benchmark is 20–27%. Tracking these numbers monthly helps you identify what is working in your outreach.',
  },
];
