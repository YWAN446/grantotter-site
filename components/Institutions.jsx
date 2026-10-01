// For institutions: the research-administration side of GrantOtter (unit landscape, center
// opportunities, pursuits) and the institution subscription. No institution is named.

const INSTITUTION_QUOTE_MAILTO = 'mailto:grantotter42@gmail.com?subject=' + encodeURIComponent('Institution subscription quote') + '&body=' + encodeURIComponent(
  'Hello,\n\nWe would like a quote for a GrantOtter institution subscription.\n\n' +
  'Institution:\n' +
  'Unit(s) (department / school / whole institution):\n' +
  'Approximate number of faculty:\n' +
  'Your role:\n' +
  'Timing:\n\nThank you,\n'
);

const INSTITUTION_INCLUDES = [
  ['The faculty research map', 'Every faculty member’s expertise areas, their co-authorship and shared-grant ties, and their NIH funding.'],
  ['Faculty search for everyone', 'Everyone at the institution can search and read faculty profiles, on any plan — Free included. That includes students looking for a thesis advisor or a mentor.'],
  ['The research-administration dashboard', 'Funding opportunities, unit landscapes and pursuit teams for the people who support research.'],
];

const INSTITUTION_AUDIENCES = [
  {
    title: 'Research development offices',
    items: [
      'A feed of center-scale funding announcements — P30, P50 and U54-type centers, program projects — showing which capabilities your faculty already cover and where the gaps are',
      'Assemble a pursuit team: contact PI, core leads and outreach status in one place',
      'A capability statement or letter of intent drafted from the team’s profiles',
      'See which teams already hold similar awards',
    ],
  },
  {
    title: 'Deans and department chairs',
    items: [
      'The research landscape of your unit: its largest topics, and funded versus unfunded expertise',
      'NIH institute mix, and the early, mid and senior career mix',
      'Succession risk: topics with senior faculty but no early-career pipeline',
      'Funded mentors, and ties to other departments and schools',
    ],
  },
  {
    title: 'Faculty, researchers and students',
    asks: [
      'Who here works on HIV prevention and mobile health?',
      'Who has an active NIH award on wastewater surveillance?',
      'Who could introduce me to a colleague in another school?',
      'Does our team cover every capability this center grant asks for?',
      'Who could advise a thesis on air pollution and child health?',
    ],
    after: 'Plus the Find people directory of your institution’s faculty.',
  },
];

const INSTITUTION_FAQ = [
  {
    q: 'What does an institution subscription cost?',
    a: 'It is priced per institution or unit — a department, a school or the whole institution — so there is no list price. Request a quote with your institution, the unit, the approximate number of faculty, your role and your timing, and we will reply with one.',
  },
  {
    q: 'Where does the faculty map come from?',
    a: 'From public sources: faculty pages and public records for each person’s expertise, PubMed for co-authorship, and NIH RePORTER for awards. We build and refresh it for you; your faculty do not have to fill in anything.',
  },
  {
    q: 'Does it rank or score individual faculty?',
    a: 'No. The landscape views count topics, funding and career stages for a unit. People are named only as strengths: who covers a capability and why, who mentors, who connects two groups. A wrong entry can be reported from inside the app and is reviewed by a person.',
  },
  {
    q: 'Can one department subscribe on its own?',
    a: 'Yes. A department or a school can subscribe, and a department subscription still searches the whole institution, because the collaborator you need is often in another building.',
  },
];

