const { useState: useStateL } = React;

// Newest first. Add an entry here whenever a feature ships — the bar above the hero
// always shows the top entry and links out (e.g. to the launch blog post).
const UPDATES = [
  {
    tag: 'Pricing',
    title: 'Plans start January 1, 2027.',
    desc: 'Grant alerts stay free, and everyone with an account before December 1 has Pro free through December 31.',
    href: '#blog/pricing',
    cta: 'Read the announcement',
  },
  {
    tag: 'New',
    title: 'GrantOtter 2.0',
    desc: 'The chat-first rebuild is live at app.grantotter.com. Same account, same projects and history.',
    href: '#blog/grantotter-2-0',
    cta: 'Read the launch post',
  },
];

function Announce() {
  const u = UPDATES[0];
  if (!u) return null;
  return (
    <div className="announce">
      <a href={u.href}>
        <span className="pill">{u.tag}</span>
        <span><strong>{u.title}</strong> {u.desc}</span>
        <span className="more">{u.cta}</span>
      </a>
    </div>
  );
}

const CASES = [
  { key: 'profile',      who: 'New to the faculty',      what: 'Find grants that fit my work',       script: () => CLIP_PROFILE },
  { key: 'announcement', who: 'Holding an announcement', what: 'Turn it into an application',        script: () => CLIP_ANNOUNCEMENT },
  { key: 'team',         who: 'Missing an expertise',    what: 'Find the right co-investigator',     script: () => CLIP_TEAM,
    note: <>Faculty search comes with an <span className="text-link" role="link" tabIndex={0} data-route="institutions">institution subscription</span>.</> },
];

