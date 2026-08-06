const POSTS = [
  {
    slug: 'application-assistant-beta',
    title: 'Meet the Application Assistant: Your Grant Application, Walked Through',
    date: 'August 6, 2026',
    tag: 'ASSISTANT',
    readTime: '6 min read',
    excerpt: 'The distance between "I found my grant" and "I submitted" is where applications stall: twenty decisions, a dozen documents, and requirements that differ by funder. GrantOtter\'s new Application Assistant — in beta today — is a chat inside every application that knows where you are, what comes next, and does the heavy lifting at each step.',
    content: () => <PostContent_005 />,
  },
  {
    slug: 'two-weekly-grant-news-digests',
    title: 'Two Digests That Watch the Funding World for You',
    date: 'July 27, 2026',
    tag: 'NEWS',
    readTime: '5 min read',
    excerpt: 'Keeping up with funding news is a job in itself: agency notices on one side, a stack of foundation newsletters on the other. GrantOtter now reads both for you and sends two complementary weekly digests — one federal, one foundation — each curated by AI and reviewed by a human before it reaches your inbox.',
    content: () => <PostContent_004 />,
  },
  {
    slug: 'nih-ai-integrity-guide',
    title: 'Using AI in NIH Grant Applications: What the New Guidance Means for You',
    date: 'May 28, 2026',
    tag: 'POLICY',
    readTime: '5 min read',
    excerpt: "In May 2026, NIH issued guidance that changes the ground rules for using AI tools in grant applications. Here's what changed, and four things every researcher using AI tools needs to do before their next submission.",
    content: () => <PostContent_003 />,
  },
  {
    slug: 'three-ways-to-find-your-next-grant',
    title: 'Three Ways to Find Your Next Grant',
    date: 'May 17, 2026',
    tag: 'MATCHING',
    readTime: '6 min read',
    excerpt: 'Grant discovery shouldn\'t be a second job. GrantOtter gives you three distinct modes — active search by profile, a pivot tool for rejected proposals, and a passive weekly radar — so the right mode is always available for where you are in the funding cycle.',
    content: () => <PostContent_002 />,
  },
  {
    slug: 'power-of-a-grantotter-profile',
    title: 'Your Research, Reimagined: The Power of a GrantOtter Profile',
    date: 'May 3, 2026',
    tag: 'PROFILE',
    readTime: '5 min read',
    excerpt: 'The journey from grant discovery to a successful submission is a complex, multi-stage process. GrantOtter transforms the traditional, fragmented approach into a cohesive, AI-powered grant workflow. The engine behind it all is your research profile.',
    content: () => <PostContent_001 />,
  },
];

