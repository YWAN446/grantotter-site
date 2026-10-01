// Features: the workflow in order, each step with who it is for, what you get and an example
// in the app's own layout (AppMock) or a real screenshot.

function FeatureRow({ id, who, title, body, gets, plan, reverse, children }) {
  return (
    <section className="feature" id={id}>
      <div className="container">
        <div className="split" style={{alignItems:'center'}}>
          <div style={{order: reverse ? 2 : 1}} className="feature-text">
            <div className="who">{who}</div>
            <h2>{title}</h2>
            <p className="body">{body}</p>
            <ul className="gets">{gets.map(g => <li key={g}>{g}</li>)}</ul>
            <div className="plan-note">{plan}</div>
          </div>
          <div style={{order: reverse ? 1 : 2, minWidth:0}}>{children}</div>
        </div>
      </div>
    </section>
  );
}

const FX_PROFILE_CHAT = [
  { role: 'bot', parts: [
    { k: 'text', text: 'Welcome. The first thing to do is build your researcher profile. What is your name, and where do you work? A CV helps, but it is optional.' },
  ]},
  { role: 'user', text: 'Alex Rivera, Westmark University.' },
  { role: 'bot', parts: [
    { k: 'tool', label: '', summary: 'Researched Alex Rivera · 9 sources', done: true },
    { k: 'text', text: '**Alex Rivera, PhD** · Assistant Professor, Environmental Health\n\n- Low-cost sensor networks for drinking-water quality\n- Physics-informed forecasting of contamination events\n- 21 publications; NSF award as co-PI\n\nDoes this look right? Tell me any emerging areas to add, or topics to avoid.' },
  ]},
  { role: 'user', text: 'Looks right. Add wastewater surveillance as an emerging area.' },
  { role: 'bot', parts: [
    { k: 'tool', label: '', summary: 'Saved My Profile', done: true },
    { k: 'text', text: 'Your profile is saved. Want me to match grants to it?' },
  ]},
];

const FX_DOCS_CHAT = [
  { role: 'user', text: 'Brainstorm concepts for this grant.' },
  { role: 'bot', parts: [
    { k: 'tool', label: '', summary: 'Brainstormed 2 concepts', done: true },
    { k: 'artifact', title: 'Concept notes', type: 'concept', tone: 4 },
    { k: 'text', text: '**1.** Calibration that transfers between utilities, so small systems can use low-cost sensors.\n\n**2.** Early warning of contamination from sensor and weather data.\n\nWhich one should be the target concept?' },
  ]},
  { role: 'user', text: 'Concept 1. Draft my biosketch for it.' },
  { role: 'bot', parts: [
    { k: 'tool', label: '', summary: 'Biosketch drafted', done: true },
    { k: 'artifact', title: 'Biosketch — Alex Rivera', type: 'biosketch', tone: 1, file: true },
    { k: 'text', text: 'Saved, and written around Concept 1. Two items are marked **[PLACEHOLDER]** because I could not verify them: your degree year and one award end date. Fill those in before you submit.' },
  ]},
  { role: 'user', text: 'Now the budget.' },
  { role: 'bot', parts: [
    { k: 'tool', label: 'Building the budget brief and worksheet… (takes 1–3 minutes)', done: false },
  ]},
];

const FX_TEAM_CHAT = [
  { role: 'user', text: 'I need a co-investigator in spatial epidemiology for this application.' },
  { role: 'bot', parts: [
    { k: 'tool', label: '', summary: 'Found 3 people for spatial epidemiology', done: true },
    { k: 'text', text: 'Three people fit best:\n\n- **Maya Okafor**, Epidemiology. Spatial models of waterborne disease; holds an active R01 as PI.\n- **Daniel Cho**, Biostatistics. Bayesian disease mapping.\n- **Priya Raman**, Environmental Health. GIS-based exposure assessment.' },
  ]},
  { role: 'user', text: 'How am I connected to Maya Okafor?' },
  { role: 'bot', parts: [
    { k: 'tool', label: '', summary: 'Traced connection to Maya Okafor', done: true },
    { k: 'text', text: 'You have no direct tie yet. The best introduction is through **Daniel Cho**: you and he have co-authored 3 papers (a solid tie), and he and Dr. Okafor have co-authored 6, most recently in 2025 (a strong tie).' },
  ]},
];

const PROJECT_HEAD = { kind: 'project', title: 'Sensor Networks and Data Science for Safe Drinking Water (R01)' };