function Hero({ setRoute }) {
  // ?case=announcement|team opens that example first (handy for sharing a link to one use case).
  const [active, setActive] = useStateL(() => {
    const m = /[?&]case=([a-z]+)/.exec(window.location.search);
    const i = m ? CASES.findIndex(x => x.key === m[1]) : -1;
    return i < 0 ? 0 : i;
  });
  const c = CASES[active];
  const move = (step) => {
    const next = (active + step + CASES.length) % CASES.length;
    setActive(next);
    const el = document.getElementById(`case-tab-${CASES[next].key}`);
    if (el) el.focus();
  };
  const onKeys = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-top">
          <h1 className="display">
            Find the grant.<br/>
            Build the team.<br/>
            <span className="soft">Draft the application.</span>
          </h1>
          <div className="hero-side">
            <p>
              GrantOtter is a grant assistant for researchers. Tell it about your work once.
              It keeps matching funding to you and works through each application with you,
              in one conversation.
            </p>
            <div className="hero-actions">
              <a href={APP_URL} target="_blank" rel="noopener" className="btn btn-signal">Start free</a>
              <span className="text-link" role="link" tabIndex={0}
                    onClick={() => document.getElementById('launch-video').scrollIntoView({ block: 'center' })}
                    onKeyDown={(e) => { if (e.key === 'Enter') document.getElementById('launch-video').scrollIntoView({ block: 'center' }); }}>
                Watch the one-minute video
              </span>
            </div>
            <div className="proof">Used by researchers at more than 50 institutions. Grant alerts are free; no credit card to start.</div>
          </div>
        </div>

        <div className="cases" role="tablist" aria-label="Examples by need" onKeyDown={onKeys}>
          {CASES.map((x, i) => (
            <button key={x.key} role="tab" id={`case-tab-${x.key}`} aria-selected={i === active} aria-controls="case-panel"
                    tabIndex={i === active ? 0 : -1} className="case-tab" onClick={() => setActive(i)}>
              <span className="who">{x.who}</span>
              <span className="what">{x.what}</span>
            </button>
          ))}
        </div>
        <div id="case-panel" role="tabpanel" aria-labelledby={`case-tab-${c.key}`}>
          <AppClip key={c.key} script={c.script()} />
          <div className="case-note">
            <span>An example in the real app’s layout. The people, grants and numbers are invented.</span>
            {c.note && (
              <span onClick={(e) => { if (e.target.dataset && e.target.dataset.route) setRoute(e.target.dataset.route); }}
                    onKeyDown={(e) => { if (e.key === 'Enter' && e.target.dataset && e.target.dataset.route) setRoute(e.target.dataset.route); }}>
                {c.note}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="sec">
      <div className="container">
        <SecHead title="Three steps, and the first one takes two minutes.">
        </SecHead>
        <div className="steps">
          <div className="step">
            <h3>Tell it who you are</h3>
            <p>Give your name and institution, or drop in your CV. GrantOtter reads your public record, shows you a sourced summary to confirm, then writes your researcher profile.</p>
          </div>
          <div className="step">
            <h3>Get matches without searching</h3>
            <p>Thousands of open federal and foundation opportunities are checked against your eligibility and ranked for fit. The best ones reach your inbox on a Monday, each with the reason it fits: monthly on Free, weekly on Pro and Max.</p>
          </div>
          <div className="step">
            <h3>Work the application in one chat</h3>
            <p>Every application is a project with its own conversation: the deadline, the team, a checklist from the announcement, proposal concepts, and draft application documents.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchVideo() {
  return (
    <section className="sec tint" id="launch-video">
      <div className="container">
        <SecHead title="The whole workflow in one minute." />
        <div className="shot">
          <video controls playsInline preload="metadata" poster="media/grantotter-2-launch-poster.jpg" style={{width:'100%', display:'block'}}>
            <source src="media/grantotter-2-launch.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
}

const TOOLS = [
  { name: 'Researcher profile',  plan: 'Free',
    desc: 'Built from your name and institution, or your CV, with sources, and confirmed by you before it is saved.' },
  { name: 'Grant matching',      plan: 'Free: monthly alerts and one live match. Pro and Max: weekly alerts.',
    desc: 'Eligibility checked first, then ranked across federal and foundation funders, each match with a plain reason.' },
  { name: 'Projects',            plan: 'Pro and Max',
    desc: 'One conversation per application that keeps the deadline, team, checklist and documents, and remembers your decisions.' },
  { name: 'Concept brainstorming', plan: 'Pro and Max',
    desc: 'Two or three proposal concepts for a specific announcement, shaped by your team’s profiles, with budget estimates.' },
  { name: 'Documents',           plan: 'Pro and Max',
    desc: 'NIH biosketch, data management and sharing plan, and a budget brief with justification, as editable Word and Excel files.' },
  { name: 'Collaborator search', plan: 'Institution subscription',
    desc: 'Describe the expertise you need and find faculty who have it, with how you are connected to each of them.' },
];

function WhatsIncluded({ setRoute }) {
  return (
    <section className="sec">
      <div className="container">
        <SecHead title="What you can ask it to do.">
          These are the six things researchers use most. You never pick a tool from a menu: you ask,
          and the assistant does the work.
        </SecHead>
        <div className="tools">
          {TOOLS.map(t => (
            <div key={t.name} className="tool" role="link" tabIndex={0}
                 onClick={() => setRoute('features')} onKeyDown={(e) => { if (e.key === 'Enter') setRoute('features'); }}>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <span className="plan-line">{t.plan}</span>
            </div>
          ))}
        </div>
        <p style={{marginTop:32}}>
          <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute('features')} onKeyDown={(e) => { if (e.key === 'Enter') setRoute('features'); }}>See each feature with an example</span>
          <span className="small" style={{margin:'0 12px'}}>or</span>
          <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute('pricing')} onKeyDown={(e) => { if (e.key === 'Enter') setRoute('pricing'); }}>compare the plans</span>
        </p>
      </div>
    </section>
  );
}

function Inbox({ setRoute }) {
  const emails = [
    { tag: 'Alerts',     color: 'orange', name: 'Grant alerts',          desc: 'Your top matches, scored against your profile, with deadlines and award sizes.', how: 'Needs a saved profile. Weekly on Pro and Max, monthly on Free.' },
    { tag: 'Federal',    color: 'teal',   name: 'Federal news brief',    desc: 'New opportunities, policy changes and deadline moves from NIH, NSF and DARPA, summarized and linked.', how: 'Weekly, with a free account.' },
    { tag: 'Foundation', color: 'teal',   name: 'Foundation newsletter', desc: 'Funding news gathered from hundreds of foundation and nonprofit newsletters and websites.', how: 'Weekly, with a free account.' },
  ];
  return (
    <section className="sec tint">
      <div className="container">
        <div className="split top">
          <div>
            <SecHead title="The grants come to you on Monday.">
              A free account brings two news briefs each week. Save your researcher profile and the third email
              starts: grant alerts matched to your own work.
            </SecHead>
            <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:-16}}>
              <button className="btn btn-ghost" onClick={() => setRoute('sample-brief')}>Read a sample issue</button>
              <RssSubscribeButton label="RSS" btnClass="btn btn-ghost" />
            </div>
          </div>
          <div>
            {emails.map(item => (
              <div key={item.name} className="mail-row">
                <div><span className={`tag ${item.color}`}>{item.tag}</span></div>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.desc}</p>
                  <div className="how">{item.how}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InstitutionsStrip({ setRoute }) {
  return (
    <section className="sec band">
      <div className="container">
        <div className="split">
          <div>
            <h2 className="h2">Run a department, a school or a research office?</h2>
            <p className="muted" style={{marginTop:18, fontSize:18, lineHeight:1.6, maxWidth:520}}>
              An institution subscription maps your faculty’s expertise, funding and working ties,
              then answers the questions that usually take a month of emails.
            </p>
            <div style={{marginTop:28}}>
              <button className="btn btn-ghost" onClick={() => setRoute('institutions')}>See GrantOtter for institutions</button>
            </div>
          </div>
          <ul className="band-list">
            <li>Which center grants can our faculty cover today, and where are the gaps?</li>
            <li>Who could lead each core, and who already holds a similar award?</li>
            <li>Which of our topics have senior faculty and no early-career pipeline?</li>
            <li>Who here works on this, and who can introduce me?</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="sec">
      <div className="container">
        <SecHead title="Built for work you have to put your name on." />
        <div className="trust">
          <div>
            <h3>Your documents never train a model</h3>
            <p>Your CV, aims and drafts are processed through Anthropic’s Claude API, which does not train on API data. They stay in your account, and you can delete them at any time.</p>
          </div>
          <div>
            <h3>Nothing is invented</h3>
            <p>When the assistant cannot verify a fact for a biosketch or a budget, it leaves a marked placeholder and lists it for you to fill in before you submit.</p>
          </div>
          <div>
            <h3>Grant data you can trace</h3>
            <p>Federal opportunities come from Grants.gov and are refreshed every Monday, with closed ones removed. Every match links to the funder’s own announcement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep in step with the FAQPage JSON-LD in index.html.
const HOME_FAQS = [
  {
    q: 'What does GrantOtter cost?',
    a: 'Grant alerts stay free (monthly on the Free plan), and so do your Feed, the news briefs and building your researcher profile — no credit card, no demo call. Weekly alerts, the full assistant, projects and documents are Pro at $20/month or Max at $80/month, from January 1, 2027. Plans open December 1, 2026, and everyone with an account before then has Pro free through December 31.',
  },
  {
    q: 'Is my CV or proposal used to train AI models?',
    a: 'No. Nothing you upload — CV, specific aims, proposal drafts — is ever used to train any AI model. Documents are processed through Anthropic\'s Claude API, which does not train on API data, and stored in your account where only you can access them. Delete them anytime.',
  },
  {
    q: 'Where does the grant data come from?',
    a: 'Federal opportunities are pulled from Grants.gov (NIH, NSF, DARPA, DOE, and more) and refreshed every Monday, with closed grants pruned automatically. Foundation opportunities from hundreds of funders are curated weekly from funder newsletters and websites.',
  },
  {
    q: 'How is this different from Pivot or my university\'s funding database?',
    a: 'Tools like Pivot-RP and GrantForward are search databases licensed by your institution — you run keyword searches and read listings. GrantOtter is self-serve, starts free, and goes past discovery: it builds your researcher profile automatically, checks eligibility, explains every match in plain language, finds collaborators, drafts concepts, and generates the boilerplate documents. A workspace, not a directory.',
  },
  {
    q: 'Do I need my institution to buy anything?',
    a: 'No. Unlike institution-licensed tools, GrantOtter is self-serve: any researcher can sign up directly, on the free plan or a personal Pro or Max plan. Faculty search across a department, school or institution comes with an institution subscription, priced per institution or unit — if you\'d like yours on board, request a quote.',
  },
  {
    q: 'Who built GrantOtter?',
    a: 'A researcher who got tired of spending research time on the grant process. GrantOtter is the tool we wanted for our own workflow — built for researchers, by researchers.',
  },
];

function FaqSection({ setRoute }) {
  return (
    <section className="sec tint">
      <div className="container">
        <SecHead title="Questions before you sign up." />
        <div className="faq">
          {HOME_FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <p style={{marginTop:28}}>
          <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute('help')} onKeyDown={(e) => { if (e.key === 'Enter') setRoute('help'); }}>More answers in Help</span>
        </p>
      </div>
    </section>
  );
}

function FinalCTA({ setRoute }) {
  return (
    <section className="cta-final">
      <div className="container">
        <h2>Tell it who you are and where you work. See your first matches in minutes.</h2>
        <div style={{marginTop:36}}>
          <a href={APP_URL} target="_blank" rel="noopener" className="btn btn-signal">Start free</a>
        </div>
        <div className="links">
          <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute('tutorial')} onKeyDown={(e) => { if (e.key === 'Enter') setRoute('tutorial'); }}>Read the get started guide</span>
          <a className="text-link" href={SLACK_URL} target="_blank" rel="noopener">Join the Slack group</a>
        </div>
      </div>
    </section>
  );
}

function Landing({ setRoute }) {
  return (
    <>
      <Announce />
      <Hero setRoute={setRoute} />
      <HowItWorks />
      <LaunchVideo />
      <WhatsIncluded setRoute={setRoute} />
      <Inbox setRoute={setRoute} />
      <InstitutionsStrip setRoute={setRoute} />
      <Trust />
      <FaqSection setRoute={setRoute} />
      <FinalCTA setRoute={setRoute} />
    </>
  );
}

window.Landing = Landing;
