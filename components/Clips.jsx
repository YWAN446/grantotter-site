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

/* ── Views: a shared project (web/components/workspace/ShareDialog, DocumentViewer,
      CommentMargin, VersionHistory) ─────────────────────────────────────────────────── */

const SHARE_NOTE = 'Collaborators see everything in this project — details, notes, team profiles, documents and memory — except your chat.';

// The project's Details with the Share panel open, Maya Okafor already an editor.
// step 0: the empty invite row; 1: Daniel Cho's invite being sent; 2: his invite pending.
function VShare({ step = 0 }) {
  return (
    <>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Projects</span>
        <AmBtn kind="out">Share</AmBtn>
      </div>
      <div className="am-share">
        <div className="am-share-row">
          <span className={`am-input grow ${step === 1 ? '' : 'ph'}`}>{step === 1 ? 'd.cho@example.edu' : 'colleague@university.edu'}</span>
          <span className="am-select">{step === 1 ? 'Can view & comment ▾' : 'Can edit ▾'}</span>
          <AmBtn press={step === 1}>Send invite</AmBtn>
        </div>
        {step === 2 && <div className="am-sub">Invite sent to d.cho@example.edu.</div>}
        <div className="am-member">
          <span className="nm">Maya Okafor<small>m.okafor@example.edu</small></span>
          <span style={{display:'flex', gap:6, alignItems:'center'}}><span className="am-select">Can edit ▾</span><span className="am-sub">Remove</span></span>
        </div>
        {step === 2 && (
          <div className="am-member" style={{animation:'amIn .3s ease-out both'}}>
            <span className="nm" style={{color:'var(--am-muted-foreground)'}}>d.cho@example.edu</span>
            <span className="am-sub">invited · viewer · Revoke</span>
          </div>
        )}
        <div className="am-sub">{SHARE_NOTE}</div>
      </div>
      <div className="am-h lg">Sensor Networks and Data Science for Safe Drinking Water (R01)</div>
      <div className="am-two">
        <label className="am-field">Status<span className="am-input">In Progress</span></label>
        <label className="am-field">Deadline<span className="am-input">02/05/2027</span></label>
      </div>
    </>
  );
}