function MediaPlaceholder({ label, caption }) {
  return (
    <div style={{ margin: '32px 0' }}>
      <div style={{
        border: '1px dashed var(--line-2)',
        background: 'var(--bg-2)',
        padding: '40px 24px',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        <div style={{ fontSize: 28, color: 'var(--line)', marginBottom: 10 }}>⬚</div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>{label}</div>
        <div style={{ fontSize: 11, color: 'var(--line-2)', marginTop: 4 }}>[ image coming soon ]</div>
      </div>
      {caption && (
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "{caption}"
        </p>
      )}
    </div>
  );
}

function PostContent_001() {
  const listItemStyle = {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--ink-2)',
  };

  return (
    <>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 24px' }}>
        The journey from grant discovery to a successful submission is a complex, multi-stage process. GrantOtter was designed to support every phase of this journey—from initial grant discovery and assembling the right team, to the development of concept notes and essential non-science documents like Biosketches. GrantOtter transforms the traditional, fragmented approach into a cohesive, AI-powered grant workflow.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        The engine behind this entire ecosystem is your research profile. Before you can leverage our grant recommendation and notes drafting features, you must first establish your digital research identity. This profile serves as the foundation for the entire platform, ensuring that every recommendation and document generated is perfectly aligned with your unique academic history and future goals.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Step 1: Building Your Digital Research Twin
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        Most academic tools ask you for a few dry keywords. GrantOtter is different. Our profiling engine is designed to be comprehensive, capturing the full nuance of your academic identity.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        To get started, you simply provide your basic academic information or upload your recent CV. GrantOtter's AI then synthesizes a multi-dimensional profile that captures:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Profile dimensions</div>
        {[
          ['Research Expertise & Trajectory', "Your primary and emerging research areas, scored and substantiated with evidence from your publications, projects, and stated interests—including the methodological strengths that make your work distinctive."],
          ['Publication & Impact Record', 'Your peer-reviewed output, authorship roles, citation metrics, and the arc of how your contributions have evolved over time.'],
          ['Collaborator Network', 'Your frequent co-authors, institutional partnerships, and international collaborations—the relational map that signals which team configurations you can credibly lead or join.'],
          ['Grant & Funding History', "Your active and prior awards, roles (PI, Co-I, biostatistician, core lead), funders, and budget scale—the track record that shapes which mechanisms you're competitive for next."],
          ['Grant Suitability Profile', "Your readiness as PI vs. Co-I, available effort capacity, institutional cost rates, and the funding mechanisms (R01, R21, K-awards, foundation grants) where you're best positioned right now."],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog1_generate_profile_screenshot.png"
          alt='Screenshot of the GrantOtter "Create Profile" interface'
          style={{ width: '100%', display: 'block', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "Input your details and watch GrantOtter synthesize your research trajectory in minutes."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Beyond Keywords: Why Comprehensive Matters
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        A "comprehensive" profile doesn't just mean more words; it means better matching and smarter drafting. Because GrantOtter understands the context of your work, it can identify opportunities you might have missed and eventually help you draft ideas that reflect your true expertise. It ensures that when you move to the "assemble a team" or "draft a concept note" phase, the AI is already briefed on your specific research trajectory. The same funding history, collaborator network, and suitability signals that power your recommendations also feed directly into team assembly and biosketch drafting downstream—so the work you put in once compounds across every stage of the workflow.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Set It and Forget It: The "My Profile" Advantage
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        The real magic happens once your profile is generated. By saving your research profile as "My Profile" in your personal workspace, you turn GrantOtter into your funding scout.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        Once saved, GrantOtter shifts into autopilot:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        {[
          ['Weekly Recommendations', 'Every week, our system scans federal, foundation, and internal funding databases against your specific profile.'],
          ['Direct to Your Inbox', "You'll receive a curated list of new opportunities that actually fit your career stage and research goals."],
          ['Ready for the Workflow', "These matches don't just sit in a list; they are immediately ready to be moved into your workspace to start the drafting and assembly process."],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog1_weekly_recommendation.png"
          alt='Screenshot of GrantOtter weekly grant recommendation email'
          style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "One click today ensures you never miss a deadline tomorrow."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Ready to get started?
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 28px' }}>
        The first step toward a more efficient grant workflow is just a few clicks away. Head over to your workspace, generate your profile, and let the grants come to you.
      </p>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, textAlign: 'center' }}>
        <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{ display: 'inline-block' }}>
          Create My Research Profile →
        </a>
      </div>
    </>
  );
}

function PostContent_002() {
  const listItemStyle = {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--ink-2)',
  };

  return (
    <>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 24px' }}>
        For most researchers, grant discovery is a reactive, fragmented process — a colleague mentions a deadline, a program officer sends a announcement email, or a keyword search turns up hundreds of irrelevant results. The signals are everywhere; the signal-to-noise ratio is terrible.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        GrantOtter is built around a different premise: the right grant should find you, and when you go looking, the search should be precise. To make both possible, the platform offers three distinct discovery modes — two active, one passive — each optimized for a different moment in the funding cycle.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Active Mode 1: Match by Researcher Profile
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        When you are ready to actively search for funding — starting a new research direction, approaching a career milestone, or simply doing your annual scan — the profile-driven match is your starting point.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        You select your saved research profile and apply a set of filters (funding mechanism, budget range, deadline window), and GrantOtter runs a two-stage ranking process against its full grant database:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>How the match works</div>
        {[
          ['Rule-based pre-filter', 'A fast, deterministic pass that scores every grant in the database against your profile dimensions — expertise alignment, career stage fit, mechanism eligibility, and budget compatibility. This cuts thousands of opportunities down to a focused shortlist.'],
          ['Claude re-rank', 'The shortlisted grants go to Claude, which reads each opportunity in full and scores them against your profile with nuanced reasoning — weighing not just keyword overlap but the thematic fit between your research trajectory and the grant\'s stated priorities.'],
          ['Top matches delivered', 'The ranked results surface in the app with a per-grant rationale. You can email the full list to yourself for review or move directly into concept brainstorming for any opportunity that catches your eye.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        The result is not a list of vaguely related opportunities — it is a ranked, reasoned shortlist that reflects who you are as a researcher right now.
      </p>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog2_grant_matching_screenshot.png"
          alt='Screenshot of the GrantOtter grant matching interface'
          style={{ width: '100%', display: 'block', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "Select a profile, set your filters, and get a ranked shortlist with reasoning in minutes."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Active Mode 2: Match by Rejected Proposal
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        A rejected proposal is not the end of a funding story — it is a richly detailed description of a specific scientific idea, and often the most precise signal of what you actually want to fund. The problem is rarely the science; it is frequently the fit between the idea and the mechanism.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        GrantOtter's second active mode is designed for exactly this situation. Instead of matching on your broad research identity, you paste in your Specific Aims or abstract — the compressed, carefully argued version of your idea — and the system searches for grants where that specific scientific argument lands best.
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>When to use this mode</div>
        {[
          ['After a study section rejection', 'Reviewers loved the science but said the mechanism was wrong. Use the aims to find the right home for the same idea — a different institute, a foundation grant, or an internal pilot award.'],
          ['After a programmatic decline', 'The proposal fit the mechanism but not the current portfolio priorities. Find grants where your exact framing aligns with what program officers are actively funding.'],
          ['When pivoting a funded project', 'A completed R21 produced results that point in a new direction. Use the final aims to scout R01 and foundation mechanisms for the next stage before writing a word of the new proposal.'],
          ['While writing a seed grant', 'Most seed and pilot mechanisms ask applicants to identify the external funding they plan to pursue once the preliminary work is done. Paste your seed grant aims into this mode to find the right federal or foundation opportunity — then cite it directly in your application as the logical next step.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        The same two-stage pipeline runs — rule-based pre-filter, then Claude re-rank — but the anchor is your proposal text rather than your career profile. The matches tend to be narrower and more targeted, which is exactly what you need when you already know what you want to study.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Passive Mode: Weekly Grant Recommendations
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        The active modes are powerful, but they require intent — you have to open the app, run a search, and act on what you find. The passive recommendation mode removes that requirement entirely.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        Once you save a profile as "My Profile," GrantOtter runs a weekly match automatically. Every Monday, the system scans the new grants from federal, foundation, and internal funding mechanisms, matches it against your saved profile, and delivers a curated digest directly to your inbox.
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>What arrives in your inbox</div>
        {[
          ['New opportunities only', 'The digest surfaces grants you haven\'t seen before — newly posted opportunities and existing mechanisms whose deadlines have moved into your horizon. No noise from last week\'s list.'],
          ['Ranked with rationale', 'Each grant comes with a brief explanation of why it matched your profile, so you can triage the list in seconds rather than reading every announcement in full.'],
          ['Ready to act on', 'Click "Save to My Workspace", log in your account, and move directly into team assembly or concept brainstorming — no re-running the search, no copy-pasting.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog2_weekly_digest_email.png"
          alt='Screenshot of the GrantOtter weekly grant digest email'
          style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "Your weekly radar: new opportunities, ranked and explained, waiting in your inbox Monday morning."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Choosing the Right Mode
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        The three modes are not mutually exclusive — most users run all three in parallel. A useful way to think about them:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        {[
          ['Weekly recommendations', 'Your ambient radar. Keeps you aware of what\'s out there without active effort. Catches deadlines before they sneak up on you.'],
          ['Profile-driven match', 'Your periodic deep scan. Run it when you\'re opening a new funding cycle or want to sanity-check what you might have missed.'],
          ['Proposal-driven match', 'Your precision tool. Use it when you have a specific idea and need to find the mechanism where it fits best.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        Together, they ensure that no matter where you are in the funding cycle — passively scanning, actively searching, or pivoting after a rejection — GrantOtter has a mode that fits.
      </p>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, textAlign: 'center' }}>
        <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{ display: 'inline-block' }}>
          Start Matching Grants →
        </a>
      </div>
    </>
  );
}

function PostContent_003() {
  const listItemStyle = {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--ink-2)',
  };

  return (
    <>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 24px' }}>
        In May 2026, NIH issued guidance establishing clear expectations for AI use across grant applications, peer review, and research publications. This isn't a signal of future policy; it is in effect now, and it has direct implications for how researchers use AI tools at every stage of the grant process.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        Tools like GrantOtter use AI to generate content — brainstormed proposal concepts, researcher biosketches, grant match rationales — that researchers may incorporate directly into NIH submissions. That makes this guidance immediately relevant. The question isn't whether AI tools are allowed; it's whether you're using them in a way that keeps you on the right side of NIH's requirements.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        What NIH Actually Said
      </h2>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 32px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Key points from the May 2026 guidance</div>
        {[
          ['Applications substantially developed by AI may be rejected', "NIH requires that grant applications represent the applicant's own original ideas. If the intellectual content — the argument, the approach, the framing — was primarily generated by an AI tool rather than the researcher, the application is at risk."],
          ['AI tool use must be disclosed', 'Researchers are expected to document AI tool usage in applications, manuscripts, and presentations. The nature and extent of that disclosure is still evolving at the institutional level, but the expectation to disclose is established.'],
          ['Certain misuses are potential research misconduct', 'NIH explicitly named: presenting AI-generated data as empirically obtained, submitting applications with fabricated or hallucinated references, and using substantial unattributed AI-generated text.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Four Things to Do Before Your Next Submission
      </h2>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Your compliance checklist</div>
        {[
          ['Disclose AI tool use', "If you used GrantOtter or any AI tool to generate concepts, draft text, or prepare a biosketch, that use should be disclosed in your submission. Check your institution's current AI policy and the specific funder's requirements — both may specify how and where to disclose. Silence is not neutral; undisclosed AI use is the specific risk NIH flagged."],
          ['Substantially author your own application', "NIH's test is whether the ideas and text are primarily yours. Use brainstormed concepts as scaffolding for your thinking, then write the proposal in your own scientific voice. Lightly edited AI output is not sufficient — the argument, the approach, and the framing need to be yours."],
          ['Verify every reference and factual claim', 'Fabricated or hallucinated references are explicitly listed as potential research misconduct. Before submitting any AI-assisted content, verify every citation against the primary source. This is especially important in biosketches, where publication lists and funding histories are factual claims reviewers will check.'],
          ["Check your institution's policy", "Many universities and research institutions have AI use policies that layer on top of NIH's requirements. Your grants office may require additional disclosure language, restrict specific tools, or have a review process for AI-assisted submissions. Check before you submit."],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog3_nih_ai_policy.png"
          alt="Screenshot of the GrantOtter NIH AI Policy callout in the Create Biosketch tab"
          style={{ width: '100%', display: 'block', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "GrantOtter surfaces NIH policy guidance at the point where you're generating submission content."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Built for responsible use
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 28px' }}>
        GrantOtter is designed around these principles. AI outputs are explicitly framed as drafts and starting points, not finished submissions. Policy guidance appears at the point of use — when you open the Draft Concepts or Create Biosketch tabs — so the right framing is always in front of you before you generate anything. The responsibility for your final application is yours; these tools exist to make your thinking faster and your search more precise, not to replace your authorship.
      </p>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, textAlign: 'center' }}>
        <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{ display: 'inline-block' }}>
          Open GrantOtter →
        </a>
      </div>
    </>
  );
}

function PostContent_005() {
  const listItemStyle = {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--ink-2)',
  };
  const h2Style = {
    fontFamily: 'Instrument Serif, Georgia, serif',
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: 24,
    lineHeight: 1.2,
    color: 'var(--ink)',
    margin: '32px 0 16px',
    borderLeft: '3px solid var(--orange-deep)',
    paddingLeft: 16,
  };
  const pStyle = { fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 24px' };

  return (
    <>
      <p style={pStyle}>
        Finding the right grant is hard. But most applications don't stall at discovery — they stall in the long middle: reading a 60-page funding announcement, working out which of five deadline cycles applies to you, assembling a team, turning an idea into a fundable concept, and producing the exact set of documents <em>this</em> funder requires, in <em>this</em> funder's format. Twenty decisions, a dozen documents, and no one telling you what comes next.
      </p>
      <p style={pStyle}>
        Today we're launching the <strong>Application Assistant</strong> in beta: a chat that lives inside every application in your <strong>My Applications</strong> tab. It knows the state of your application — what's linked, what's decided, what's missing — and walks you from "I found my grant" to a submission-ready package, doing the heavy lifting at each step. And because the assistant already knows every GrantOtter tool, you don't have to learn where the features live: describe what you need in plain language, and it drives the right tool for you — or just answers your question about the grant.
      </p>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/application_assistant_workflow_diagram.png"
          alt="Diagram: the Application Assistant chats with a researcher while calling GrantOtter's tools — reading the grant, assembling the team, brainstorming concepts, building the checklist, drafting documents, and managing the application — with a feedback-to-revision loop on the finished documents"
          style={{ width: '100%', maxWidth: 800, display: 'block', margin: '0 auto', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "One conversation, the whole workflow: the assistant guides each step, calls GrantOtter's tools for you, and turns your feedback into revisions."
        </p>
      </div>

      <h2 style={h2Style}>It starts by actually reading your grant</h2>
      <p style={pStyle}>
        Tell it your target grant's number or title and it links the opportunity from GrantOtter's repository — or drop the RFP straight into the chat as a PDF or Word file if your funder isn't in our database. Either way, the assistant reads the <em>full</em> announcement and saves a structured summary to your application: mechanism, budget cap, years of support, every submission cycle (not just the next one), review criteria, and what's explicitly out of scope. It identifies the funder and grant type — NIH R01, NSF standard grant, a foundation program — and everything downstream adapts to that classification.
      </p>

      <h2 style={h2Style}>Team, concepts, checklist — in one conversation</h2>
      <div style={{ margin: '0 0 24px' }}>
        <div style={listItemStyle}><span style={{ color: 'var(--teal-deep)' }}>▸</span><span><strong>Assemble the team.</strong> Add your preferred collaborators by name, search the partner institution network by expertise, or — for an external collaborator — just give the assistant a name and institution and it builds a research profile from open sources on the spot.</span></div>
        <div style={listItemStyle}><span style={{ color: 'var(--teal-deep)' }}>▸</span><span><strong>Brainstorm concepts.</strong> With the grant and team in place, it generates 2–3 tailored proposal concepts. Pick one, shape it in conversation, and it becomes the target concept the rest of your application builds on.</span></div>
        <div style={listItemStyle}><span style={{ color: 'var(--teal-deep)' }}>▸</span><span><strong>Build the checklist.</strong> A submission checklist generated from your specific announcement — funder-aware, so an NSF application gets NSF components, not NIH boilerplate — with due dates worked back from your deadline.</span></div>
        <div style={listItemStyle}><span style={{ color: 'var(--teal-deep)' }}>▸</span><span><strong>File your documents.</strong> Drop letters of support, draft aims, or facilities pages into the chat and the assistant classifies and files them with your application, ready for one-click ZIP download at submission time.</span></div>
      </div>

      <h2 style={h2Style}>Drafting that works like a writing partner</h2>
      <p style={pStyle}>
        For the core science documents — Specific Aims and Research Strategy for NIH, Project Summary and Project Description for NSF — the assistant doesn't dump a wall of generated text on you. It works in phases, each gated on your approval: first a <strong>section-by-section outline</strong> (with structural options when there's a genuine choice to make), then a <strong>writing plan</strong> — the key claims, evidence, and figures for each section — and only after you've signed off does it write the <strong>full draft</strong>, section by section, iterating on your feedback.
      </p>
      <p style={pStyle}>
        Every draft is grounded in curated writing guides split from the official sources — the NIH application-guide instructions for research, career, fellowship, training, and SBIR applications, and the NSF Proposal &amp; Award Policies &amp; Procedures Guide — so the structure and required content match what reviewers and compliance officers actually expect. And per NIH's 2026 AI guidance, you stay the author: the assistant drafts, you verify and revise, and anything it can't verify is flagged rather than invented.
      </p>
      <p style={pStyle}>
        Reviewing is built in, too. Flip on the <strong>document panel</strong> and any saved document opens side-by-side with the chat — the draft on one side, the conversation on the other. Give feedback the way you would to a colleague ("tighten Aim 2," "make the significance section land for reviewers outside the field") and the assistant revises the draft and updates the saved document <em>in place</em> — no duplicate copies, no version soup. When you're happy, download it as Word with one click.
      </p>

      <h2 style={h2Style}>It remembers, so you don't repeat yourself</h2>
      <p style={pStyle}>
        Tell the assistant once that you always include a biostatistician, or that you've decided to drop Aim 3, and it remembers — across sessions, per application and across your account. Come back a week later and it greets you with where you are: grant linked, deadline set, team of three, checklist 5 of 18 done, and the suggested next step. Everything it remembers is visible in a memory panel in My Workspace, and you can delete any of it, any time.
      </p>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/application_assistant_walkthrough.png"
          alt="Screenshot of the Application Assistant chat inside a GrantOtter application"
          style={{ width: '100%', display: 'block', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "The assistant linking a grant, setting the deadline, and proposing next steps — inside one application."
        </p>
      </div>

      <h2 style={h2Style}>How to try it</h2>
      <div style={{ margin: '0 0 24px' }}>
        <div style={listItemStyle}><span style={{ color: 'var(--orange-deep)' }}>1.</span><span>Open GrantOtter and go to <strong>My Applications</strong> — create an application (or open an existing one).</span></div>
        <div style={listItemStyle}><span style={{ color: 'var(--orange-deep)' }}>2.</span><span>You'll land on the <strong>Assistant</strong> tab. Tell it your target grant's number or title — or drop the RFP into the chat.</span></div>
        <div style={listItemStyle}><span style={{ color: 'var(--orange-deep)' }}>3.</span><span>Follow the walkthrough — or skip around freely. You're in charge; the assistant keeps track either way.</span></div>
      </div>
      <p style={pStyle}>
        The Application Assistant is in beta, and it improves fastest when you tell us what confused you or what you wish it did. Join the{' '}
        <a href="https://join.slack.com/t/grantottercommunity/shared_invite/zt-3wb5fmemq-CPTYpyWjXzl8wkmhn6tw4Q" target="_blank" rel="noopener" style={{ color: 'var(--teal-deep)' }}>GrantOtter Slack community</a>{' '}
        and share your experience — we ship fixes weekly.
      </p>
      <p style={{ ...pStyle, margin: 0 }}>
        <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" style={{ color: 'var(--orange-deep)', fontWeight: 600 }}>Open GrantOtter and try the Application Assistant →</a>
      </p>
    </>
  );
}

function PostContent_004() {
  const listItemStyle = {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--ink-2)',
  };
  const h2Style = {
    fontFamily: 'Instrument Serif, Georgia, serif',
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: 24,
    lineHeight: 1.2,
    color: 'var(--ink)',
    margin: '32px 0 16px',
    borderLeft: '3px solid var(--orange-deep)',
    paddingLeft: 16,
  };

  return (
    <>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 24px' }}>
        Staying on top of research funding is really two jobs. On one side, the federal agencies: policy notices, budget news, new programs, and deadline changes flowing out of NIH, NSF, and their peers every week. On the other, the foundations: dozens of funders — Wellcome, the Gates Foundation, Arnold Ventures, AACR, and many more — that announce their opportunities not in a searchable database, but in email newsletters you'd have to subscribe to, open, and skim one by one.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        GrantOtter now does both jobs for you. Every week, two complementary digests land in your inbox: <strong style={{ color: 'var(--ink)' }}>This Week in Grant News</strong> for the federal world, and <strong style={{ color: 'var(--ink)' }}>This Week in Foundation Grant News</strong> for everything the foundations announced. Here's what's inside each — and how they fit together with your personalized grant alerts.
      </p>

      <h2 style={h2Style}>
        This Week in Grant News: Your Federal Radar
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        The federal digest is built from official agency channels — the NIH Guide, NSF news, and other agency feeds — and distilled into a single read that tells you what actually changed this week and why it matters to applicants.
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>What the federal digest covers</div>
        {[
          ['Policy & agency news', 'Guidance changes, submission-rule updates, and agency announcements that affect how you apply — not just what to apply for.'],
          ['Budget & appropriations', "Funding-level news that shapes what agencies can actually award in the coming cycles."],
          ['New opportunities & deadlines', 'Newly posted programs and approaching deadlines, each item linked straight to its official source notice.'],
          ['The fine print, bulleted', 'Notices of early expiration, requests for information, and informational webinars — the easy-to-miss items collected into quick-scan lists.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <h2 style={h2Style}>
        This Week in Foundation Grant News: 60+ Newsletters, One Email
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        Foundation funding has always had a discovery problem: there is no Grants.gov for foundations. The opportunities are announced in each funder's own newsletter, and if you aren't subscribed to the right one at the right time, you simply never hear about it.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        So we subscribed for you. GrantOtter maintains subscriptions to more than 60 foundation and funder newsletters and reads every issue that arrives each week. The digest distills what matters — and because it is grounded in the newsletters themselves, every item links to the funder's own announcement.
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>What the foundation digest covers</div>
        {[
          ['The week’s top stories', 'The most consequential foundation opportunities and news, summarized in plain language with why each matters to applicants.'],
          ['All Grant Opportunities This Week', 'A complete index of every distinct funding opportunity mentioned in any newsletter we received — so even the items that didn’t make the headlines are one click away.'],
          ['A pipeline into your alerts', 'Promising newly announced programs are drafted into GrantOtter’s grant database, human-reviewed, and — once approved — become matchable. A grant that first appeared in a funder’s newsletter can show up in your personalized alerts the following week.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog4_foundation_digest_email.png"
          alt='Screenshot of the "This Week in Foundation Grant News" email, showing the week&#39;s top funder stories'
          style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "This Week in Foundation Grant News — the week's top funder stories, each linked to the original announcement."
        </p>
      </div>

      <h2 style={h2Style}>
        Curated by AI, Reviewed by a Human
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 28px' }}>
        Both digests are AI-drafted under strict grounding rules: items come only from the official feeds and newsletters themselves, every link points to the original source, and anything the sources don't state is left out rather than guessed. Then a human reviews each week's draft before it is sent. That review step is deliberate — a news digest is only useful if you can trust every line of it.
      </p>

      <h2 style={h2Style}>
        Three Emails, Three Different Jobs
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        With these two digests joining your personalized alerts, a GrantOtter Monday can bring up to three emails — each with a distinct job:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Your Monday inbox</div>
        {[
          ['Weekly Grant Alerts', 'Personal. Grants matched and scored against your saved research profile. These only arrive when there are strong new matches — and they require a My Profile saved in My Workspace.'],
          ['This Week in Grant News', 'Broad awareness, federal. The policy, budget, and deadline picture across the agencies.'],
          ['This Week in Foundation Grant News', 'Broad awareness, foundations. What 60+ funders announced, with the complete opportunity index.'],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        If you haven't built your profile yet, that's the one step standing between you and the personalized layer — see <a href="#blog/power-of-a-grantotter-profile" style={{ color: 'var(--teal-deep)' }}>Your Research, Reimagined: The Power of a GrantOtter Profile</a> for how it works and why it takes only minutes.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 28px' }}>
        And every email stands on its own: each has a one-click unsubscribe at the bottom, and opting out of one never affects the others. Subscribe to exactly the awareness you want.
      </p>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, textAlign: 'center' }}>
        <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{ display: 'inline-block' }}>
          Open GrantOtter →
        </a>
      </div>
    </>
  );
}

function BlogList({ setRoute, setPost }) {
  const isMobile = useWindowWidth() < 768;
  const visible = POSTS.slice(0, 3);
  const more = POSTS.slice(3);

  function openPost(post) {
    setPost(post);
    setRoute('blog-post');
  }

  return (
    <section style={{ padding: isMobile ? '48px 0 64px' : '80px 0 120px' }}>
      <div className="container">
        <div style={{ marginBottom: isMobile ? 32 : 48 }}>
          <div className="bracket-label" style={{ marginBottom: isMobile ? 16 : 24 }}>blog</div>
          <h1 style={{
            fontFamily: 'Instrument Serif, Georgia, serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: isMobile ? 'clamp(44px, 12vw, 72px)' : 'clamp(52px, 7vw, 110px)',
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: 'var(--ink)',
            maxWidth: 1200,
            margin: '0 0 16px',
          }}>
            Thinking about grants,<br />
            <em style={{ color: 'var(--orange-deep)' }}>research, and funding.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480, margin: 0 }}>
            Insights on the grant process, researcher profiles, team assembly, and how AI is changing academic funding.
          </p>
        </div>

        <div style={{ height: 1, background: 'var(--line)', marginBottom: isMobile ? 28 : 36 }} />

        {visible.map((post, i) => (
          <div key={post.slug}>
            <div
              onClick={() => openPost(post)}
              style={{ borderLeft: '3px solid var(--orange-deep)', paddingLeft: 20, cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>{post.date}</span>
                <span className="tag orange" style={{ fontSize: 10, padding: '2px 7px' }}>{post.tag}</span>
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>{post.readTime}</span>
              </div>
              <h2 style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: isMobile ? 20 : 28,
                lineHeight: 1.2,
                color: 'var(--ink)',
                margin: '0 0 12px',
              }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 16px' }}>
                {post.excerpt}
              </p>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--teal-deep)' }}>
                Read post →
              </span>
            </div>
            {i < visible.length - 1 && (
              <div style={{ height: 1, background: 'var(--line)', margin: isMobile ? '28px 0' : '36px 0' }} />
            )}
          </div>
        ))}

        {more.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : more.length === 1 ? '1fr' : 'repeat(2, 1fr)',
            border: '1px solid var(--line-2)',
            borderRight: 0,
            borderBottom: 0,
            marginTop: isMobile ? 28 : 36,
          }}>
            {more.map(post => (
              <div
                key={post.slug}
                onClick={() => openPost(post)}
                style={{
                  borderRight: '1px solid var(--line-2)',
                  borderBottom: '1px solid var(--line-2)',
                  padding: isMobile ? '20px 16px' : '24px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)' }}>
                  {post.date} · {post.tag}
                </div>
                <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.2, color: 'var(--ink)', flex: 1 }}>
                  {post.title}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--teal-deep)' }}>
                  Read post →
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BlogPost({ post, setRoute }) {
  const isMobile = useWindowWidth() < 768;

  if (!post) {
    setRoute('blog');
    return null;
  }

  const Content = post.content;

  return (
    <section style={{ padding: isMobile ? '40px 0 80px' : '64px 0 120px' }}>
      <div className="container">
        <div>
          <button
            onClick={() => setRoute('blog')}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--muted)', marginBottom: isMobile ? 24 : 32, display: 'block', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            ← Back to Blog
          </button>

          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="tag orange" style={{ fontSize: 10, padding: '2px 7px' }}>{post.tag}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11 }}>{post.date}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11 }}>{post.readTime}</span>
            </div>
            <h1 style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: isMobile ? 'clamp(26px, 6vw, 36px)' : 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 20px',
            }}>
              {post.title}
            </h1>
            <div style={{ height: 1, background: 'var(--line)' }} />
          </div>

          <Content />
        </div>
      </div>
    </section>
  );
}

window.POSTS    = POSTS;
window.BlogList = BlogList;
window.BlogPost = BlogPost;
