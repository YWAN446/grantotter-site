// The four example scripts played by AppClip, and the Dashboard views they show.
// Everything here is illustrative: invented people, grant numbers and figures. Tool-chip labels
// are the app's real ones (app/core/application_assistant.py TOOL_LABELS and friends).

const RES_TABS = ['Projects', 'Feed', 'Profile', 'Find Collaborators'];
const ADM_TABS = ['Pursuits', 'Opportunities', 'Unit', 'Faculty'];

const ME = { name: 'Alex Rivera, PhD', sub: 'Assistant Professor · Environmental Health', line: 'Builds low-cost sensor networks and forecasting models for drinking-water quality.',
  tags: [['water quality', 1], ['sensor networks', 5], ['environmental data science', 6], ['forecasting', 3]] };

/* ── Views: researcher ───────────────────────────────────────────────────────────────── */

function VGettingStarted({ done = [] }) {
  const steps = ['Build your researcher profile', 'Run your first grant match', 'Start a project', 'Save a collaborator'];
  return (
    <>
      <div className="am-gs">
        <div className="am-h">Getting started</div>
        <div className="am-sub" style={{marginBottom:6}}>Four steps and GrantOtter knows your work.</div>
        {steps.map((s, i) => (
          <div key={s} className={`it ${done.includes(i) ? 'done' : ''}`}><i /> {s}</div>
        ))}
      </div>
      <div><AmBtn kind="out">+ New project</AmBtn></div>
      <div className="am-sub">No projects yet. Start one from a grant in your Feed, or ask the assistant.</div>
    </>
  );
}

function VProfile({ saved = [] }) {
  return (
    <>
      <div className="am-h">My Profile</div>
      <AmPersonCard {...ME} self hl={saved.length === 0} />
      <div className="am-h" style={{marginTop:4}}>Saved collaborators</div>
      {saved.length === 0
        ? <div className="am-sub">No collaborators saved yet.</div>
        : saved.map(p => <AmPersonCard key={p.name} {...p} actions={['View profile', 'Remove']} hl />)}
    </>
  );
}

function VFeed() {
  return (
    <>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, border:'1px solid var(--am-border)', borderRadius:10, padding:3, fontSize:12.5, fontWeight:500, textAlign:'center'}}>
        <span style={{background:'var(--am-muted)', borderRadius:7, padding:'5px 4px'}}>Recommended (3)</span>
        <span style={{padding:'5px 4px', color:'var(--am-muted-foreground)'}}>All (5)</span>
        <span style={{padding:'5px 4px', color:'var(--am-muted-foreground)'}}>Saved (0)</span>
      </div>
      <div className="am-sub" style={{fontWeight:600, letterSpacing:'0.02em'}}>WEEK OF SEP 28, 2026 (3)</div>
      <AmFeedCard hl title="Sensor Networks and Data Science for Safe Drinking Water (R01)" meta="PAR-26-118 · National Institutes of Health · due 2027-02-05" fit={9} due="Due in 127 d" yourMatch />
      <AmFeedCard title="Smart and Connected Communities: Water Infrastructure" meta="NSF 26-541 · National Science Foundation · due 2027-01-14" fit={8} due="Due in 105 d" yourMatch />
      <AmFeedCard title="Early-Career Award in Environmental Health Innovation" meta="Foundation · due 2026-12-01" fit={7} due="Due in 61 d" topPick={false} yourMatch />
    </>
  );
}

const CHECKLIST = ['Specific Aims (1 page)', 'Research Strategy (12 pages)', 'Biosketches (PI + Co-I)', 'Budget and justification', 'Data Management and Sharing Plan', 'Letters of support'];