// An open document. stage 'open': two comment threads; 'pressing': Resolve with GrantOtter
// being pressed; 'done': the text revised and no open comments left.
function VDocView({ stage = 'open' }) {
  const done = stage === 'done';
  return (
    <>
      <div className="am-doc-head">
        <span className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Back</span>
        <span style={{flex:1}} />
        <AmBtn kind="out">Edit</AmBtn><AmBtn kind="out">History</AmBtn><AmBtn kind="out">Download Word</AmBtn>
      </div>
      <div className="am-h">Specific Aims</div>
      <div className="am-mode"><span className="b">Viewing</span><span>Select any text to add a comment. Use Edit to change the text.</span></div>
      <div className="am-doctext">
        <p>
          Small water systems serve one in eight Americans, yet most test their water only once a month. We will place{' '}
          {done
            ? <ins>24 low-cost sensors at each of three partner utilities: Hanover, Lake Ridge and Pinecrest</ins>
            : <><mark>a dense sensor network</mark> at <mark>our partner utilities</mark></>}{' '}
          and forecast contamination days before a sample would catch it.
        </p>
        <p><strong>Aim 1.</strong> Build a calibration that transfers between utilities, so a small system can trust a $300 sensor.</p>
      </div>
      <div className="am-comments">
        <div className="hd"><strong>Comments</strong>{!done && <AmBtn press={stage === 'pressing'}>Resolve with GrantOtter (2)</AmBtn>}</div>
        {done ? (
          <>
            <div className="am-sub">No open comments.</div>
            <div className="am-sub" style={{textDecoration:'underline'}}>2 resolved</div>
          </>
        ) : (
          <>
            <div className="am-sub">From <i className="am-tick" /> Maya Okafor <i className="am-tick" /> Daniel Cho · Select all · Clear</div>
            {/* In document order, as the app lists them. */}
            <div className="am-comment">
              <div className="q"><i className="am-tick" /> “a dense sensor network”</div>
              <div><span className="am-by">Daniel Cho:</span> Say how many sensors per site.</div>
            </div>
            <div className="am-comment">
              <div className="q"><i className="am-tick" /> “our partner utilities”</div>
              <div><span className="am-by">Maya Okafor:</span> Name the three utilities. Reviewers will look for the sites.</div>
              <div className="reply"><span className="am-by">Alex Rivera:</span> Agreed: Hanover, Lake Ridge and Pinecrest.</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// History: every version with who made it, and what changed since the picked one.
function VHistory() {
  const versions = [
    ['v3', 'Applied comments', 'Alex Rivera', 'Oct 24, 4:12 PM'],
    ['v2', 'Manual save', 'Maya Okafor', 'Oct 23, 9:40 AM'],
    ['v1', 'Assistant update', 'Alex Rivera', 'Oct 21, 2:05 PM'],
  ];
  return (
    <>
      <div className="am-doc-head">
        <span className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Back</span>
        <span style={{flex:1}} />
        <AmBtn kind="out">Edit</AmBtn><AmBtn kind="out">Close history</AmBtn><AmBtn kind="out">Download Word</AmBtn>
      </div>
      <div className="am-h">Specific Aims</div>
      <div className="am-mode"><span className="b">History</span><span>Compare earlier versions with the current text, or restore one.</span></div>
      {versions.map(([v, src, who, when], i) => (
        <div key={v} className={`am-version ${i === 0 ? 'on' : ''}`}>
          <strong>{v}</strong> <span>{src}</span> <span>by {who}</span> <small>{when}</small>
        </div>
      ))}
      <div className="am-diffhead"><strong>v3 → current</strong><AmBtn kind="out">Restore v3</AmBtn></div>
      <div className="am-diff">
        We will place <del>a dense sensor network at our partner utilities</del>{' '}
        <ins>24 low-cost sensors at each of three partner utilities: Hanover, Lake Ridge and Pinecrest</ins> and forecast
        contamination days before a sample would catch it.
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

// "Resolve with GrantOtter" sends the ticked threads as one message, in document order
// (CommentMargin's buildApplyMessage, ids left out here for reading).
const APPLY_MESSAGE = 'Apply my 2 open comments on "Specific Aims":\n1. "a dense sensor network" — Daniel Cho: Say how many sensors per site.\n2. "our partner utilities" — Maya Okafor: Name the three utilities. Reviewers will look for the sites.\nReply from Alex Rivera: Agreed: Hanover, Lake Ridge and Pinecrest.';

const CLIP_TOGETHER = {
  label: 'A PI shares the application and works through co-authors’ comments',
  tabs: RES_TABS, tab: 0, view: 's0', thread: PROJECT_THREAD,
  placeholder: 'Ask GrantOtter about this project',
  views: {
    s0: <VShare />,
    s1: <VShare step={1} />,
    s2: <VShare step={2} />,
    d0: <VDocView />,
    d1: <VDocView stage="pressing" />,
    d2: <VDocView stage="done" />,
    h: <VHistory />,
  },
  steps: [
    { t: 'caption', text: 'Share a project by email: each person can edit, or view and comment.' },
    { t: 'say', text: 'Your **Specific Aims** draft is saved in Documents. When you want your co-investigators’ comments, share the project with them.', ms: 900 },
    { t: 'panel', view: 's1', ms: 1100 },
    { t: 'panel', view: 's2', ms: 400 },
    { t: 'caption', text: 'They see the whole project: documents, notes, team and checklist. Your own chat stays private.' },
    { t: 'wait', ms: 2200 },
    { t: 'panel', view: 'd0', ms: 500 },
    { t: 'caption', text: 'Co-authors comment in the margin, and every comment carries a name.' },
    { t: 'wait', ms: 2600 },
    { t: 'caption', text: 'Tick the comments to apply, and hand them to GrantOtter.' },
    { t: 'panel', view: 'd1', ms: 800 },
    { t: 'post', text: APPLY_MESSAGE, ms: 700 },
    { t: 'tool', label: 'Reading saved document…', summary: 'Read document \'Specific Aims\'', ms: 1000 },
    { t: 'tool', label: 'Editing the document…', summary: 'Applied 2 edit(s) to \'Specific Aims\'', ms: 1300 },
    { t: 'tool', label: 'Resolving the comment…', summary: 'Resolved the comment — 24 sensors per site', ms: 700 },
    { t: 'tool', label: 'Resolving the comment…', summary: 'Resolved the comment — Named the three utilities', ms: 700 },
    { t: 'panel', view: 'd2', ms: 500 },
    { t: 'say', text: 'Done. Aim 1 now names **Hanover, Lake Ridge and Pinecrest**, and the sensor network is **24 sensors per site**. Both threads are resolved with a note, so Maya and Daniel see what changed.', ms: 900 },
    { t: 'caption', text: 'Every change is a version, with who made it. Compare or restore any of them.' },
    { t: 'panel', view: 'h', ms: 2600 },
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

/* ── Views: checklist guides and the deep tools (posts of November 2026) ─────────────── */

// The project's checklist with who-handles tags (web HandledByTag: You / RA / Inst / Letters …),
// due dates and the ? that opens an item's guide under its row (GuideDrawer).
const GUIDE_ROWS = [
  ['you', 'You', 'Specific Aims (1 page)', '01/15/2027', 'aims'],
  ['you', 'You', 'Research Strategy (12 pages)', '01/22/2027'],
  ['ra', 'RA', 'eRA Commons account (PD/PI role)', '12/01/2026', 'era'],
  ['you', 'You', 'Biosketches (PI + Co-I)', '01/08/2027'],
  ['ra', 'RA', 'Budget and justification', '01/20/2027'],
  ['let', 'Letters', 'Letters of support', '01/10/2027'],
  ['inst', 'Inst', 'Institutional sign-off and routing', '01/29/2027'],
];

function GuideEra({ done }) {
  return (
    <div className="am-drawer">
      <div className="t">eRA Commons account (PD/PI role)</div>
      <div className="am-sub">Handled by your research administrator</div>
      <h6>What this is</h6>
      <div>The login NIH uses for applications and awards. A PD/PI needs one with the PI role, and only your institution can create it.</div>
      <h6>Steps</h6>
      <ol>
        <li>Check whether you already have an account: a PD/PI keeps one for their whole career.</li>
        <li>Find your institution’s signing official, usually in the sponsored programs office.</li>
        <li>Ask your department’s research administrator to request it, with the PI role.</li>
        <li>Watch your email for the new account notice, then set your password.</li>
      </ol>
      <h6>Official pages</h6>
      <div className="src">Create and manage Commons accounts · era.nih.gov</div>
      <h6>Common problems</h6>
      <div>Two accounts for one person; a role without PI access.</div>
      {done
        ? <div className="am-sub">Recorded. Your next checklist will offer to check this off.</div>
        : <div className="am-btns"><AmBtn kind="out">Walk me through it</AmBtn><AmBtn kind="out">Draft the email to my department research administrator</AmBtn><AmBtn kind="out">I already have one</AmBtn></div>}
    </div>
  );
}

function GuideAims() {
  return (
    <div className="am-drawer">
      <div className="t">Specific Aims</div>
      <div className="am-sub">Handled by you</div>
      <h6>What this is</h6>
      <div>The one-page opening of the application: the problem, the objective, the central hypothesis and two to four aims. Reviewers read it first.</div>
      <div className="am-btns">
        <AmBtn kind="out">Walk me through it</AmBtn><AmBtn kind="out">Draft it with GrantOtter</AmBtn><AmBtn kind="out">Review my draft</AmBtn>
      </div>
      <div className="am-btns" style={{justifyContent:'flex-end', marginTop:2}}>
        <AmBtn kind="gold">Deep draft · 5 to 20 minutes</AmBtn><AmBtn kind="gold">Deep review · 2 to 4 minutes</AmBtn>
      </div>
    </div>
  );
}

// open: null | 'era' | 'aims'; done: the eRA Commons item checked off and recorded.
function VChecklistGuide({ open = null, done = false }) {
  return (
    <>
      <div className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Projects</div>
      <div className="am-h lg">Sensor Networks and Data Science for Safe Drinking Water (R01)</div>
      <div>
        <div className="am-h">Checklist</div>
        <div className="am-sub" style={{margin:'2px 0 6px'}}>Click ? on an item for a guide and ready-made prompts for GrantOtter.</div>
        {GUIDE_ROWS.map(([h, short, label, due, key], i) => {
          const checked = key === 'era' && done;
          return (
            <React.Fragment key={label}>
              <div className={`am-crow ${checked ? 'done' : ''}`} style={{animationDelay: `${i * 70}ms`}}>
                <i className={checked ? 'on' : ''} />
                <span className={`am-htag ${h}`}>{short}</span>
                <span className="lb">{label}</span>
                <span className="dt">{due}</span>
                <span className={`hp ${key && key === open ? 'on' : ''}`}>?</span>
              </div>
              {key === 'era' && open === 'era' && <GuideEra done={done} />}
              {key === 'aims' && open === 'aims' && <GuideAims />}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

function AmDocHead({ history }) {
  return (
    <div className="am-doc-head">
      <span className="am-sub" style={{fontWeight:500, color:'var(--am-foreground)'}}>← Back</span>
      <span style={{flex:1}} />
      <AmBtn kind="out">Edit</AmBtn><AmBtn kind="out">{history ? 'Close history' : 'History'}</AmBtn><AmBtn kind="out">Download Word</AmBtn>
    </div>
  );
}

const VIEWING = <div className="am-mode"><span className="b">Viewing</span><span>Select any text to add a comment. Use Edit to change the text.</span></div>;

// The saved deep review: the verdict and priorities first, then (among its sections) feasibility.
function VDeepReview() {
  const years = [
    ['1', 'Install 24 sensors at each of the three utilities; collect calibration data (Aim 1)'],
    ['2', 'Test the calibration at a site it was not trained on (Aim 1); build the forecasts (Aim 2)'],
    ['3', 'Validate the forecasts against monthly samples (Aim 2)'],
    ['4–5', 'Early-warning pilot with utility staff (Aim 3)'],
  ];
  return (
    <>
      <AmDocHead />
      <div className="am-h">Deep review — Specific Aims</div>
      {VIEWING}
      <div className="am-doctext">
        <p><strong>Verdict.</strong> The problem is clear and the sensor approach is credible. The page promises more than three utilities and five years can show.</p>
        <div className="am-verdict">
          <strong>Three things need work, in this order:</strong>
          <ol>
            <li>The forecast claim has no baseline to measure it against.</li>
            <li>Say how the calibration is shown to work at a new utility.</li>
            <li>Aim 3 does not fit the budget beside Aims 1 and 2: stage it.</li>
          </ol>
        </div>
        <p style={{margin:'10px 0 6px'}}><strong>5. Feasibility within the award</strong></p>
        <table className="am-table">
          <thead><tr><th>Year</th><th>Work the page commits to</th></tr></thead>
          <tbody>{years.map(([y, w]) => <tr key={y}><td>{y}</td><td>{w}</td></tr>)}</tbody>
        </table>
        <p style={{margin:'8px 0 6px'}}><strong>Verdict: stretched.</strong> Stage the pilot to Years 4 and 5 at the two utilities where the forecasts hold.</p>
        <p className="am-sub">Sources: 7 linked pages · An AI rehearsal of review — not a prediction of the real panel.</p>
      </div>
    </>
  );
}

// The draft with the review's findings as comments in the margin (GrantOtter, marked AI).
function VReviewOnDraft() {
  return (
    <>
      <AmDocHead />
      <div className="am-h">Specific Aims</div>
      {VIEWING}
      <div className="am-doctext">
        <p>Small water systems test their water about once a month. We will place 24 low-cost sensors at each of three partner utilities and <mark>forecast contamination days before a sample would catch it</mark>.</p>
        <p><strong>Aim 1.</strong> <mark>Build a calibration that transfers between utilities</mark>, so a small system can trust a $300 sensor.</p>
      </div>
      <div className="am-comments">
        <div className="hd"><strong>Comments</strong><AmBtn>Apply comments (3)</AmBtn></div>
        <div className="am-comment">
          <div className="q">On the whole page</div>
          <div><span className="am-by">GrantOtter</span> <span className="am-ai">AI</span> The page runs about 80 words over one page. Aim 3 is the place to cut.</div>
        </div>
        <div className="am-comment">
          <div className="q">“forecast contamination days before a sample would catch it”</div>
          <div><span className="am-by">GrantOtter</span> <span className="am-ai">AI</span> State the baseline: how many days a monthly sample misses today.</div>
          <div className="am-sugg">
            <span className="am-sub">Suggested edit</span>
            <span><del>days before a sample</del> <ins>a median of [PLACEHOLDER: days] before a monthly sample</ins></span>
            <span style={{display:'flex', gap:6}}><AmBtn kind="out">Accept</AmBtn><AmBtn kind="ghost">Reject</AmBtn></span>
          </div>
        </div>
        <div className="am-comment">
          <div className="q">“Build a calibration that transfers between utilities”</div>
          <div><span className="am-by">GrantOtter</span> <span className="am-ai">AI</span> Say how transfer is shown: train at two utilities, test at the third.</div>
        </div>
      </div>
    </>
  );
}

// History after a deep revision: the version saved before it, and the change since.
function VDeepHistory() {
  const versions = [
    ['v4', 'Applied comments — before deep revision', 'Alex Rivera', 'Nov 12, 3:31 PM'],
    ['v3', 'Applied comments', 'Alex Rivera', 'Nov 12, 2:58 PM'],
    ['v2', 'Manual save', 'Alex Rivera', 'Nov 11, 9:40 AM'],
  ];
  return (
    <>
      <AmDocHead history />
      <div className="am-h">Specific Aims</div>
      <div className="am-mode"><span className="b">History</span><span>Compare earlier versions with the current text, or restore one.</span></div>
      {versions.map(([v, src, who, when], i) => (
        <div key={v} className={`am-version ${i === 0 ? 'on' : ''}`}>
          <strong>{v}</strong> <span>{src}</span> <span>by {who}</span> <small>{when}</small>
        </div>
      ))}
      <div className="am-diffhead"><strong>v4 → current</strong><AmBtn kind="out">Restore v4</AmBtn></div>
      <div className="am-diff">
        <strong>Aim 3.</strong> <del>Run an early-warning pilot with utility staff across the award.</del>{' '}
        <ins>In Years 4 and 5, run an early-warning pilot with utility staff at the two utilities where the forecasts validate.</ins>
      </div>
    </>
  );
}

// A grayscale study-flow diagram in the house style of the deep draft's figures.
function StudyFlowSvg() {
  const box = (x, y, a, b, fill) => (
    <g key={a}>
      <rect x={x} y={y} width="250" height="74" rx="10" fill={fill} stroke="#333333" strokeWidth="2" />
      <text x={x + 125} y={y + 31} textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="700" fill="#222222">{a}</text>
      <text x={x + 125} y={y + 54} textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fill="#222222">{b}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 600 236" role="img" aria-label="Study flow: sensors at three utilities feed Aim 1, Aim 1 feeds Aim 2, Aim 2 feeds Aim 3 in Years 4 and 5, with a dashed feedback line">
      <defs>
        <marker id="amFlowArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#333333" />
        </marker>
      </defs>
      {box(20, 18, 'Three utilities', '24 sensors at each', '#FFFFFF')}
      {box(330, 18, 'Aim 1', 'Calibration that transfers', '#EEEEEE')}
      {box(330, 144, 'Aim 2', 'Contamination forecasts', '#EEEEEE')}
      {box(20, 144, 'Aim 3 · Years 4–5', 'Early-warning pilot', '#D9D9D9')}
      <line x1="270" y1="55" x2="326" y2="55" stroke="#333333" strokeWidth="2.5" markerEnd="url(#amFlowArrow)" />
      <line x1="455" y1="92" x2="455" y2="140" stroke="#333333" strokeWidth="2.5" markerEnd="url(#amFlowArrow)" />
      <line x1="330" y1="181" x2="274" y2="181" stroke="#333333" strokeWidth="2.5" markerEnd="url(#amFlowArrow)" />
      <line x1="145" y1="144" x2="145" y2="96" stroke="#333333" strokeWidth="2" strokeDasharray="7 6" markerEnd="url(#amFlowArrow)" />
      <text x="156" y="124" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fill="#444444">feedback</text>
    </svg>
  );
}

// A deep-drafted Research Strategy: a drawn figure with its caption under it, a table with its
// caption above it, and a placeholder where a number could not be verified.
function VFigureDoc() {
  const rows = [
    ['Hanover', '24', 'Years 1–3'],
    ['Lake Ridge', '24', 'Years 1–3'],
    ['Pinecrest', '24', 'Years 2–3'],
  ];
  return (
    <>
      <AmDocHead />
      <div className="am-h">Research Strategy</div>
      {VIEWING}
      <div className="am-doctext">
        <p><strong>C.2 Approach.</strong> The three aims build on one another (Figure 1). Sensors at three partner utilities feed a calibration that must work at a site it was not trained on, and the calibrated data feed the forecasts.</p>
      </div>
      <div className="am-fig"><StudyFlowSvg /></div>
      <div className="am-figcap">Figure 1. Study flow across the three aims.</div>
      <div className="am-tcap">Table 1. Sensor deployment by utility.</div>
      <table className="am-table">
        <thead><tr><th>Utility</th><th>Sensors</th><th>Monitoring</th></tr></thead>
        <tbody>{rows.map(r => <tr key={r[0]}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
      <div className="am-doctext">
        <p>Pilot data show the sensors detect turbidity events <span className="am-ph">[PLACEHOLDER: hours]</span> before the monthly sample.</p>
      </div>
    </>
  );
}

/* ── Scripts: checklist guides and the deep tools ────────────────────────────────────── */

const CLIP_GUIDE = {
  label: 'A first-time PI gets an eRA Commons account in place, step by step',
  tabs: RES_TABS, tab: 0, view: 'g0', thread: PROJECT_THREAD,
  views: {
    g0: <VChecklistGuide />,
    g1: <VChecklistGuide open="era" />,
    g2: <VChecklistGuide open="era" done />,
  },
  steps: [
    { t: 'caption', text: 'Every checklist item says who handles it: you, your research administrator, your institution.' },
    { t: 'wait', ms: 1800 },
    { t: 'caption', text: 'Click ? for its guide: what it is, the steps, the official pages.' },
    { t: 'panel', view: 'g1', ms: 2200 },
    { t: 'post', text: 'Walk me through the checklist item "eRA Commons account (PD/PI role)" for this project' },
    { t: 'tool', label: 'Reading the requirement guide…', summary: 'Read the guide: eRA Commons account (PD/PI role)', ms: 900 },
    { t: 'say', text: '**Step 1 of 7.** Check whether you already have an eRA Commons account. A PD/PI keeps one account for their whole career, so a second one causes trouble later. Have you ever had one?', ms: 200 },
    { t: 'chips', items: ['No, never', 'Yes, I have one', 'I’m stuck here'] },
    { t: 'caption', text: 'One step at a time, in the chat. It keeps your place if you stop.' },
    { t: 'type', text: 'No, never.' },
    { t: 'send' },
    { t: 'say', text: '**Step 2 of 7.** Only your institution can create the account. The usual route is your department’s research administrator, who asks the signing official for it with the PI role. Want me to draft that request?', ms: 200 },
    { t: 'chips', items: ['Draft the email to my department research administrator', 'Done with this step', 'I’m stuck here'] },
    { t: 'post', text: 'Draft the email to my department research administrator about eRA Commons account (PD/PI role)' },
    { t: 'tool', label: 'Preparing the ask…', summary: 'Prepared the ask to the department research administrator', ms: 800 },
    { t: 'email', to: 'Jordan Patel <j.patel@example.edu>', subject: 'eRA Commons account with the PI role',
      body: ['Dear Jordan,', 'I am preparing an NIH R01 due February 5 and need an eRA Commons account with the PI role. Could you ask our signing official to create it? I have never had one.', 'Thank you,', 'Alex Rivera'] },
    { t: 'caption', text: 'An email to the person who handles it. Copy it or open it in your mail app; GrantOtter never sends it.' },
    { t: 'wait', ms: 2000 },
    { t: 'type', text: 'Jordan set it up. I have my Commons ID now.' },
    { t: 'send' },
    { t: 'tool', label: 'Recording that as done…', summary: "Checked off 'eRA Commons account (PD/PI role)' — 1 of 7 done", ms: 800 },
    { t: 'panel', view: 'g2', ms: 500 },
    { t: 'say', text: 'Checked off. I’ll remember you have a Commons ID, so your next NIH checklist offers to check it off in one step.', ms: 300 },
    { t: 'caption', text: 'Done once, remembered for your next NIH project.' },
  ],
};

const CLIP_DEEP = {
  label: 'A PI takes the Specific Aims through a deep review and a deep revision',
  tabs: RES_TABS, tab: 0, view: 'd0', thread: PROJECT_THREAD,
  views: {
    d0: <VChecklistGuide open="aims" />,
    d1: <VDeepReview />,
    d2: <VReviewOnDraft />,
    d3: <VDeepHistory />,
  },
  steps: [
    { t: 'caption', text: 'Deep draft and deep review sit beside the quick options, in gold.' },
    { t: 'wait', ms: 1800 },
    { t: 'post', text: 'Deep review my Specific Aims draft' },
    { t: 'tool', label: 'Deep review… (searching the web — takes 2 to 4 minutes)', ms: 3600, summary: "Saved 'Deep review — Specific Aims'",
      progress: ['Reading the announcement and the writing guide…', 'Searching: low-cost sensor calibration across sites', 'Searching: small water system sampling frequency', 'Writing…'] },
    { t: 'artifact', title: 'Deep review — Specific Aims', type: 'review', tone: 5 },
    { t: 'panel', view: 'd1', ms: 400 },
    { t: 'caption', text: 'A verdict and the priorities first, then the page, the science, the rules and feasibility, with sources.' },
    { t: 'say', text: 'The problem and the sensor approach are strong. **Three things need work, in this order:** a baseline for the forecast claim, how the calibration is shown to transfer, and Aim 3, which does not fit the budget beside Aims 1 and 2.', ms: 200 },
    { t: 'chips', items: ['Put the review’s comments on my draft', 'Revise my Specific Aims in depth'] },
    { t: 'post', text: 'Put the review’s comments on my draft' },
    { t: 'tool', label: 'Adding the review’s comments…', summary: "Added 3 comments to 'Specific Aims'", ms: 900 },
    { t: 'panel', view: 'd2', ms: 600 },
    { t: 'caption', text: 'The findings land on the draft as comments, many with a suggested edit.' },
    { t: 'wait', ms: 1600 },
    { t: 'type', text: 'Agreed on the first two. Keep Aim 3 but stage it to Years 4 and 5. Revise it in depth.' },
    { t: 'send' },
    { t: 'tool', label: 'Deep revision… (verifying, revising, checking the fit — takes 4 to 8 minutes)', ms: 3600, summary: "Revised 'Specific Aims' as a new version; fits in 1 page",
      progress: ['Plan: 4 changes, in the review’s order', 'Verifying the facts and numbers…', 'Revising the text…', 'Checking the fit: 1 page'] },
    { t: 'panel', view: 'd3', ms: 500 },
    { t: 'say', text: 'Saved as a new version: Aim 3 now runs in Years 4 and 5. One number I could not verify is marked **[PLACEHOLDER: baseline detection delay]**. Fill it in from your pilot data.', ms: 300 },
    { t: 'caption', text: 'A new version, with every change in History. What it can’t verify is marked, never guessed.' },
  ],
};

Object.assign(window, { CLIP_GUIDE, CLIP_DEEP, VChecklistGuide, VDeepReview, VReviewOnDraft, VDeepHistory, VFigureDoc, CLIP_PROFILE, CLIP_ANNOUNCEMENT, CLIP_TEAM, CLIP_TOGETHER, CLIP_PURSUIT, RES_TABS, ADM_TABS, VFeed, VProfile, VProject, VOpps, VPursuit, VUnit, VGettingStarted, VShare, VDocView, VHistory, ME, MAYA });
