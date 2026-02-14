import type { Session } from '@/lib/types';

export const sessions: Session[] = [
  {
    id: 1,
    title: 'Principles of Selling + BD Mindset at NextPV',
    duration: 90,
    prerequisite: 'None — this is the entry point.',
    objective:
      'By the end of this session you can run a value-first conversation without feature-dumping and can articulate why discovery comes before telling.',
    sections: [
      {
        id: 's1-what-bd-is',
        type: 'text',
        heading: 'What BD Is Really Responsible For',
        content:
          'Most people assume sales is about explaining what you sell. Wrong. Sales is about **qualified progression** — moving a prospect through a buying journey only when evidence justifies advancement.\n\nYour job is NOT:\n- To get meetings\n- To explain features\n- To send proposals\n\nYour job IS:\n- To understand whether this prospect can actually benefit from NextPV (qualification)\n- To help them see their own problem more clearly (discovery)\n- To position yourself as the logical solution only after they have named what they need (trust-building)\n\n**The mental shift: Ask first. Teach second. Tell third.**',
      },
      {
        id: 's1-principle-1',
        type: 'text',
        heading: 'Principle 1: Discovery Before Pitch',
        content:
          'The most common failure mode for new BD reps: opening with "here\'s what we do." Experienced buyers hear this and translate it as "this salesperson doesn\'t understand my situation." They shut down.\n\nInstead: "Before I tell you anything about NextPV, I\'d like to understand your current situation. Can you walk me through how you\'re managing PV right now?"\n\n**Why this matters at NextPV:** Your services range from EUR 5,400 to 10x that amount. A rep who pitches before discovering will almost always pitch the wrong scope, at the wrong time, to the wrong person. A rep who discovers first can match scope precisely to need.',
      },
      {
        id: 's1-principle-2',
        type: 'text',
        heading: 'Principle 2: Teach/Challenge Before Pitch',
        content:
          'After you understand the situation, introduce a teachable moment — a piece of insight that reframes their problem before you suggest a solution.\n\n**Example:** "One thing we see consistently with companies at your stage is that CRO-bundled PV looks cheaper on paper but creates a data consolidation problem before MAA that costs significantly more to fix than to prevent. Has that come up in your planning?"\n\nThis is not a pitch. It ends with a question. You are creating curiosity, not making a claim.\n\n**Why this matters:** Teaching moments position you as an advisor, not a vendor. They shift power dynamics before you need to close anything.',
      },
      {
        id: 's1-principle-3',
        type: 'text',
        heading: 'Principle 3: One Clear CTA Per Touchpoint',
        content:
          'Every outreach email, every call, every follow-up — one ask. Not "let me know if you\'d like to learn more or schedule a call or connect on LinkedIn." One specific thing.\n\n❌ Bad CTA: "Let me know if you\'re interested."\n✅ Good CTA: "Can we schedule 30 minutes next Tuesday afternoon to explore this?"\n\n**Why this matters:** Multiple CTAs paralyze buyers. One clear ask increases response quality and reply rate.',
      },
      {
        id: 's1-principle-4',
        type: 'text',
        heading: 'Principle 4: Trust Language, Not Hype Language',
        content:
          '❌ Hype language: "We\'re the best PV provider in Europe."\n✅ Trust language: "We\'ve supported 100% inspection success across our client base — zero critical findings in three years."\n\nTrust language is specific, measurable, and grounded in client experience.',
      },
      {
        id: 's1-pillars',
        type: 'text',
        heading: 'Positioning Pillars as Conversation Anchors',
        content:
          'NextPV has three positioning pillars. These are conversation anchors, not a feature list:\n\n1. **Partnership** — We solve complex problems alongside clients, not as a task executor\n2. **Innovation** — We implement and optimize advanced PV tools that save clients time and money\n3. **Trust** — We handle routine PV tasks with expertise and stay inspection-ready\n\nWhen you discover a problem that relates to one of these pillars, this becomes your "why NextPV" without you having to say it.\n\n**Example:** Prospect says "Our biggest problem is coordination overhead with multiple vendors." → Partnership problem. Response: "One thing we do differently is consolidate PV operations under one team and one contract. That typically reduces your administrative burden by 40% and lets your team focus on actual PV strategy."',
      },
      {
        id: 's1-what-to-say',
        type: 'table',
        heading: 'What To Say / Ask / Why / When',
        content: '',
        tableData: {
          headers: ['What to Say', 'What to Ask', 'Why', 'When'],
          rows: [
            [
              '"Before I tell you what we do, help me understand your situation."',
              '"What is the single biggest risk in your current PV setup?"',
              'Shifts you from vendor mode to advisor mode.',
              'First call, first serious conversation.',
            ],
            [
              '"One thing I\'ve seen with companies like yours..."',
              '"Has that concern come up in your planning?"',
              'Establishes credibility and opens their thinking.',
              'After Situation, before diving into problems.',
            ],
            [
              '"Based on what you\'ve described, I see two priorities..."',
              '"Does that match how you\'re thinking about it?"',
              'Confirms understanding before proposing anything.',
              'Late discovery, moving toward next steps.',
            ],
            [
              '"If you\'d find it useful, I can send one specific resource."',
              '"What\'s the top priority for you right now?"',
              'Improves relevance and speeds qualification.',
              'Outreach, conference follow-up.',
            ],
          ],
        },
      },
    ],
    mistakes: [
      '**Answering your own questions.** "What challenges are you facing with PV? Because what we often see is [list of problems]..." This is a monologue disguised as a question. Ask and wait.',
      '**Jumping to solution at the first pain signal.** Prospect says "inspection readiness worries me" and you immediately say "we can help with that." Stop. Ask what that worry looks like first.',
      '**Treating the conversation as a form to fill out.** You rush through discovery collecting data points. Real discovery is a conversation, not a data-collection exercise.',
      '**Hype language in first conversations.** "We\'re the best," "industry-leading" without specifics. These claims make you sound like every other vendor. Specific beats impressive.',
    ],
    resources: [
      { title: 'Master BD Document v2, Chapter 2.5', description: 'Three Pillars of UVP (Partnership, Innovation, Trust)' },
      { title: 'Master BD Document v2, Chapter 2.7', description: 'Positioning Statements (how to articulate value in conversation)' },
      { title: 'Sales Playbook v1, Chapter 1.1', description: 'Core Philosophy (ask first, teach second, tell third)' },
      { title: 'Sales Playbook v1, Chapter 6.2', description: 'Power Phrases (language toolkit)' },
    ],
  },
  {
    id: 2,
    title: 'Customer/Buyer Journey + Stakeholder Navigation',
    duration: 90,
    prerequisite: 'Session 1 completed. You understand the discovery mindset.',
    objective:
      'By the end of this session you can map where a buyer is in their decision journey and adjust messaging, questions, and next steps accordingly — and can identify multiple stakeholders before proposing.',
    sections: [
      {
        id: 's2-timing',
        type: 'text',
        heading: 'Your Timing Is As Important As Your Message',
        content:
          'The best message at the wrong time is a failed message. A prospect who has not decided they have a problem does not need to hear about your solution. A prospect already evaluating three vendors does not need an educational overview.\n\nYour job changes depending on where they are in their journey. Getting this wrong wastes both of your time and damages trust.',
      },
      {
        id: 's2-phase1',
        type: 'text',
        heading: 'Phase 1: Awareness / Problem Recognition',
        content:
          '**What\'s happening:** They sense something is not quite right, but have not framed it as a solvable problem yet.\n\n**What you hear:** "Things are fine, mostly." "We\'ve talked about updating our PV setup." "I\'ve been meaning to look at this."\n\n**What they need from you:** A perspective that sharpens the problem. A teaching moment, not a pitch.\n\n**Your move:** Insert a Challenger insight. "Most companies at your stage are unaware that 70–75% of EMA submissions receive questions specifically about PV systems. Does that match your understanding of the risk you\'re carrying?"\n\n**Mistake to avoid:** Sending a capabilities deck. They are not ready. You will kill the conversation.',
      },
      {
        id: 's2-phase2',
        type: 'text',
        heading: 'Phase 2: Consideration / Options Evaluation',
        content:
          '**What\'s happening:** They have acknowledged the problem. They are now exploring whether to solve it, how to solve it, and with whom.\n\n**What you hear:** Specific questions about your service. Requests for pricing. Mentions of other providers. "We are comparing options."\n\n**What they need from you:** Clear differentiation and proof. Specific evidence: case examples, numbers from real engagements, inspection track record.\n\n**Your move:** Complete full SPIN discovery (Session 3). Build a champion inside the organization. Map the buying committee. Avoid sending a proposal before you have done this.\n\n**Mistake to avoid:** Treating them like Phase 1. They are ready for depth. Give them substance.',
      },
      {
        id: 's2-phase3',
        type: 'text',
        heading: 'Phase 3: Decision / Vendor Selection',
        content:
          '**What\'s happening:** They have selected a short list or already chosen a preferred vendor. They are now building the internal case to get approval.\n\n**What you hear:** "We would like to move forward." Requests for formal proposals, references, legal terms. "Can you get us something we can take to the CMO/CFO?"\n\n**What they need from you:** A proposal that speaks their language (uses their stated priorities and their words), social proof, and a smooth path to yes.\n\n**Your move:** Proposal framing, bid defense execution, reference provision. Do not re-open discovery at this stage. Tighten and close.\n\n**Mistake to avoid:** Asking new discovery questions or re-explaining services. Move to proof and agreement.',
      },
      {
        id: 's2-phase4',
        type: 'text',
        heading: 'Phase 4: Implementation / Post-Decision',
        content:
          '**What\'s happening:** They have decided. Contract is signed or being finalized.\n\n**What you hear:** "When can we start?" "Who will be our main contact?"\n\n**What they need from you:** Confidence that nothing will fall through. Clean handoff to delivery.\n\n**Your move:** Formal handoff to delivery team with all discovery documentation. Define success metrics together. A poor handoff damages the relationship you built.',
      },
      {
        id: 's2-multithreading',
        type: 'text',
        heading: 'Multi-Threading: Never Single-Thread a Deal',
        content:
          'Single-threading = having one contact in a deal. This is a high-risk position:\n- If your contact goes on leave, changes jobs, or loses internal support, the deal disappears\n- You have no visibility into internal politics or competing priorities\n- Budget/timeline decisions may be made without you in the room\n\n**Rule: Always expand to at least two stakeholders before you propose anything.**\n\n**Stakeholder roles:**\n- **Decision Maker (authority):** Has budget approval; often CMO or CFO. You must meet this person before proposal.\n- **Validator (technical):** Will use the service; often Head of PV. Usually the first contact.\n- **Influencer (supporter):** Does not have authority but has credibility; advocates for you internally.\n- **Blocker (risk/concern):** Raises objections; often Procurement or IT. Engage early to understand their criteria.',
      },
      {
        id: 's2-entry-points',
        type: 'table',
        heading: 'Choosing First Stakeholder by Context',
        content: '',
        tableData: {
          headers: ['Situation', 'Start With'],
          rows: [
            ['Early-stage biotech, no Head of PV yet', 'CEO or CMO (decision-maker access)'],
            ['Established company, Head of PV in place', 'Head of PV (technical validator)'],
            ['Cost reduction initiative underway', 'CFO or Finance (economic buyer)'],
            ['MAA submission upcoming', 'Head of Regulatory Affairs (urgency driver)'],
            ['Inspection coming or findings received', 'CMO (career risk, will prioritize)'],
          ],
        },
      },
      {
        id: 's2-what-to-say',
        type: 'table',
        heading: 'What To Say / Ask / Why / When',
        content: '',
        tableData: {
          headers: ['What to Say', 'What to Ask', 'Why', 'When'],
          rows: [
            [
              '"To make this useful, can we align on where you are in your decision process today?"',
              '"Who besides you will be involved in evaluating this?"',
              'Prevents late-stage surprises. Multi-threads the deal.',
              'First discovery and always before proposal.',
            ],
            [
              '"It sounds like you\'re comparing a few options."',
              '"What criteria are most important to you in making the choice?"',
              'Reveals their evaluation framework.',
              'Phase 2, Consideration.',
            ],
            [
              '"Based on what you shared, I see two priorities..."',
              '"What would need to be true for this to feel like the right next step?"',
              'Confirms alignment. Surfaces hidden objections.',
              'Late discovery, moving to proposal.',
            ],
            [
              '"Let me make sure I understand the approvals process."',
              '"Who specifically needs to sign off, and in what order?"',
              'Maps decision authority. Prevents surprises.',
              'Before proposing.',
            ],
          ],
        },
      },
    ],
    mistakes: [
      '**Treating all buyer phases the same.** You cannot run the same conversation with a Phase 1 and a Phase 3 buyer. Phase 1 needs education + urgency building. Phase 3 needs confidence + proof.',
      '**Single-threading.** You have one contact who loves the idea, but they cannot get CMO alignment. Deal stalls. You have now invested time in a deal you cannot close without their champion.',
      '**Asking Phase 3 questions to Phase 1 buyers.** "What\'s your budget?" asked to someone who hasn\'t decided they have a problem will make them feel pressured and end the conversation.',
      '**Assuming same phase across the buying committee.** The CMO and Head of PV at the same company may be in completely different phases. Map each contact individually.',
    ],
    resources: [
      { title: 'Sales Process Guide v2, Chapter 2', description: 'Buyer Journey & Sales Process Alignment' },
      { title: 'Sales Process Guide v2, Chapter 6.3', description: 'Relationship Mapping Template' },
      { title: 'Decision Trees v1, Chapter 3', description: 'Stakeholder Entry Point Tree' },
      { title: 'Master BD Document v2, Chapter 3.2', description: 'Target Decision Makers (by company type)' },
    ],
  },
  {
    id: 3,
    title: 'Discovery Mastery (SPIN + Challenger)',
    duration: 120,
    prerequisite: 'Sessions 1 & 2 completed. You understand discovery mindset and buyer phases.',
    objective:
      'By the end of this session you can lead a full discovery conversation using SPIN, insert a Challenger teaching moment in the right place, and produce at least one explicit need documented verbatim.',
    sections: [
      {
        id: 's3-diagnose',
        type: 'text',
        heading: 'Diagnose Before Prescribing',
        content:
          'Discovery is not a fact-finding mission. It is a diagnostic conversation where you:\n1. Understand their current state (Situation)\n2. Uncover problems they may not have fully articulated (Problem)\n3. Connect those problems to costs/consequences (Implication)\n4. Guide them to name what they need (Need-Payoff)\n\nThe difference between successful and unsuccessful discovery: **successful reps spend time in Implication.** They ask "what happens if this continues?" until the prospect feels the weight of the problem. Unsuccessful reps rush through Problem to Solution.',
      },
      {
        id: 's3-situation',
        type: 'text',
        heading: 'S — Situation Questions (1–2 maximum)',
        content:
          '**Purpose:** Get the context you need. Nothing more. Do not linger here.\n\n**Warning sign:** You have asked three Situation questions and the prospect is still describing their company. Move on.\n\n**Examples:**\n- "Can you walk me through your current PV setup?"\n- "Who is currently managing your safety function?"\n- "How many products are you monitoring and across which regions?"\n\n❌ **Low value:** "How long has your company been in pharma?" (Nice to know, not actionable)\n✅ **High value:** "Walk me through how you currently handle the handoff between your CRO and your safety database." (Sets up Problem questions)',
      },
      {
        id: 's3-challenger',
        type: 'text',
        heading: 'Challenger Insert (Between Situation and Problem)',
        content:
          '**Purpose:** Plant a teaching moment that reframes their situation before you ask Problem questions.\n\n**Example:** "That\'s helpful context. One thing we see consistently with companies at your stage is that CRO-bundled PV looks cheaper on paper but creates a data consolidation problem before MAA that costs significantly more to fix than to prevent. Has that come up in your planning at all?"\n\n**Why this works:**\n1. Shows you have seen similar situations (advisor posture)\n2. Reframes cost (from CRO price to total cost of ownership)\n3. Opens their mind to a different possibility\n4. Ends with a question, so you keep control of discovery\n\n**The Challenger insert should:**\n- Be one specific insight, not a list\n- Connect to a genuine pain or risk\n- End with a question that invites reflection\n- Take 30–45 seconds',
      },
      {
        id: 's3-problem',
        type: 'text',
        heading: 'P — Problem Questions (The Core of Discovery)',
        content:
          '**Purpose:** Understand specifically what is not working. Get the prospect talking about it in their own words.\n\nStay here longer than feels comfortable. The depth of your Problem understanding is the ceiling of your Implication effectiveness.\n\n**Examples:**\n- "What is the most frustrating part of managing PV right now?"\n- "When was your last inspection, and how did that go?"\n- "Where do you feel most exposed from a compliance standpoint?"\n\n**High-value Problem questions:**\n- Are open-ended (not yes/no)\n- Ask about the negative (frustration, exposure, delay)\n- Follow the thread the prospect gives you, not your checklist\n\n**The discipline:** Ask a Problem question, listen fully, and ask a follow-up on what they said — not your next planned question.',
      },
      {
        id: 's3-implication',
        type: 'text',
        heading: 'I — Implication Questions (Where Urgency Lives)',
        content:
          '**Purpose:** Connect the problem to its real consequences. The prospect named a problem — now explore what that problem is costing them.\n\n**Critical rule: The implication must come from them, not from you.**\n\n❌ Bad: "That must be creating timeline risk." (You asserting)\n✅ Good: "What happens to your launch timeline when that occurs?" (You asking)\n\n**Examples:**\n- "What happens to your MAA timeline if inspection preparation takes longer than expected?"\n- "If there is a finding in the inspection, what does that typically cost you — direct and indirect?"\n- "What is the downstream effect on your Phase 3 planning if database setup is delayed?"\n\n**The discipline:** Ask the Implication question, then deepen it:\n- Q: "What happens to your MAA timeline if this drags out?"\n- A: "We\'d probably miss our launch window by a quarter."\n- Follow-up: "What would that mean for your fundraising and investor expectations?"',
      },
      {
        id: 's3-needpayoff',
        type: 'text',
        heading: 'N — Need-Payoff Questions (Let Them Sell Themselves)',
        content:
          '**Purpose:** Guide the prospect to state, in their own words, what a good outcome looks like.\n\nThis is the moment they sell themselves. When they say "what I really need is X," and you later show them X, the connection is made by them, not by you.\n\n**Examples:**\n- "If you could solve the vendor coordination problem, what would that free your team to focus on?"\n- "What would an ideal PV partner look like to you — practically speaking, day to day?"\n- "What would it mean for your programme if you went into MAA with all your EU infrastructure already in place?"\n\n**Use their language:** If they said "inspection readiness worries me," ask:\n"If you had bulletproof inspection readiness, what would that let you stop worrying about?"\n\n**The critical stop:** Do not begin presenting until you have completed Need-Payoff and the prospect has explicitly named what they need. This is the gate between discovery and presentation.',
      },
      {
        id: 's3-architecture',
        type: 'text',
        heading: 'Discovery Call Architecture',
        content:
          '**Opening Phase (First 2 minutes) — Chairman Script:**\n"Hi [Name], I\'m [Your name] from NextPV. To make the most of our time — I\'d like to start with a brief introduction, then spend most of the call understanding your situation and needs, and we\'ll leave the last few minutes to discuss whether and how we might be relevant. Does that agenda work for you?"\n\n**Discovery Phase (Minutes 3–20):**\n1. Situation (1–2 questions, 2–3 min)\n2. Challenger insert (1 teaching moment, 45 sec)\n3. Problem (5–7 min, multiple follow-ups)\n4. Implication (4–5 min, deepen the consequences)\n5. Need-Payoff (2–3 min, let them articulate)\n\n**Closing Phase (Last 5 minutes):**\n- Trial close: "How does this approach align with what you\'re working on?"\n- Process close: "What would need to happen for us to move forward?"\n- Specific next step: "I suggest we schedule a 45-minute deep-dive next Tuesday. Does morning or afternoon work better?"',
      },
    ],
    mistakes: [
      '**Treating SPIN as a linear script.** Real conversations branch. Stay in the moment, not in the framework.',
      '**Spending too long in Situation.** You have asked three Situation questions. Move on. You have enough context.',
      '**Rushing through Problem.** This is the most valuable phase. Slow down. Ask follow-ups. The depth you achieve here is the ceiling of your Implication effectiveness.',
      '**Asserting Implications instead of asking.** "That must be creating timeline risk" (you asserting). Instead: "What happens to your timeline if this continues?" (them discovering).',
      '**Presenting before explicit need.** The prospect seems engaged, so you start talking about your services. But they have not yet named what they need. Your presentation will miss the target.',
      '**Forgetting to document the explicit need.** Discovery happened, but you did not write down what they said. Your proposal lacks anchor.',
    ],
    resources: [
      { title: 'Sales Playbook v1, Chapter 2.1', description: 'Opening Phase (First 2 minutes + Chairman Script)' },
      { title: 'Sales Playbook v1, Chapter 2.2', description: 'SPIN Discovery Framework (full with examples)' },
      { title: 'Sales Playbook v1, Chapter 2.4', description: 'Closing Phase (securing next step)' },
      { title: 'Master BD Document v2, Chapter 6.2', description: 'SPIN Framework (NextPV-specific examples)' },
      { title: 'Master BD Document v2, Chapter 6.3', description: 'Challenger Approach (teaching moments by tier)' },
      { title: 'Discovery Scripts (Document 6), DISCOVERY TREE', description: 'Branch routing for different prospect types' },
    ],
  },
  {
    id: 4,
    title: 'Qualification + Sales Process Control',
    duration: 90,
    prerequisite: 'Sessions 1–3 completed. You can run a discovery call and have documented explicit needs.',
    objective:
      'By the end of this session you can correctly assign deals to pipeline stages, identify when a deal is stalling, apply a specific prevention tactic, and explain why "no proposal without bid defense commitment" is a non-negotiable rule.',
    sections: [
      {
        id: 's4-pipeline-concept',
        type: 'text',
        heading: 'A Deal Is Not a Conversation. It Is a Process.',
        content:
          'A common error for new salespeople: treating the pipeline as a filing system. The pipeline is a management tool for what happens next.\n\nEvery deal lives at a specific stage. That stage is not determined by time elapsed or by gut feel. It is determined by **what the buyer has said and done**. Each stage has exit criteria — specific evidence that the deal is genuinely ready to advance.\n\nMoving a deal forward without that evidence is not optimism. It is self-deception that will show up as a missed forecast and a wasted proposal.',
      },
      {
        id: 's4-stages',
        type: 'text',
        heading: 'The 8-Stage Pipeline',
        content:
          '**Stage 1 — Lead:** Initial contact made. Nothing confirmed about fit. Exit criteria: lead source documented, tier assigned, first outreach sent.\n\n**Stage 2 — Qualified (SQL):** Basic fit confirmed. Pre-call score ≥5. Discovery call on calendar.\n\n**Stage 3 — Discovery:** Full SPIN conversation completed. At least ONE explicit need documented verbatim in HubSpot. Post-call score ≥6. Bid defense meeting agreed.\n\n**Stage 4 — RFP Expected:** Commitment to receive a proposal. Win themes documented. Proposal draft started.\n\n**Stage 5 — Proposal in Preparation:** Actively writing proposal. Pricing approved. Bid defense presentation ready.\n\n**Stage 6 — Submitted:** Proposal delivered. Bid defense meeting confirmed on calendar. ⚠️ Critical rule: Never mark Stage 6 without a bid defense meeting scheduled.\n\n**Stage 7 — Awarded:** Verbal or written confirmation. Contract being drafted.\n\n**Stage 8 — Closed Won:** Contract signed. Formal handoff to delivery team.',
      },
      {
        id: 's4-winthemes',
        type: 'text',
        heading: "NextPV's Three Win Themes",
        content:
          'Choose 2–3 of these based on the prospect\'s explicit needs. Do not use all three.\n\n**1. Speed to EU Market**\n"Our clients typically gain 6+ months on EU timelines through proactive preparation."\nWhen to use: Tier 1A (biotech without EU presence), especially with MAA target under 18 months.\n\n**2. Inspection Readiness**\n"Our DIA-certified team has never contributed to a finding in client inspections."\nWhen to use: Tier 1B (has EU presence), especially if inspection is imminent or they had findings.\n\n**3. Cost Efficiency**\n"We document 20–30% savings vs. CRO bundling."\nWhen to use: Tier 1A or Tier 2, especially if cost is the explicit need.',
      },
      {
        id: 's4-bant',
        type: 'text',
        heading: 'BANT+ Qualification',
        content:
          'During or after discovery, confirm these four elements before investing in proposal development.\n\n**B — Budget:** "To ensure our proposal aligns with your planning, what budget range are you working with for PV optimization?"\n\n**A — Authority:** "Who else would need to be involved in evaluating a new PV approach?"\n\n**N — Need:** "What\'s driving the timeline for addressing these PV challenges?"\n\n**T — Timeline:** "When would you ideally want a new solution in place?"\n\n**The + in BANT+:**\n- Has the buying committee been mapped? (Never single-thread a deal)\n- Is there a champion who can facilitate introductions to decision-makers?',
      },
      {
        id: 's4-stalls',
        type: 'text',
        heading: 'Stalling Prevention — Four Common Traps',
        content:
          '**Stall 1: "There is no urgency" (Stage 2)**\nRoot cause: The problem has not been made concrete.\nPrevention: During discovery, use stronger Implication questions. Ask what happens to their launch timeline, inspection risk, budget if the problem continues.\n\n**Stall 2: "We are committed to our CRO" (Stage 3)**\nRoot cause: The prospect perceives disruption risk as higher than the benefit.\nPrevention: Reframe as complementary. "We work alongside CROs routinely — this is not either/or." Then quantify: "When is your CRO contract renewal?"\n\n**Stall 3: "Our champion cannot get internal alignment" (Stage 4)**\nRoot cause: You are single-threaded.\nPrevention: Build the internal case for them. Offer executive briefing. Ask directly to be introduced to the economic buyer.\n\n**Stall 4: "Going dark after proposal submission" (Stage 6)**\nRoot cause: The internal decision has been made and it is not you, or your champion has lost momentum.\nPrevention: Before sending the proposal, get a specific decision timeline. Schedule the follow-up before you hit send. Send value-adds while waiting — not nudges.',
      },
      {
        id: 's4-what-to-say',
        type: 'table',
        heading: 'What To Say / Ask / Why / When',
        content: '',
        tableData: {
          headers: ['What to Say', 'What to Ask', 'Why', 'When'],
          rows: [
            [
              '"Before we discuss scope, I want to confirm timeline, stakeholders, and decision process."',
              '"Can you walk me through who else will need to be involved?"',
              'Maps buying committee. Prevents surprises.',
              'End of discovery, before proposal.',
            ],
            [
              '"I want to make sure we\'re solving for the right thing."',
              '"What would success look like in the first 90 days?"',
              'Confirms alignment on outcomes.',
              'Before proposing.',
            ],
            [
              '"Let me refine this based on what I might be missing."',
              '"When can we walk through the proposal together?"',
              'Secures bid defense commitment before sending.',
              'Stage 5–6 transition.',
            ],
            [
              '"It sounds like budget is a factor here."',
              '"If we could address the cost concern, would this move forward?"',
              'Clarifies whether cost is the real objection or a smokescreen.',
              'When objection arises.',
            ],
          ],
        },
      },
    ],
    mistakes: [
      '**Stage inflation.** Moving a deal to Stage 4 because the conversation went well, not because exit criteria were met. The most common form of self-deception in sales.',
      '**Forgetting the bid defense commitment.** Sending a proposal without a confirmed review meeting. This is explicitly described in the Sales Playbook as "how proposals get ghosted."',
      '**Single-threading.** Having one contact in a deal and calling it managed. If your one contact goes on leave, changes jobs, or loses internal support, the deal disappears.',
      '**Confusing deal activity with deal progress.** Sending emails and having pleasant conversations is activity. Progress means the buyer has said or done something that demonstrates real movement.',
    ],
    resources: [
      { title: 'Sales Playbook v1, Chapter 3', description: 'Qualification Checklist (BANT+)' },
      { title: 'Sales Playbook v1, Chapter 5.1', description: 'When to Propose (the no-proposal rule)' },
      { title: 'Sales Process Guide v2, Chapter 3', description: 'Stage-Gate Details (full exit criteria by stage)' },
      { title: 'Decision Trees v1, Chapter 1', description: 'Qualification Decision Tree' },
      { title: 'Master BD Document v2, Chapter 3.3', description: 'Scoring Framework' },
    ],
  },
  {
    id: 5,
    title: 'Value Messaging + Objection Handling',
    duration: 120,
    prerequisite: 'Sessions 1–4 completed. You can discover and qualify. Now learn to present value and handle pushback.',
    objective:
      'By the end of this session you can present value clearly using the FAB framework, handle common objections using LARA, and secure next steps without losing position.',
    sections: [
      {
        id: 's5-hierarchy',
        type: 'text',
        heading: 'Message Hierarchy — Problem First, Proof Last',
        content:
          'The structure of a value conversation is not "here is what we do." It is:\n\n1. **Problem:** Recap what they told you (in their words)\n2. **Implication:** What that problem is costing them\n3. **Value:** What a solution would enable them to do\n4. **Proof:** Why they can trust us to deliver it\n5. **CTA:** What happens next\n\nGet this sequence wrong and the conversation loses its power.',
      },
      {
        id: 's5-fab',
        type: 'text',
        heading: 'FAB: Feature → Advantage → Benefit',
        content:
          'FAB is a structure for presenting value that lands.\n\n**Feature:** What the service or capability actually is. Factual and specific.\n**Advantage:** What makes this feature better or different than the alternative.\n**Benefit:** What this means for the prospect in their specific context — using their words.\n\n**The formula:** "Our [Feature] [Advantage], which means [Benefit in their context]."\n\n**Example from discovery:** "We spend roughly half our team\'s time on vendor coordination — the CRO, the database vendor, the QPPV consultant. It eats into our ability to do actual PV strategy work."\n\n**FAB presentation:** "Based on what you described — the coordination overhead between your CRO, database vendor, and QPPV consultant — our consolidated service model **[Feature]** eliminates the vendor hand-off layer entirely by handling both database management and PV operations under one contract and one team **[Advantage]**, which means your team recovers the 15–20 hours a week currently lost to coordination and can redirect that to actual PV strategy work **[Benefit in their words]**."',
      },
      {
        id: 's5-fab-rules',
        type: 'text',
        heading: 'Two Rules for FAB',
        content:
          '**Rule 1:** Never present more than 2–3 FAB statements in a single conversation. More than that is noise.\n\n**Rule 2:** The Benefit must use their language. If they said "audit exposure," your Benefit must address audit exposure — not "compliance risk" or "operational efficiency," even if those are synonyms. Words carry specific weight to specific people.',
      },
      {
        id: 's5-lara',
        type: 'text',
        heading: 'LARA: Objection Handling Framework',
        content:
          '**L — Listen:** Fully. Do not interrupt. Do not start formulating your response while they are still talking. Let them finish completely. Your instinct is to defend. Resist it.\n\n**A — Acknowledge:** Validate the concern before you address it. This is not agreeing with them — it is demonstrating that you heard them.\nExamples: "That\'s a fair concern." / "I understand why that would be your first question." / "Cost is always worth examining carefully — I appreciate you raising it directly."\n\n**R — Respond:** Now address the substance. Use insight, data, or reframing — not argument or assertion.\n\n**A — Ask:** Confirm you addressed the concern. "Does that answer the question about cost?" / "Does this change how you\'re thinking about it?"\n\n**The most important principle:** The best objection handling happens in discovery, not after the presentation. If you have built the right implications and let the prospect articulate their own need, most objections never arise. Objections are usually a signal that discovery was incomplete.',
      },
      {
        id: 's5-objections',
        type: 'text',
        heading: 'Top Objection Patterns & Response Frames',
        content:
          '**"It\'s Too Expensive"**\nAcknowledge: "Cost is always worth examining carefully — I appreciate you raising it directly."\nRespond: "What are you comparing this investment to specifically? When we account for the hidden costs of CRO bundling — coordination overhead, data consolidation work before MAA, risk cost of inspection findings — the comparison often looks quite different."\nAsk: "Does that change how you\'re looking at the comparison?"\n\n**"We\'re Happy With Our Current Setup"**\nAcknowledge: "It sounds like things are running reasonably well, which is a good position to be in."\nRespond: "How are you preparing for [specific upcoming event — inspection, MAA, regulatory change]?"\nAsk: "Is there an area within the current setup where you feel less confident?"\n\n**"We\'re Committed to Our CRO"**\nAcknowledge: "I understand — CRO relationships are important and disruption is a real concern."\nRespond: "Many of our clients keep their CRO for clinical operations and engage us for MAH-readiness and specialized PV. There is no disruption to what the CRO is doing. At minimum, benchmarking your CRO PV costs vs. a specialized provider gives you leverage in your next negotiation. When is your CRO contract renewal?"\nAsk: "Does that change how you think about exploring options?"\n\n**"We Need to Consult Internally"**\nAcknowledge: "Of course — this is not a one-person decision."\nRespond: "I\'m happy to support that internal discussion. Who specifically will be part of that conversation? What would be most helpful to have ready?"\nAsk: "What would move this forward fastest — materials or a conversation?"\n\n**"Just Send Me Information / a Capabilities Deck"**\nAcknowledge: "Absolutely — happy to send something specific."\nRespond: "To make sure I send you relevant material, what\'s your specific interest: gap analysis, medical writing support, database implementation, or something else?"\nAsk: "And when would be a good time to check in after you\'ve reviewed it?"',
      },
      {
        id: 's5-what-to-say',
        type: 'table',
        heading: 'What To Say / Ask / Why / When',
        content: '',
        tableData: {
          headers: ['What to Say', 'What to Ask', 'Why', 'When'],
          rows: [
            [
              '"Based on what you shared, I see two clear priorities..."',
              '"Does that match how you\'re thinking about this?"',
              'Confirms alignment before proposing.',
              'Late discovery, moving to proposal.',
            ],
            [
              '"Let me walk you through how we\'d address each of those..."',
              '"Which of these would have the biggest impact on your situation?"',
              'Focuses proposal on what matters most to them.',
              'Proposal presentation.',
            ],
            [
              '"That\'s a fair point — let me address it directly."',
              '(LARA response to objection)',
              'Shows respect for concern without capitulating.',
              'When objection arises.',
            ],
            [
              '"I appreciate you raising that."',
              '"What would it take to feel confident about this approach?"',
              'Surfaces hidden objections early.',
              'Mid-proposal, before close.',
            ],
          ],
        },
      },
    ],
    mistakes: [
      '**Treating FAB as a brochure.** You present a FAB that would apply to any prospect — not grounded in discovery. If you cannot point to where in the call you heard the problem you are presenting the benefit for, your FAB is not real.',
      '**Defending objections with assertion.** "Our price is very competitive" in response to "it\'s too expensive." Assertions the prospect has no reason to believe. Replace assertion with reframing and questioning.',
      '**Arguing in LARA.** You find yourself making a counter-argument or getting defensive. You have left LARA. Return to Acknowledge.',
      '**Assuming the objection is the real issue.** "Too expensive" may be code for "I do not see the value" or "I need internal alignment." Ask. Do not assume.',
      '**Not preparing objection responses in advance.** Bid defense comes and you are caught off guard by a common objection. Prepare your top 5 responses before the meeting.',
    ],
    resources: [
      { title: 'Master BD Document v2, Chapter 4.2', description: 'FAB Structure by Segment' },
      { title: 'Sales Playbook v1, Chapter 2.3', description: 'Solution Presentation (FAB)' },
      { title: 'Sales Playbook v1, Chapter 4.1', description: 'LARA Framework' },
      { title: 'Sales Playbook v1, Chapter 4.2', description: 'Top Objections (with scripts)' },
      { title: 'Sales Process Guide v2, Chapters 5.1–5.2', description: 'Three Priority Themes + where to deploy them' },
    ],
  },
  {
    id: 6,
    title: 'Outreach, Conference Conversations, and Follow-Up Discipline',
    duration: 90,
    prerequisite: 'Sessions 1–5 completed. You now have all the methodologies. This session applies them in prospecting and execution context.',
    objective:
      'By the end of this session you can execute outreach (email, phone, LinkedIn), navigate conference conversations with clear CTA, and maintain follow-up discipline — all with accurate HubSpot logging and RevOps metrics tracking.',
    sections: [
      {
        id: 's6-context',
        type: 'text',
        heading: 'Outreach Is a Different Context, Same Principles',
        content:
          'Your SPIN framework, discovery mindset, and value messaging apply everywhere. But outreach is different because you have no relationship yet and very little time.\n\nIn outreach, you have **6 seconds** (email subject line), **30 seconds** (email body), or **15 seconds** (phone introduction). Every word has to earn its place.\n\nThe purpose of outreach is not to explain what NextPV does. It is to create enough curiosity or resonance that the prospect agrees to talk.',
      },
      {
        id: 's6-personalization',
        type: 'text',
        heading: 'Principle 1: Personalization is Not Optional',
        content:
          'Every first message must include something specific to the company or person:\n- Trigger event (recent funding, trial milestone, regulatory approval, published data)\n- Specific observation about their pipeline or company\n- Direct reference to something they said publicly\n\n**Trigger events are the highest-performing personalization** because they are timely and demonstrate that you are paying attention.\n\n**Examples of trigger events:**\n- Series A/B/C funding announcement\n- Phase III completion\n- FDA or EMA milestone announcement\n- Executive change (new CMO, VP of PV, CFO)\n- Conference speaking role\n- Company announcement or press release',
      },
      {
        id: 's6-message-structure',
        type: 'text',
        heading: 'Outreach Message Structure (4–5 sentences max)',
        content:
          '1. **Personalized hook** (trigger event or specific observation) — 1–2 sentences\n2. **Teaching moment or implication question** (NOT a feature list) — 1–2 sentences\n3. **One differentiator** (specific to their tier and situation) — 1 sentence\n4. **CTA** (one specific ask) — 1 sentence\n\n❌ **Bad outreach:** "Hi Sarah, NextPV offers QPPV services, medical writing, gap analysis, audit support, and training. Let me know if any of this resonates!"\n\n✅ **Good outreach:** "Hi Sarah — I noticed you just closed Series B. Congrats. One thing we see with biotech fundraisers moving toward EU expansion is that CRO-bundled PV creates unexpected delays at MAA. Have you benchmarked the 6-month timeline risk? Would be worth a 15-minute conversation."',
      },
      {
        id: 's6-sequence',
        type: 'text',
        heading: 'Outreach Sequence (6 Touches Over 3–4 Weeks)',
        content:
          '**Touch 1 (Day 1):** Cold email — Hook on trigger event. Teachable moment about CRO bundling. Single CTA for brief call.\n\n**Touch 2 (Day 2–3):** Phone call or SMS — Reference the email. Share benchmark pricing. Ask for 15-minute call.\n\n**Touch 3 (Day 6–7):** Email — Deepen the pain around GVP compliance gap. Share what "Early GVP Readiness" includes.\n\n**Touch 4 (Day 10–12):** Value-add email (no ask) — Share whitepaper or insight on common inspection findings.\n\n**Touch 5 (Day 16–18):** Gap analysis reframe — Connect findings insight to gap analysis as a concrete next step.\n\n**Touch 6 (Day 22–26):** Break-up email — "Let me know if this is off the table so I stop sending emails." This often generates responses from people who were reading but not replying.',
      },
      {
        id: 's6-conference',
        type: 'text',
        heading: 'Discovery at Conference',
        content:
          '**Opening:** "Hi, I\'m [Name] from NextPV. How\'s the conference treating you so far?" or session-based: "Did you catch [specific session]? We work with companies facing exactly those challenges."\n\n**Step 1 — Company Type Identification:** "Tell me a bit about your company — what stage are you at?"\n\n**Listen for:**\n- Biotech (no EU) → "Planning EU market entry?"\n- Biotech (with EU) → "How\'s your PV system working for you?"\n- Generic/Biosimilar → "How many products across how many markets?"\n\n**Step 2 — Quick Pain Discovery:** Identify the route (A-E) and deliver relevant value hook.\n\n**Closing by priority level:**\n- High: "Can we grab 15 minutes before the end of the conference? Let me check my calendar right now."\n- Medium: "Let me get your details — I\'ll send you [specific resource] and we can schedule a proper call."\n- Low: "Let\'s connect on LinkedIn — I\'ll send some resources. Reach out when you\'re ready to go deeper."',
      },
      {
        id: 's6-followup',
        type: 'text',
        heading: 'Follow-Up Discipline',
        content:
          '**The No-Void Rule:** Never send a message or resource into a void without a follow-up commitment.\n\n❌ Bad: "I\'ll send you the gap analysis overview." (Then nothing.)\n✅ Good: "I\'ll send you the gap analysis overview by Friday, and we\'ll have a 30-minute call next Tuesday to walk through it. Does morning or afternoon work better?"\n\n**Post-Conference Tracking (Same Evening — Do Not Wait):**\nLog in your phone notes immediately after each conversation:\n- Name, company, role\n- Pain point identified\n- Priority level (High/Medium/Low)\n- Promised follow-up action\n- Timeline mentioned\n\nThat same evening: Log to HubSpot, send promised materials, schedule follow-up reminder.',
      },
      {
        id: 's6-metrics',
        type: 'text',
        heading: 'RevOps Metrics: Personal Accountability',
        content:
          'You will track these numbers monthly. They are not overhead — they tell you what is working.\n\n**Outreach Metrics:**\n- Number of first outreach messages (new contacts, first touch only)\n- Email open rate (benchmark: 20–27% at NextPV)\n- Email response rate from first messages (benchmark: 5–8%)\n- Phone connect rate from first attempts (benchmark: 8–30%)\n\n**Pipeline Metrics:**\n- Calls booked from outreach\n- Proposals from calls\n- HubSpot pipeline stage accuracy\n\n**LTV/CAC Health:**\n- Target LTV:CAC ratio: 4:1 minimum\n- Track every deal that closes for: source, time-in-stage, loss reason',
      },
      {
        id: 's6-what-to-say',
        type: 'table',
        heading: 'What To Say / Ask / Why / When',
        content: '',
        tableData: {
          headers: ['What to Say', 'What to Ask', 'Why', 'When'],
          rows: [
            [
              '"I noticed you just closed Series B."',
              '"Are you mapping your EU expansion timeline yet?"',
              'Specific + relevant = triggers curiosity.',
              'Outreach opening.',
            ],
            [
              '"One thing I see with biotech at your stage..."',
              '"Has CRO-bundled PV delay come up in your planning?"',
              'Teaching moment opens their thinking.',
              'After hook, before CTA.',
            ],
            [
              '"Let me send one specific resource."',
              '"Can we find 30 minutes next week to explore this?"',
              'Specific + time-bound = increases response.',
              'Outreach CTA.',
            ],
            [
              '"To make sure I send relevant material..."',
              '"What\'s your specific interest: gap analysis, medical writing, QPPV, or something else?"',
              'Improves targeting + speeds qualification.',
              'Conference closing or cold follow-up.',
            ],
          ],
        },
      },
    ],
    mistakes: [
      '**Generic outreach.** "We specialize in pharmacovigilance and would love to learn more about your company." Deleted immediately. No trigger event, no teaching moment.',
      '**Sending capabilities deck as follow-up.** Into a void, no follow-up commitment. Proposal gets lost.',
      '**Skipping the break-up email.** You have done touches 1–5, no response. Either break up clearly or accept you will not reach this person this cycle. Ambiguity is worse than clarity.',
      '**Forgetting to log.** You have five great conversations at a conference but do not log them until a week later. Details are lost. You do not follow up promptly.',
      '**Multiple CTAs.** "Let me know if you want a call, or I can send materials, or we can connect on LinkedIn." They do nothing. One CTA: "Can we schedule 15 minutes next Tuesday?"',
    ],
    resources: [
      { title: 'Sales Playbook v1, Chapter 1', description: 'Outreach Principles + Email Template Structure' },
      { title: 'Sales Playbook v1, Chapter 1.2', description: 'Sequence Structure (6-touch sequence logic)' },
      { title: 'Sales Playbook v1, Chapter 6.3', description: 'Call Tracking Checklist' },
      { title: 'Discovery Scripts (Document 6), Opening', description: 'Conference conversation openers' },
      { title: 'RevOps Library v2, sheets Templates_Normalized + RevOps_Monthly', description: 'Email templates and monthly tracking' },
    ],
  },
];