function VProject({ deadline, checklist = 0, docs = [], team = [], compact }) {
  return (
    <>
      <div className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Projects</div>
      <div className="am-h lg">Sensor Networks and Data Science for Safe Drinking Water (R01)</div>
      <div className="am-two">
        <label className="am-field">Status<span className="am-input">Planning</span></label>
        <label className="am-field">Deadline<span className="am-input" key={deadline || 'none'} style={deadline ? {animation:'amPulse 1.2s ease-out 1'} : {color:'var(--am-muted-foreground)'}}>{deadline || 'mm/dd/yyyy'}</span></label>
      </div>
      <div>
        <div className="am-h">Team</div>
        <div className="am-member"><span className="nm" style={{display:'flex', alignItems:'center', gap:8}}><i className="am-radio" /> Alex Rivera <span className="am-sub">(you)</span> <AmPill tone={2}>PI</AmPill></span></div>
        {team.map(t => (
          <div key={t} className="am-member" style={{animation:'amIn .3s ease-out both'}}>
            <span className="nm" style={{display:'flex', alignItems:'center', gap:8}}><i className="am-radio" style={{borderWidth:1.5, borderColor:'var(--am-muted-foreground)'}} /> {t}</span>
          </div>
        ))}
      </div>
      {!compact && (
        <div>
          <div className="am-h">Checklist</div>
          {checklist === 0
            ? <div className="am-sub">No checklist yet. Ask the assistant to generate one from the announcement.</div>
            : CHECKLIST.slice(0, checklist).map((c, i) => <div key={c} className="am-check" style={{animationDelay: `${i * 90}ms`}}><i /> {c}</div>)}
        </div>
      )}
      <div>
        <div className="am-h">Documents</div>
        {docs.length === 0
          ? <div className="am-sub">Nothing saved yet.</div>
          : docs.map(([title, type, tone]) => (
              <div key={title} className="am-doc">{AmIcon.file}<span className="ttl">{title}</span><AmPill tone={tone}>{type}</AmPill></div>
            ))}
      </div>
    </>
  );
}

/* ── Views: research administration ──────────────────────────────────────────────────── */

const CAPS = [
  { cap: 'Center leadership and administrative core', who: [['Elena Marsh', 'Environmental Health · active PI', 'directs a funded exposure-science program and led a prior center core']] },
  { cap: 'Exposure assessment facility core', who: [['Tomás Ibarra', 'Environmental Health · active PI', 'runs the high-resolution mass spectrometry exposomics lab']] },
  { cap: 'Biostatistics and data science core', who: [['Grace Lindqvist', 'Biostatistics · also Environmental Health', 'methods for exposure mixtures; co-leads a data coordinating unit']] },
  { cap: 'Pilot projects program', who: [['Samuel Adeyemi', 'Environmental Health', 'ran the unit’s pilot-award program for four cycles']] },
  { cap: 'Integrated health sciences facility core', check: 'Nora Feld, Wei-Lin Hsu' },
  { cap: 'Community engagement core', gap: true },
];

function VOpps({ open, pressing }) {
  return (
    <>
      <div className="am-two">
        <label className="am-field">Unit<span className="am-input">Environmental Health</span></label>
        <label className="am-field">Sort<span className="am-input">Unit fit</span></label>
      </div>
      <div className={`am-card ${open ? 'hl' : ''}`}>
        <h4>Environmental Health Sciences Core Centers (P30)</h4>
        <div className="am-sub">RFA-ES-26-002 · National Institutes of Health · $1,500,000</div>
        <div className="am-pills"><AmPill tone={1}>P30</AmPill><AmPill>Due in 96 d</AmPill><AmPill kind="sec">Multi-component</AmPill></div>
        <div style={{marginTop:10}}><AmMeter share={4 / 6} /></div>
        <div className="am-sub" style={{marginTop:4}}>4 of 6 capabilities covered · 1 with candidates to check · 3 with a funded lead</div>
        <div className="am-sub" style={{marginTop:4}}>Your institution holds P30ES012345 through 2027-03-31, PI Elena Marsh, 14 pool members</div>
        <div className="am-pills"><AmPill>Community engagement core</AmPill></div>
        {open && (
          <div className="am-list" style={{marginTop:10}}>
            {CAPS.map(c => (
              <div key={c.cap}>
                <div className={`cap ${c.who ? '' : 'gap'}`}>{c.cap}</div>
                {c.who && c.who.map(([n, d, why]) => <div key={n} className="am-who">• {n} ({d}) <span>— {why}</span></div>)}
                {c.check && <div className="mut">Candidates to check: {c.check}</div>}
                {c.gap && <div className="mut">No candidate in this unit</div>}
              </div>
            ))}
          </div>
        )}
        <div className="am-btns"><AmBtn kind="out">{open ? 'Hide details' : 'Details'}</AmBtn><AmBtn press={pressing}>Open a pursuit</AmBtn></div>
      </div>
      {!open && (
        <div className="am-card">
          <h4>Superfund Hazardous Substance Research and Training Program (P42)</h4>
          <div className="am-sub">RFA-ES-26-009 · National Institutes of Health</div>
          <div className="am-pills"><AmPill tone={1}>P42</AmPill><AmPill>Due in 141 d</AmPill></div>
          <div style={{marginTop:10}}><AmMeter share={3 / 7} /></div>
          <div className="am-sub" style={{marginTop:4}}>3 of 7 capabilities covered · 2 with candidates to check · 1 with a funded lead</div>
          <div className="am-btns"><AmBtn kind="out">Details</AmBtn><AmBtn>Open a pursuit</AmBtn></div>
        </div>
      )}
    </>
  );
}