function Institutions({ setRoute }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-top">
            <h1 className="display" style={{fontSize:'clamp(42px, 6vw, 80px)'}}>
              Know what your faculty can win, <span className="soft">before the deadline.</span>
            </h1>
            <div className="hero-side">
              <p>
                An institution subscription maps your faculty’s expertise, funding and working ties.
                Research offices, deans and chairs use it to size up center grants, assemble the team
                and see where the next generation is thin.
              </p>
              <div className="hero-actions">
                <a href={INSTITUTION_QUOTE_MAILTO} className="btn btn-signal">Request a quote</a>
                <span className="text-link" role="link" tabIndex={0}
                      onClick={() => document.getElementById('inst-includes').scrollIntoView()}
                      onKeyDown={(e) => { if (e.key === 'Enter') document.getElementById('inst-includes').scrollIntoView(); }}>
                  See what it includes
                </span>
              </div>
            </div>
          </div>
          <div style={{marginTop:56}}>
            <AppClip script={CLIP_PURSUIT} />
            <div className="case-note">
              <span>An example in the real app’s layout. The people, grants and numbers are invented.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tint">
        <div className="container">
          <div className="split">
            <div>
              <div className="shot" style={{background:'#1A1A1A', maxWidth:520}}>
                <img src="media/research_map.jpg" alt="A faculty research map drawn as a network: thousands of coloured dots for people, topics, departments and grants, joined by fine lines" loading="lazy" />
              </div>
              <div className="shot-cap">One institution’s faculty research map. Each dot is a person, a research topic, a department or a grant; each line is a tie between them.</div>
            </div>
            <div>
              <div className="sec-head" style={{marginBottom:0}}>
                <h2>It starts with a map of your faculty.</h2>
                <p>
                  We build it from public sources and keep it current. Your faculty do not fill in anything.
                </p>
              </div>
              <ul className="gets">
                <li>What each person works on, as scored expertise areas rather than keywords</li>
                <li>Who works with whom: co-authored papers, shared grants, shared departments and centers</li>
                <li>Who is funded: NIH awards matched to the people who hold them</li>
                <li>Research topics that cut across departments and schools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead title="One map, three kinds of question." />
          <div className="cols-3">
            {INSTITUTION_AUDIENCES.map(a => (
              <div key={a.title} className="card">
                <h3>{a.title}</h3>
                {a.items && <ul className="gets">{a.items.map(i => <li key={i}>{i}</li>)}</ul>}
                {a.asks && <ul className="asks">{a.asks.map(i => <li key={i}>“{i}”</li>)}</ul>}
                {a.after && <p className="small" style={{marginTop:14}}>{a.after}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tint">
        <div className="container">
          <div className="split">
            <div>
              <div className="sec-head" style={{marginBottom:0}}>
                <h2>The research landscape of a unit, on one screen.</h2>
                <p>
                  For a department, a school or the whole institution: how many faculty hold active awards,
                  which NIH institutes fund them, where expertise sits without funding, and which topics
                  depend on senior faculty with nobody coming up behind them.
                </p>
              </div>
              <ul className="gets">
                <li>Counts for a unit, never a score for a person</li>
                <li>Compared against the school and the whole institution</li>
                <li>Ask the assistant a follow-up question about anything you see</li>
              </ul>
            </div>
            <AppPanel tabs={ADM_TABS} tab={2}><VUnit /></AppPanel>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead title="How “covered” is decided.">
            A center grant asks for a list of capabilities. Saying your faculty cover one of them should mean more than a keyword match.
          </SecHead>
          <div className="steps">
            <div className="step">
              <h3>The announcement is split into what it requires</h3>
              <p>Each center-scale announcement is broken into its capabilities: the cores, the leadership, the science and the training it asks for.</p>
            </div>
            <div className="step">
              <h3>Candidates come from the whole faculty</h3>
              <p>For each capability, the search runs across every school, so a strong lead in another department is not missed.</p>
            </div>
            <div className="step">
              <h3>A person and a reason, or it is not covered</h3>
              <p>A capability counts as covered only after the person’s expertise and funding record have been read against it and a reason is recorded. The rest are shown as candidates to check, or as gaps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tint" id="inst-includes">
        <div className="container">
          <div className="split top wide-right" style={{gridTemplateColumns:'1.2fr 0.8fr'}}>
            <div>
              <SecHead title="What a subscription includes.">
                The map is built once and everyone at the institution draws on it. Departments or schools can
                subscribe. We onboard your faculty network for you.
              </SecHead>
              <div>
                {INSTITUTION_INCLUDES.map(([title, desc]) => (
                  <div key={title} className="mail-row" style={{gridTemplateColumns:'1fr'}}>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="quote-card">
              <div className="price">Custom</div>
              <p className="small" style={{margin:'10px 0 22px'}}>Priced per institution or unit. Tell us the unit, the approximate number of faculty and your timing, and we reply with a quote.</p>
              <a href={INSTITUTION_QUOTE_MAILTO} className="btn btn-signal" style={{width:'100%'}}>Request a quote</a>
              <p style={{marginTop:16}}>
                <a className="text-link" href="mailto:grantotter42@gmail.com?subject=GrantOtter%20institution%20demo">Or ask for a 30-minute live demo</a>
              </p>
              <p className="small" style={{marginTop:14}}>
                Individual researchers do not need any of this to start.{' '}
                <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute('pricing')} onKeyDown={(e) => { if (e.key === 'Enter') setRoute('pricing'); }}>See personal plans</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead title="Questions from research offices." />
          <div className="faq">
            {INSTITUTION_FAQ.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <h2>See your own unit on the map.</h2>
          <div style={{marginTop:36}}>
            <a href={INSTITUTION_QUOTE_MAILTO} className="btn btn-signal">Request a quote</a>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Institutions, INSTITUTION_QUOTE_MAILTO, INSTITUTION_INCLUDES });