function Features({ setRoute }) {
  const jump = (id) => (e) => { e.preventDefault(); document.getElementById(id).scrollIntoView(); };
  const sections = [
    ['f-profile', 'Profile'], ['f-match', 'Matching'], ['f-alerts', 'Weekly alerts'], ['f-projects', 'Projects'],
    ['f-docs', 'Concepts and documents'], ['f-team', 'Collaborators'], ['f-leadership', 'Research leadership'],
  ];
  const link = (route, text) => (
    <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute(route)} onKeyDown={(e) => { if (e.key === 'Enter') setRoute(route); }}>{text}</span>
  );
  return (
    <>
      <section className="hero" style={{paddingBottom:56}}>
        <div className="container">
          <h1 className="display" style={{fontSize:'clamp(42px, 6vw, 80px)', maxWidth:900}}>
            From your name to a submitted application, <span className="soft">step by step.</span>
          </h1>
          <p className="lede" style={{marginTop:24, maxWidth:640}}>
            Everything below happens in one chat. You ask in plain words; the assistant does the step
            and saves the result where you can find it.
          </p>
          <nav className="jump" aria-label="On this page">
            {sections.map(([id, label]) => <a key={id} href={'#' + id} onClick={jump(id)}>{label}</a>)}
          </nav>
        </div>
      </section>

      <FeatureRow id="f-profile" who="For every researcher, on every plan"
        title="A researcher profile you confirm, not one you fill in."
        body="Give your name and institution; a CV is optional. GrantOtter researches your public record, shows you a short sourced summary, and writes the full profile only after you say it is right."
        gets={['Built from open sources: your publications, funding record and faculty page', 'Expertise areas, funding history and career stage in one structured profile', 'Edit or regenerate it whenever your work changes']}
        plan="Included on Free, Pro and Max.">
        <AppChat thread={{kind:'global'}} messages={FX_PROFILE_CHAT} />
      </FeatureRow>

      <FeatureRow reverse id="f-match" who="For anyone looking for the next grant"
        title="Matches ranked for fit, with the reason spelled out."
        body="Thousands of open opportunities from federal agencies and hundreds of foundations are checked against your eligibility first: career stage, institution type, mechanism. What passes is scored for fit from 1 to 10, and each match says why it fits and what to watch for."
        gets={['Narrow a match by funder type, award size or time to deadline', 'Upload specific aims or a declined proposal to find it a new home', 'One click turns a match into a project']}
        plan="Free includes one live match. Pro and Max match as often as you need, within your usage allowance.">
        <AppPanel tabs={RES_TABS} tab={1}><VFeed /></AppPanel>
      </FeatureRow>

      <FeatureRow id="f-alerts" who="For researchers who do not have time to search"
        title="New matches in your inbox on Monday."
        body="Once your profile is saved, GrantOtter keeps matching in the background. The email shows your best new matches, each with the reason it fits, the things to check and two concept sparks to get you thinking."
        gets={['Start an application from the email in one click', 'Save a grant for later, or say it is not a fit, straight from the email', 'Two weekly news briefs, federal and foundation, with any free account']}
        plan="Monthly on Free. Weekly on Pro and Max.">
        <div className="shot" style={{background:'#F3F3F3'}}><img src="media/v2_alert_email.png" alt="A Monday GrantOtter alert email: one NIH grant with its deadline, match score 9/10, why it fits, key considerations, concept sparks and a Start application button" loading="lazy" /></div>
        <div className="shot-cap">A real alert email, sent to a test account.</div>
      </FeatureRow>

      <FeatureRow reverse id="f-projects" who="For a PI with a deadline"
        title="One project per application, and it keeps track for you."
        body="Link a grant by its number or drop in the announcement. The assistant reads it, proposes the next real due date, and builds a submission checklist from that announcement’s own requirements. Team, notes and every drafted document stay with the project."
        gets={['Deadlines taken from the notice, including multi-cycle announcements', 'Upload your own files; download any draft as a Word document', 'It remembers your decisions between sessions']}
        plan="Pro and Max.">
        <AppPanel tabs={RES_TABS} tab={0}><VProject deadline="02/05/2027" checklist={6} docs={[['Concept notes', 'concept', 4], ['Biosketch — Alex Rivera', 'biosketch', 1]]} team={['Maya Okafor']} /></AppPanel>
      </FeatureRow>

      <FeatureRow id="f-docs" who="For the week before the deadline"
        title="Concepts and the supporting documents, drafted with you."
        body="Ask for proposal concepts against a specific announcement and you get two or three, shaped by your team’s profiles, each with a budget estimate. Pick one as the target concept, and the documents are drafted around it: an NIH biosketch, a data management and sharing plan on the 2026 template, and a budget brief with justification and an editable Excel worksheet."
        gets={['Anything the assistant cannot verify is marked [PLACEHOLDER] and listed before you submit', 'Drafts follow official NIH and NSF application guidance', 'A second pass checks letters of intent and biosketches for unsupported claims']}
        plan="Pro and Max.">
        <AppChat thread={PROJECT_HEAD} messages={FX_DOCS_CHAT} />
      </FeatureRow>

      <FeatureRow reverse id="f-team" who="For a PI who needs an expertise they do not have"
        title="The right colleague, and a way to reach them."
        body="Describe the expertise in plain words. GrantOtter searches your institution’s faculty by what they actually work on, then shows how you are connected: shared papers, shared grants, a colleague who knows you both. Ties are described as strong, solid or weak, with the evidence."
        gets={['Filter by school, department, career stage or active funding', 'Check whether a team covers every capability an announcement asks for', 'Build a profile for a collaborator outside your institution']}
        plan={<>Faculty search comes with an {link('institutions', 'institution subscription')}. Building and saving outside collaborators’ profiles is on Pro and Max.</>}>
        <AppChat thread={PROJECT_HEAD} messages={FX_TEAM_CHAT} />
      </FeatureRow>

      <FeatureRow id="f-leadership" who="For research offices, deans and chairs"
        title="See which center grants your faculty can cover."
        body="Center-scale announcements are scored against a department, a school or the whole institution: which required capabilities are covered and by whom, which have candidates to check, and where the gaps are. Open a pursuit to assemble the team and draft the letter of intent."
        gets={['A research landscape for each unit: topics, funding mix, career mix, succession risk', 'Who already holds a similar award', 'A faculty directory anyone at the institution can search']}
        plan={<>Part of an institution subscription. {link('institutions', 'See GrantOtter for institutions')}</>}>
        <AppPanel tabs={ADM_TABS} tab={1}><VOpps open /></AppPanel>
      </FeatureRow>

      <section className="cta-final" style={{borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <h2>Try it on your own profile.</h2>
          <div style={{marginTop:36}}>
            <a href={APP_URL} target="_blank" rel="noopener" className="btn btn-signal">Start free</a>
          </div>
          <div className="links">
            {link('pricing', 'Compare the plans')}
            {link('tutorial', 'Read the get started guide')}
          </div>
        </div>
      </section>
    </>
  );
}

window.Features = Features;