function VPursuit({ pi, docs = [] }) {
  const leads = [['Tomás Ibarra', 'Exposure assessment facility core', 'Candidate'], ['Grace Lindqvist', 'Biostatistics and data science core', 'Candidate'], ['Samuel Adeyemi', 'Pilot projects program', 'Candidate']];
  return (
    <>
      <div className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Pursuits</div>
      <div className="am-h lg">Environmental Health Sciences Core Centers (P30)</div>
      <div>
        <div className="am-h">Coverage</div>
        <div style={{marginTop:6}}><AmMeter share={4 / 6} /></div>
        <div className="am-sub" style={{marginTop:4}}>4 of 6 capabilities covered · 1 with candidates to check</div>
        <div className="am-btns" style={{marginTop:6}}><AmPill>Community engagement core</AmPill><AmBtn kind="out">Re-check coverage</AmBtn></div>
      </div>
      <div>
        <div className="am-h">Leadership</div>
        <div className="am-sub" style={{fontWeight:500, marginTop:6}}>Contact PI</div>
        {pi
          ? <div className="am-member" style={{animation:'amPulse 1.2s ease-out 1', borderRadius:8}}><span className="nm">Elena Marsh<small>Center leadership and administrative core</small></span><span className="am-select">Approached ▾</span></div>
          : <div className="am-sub">None yet.</div>}
        <div className="am-sub" style={{fontWeight:500, marginTop:6}}>Core leads</div>
        {!pi && <div className="am-member"><span className="nm">Elena Marsh<small>Center leadership and administrative core</small></span><span className="am-select">Candidate ▾</span></div>}
        {leads.map(([n, c, s]) => (
          <div key={n} className="am-member"><span className="nm">{n}<small>{c}</small></span><span className="am-select">{s} ▾</span></div>
        ))}
      </div>
      {docs.length > 0 && (
        <div>
          <div className="am-h">Documents</div>
          {docs.map(([title, type, tone]) => (
            <div key={title} className="am-doc">{AmIcon.file}<span className="ttl">{title}</span><AmPill tone={tone}>{type}</AmPill></div>
          ))}
        </div>
      )}
    </>
  );
}

function AmStack({ parts, legend = true }) {
  const total = parts.reduce((n, [, v]) => n + v, 0);
  return (
    <>
      <div className="am-stack">{parts.map(([l, v], i) => <i key={l} className={`am-c${i + 1}`} style={{width: `${100 * v / total}%`}} />)}</div>
      {legend && <div className="am-legend">{parts.map(([l, v], i) => <span key={l}><i className={`am-c${i + 1}`} />{l} {v}</span>)}</div>}
    </>
  );
}

