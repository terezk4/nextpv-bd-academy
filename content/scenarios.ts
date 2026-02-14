import type { Scenario } from '@/lib/types';

export const scenarios: Scenario[] = [
  {
    id: 'scenario-1',
    sessionId: 1,
    title: 'The Feature-Dump Opening',
    situation:
      'You are on a first call with a Head of PV at a mid-stage biotech. You have introduced yourself and it\'s your turn to open the conversation. What do you say?',
    options: [
      {
        text: '"Great to connect! NextPV offers QPPV services, medical writing, gap analysis, audit support, and database implementation. We have a strong track record in the biotech space. Would any of these be relevant to you?"',
        isIdeal: false,
        feedback:
          '❌ This is the feature-dump trap. You are explaining what you sell before understanding what they need. Experienced buyers hear this and translate it as "this salesperson doesn\'t understand my situation." This approach will cause them to disengage.',
      },
      {
        text: '"Before I tell you anything about NextPV, I\'d like to understand your situation. Can you walk me through how you\'re currently managing PV — and specifically, what\'s working well and where you\'re feeling pressure?"',
        isIdeal: true,
        feedback:
          '✅ This is the correct approach. You open with a discovery-first mindset, explicitly signal that you want to understand before telling, and ask an open-ended question that invites them to share problems. This immediately positions you as an advisor, not a vendor.',
      },
      {
        text: '"I\'ve done some research on your company and I think we can help. Let me walk you through our three key service areas and then we can discuss fit."',
        isIdeal: false,
        feedback:
          '❌ Better than the first option, but still wrong. Starting with "let me walk you through our services" is still pitching before discovering. The research mention is good, but it needs to be turned into a discovery question, not a launch pad for your pitch.',
      },
    ],
  },
  {
    id: 'scenario-2',
    sessionId: 2,
    title: 'Phase Misread',
    situation:
      'A prospect says: "We\'ve already spoken to two other providers and we\'re looking to make a decision in the next month. We\'re comparing options." You respond with a long explanation of NextPV\'s services and history. What happens?',
    options: [
      {
        text: 'Continue with the service explanation — they need to understand all options before deciding.',
        isIdeal: false,
        feedback:
          '❌ This prospect is in Phase 2 (Consideration). They already understand the problem and are evaluating vendors. A long service explanation treats them like a Phase 1 buyer who needs education. They have enough information to be skeptical. You need specifics and differentiation, not a general overview.',
      },
      {
        text: 'Switch to SPIN discovery to understand their evaluation criteria, then present specific evidence (inspection track record, case examples) aligned to what they told you.',
        isIdeal: true,
        feedback:
          '✅ Exactly right. A Phase 2 buyer needs: (1) clear differentiation, (2) specific proof, not broad claims. Run SPIN to understand their criteria: "What are you evaluating providers on?" Then anchor your response to specific evidence: case studies, inspection record, client references.',
      },
      {
        text: 'Ask them to choose you now by offering a discount to close the deal before they compare further.',
        isIdeal: false,
        feedback:
          '❌ Never lead with price reduction as a closing tactic. This devalues your service before you\'ve demonstrated the value. A Phase 2 buyer comparing options needs to see differentiation — not a desperate discount.',
      },
    ],
  },
  {
    id: 'scenario-3',
    sessionId: 3,
    title: 'The Premature Solution',
    situation:
      'You are in a SPIN discovery call. The prospect says: "Inspection readiness is something that worries us — we had a minor finding last time." What do you do next?',
    options: [
      {
        text: '"We can definitely help with that. Our team has 100% inspection success and zero critical findings. Let me explain how our gap analysis works..."',
        isIdeal: false,
        feedback:
          '❌ You jumped to solution at the first pain signal. You have heard a problem but skipped Implication entirely. You don\'t know what the finding was, how it affected them, what it cost, what they\'re worried about for next time. Your "we can help" rings hollow because you haven\'t earned the right to present yet.',
      },
      {
        text: '"Tell me more about that finding — what was it related to, and what has the impact been on your team since?"',
        isIdeal: true,
        feedback:
          '✅ This is a Problem follow-up that deepens your understanding before moving to Implication. You are staying in discovery mode, following the thread they gave you. From here you would ask: "When is your next inspection?" (timeline) → "What would another finding mean for your regulatory standing?" (Implication) → "What would bulletproof inspection readiness let you stop worrying about?" (Need-Payoff).',
      },
      {
        text: '"I understand. What budget range are you working with for inspection preparation?"',
        isIdeal: false,
        feedback:
          '❌ Jumping to budget at the first pain signal is a Stage 3 question asked too early. You have not built the value, not completed Implication, not let them articulate their own need. Asking about budget now will feel transactional and will shut down discovery.',
      },
    ],
  },
  {
    id: 'scenario-4',
    sessionId: 4,
    title: 'The No-Proposal Rule',
    situation:
      'Your prospect has told you they want a proposal. You have completed discovery and documented their explicit needs. They say "Just email it over when it\'s ready and we\'ll review internally." How do you respond?',
    options: [
      {
        text: 'Send the proposal as requested — they are busy and you don\'t want to create friction.',
        isIdeal: false,
        feedback:
          '❌ This is exactly how proposals get ghosted. A proposal sent without a confirmed bid defense meeting will go into an internal review process you are not part of. Someone else will frame it, evaluate it without your input, and you have no way to address questions or objections in real time.',
      },
      {
        text: '"Absolutely — I\'ll prepare it carefully. Before I send it, can we agree on a 30-minute call to walk through it together? The proposal will be much more valuable if I can walk you through the logic and answer questions in real time. When can we schedule that?"',
        isIdeal: true,
        feedback:
          '✅ This is the non-negotiable rule: before you send the proposal, get a bid defense meeting on the calendar. You frame it as adding value (walking through the logic, answering questions) not as a sales tactic. If they refuse to schedule a review meeting, that is a signal — and the response is: "Let me refine this based on what I might be missing, and reach back out next week with a tighter version. Then we can find time to review together."',
      },
      {
        text: '"I\'ll send it over and then follow up in a week if I haven\'t heard back."',
        isIdeal: false,
        feedback:
          '❌ This is "send and pray." You have no confirmed commitment. The follow-up a week later puts you in a weak position — chasing a prospect who may have moved on. Always secure the bid defense commitment before the proposal leaves your hands.',
      },
    ],
  },
  {
    id: 'scenario-5',
    sessionId: 5,
    title: 'Handling "It\'s Too Expensive"',
    situation:
      'You have presented a EUR 45,000 engagement proposal. The prospect says: "Your price is significantly higher than the other proposal we received. We\'re not sure the premium is justified." How do you respond?',
    options: [
      {
        text: '"I understand — our pricing reflects the quality and expertise we bring. Let me see what I can do on the cost."',
        isIdeal: false,
        feedback:
          '❌ This response combines an unsubstantiated assertion ("quality and expertise") with an offer to discount before understanding the concern. You have not used LARA. You have not acknowledged properly, you have not responded with reframing, and jumping to discounting weakens your position before the prospect has even explained the real concern.',
      },
      {
        text: '"Cost is always worth examining carefully — I appreciate you raising it directly. What are you comparing this to specifically? When we account for the hidden costs in CRO-bundled PV — coordination overhead, data consolidation work before MAA, inspection risk — the comparison often looks quite different. Does that change how you\'re looking at the comparison?"',
        isIdeal: true,
        feedback:
          '✅ This is LARA in action. Listen (you did). Acknowledge: "Cost is always worth examining carefully — I appreciate you raising it directly." Respond: Reframe what the price includes and what the alternative actually costs (not defending the price). Ask: "Does that change how you\'re looking at the comparison?" You are inviting them to reconsider, not arguing.',
      },
      {
        text: '"That\'s fair — let me go back to my team and see if we can match the other proposal\'s price."',
        isIdeal: false,
        feedback:
          '❌ Price-matching without understanding the concern is a race to the bottom. You don\'t know what the other proposal includes. You haven\'t explored whether cost is the real issue or a proxy for "I don\'t see enough differentiated value." Use LARA to understand the real concern first.',
      },
    ],
  },
  {
    id: 'scenario-6',
    sessionId: 6,
    title: 'Conference Closing',
    situation:
      'You are at a pharma conference. You\'ve had a 5-minute conversation with a CMO of a Series B biotech. They have expressed interest in EU PV readiness. The conversation is naturally wrapping up. What do you say?',
    options: [
      {
        text: '"Here\'s my card. Feel free to reach out if you want to talk more. I\'ll connect with you on LinkedIn."',
        isIdeal: false,
        feedback:
          '❌ This is a missed opportunity. You are leaving the next step entirely to them. Most prospects will not follow up — they are busy and you are not top of mind after the conference. "Feel free to reach out" is not a CTA. You have not secured any commitment.',
      },
      {
        text: '"It sounds like EU PV readiness is a live concern for you. Before we wrap up — can we find 15 minutes before the end of the conference? Or if that doesn\'t work, let me get your email and I\'ll send you one specific resource on early GVP readiness, and we can schedule a 30-minute call next week. Which works better?"',
        isIdeal: true,
        feedback:
          '✅ This is the high-priority conference close. You recap their concern (EU PV readiness), offer two specific options (both include a real next step), and ask which works better. You are not leaving the decision to them — you are proposing concrete paths. The "specific resource" sets up a follow-up with a built-in reason to connect.',
      },
      {
        text: '"Great talking to you! I\'ll send you our full capabilities deck and proposal template so you can see what we offer. Happy to jump on a call whenever you\'re ready."',
        isIdeal: false,
        feedback:
          '❌ Sending a full capabilities deck and a proposal template to someone you just met for 5 minutes is too much too soon. It is also generic. And "whenever you\'re ready" is not a specific CTA — it leaves the timing entirely to them. Send one specific resource. Name one specific time. One ask.',
      },
    ],
  },
];
