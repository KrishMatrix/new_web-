export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

// ── Add your posts here ──────────────────────────────────────────────────────
// To add a new post: copy one of the objects below, give it a unique id,
// fill in title / summary / content / date / tags / readTime, and save.
// The blog section will automatically display it.
// ─────────────────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "federated-learning-security",
    title: "What I Learned Attacking Federated Learning Models",
    summary:
      "A hands-on look at model poisoning, backdoor attacks, and privacy leakage in Federated Learning — and what they mean for real deployments.",
    content: `Federated Learning promises privacy by keeping data local. But during my research at CISPA, I found that "local data" doesn't mean "safe model."

I ran 20+ simulations across 10+ client nodes and tested three main attack vectors:

**Model Poisoning**
A malicious client sends crafted gradient updates to steer the global model. In my tests this caused up to 25% accuracy loss — without any visible signal in standard training logs.

**Backdoor Attacks**
By injecting a small trigger pattern into training data, an attacker can make the model misclassify specific inputs on demand — while performing normally on all other inputs.

**Privacy Leakage**
Gradient inversion attacks can reconstruct private training samples from shared gradients. Even with differential privacy, partial leakage is possible at low noise budgets.

**Takeaways for Practitioners**
- Use robust aggregation (e.g. Krum, Median) instead of FedAvg when clients are untrusted
- Monitor per-client gradient norms for anomalies
- Apply clipping + noise carefully — too much destroys model quality, too little leaks data
- Test your FL setup adversarially before deployment

The gap between "theoretically private" and "practically secure" in FL is still large. This is an exciting and open research area.`,
    date: "March 2026",
    tags: ["Federated Learning", "Security", "ML", "Research"],
    readTime: "5 min read",
  },
  {
    id: "building-welcomedus",
    title: "Building WelcomeDüs in 24 Hours",
    summary:
      "How our 4-person team designed, built, and won 2nd place at the Infosys Hackathon with an AI city guide for newcomers in Düsseldorf.",
    content: `At the Infosys Hackathon in Düsseldorf, the challenge was simple but wide open: make the city better with AI. We had 24 hours.

**The Problem We Picked**
Newcomers and international students arriving in Düsseldorf have no single place to find relevant, personalised information — transport, events, bureaucracy, local tips. Google works, but it doesn't know you're an international student who speaks English and needs to register at the Bürgeramt.

**What We Built**
WelcomeDüs is an agentic city guide. You tell it who you are, and it surfaces what matters to you:
- Live public transport routes and disruptions (via NRW APIs)
- Personalised event recommendations based on your interests
- Step-by-step guides for city bureaucracy (Anmeldung, health insurance, etc.)
- Local food, culture, and neighbourhood tips

**The Stack**
Python backend with NLP pipelines to process 5,000+ location and preference data points. API integrations for live city data. Simple React frontend for the demo.

**What Worked, What Didn't**
The NLP personalisation worked well. What we underestimated was data quality — a lot of open city data is outdated or inconsistently formatted, so cleaning took far more time than expected.

We won 2nd place among 50+ teams. The main lesson: in a hackathon, pick a problem narrow enough to demo clearly but real enough that judges feel it.`,
    date: "February 2026",
    tags: ["Hackathon", "NLP", "Python", "AI"],
    readTime: "4 min read",
  },
  {
    id: "agentic-ai-job-applications",
    title: "Automating Job Applications with Agentic AI",
    summary:
      "How I built a system that reads a job posting URL and submits a tailored application — and what that reveals about the current state of LLM agents.",
    content: `The idea for our Masumi Hackathon project came from a simple frustration: job applications are tedious, repetitive, and mostly formulaic. If an LLM can write code, it can write a cover letter.

**How It Works**
1. User pastes a job URL
2. Agent scrapes and extracts the job description, required skills, and company context
3. LLM generates a tailored CV summary and cover letter aligned to that specific role
4. Agent auto-fills and submits the application form

**The Interesting Parts**
The hard part wasn't generation — modern LLMs do that well. The hard part was reliable extraction from diverse job posting formats, and navigating application forms that vary wildly across platforms.

We used a combination of CSS-selector-based parsing and LLM-assisted extraction as a fallback, which got us to ~85% success rate on the test set.

**What This Reveals About LLM Agents**
Current agents are good at well-defined sub-tasks but brittle at chaining steps when any step can fail silently. Robust error handling and fallback logic matters more than prompt quality.

We won 2nd place and $1,500. More importantly, the project showed me that "80% automated" is already genuinely useful — you don't need perfection.`,
    date: "January 2026",
    tags: ["LLM Agents", "Automation", "Python", "NLP"],
    readTime: "5 min read",
  },
];