// The Unit tab: one department's research landscape. Counts only; nobody is scored.
function VUnit() {
  const institutes = [['NIEHS', 31], ['NIAID', 9], ['NHLBI', 6], ['NCI', 4]];
  const risk = [['Exposure biology of metals', 7, 0, 2, 5], ['Air pollution epidemiology', 6, 1, 1, 4]];
  return (
    <>
      <span className="am-input">Environmental Health ▾</span>
      <div>
        <div className="am-h lg">Environmental Health</div>
        <div className="am-sub">department · computed 2026-09-28</div>
        <div className="am-sub" style={{marginTop:4}}>Funded = an active NIH award as PI in RePORTER.</div>
      </div>
      <div className="am-block-h">Counts {AmIcon.chev}</div>
      <div className="am-block">
        <dl className="am-stats">
          <div><dt>Faculty</dt><dd>46</dd></div>
          <div><dt>Funded PIs</dt><dd>19 (41%)</dd></div>
          <div><dt>Expertise areas</dt><dd>312</dd></div>
          <div><dt>Topics</dt><dd>38</dd></div>
        </dl>
        <div className="am-sub" style={{marginTop:8}}>Funded share baselines: school 36% · map 29%</div>
      </div>
      <div className="am-block-h">Career stages {AmIcon.chev}</div>
      <div className="am-block"><AmStack parts={[['early', 11], ['mid', 14], ['senior', 19], ['emeritus', 2]]} /></div>
      <div className="am-block-h">Institutes {AmIcon.chev}</div>
      <div className="am-block">
        {institutes.map(([l, v]) => (
          <div key={l} className="am-hbar"><span className="l">{l}</span><span className="b"><i style={{width: `${100 * v / 31}%`}} /></span><span className="v">{v}</span></div>
        ))}
      </div>
      <div className="am-block-h">Succession risk {AmIcon.chev}</div>
      <div className="am-block">
        {risk.map(([name, n, e, m, sr]) => (
          <div key={name} className="am-stage">
            <div className="row"><b>{name}</b><span>{n} faculty · early {e} ({Math.round(100 * e / n)}%) · mid {m} · senior {sr}</span></div>
            <AmStack legend={false} parts={[['early', e], ['mid', m], ['senior', sr]]} />
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Scripts ─────────────────────────────────────────────────────────────────────────── */

const MAYA = { name: 'Maya Okafor, PhD', sub: 'Associate Professor · Epidemiology', line: 'Spatial models of waterborne disease and environmental exposure.', tags: [['spatial epidemiology', 4], ['waterborne disease', 1], ['GIS', 6]] };

const CLIP_PROFILE = {
  label: 'A new faculty member gets a profile and ranked grant matches',
  tabs: RES_TABS, tab: 0, view: 'gs', thread: { kind: 'global' },
  placeholder: 'Ask GrantOtter to generate my researcher profile',
  views: {
    gs: <VGettingStarted />,
    profile: <VProfile />,
    feed: <VFeed />,
  },
  steps: [
    { t: 'caption', text: 'All it needs is your name and where you work. A CV is optional.' },
    { t: 'say', text: 'Welcome. The first thing to do is build your researcher profile. What is your name, and where do you work? A CV helps, but it is optional.', ms: 500 },
    { t: 'type', text: 'Alex Rivera, Westmark University.' },
    { t: 'send' },
    { t: 'tool', label: 'Researching their background… (takes about 30 seconds — expand to watch live)', summary: 'Researched Alex Rivera · 9 sources', ms: 1500 },
    { t: 'caption', text: 'It shows what it found, with sources, before it writes anything.' },
    { t: 'say', text: '**Alex Rivera, PhD** · Assistant Professor, Environmental Health\n\n- Low-cost sensor networks for drinking-water quality\n- Physics-informed forecasting of contamination events\n- 21 publications; NSF award as co-PI\n\nDoes this look right? Tell me any emerging areas to add, or topics to avoid.', ms: 900 },
    { t: 'type', text: 'Looks right. Add wastewater surveillance as an emerging area.' },
    { t: 'send' },
    { t: 'tool', label: 'Writing your researcher profile… (takes about a minute — expand to watch live)', summary: 'Saved My Profile', ms: 1500 },
    { t: 'panel', tab: 2, view: 'profile' },
    { t: 'caption', text: 'Your profile is saved. Every later step draws on it.' },
    { t: 'say', text: 'Your profile is saved. Want me to match grants to it?', ms: 500 },
    { t: 'type', text: 'Yes, match grants to my profile.' },
    { t: 'send' },
    { t: 'tool', label: 'Matching grants… (takes 1–3 minutes — expand to watch live)', summary: 'Matched 5 grants from thousands of open opportunities', ms: 1700 },
    { t: 'caption', text: 'Ranked matches, each with the reason it fits. They land in your Feed.' },
    { t: 'say', text: '**1.** [[PAR-26-118]] fit 9/10. It asks for sensor data science applied to drinking-water safety, which is your core program.\n\n**2.** [[NSF 26-541]] fit 8/10. Community water infrastructure; your NSF co-PI record counts here.\n\nAll five are in your Feed.', ms: 400 },
    { t: 'panel', tab: 1, view: 'feed', ms: 1400 },
    { t: 'caption', text: 'From now on, new matches come to you by email.' },
  ],
};

const PROJECT_THREAD = { kind: 'project', title: 'Sensor Networks and Data Science for Safe Drinking Water (R01)' };

const CLIP_ANNOUNCEMENT = {
  label: 'A PI turns one announcement into a working application',
  tabs: RES_TABS, tab: 0, view: 'p0', thread: PROJECT_THREAD,
  views: {
    p0: <VProject />,
    p1: <VProject deadline="02/05/2027" />,
    p2: <VProject deadline="02/05/2027" checklist={6} />,
    p3: <VProject deadline="02/05/2027" checklist={6} docs={[['Concept notes', 'concept', 4]]} />,
    p4: <VProject deadline="02/05/2027" checklist={6} docs={[['Concept notes', 'concept', 4], ['Biosketch — Alex Rivera', 'biosketch', 1]]} />,
  },
  steps: [
    { t: 'caption', text: 'Give it the announcement number, or drop in the PDF.' },
    { t: 'type', text: 'Read PAR-26-118 and tell me what it needs.' },
    { t: 'send' },
    { t: 'tool', label: 'Reading the grant document…', summary: 'Read Sensor Networks and Data Science for Safe Drinking Water (R01)', ms: 1300 },
    { t: 'say', text: '[[PAR-26-118]] is an NIH R01: up to 5 years, $500,000 a year in direct costs. The notice has several cycles. The next due date is **February 5, 2027**. Set that as your deadline?', ms: 700 },
    { t: 'type', text: 'Yes. Then build the checklist.' },
    { t: 'send' },
    { t: 'tool', label: 'Setting the deadline…', summary: 'Deadline set to 2027-02-05', ms: 700 },
    { t: 'panel', view: 'p1', ms: 700 },
    { t: 'tool', label: 'Generating the checklist…', summary: 'Checklist generated · 6 items', ms: 1200 },
    { t: 'caption', text: 'A submission checklist built from this announcement’s own requirements.' },
    { t: 'panel', view: 'p2', ms: 1500 },
    { t: 'type', text: 'Brainstorm concepts for this grant.' },
    { t: 'send' },
    { t: 'tool', label: 'Brainstorming concepts… (takes 1–2 minutes — expand to watch live)', summary: 'Brainstormed 2 concepts', ms: 1400 },
    { t: 'artifact', title: 'Concept notes', type: 'concept', tone: 4 },
    { t: 'panel', view: 'p3', ms: 400 },
    { t: 'caption', text: 'It proposes concepts, and you choose the one to carry forward.' },
    { t: 'say', text: '**1.** Calibration that transfers between utilities, so small systems can use low-cost sensors.\n\n**2.** Early warning of contamination from sensor and weather data.\n\nWhich one should be the target concept?', ms: 700 },
    { t: 'type', text: 'Concept 1. Draft my biosketch for it.' },
    { t: 'send' },
    { t: 'tool', label: 'Drafting the biosketch… (takes 1–2 minutes — expand to watch live)', summary: 'Biosketch drafted', ms: 1400 },
    { t: 'artifact', title: 'Biosketch — Alex Rivera', type: 'biosketch', tone: 1, file: true },
    { t: 'panel', view: 'p4', ms: 400 },
    { t: 'caption', text: 'Documents follow the target concept. What it cannot verify is flagged, never invented.' },
    { t: 'say', text: 'Saved, and written around Concept 1. Two items are marked **[PLACEHOLDER]** because I could not verify them: your degree year and one award end date. Fill those in before you submit.', ms: 400 },
  ],
};

const CLIP_TEAM = {
  label: 'A PI finds a co-investigator and a way to reach them',
  tabs: RES_TABS, tab: 0, view: 't0', thread: PROJECT_THREAD,
  views: {
    t0: <VProject deadline="02/05/2027" compact />,
    saved: <VProfile saved={[MAYA]} />,
    t1: <VProject deadline="02/05/2027" team={['Maya Okafor']} compact />,
  },
  steps: [
    { t: 'caption', text: 'Describe the expertise you need in plain words.' },
    { t: 'type', text: 'I need a co-investigator in spatial epidemiology for this application.' },
    { t: 'send' },
    { t: 'tool', label: 'Searching the faculty network…', summary: 'Found 3 people for spatial epidemiology', ms: 1400 },
    { t: 'caption', text: 'Candidates come from your institution’s own faculty, with the reason each one fits.' },
    { t: 'say', text: 'Three people fit best:\n\n- **Maya Okafor**, Epidemiology. Spatial models of waterborne disease; holds an active R01 as PI.\n- **Daniel Cho**, Biostatistics. Bayesian disease mapping.\n- **Priya Raman**, Environmental Health. GIS-based exposure assessment.', ms: 900 },
    { t: 'type', text: 'How am I connected to Maya Okafor?' },
    { t: 'send' },
    { t: 'tool', label: 'Tracing the connection…', summary: 'Traced connection to Maya Okafor', ms: 1200 },
    { t: 'caption', text: 'It finds the warm introduction, with the evidence behind it.' },
    { t: 'say', text: 'You have no direct tie yet. The best introduction is through **Daniel Cho**: you and he have co-authored 3 papers (a solid tie), and he and Dr. Okafor have co-authored 6, most recently in 2025 (a strong tie).', ms: 900 },
    { t: 'type', text: 'Good. Add her to the team.' },
    { t: 'send' },
    { t: 'tool', label: 'Saving collaborator…', summary: 'Saved Maya Okafor', ms: 800 },
    { t: 'panel', tab: 2, view: 'saved', ms: 1300 },
    { t: 'tool', label: 'Saving the team…', summary: 'Team saved · 2 members', ms: 800 },
    { t: 'panel', tab: 0, view: 't1', ms: 900 },
    { t: 'caption', text: 'She is saved and on the project team. Her profile now informs concepts and drafts.' },
    { t: 'say', text: 'Dr. Okafor is on the team. Want me to rework the concepts with her expertise in mind?', ms: 400 },
  ],
};

const PURSUIT_GREETING = 'Pursuit opened for **Environmental Health Sciences Core Centers (P30)** (RFA-ES-26-002; P30; due in 96 days; multi-component).\n\nCoverage for Environmental Health: 4 of 6 capabilities covered, 1 with candidates to check, 3 with a funded lead.\n\nGaps: Community engagement core\n\nSeeded core-lead candidates: Elena Marsh, Tomás Ibarra, Grace Lindqvist, Samuel Adeyemi (outreach status: candidate).';

const CLIP_PURSUIT = {
  label: 'A department chair sizes up a center grant and opens a pursuit',
  tabs: ADM_TABS, tab: 1, view: 'o0', thread: { kind: 'global' },
  placeholder: 'Ask GrantOtter to show where our NIH funding sits by institute',
  views: {
    o0: <VOpps />,
    o1: <VOpps open />,
    o2: <VOpps open pressing />,
    u0: <VPursuit />,
    u1: <VPursuit pi />,
    u2: <VPursuit pi docs={[['Letter of intent', 'loi', 6]]} />,
  },
  steps: [
    { t: 'caption', text: 'Center-scale announcements, scored against your unit’s faculty.' },
    { t: 'type', text: 'Which center grants can our department cover right now?' },
    { t: 'send' },
    { t: 'tool', label: 'Reading the center-opportunity feed…', summary: 'Read 2 center opportunities for Environmental Health', ms: 1300 },
    { t: 'say', text: 'The strongest fit is [[RFA-ES-26-002]], a P30 core center: **4 of 6 capabilities covered**, 1 with candidates to check, and 1 gap (community engagement).', ms: 600 },
    { t: 'caption', text: 'Covered means a named person and a reason, not a similarity score.' },
    { t: 'panel', view: 'o1', ms: 2600 },
    { t: 'caption', text: 'One click opens a pursuit: a shared workspace for this bid.' },
    { t: 'panel', view: 'o2', ms: 700 },
    { t: 'thread', thread: { kind: 'project', title: 'Environmental Health Sciences Core Centers (P30)' } },
    { t: 'panel', tab: 0, view: 'u0', ms: 500 },
    { t: 'say', text: PURSUIT_GREETING, ms: 900 },
    { t: 'type', text: 'Make Elena Marsh the contact PI and draft a letter of intent.' },
    { t: 'send' },
    { t: 'tool', label: 'Updating the pursuit’s members…', summary: 'Elena Marsh set as contact PI', ms: 900 },
    { t: 'panel', view: 'u1', ms: 800 },
    { t: 'tool', label: 'Reading member profiles…', summary: 'Read 4 member profiles', ms: 1100 },
    { t: 'caption', text: 'The letter of intent is drafted from the team’s own profiles.' },
    { t: 'tool', label: 'Saving document…', summary: 'Saved Letter of intent', ms: 800 },
    { t: 'artifact', title: 'Letter of intent', type: 'loi', tone: 6 },
    { t: 'panel', view: 'u2', ms: 600 },
    { t: 'say', text: 'Saved. The draft names the gap plainly: community engagement has no lead yet. Ask me to look outside the department for one.', ms: 400 },
  ],
};

Object.assign(window, { CLIP_PROFILE, CLIP_ANNOUNCEMENT, CLIP_TEAM, CLIP_PURSUIT, RES_TABS, ADM_TABS, VFeed, VProfile, VProject, VOpps, VPursuit, VUnit, VGettingStarted, ME, MAYA });
