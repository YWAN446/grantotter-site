// Plans and prices. Owner decisions 2026-09: Free / Pro / Max, extra usage,
// institution subscription; plans and checkout open December 1, 2026; existing
// accounts get Pro free through December 31, 2026; charging starts January 1, 2027.
// Never state usage allowances in dollars.

const PRICING_PLANS = [
  {
    n: '01', name: 'Free', price: '$0', unit: 'no card needed',
    blurb: 'Grant alerts and your Feed, matched to your own work.',
    accent: 'var(--teal-deep)',
    features: [
      'Monthly grant alerts matched to your profile',
      'Your Feed and the weekly news briefs',
      'Build your researcher profile with the assistant',
      'One interactive grant match',
    ],
    cta: 'Start free',
  },
  {
    n: '02', name: 'Pro', price: '$20', unit: 'per month',
    blurb: 'The full assistant, from first match to finished documents.',
    accent: 'var(--orange-deep)',
    badge: 'full assistant',
    features: [
      'Everything in Free',
      'Weekly grant alerts matched to your profile',
      'The full assistant, within a daily and weekly usage allowance',
      'Project and application management: deadlines, a submission checklist, your team and all the documents in one place',
      'Biosketch, data management plan and budget brief',
      'Research and save your collaborators’ profiles',
      'Extra usage when a deadline week needs it',
    ],
    cta: 'Open the app',
  },
  {
    n: '03', name: 'Max', price: '$80', unit: 'per month',
    blurb: 'For heavy writing seasons and several applications at once.',
    accent: 'var(--teal-deep)',
    features: [
      'Everything in Pro',
      '5x Pro’s usage for $80 — 20% less than five Pro plans ($100)',
    ],
    cta: 'Open the app',
  },
];

const PRICING_TIMELINE = [
  ['December 1, 2026', 'Plans and checkout open. New accounts from this date start on Free.'],
  ['Through December 31, 2026', 'Everyone with a GrantOtter account before December 1 has Pro free. Nothing to do.'],
  ['January 1, 2027', 'Charging starts. Anyone who has not subscribed moves to Free and keeps monthly grant alerts and the Feed.'],
];

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
  ['Faculty search for everyone', 'Everyone at the institution can search and read faculty profiles, on any plan — Free included.'],
  ['The research-administration dashboard', 'Funding opportunities, unit landscapes and pursuit teams for the people who support research.'],
];

const INSTITUTION_AUDIENCES = [
  {
    label: 'research administration',
    title: 'For research development offices',
    items: [
      'A feed of center-scale funding announcements — P30, P50 and U54-type centers, program projects — showing which capabilities your faculty already cover and where the gaps are',
      'Assemble a pursuit team: contact PI, core leads and outreach status in one place',
      'A capability statement or letter of intent drafted from the team’s profiles',
      'See which teams already hold similar awards',
    ],
  },
  {
    label: 'deans and chairs',
    title: 'For deans and department chairs',
    items: [
      'The research landscape of your unit: its largest topics, and funded versus unfunded expertise',
      'NIH institute mix, and the early, mid and senior career mix',
      'Succession risk: topics with senior faculty but no early-career pipeline',
      'Funded mentors, and ties to other departments and schools',
    ],
  },
  {
    label: 'faculty and researchers',
    title: 'For faculty and researchers',
    items: [
      '“Who here works on HIV prevention and mobile health?”',
      '“Who has an active NIH award on wastewater surveillance?”',
      '“Who could introduce me to a colleague in another school?”',
      '“Which colleagues work at the intersection of two topics?”',
      '“Does our team cover every capability this center grant asks for?”',
      'Plus the Find people directory of your institution’s faculty',
    ],
  },
];

const PRICING_FAQ = [
  {
    q: 'When do I start paying?',
    a: 'Only when you choose a plan, and never before January 1, 2027. If you had an account before December 1, 2026, you have Pro free through December 31, 2026. New accounts from December 1 start on Free.',
  },
  {
    q: 'What happens on January 1 if I don’t subscribe?',
    a: 'Your account moves to Free. You keep monthly grant alerts and the Feed, and you can choose Pro or Max at any time.',
  },
  {
    q: 'Can I cancel?',
    a: 'Yes, anytime, from the billing page in the app. A cancelled plan runs to the end of the period you are in.',
  },
  {
    q: 'Do you take non-US cards?',
    a: 'Not yet. For now, checkout is available to US billing addresses only. The Free plan needs no card at all.',
  },
  {
    q: 'What is extra usage?',
    a: 'On Pro and Max, a top-up for the weeks a deadline needs more than your plan allows. Buy any whole-dollar amount from $10 to $500; it stays valid for one year and is used only after your plan’s limit is reached.',
  },
  {
    q: 'What does an institution subscription cost?',
    a: 'It is priced per institution or unit — a department, a school or the whole institution — so there is no list price. Request a quote with your institution, the unit, the approximate number of faculty, your role and your timing, and we will reply with one.',
  },
];

function Pricing({ setRoute }) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w < 1024;
  const serif = 'Instrument Serif, Georgia, serif';
  const mono = 'JetBrains Mono, monospace';

  return (
    <>
      {/* Hero */}
      <section style={{padding: isMobile ? '48px 0 28px' : '80px 0 40px'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>plans / pricing</div>
          <h1 style={{fontFamily:serif, fontSize: isMobile ? 'clamp(44px, 12vw, 72px)' : 'clamp(64px, 8vw, 120px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, maxWidth:1200}}>
            Grant alerts stay <em style={{color:'var(--teal-deep)'}}>free.</em><br/>
            <span style={{fontSize:'0.45em', color:'var(--muted)', letterSpacing:'-0.01em'}}>Monthly on the Free plan. Weekly alerts and the full assistant are Pro or Max, from January 1, 2027.</span>
          </h1>
          <p style={{marginTop:28, maxWidth:620, fontSize:16, lineHeight:1.6, color:'var(--ink-2)'}}>
            Plans and checkout open December 1, 2026. If you have a GrantOtter account before then,
            you have Pro free through December 31 — nothing to do. Prices are in US dollars.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{padding:'12px 0 56px'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr 1fr', border:'1px solid var(--line-2)', borderRight:0, borderBottom:0}}>
            {PRICING_PLANS.map(p => (
              <div key={p.name} style={{padding: isMobile ? '28px 20px 32px' : '36px 30px 40px', borderRight:'1px solid var(--line-2)', borderBottom:'1px solid var(--line-2)', position:'relative', background: p.badge ? 'var(--paper)' : 'transparent', display:'flex', flexDirection:'column'}}>
                <div style={{position:'absolute', top:0, left:0, right:0, height:3, background:p.accent}}/>
                <div className="tick-row" style={{justifyContent:'space-between', marginBottom:16}}>
                  <span>{p.n}</span>
                  {p.badge && <span className="tag orange" style={{fontSize:10}}>{p.badge}</span>}
                </div>
                <h3 style={{fontFamily:serif, fontSize:40, fontStyle:'italic', fontWeight:400, letterSpacing:'-0.02em', marginBottom:8}}>{p.name}</h3>
                <p style={{fontSize:13, color:'var(--muted)', marginBottom:24, lineHeight:1.5}}>{p.blurb}</p>
                <div style={{marginBottom:24, paddingBottom:20, borderBottom:'1px dashed var(--line)'}}>
                  <div style={{fontFamily:serif, fontSize:64, fontStyle:'italic', letterSpacing:'-0.03em', fontWeight:400, lineHeight:1, color:p.accent}}>{p.price}</div>
                  <div className="mono" style={{fontSize:12, color:'var(--muted)', marginTop:6}}>{p.unit}</div>
                </div>
                <div style={{display:'grid', gap:10, marginBottom:32, flex:1, alignContent:'start'}}>
                  {p.features.map(f => (
                    <div key={f} style={{display:'grid', gridTemplateColumns:'14px 1fr', gap:10, fontSize:13, color:'var(--ink-2)', lineHeight:1.5}}>
                      <span style={{color:p.accent}}>+</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="https://app.grantotter.com" target="_blank" rel="noopener" className={p.badge ? 'btn btn-signal' : 'btn btn-ghost'} style={{display:'block', textAlign:'center', textDecoration:'none'}}>
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
          <div style={{marginTop:16, fontFamily:mono, fontSize:11, color:'var(--muted)', lineHeight:1.7}}>
            Checkout is available to US billing addresses for now. Cancel anytime from the billing page; a cancelled plan runs to the end of the period.
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{padding:'0 0 56px'}}>
        <div className="container">
          <div style={{border:'1px solid var(--line-2)', background:'var(--bg-2)', padding: isMobile ? '24px 20px' : '32px 36px'}}>
            <div style={{fontFamily:mono, fontSize:10, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:20}}>Timeline</div>
            <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: isMobile ? 20 : 32}}>
              {PRICING_TIMELINE.map(([when, what], i) => (
                <div key={when} style={{borderLeft:'3px solid ' + (i === 1 ? 'var(--orange-deep)' : 'var(--teal-deep)'), paddingLeft:16}}>
                  <div style={{fontFamily:serif, fontStyle:'italic', fontSize:24, lineHeight:1.15, color:'var(--ink)', marginBottom:8}}>{when}</div>
                  <div style={{fontSize:14, lineHeight:1.6, color:'var(--ink-2)'}}>{what}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extra usage */}
      <section style={{padding:'0 0 64px'}}>
        <div className="container">
          <div style={{border:'1px solid var(--line-2)', padding: isMobile ? '24px 20px' : '30px 30px 32px', position:'relative', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 16 : 40, alignItems:'start'}}>
            <div style={{position:'absolute', top:0, left:0, right:0, height:3, background:'var(--orange-deep)'}}/>
            <div>
              <div className="tick-row" style={{marginBottom:14}}><span>extra usage · pro and max</span></div>
              <h3 style={{fontFamily:serif, fontSize:32, fontStyle:'italic', fontWeight:400, letterSpacing:'-0.02em'}}>For the deadline week.</h3>
            </div>
            <div style={{display:'grid', gap:10, paddingTop: isMobile ? 0 : 6}}>
              {[
                'Available on Pro and Max',
                'Buy any whole-dollar amount from $10 to $500',
                'Valid for one year from purchase',
                'Used only after your plan’s limit is reached',
              ].map(l => (
                <div key={l} style={{display:'grid', gridTemplateColumns:'14px 1fr', gap:10, fontSize:14, color:'var(--ink-2)', lineHeight:1.55}}>
                  <span style={{color:'var(--teal-deep)'}}>→</span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institution subscription */}
      <section id="institution" style={{padding: isMobile ? '48px 0' : '72px 0', background:'var(--paper)', borderTop:'1px solid var(--line-2)', borderBottom:'1px solid var(--line-2)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns: isTablet ? '1fr' : '1.6fr 1fr', gap: isTablet ? 28 : 56, alignItems:'end', marginBottom:40}}>
            <div>
              <div className="bracket-label" style={{marginBottom:20}}>institution subscription</div>
              <h2 style={{fontFamily:serif, fontStyle:'italic', fontWeight:400, fontSize: isMobile ? 40 : 64, lineHeight:1, letterSpacing:'-0.03em', marginBottom:20}}>
                Your institution’s research, <em style={{color:'var(--teal-deep)'}}>mapped.</em>
              </h2>
              <p style={{fontSize:16, lineHeight:1.6, color:'var(--ink-2)', maxWidth:620}}>
                An institution subscription maps your faculty once, and everyone at the institution draws on it.
                Departments or schools can subscribe, and a department subscription searches the whole institution.
                We onboard your faculty network for you.
              </p>
            </div>
            <div style={{border:'1px solid var(--line-2)', background:'var(--bg)', padding:'24px 26px', position:'relative'}}>
              <div style={{position:'absolute', top:0, left:0, right:0, height:3, background:'var(--teal-deep)'}}/>
              <div style={{fontFamily:serif, fontSize:56, fontStyle:'italic', letterSpacing:'-0.03em', lineHeight:1, color:'var(--teal-deep)'}}>Custom</div>
              <div className="mono" style={{fontSize:12, color:'var(--muted)', margin:'8px 0 20px'}}>request a quote · priced per institution or unit</div>
              <a href={INSTITUTION_QUOTE_MAILTO} className="btn btn-signal" style={{display:'block', textAlign:'center', textDecoration:'none'}}>
                Request a quote →
              </a>
            </div>
          </div>

          <div style={{border:'1px solid var(--line-2)', background:'var(--bg)', padding: isMobile ? '20px' : '24px 28px', marginBottom:16}}>
            <div style={{fontFamily:mono, fontSize:10, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:14}}>What it includes</div>
            <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: isMobile ? 12 : 28}}>
              {INSTITUTION_INCLUDES.map(([title, desc]) => (
                <div key={title} style={{fontSize:14, lineHeight:1.6, color:'var(--ink-2)'}}>
                  <strong style={{color:'var(--ink)', display:'block', marginBottom:4}}>{title}</strong>
                  {desc}
                </div>
              ))}
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr 1fr', border:'1px solid var(--line-2)', borderRight:0, borderBottom:0, background:'var(--bg)'}}>
            {INSTITUTION_AUDIENCES.map(a => (
              <div key={a.label} style={{borderRight:'1px solid var(--line-2)', borderBottom:'1px solid var(--line-2)', padding: isMobile ? '22px 20px' : '28px 26px'}}>
                <div className="tick-row" style={{marginBottom:10}}><span>{a.label}</span></div>
                <h3 style={{fontFamily:serif, fontStyle:'italic', fontWeight:400, fontSize:26, lineHeight:1.15, letterSpacing:'-0.01em', marginBottom:16}}>{a.title}</h3>
                <div style={{display:'grid', gap:10}}>
                  {a.items.map(item => (
                    <div key={item} style={{display:'grid', gridTemplateColumns:'14px 1fr', gap:10, fontSize:13, color:'var(--ink-2)', lineHeight:1.55}}>
                      <span style={{color:'var(--teal-deep)'}}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop:24, display:'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 14 : 24, alignItems: isMobile ? 'flex-start' : 'center', justifyContent:'space-between'}}>
            <p style={{fontSize:13, lineHeight:1.6, color:'var(--muted)', maxWidth:640, margin:0}}>
              Researchers at partner institutions with faculty search included can search and read faculty profiles on any plan, Free included.
            </p>
            <a href={INSTITUTION_QUOTE_MAILTO} className="btn btn-ghost" style={{display:'inline-block', textDecoration:'none', whiteSpace:'nowrap'}}>
              Request a quote →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="section-header">
            <div className="left">
              <span className="bracket-label">faq</span>
            </div>
            <h2>Pricing, <em>plainly.</em></h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', border:'1px solid var(--line-2)', borderRight:0, borderBottom:0}}>
            {PRICING_FAQ.map((f, i) => (
              <div key={f.q} style={{borderRight:'1px solid var(--line-2)', borderBottom:'1px solid var(--line-2)', padding: isMobile ? '20px 16px' : '26px 26px', background: i % 2 === 0 ? 'var(--paper)' : 'transparent'}}>
                <div style={{display:'flex', gap:12, alignItems:'baseline', marginBottom:10}}>
                  <span className="mono" style={{fontSize:11, color:'var(--teal-deep)'}}>Q{i + 1}</span>
                  <h3 style={{fontFamily:serif, fontWeight:400, fontStyle:'italic', fontSize: isMobile ? 20 : 24, lineHeight:1.15, letterSpacing:'-0.01em', color:'var(--ink)'}}>{f.q}</h3>
                </div>
                <p style={{fontSize:13, lineHeight:1.6, color:'var(--ink-2)', paddingLeft: isMobile ? 0 : 30}}>{f.a}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:20, fontFamily:mono, fontSize:12, color:'var(--muted)'}}>
            Why we are introducing plans —{' '}
            <a href="#blog/pricing" style={{color:'var(--teal-deep)'}}>read the announcement →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: isMobile ? '64px 0' : '96px 0', background:'var(--ink)', color:'var(--bg)', textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontFamily:serif, fontStyle:'italic', fontWeight:400, fontSize: isMobile ? 36 : 64, lineHeight:1, letterSpacing:'-0.02em'}}>
            Start with the <span style={{color:'var(--teal)'}}>free plan.</span>
          </h2>
          <p style={{margin:'20px auto 0', maxWidth:520, fontSize:15, lineHeight:1.6, color:'#8A9491'}}>
            Build your profile, get your grant alerts, and upgrade when an application needs the full assistant.
          </p>
          <a href="https://app.grantotter.com" target="_blank" rel="noopener" className="btn btn-signal" style={{display:'inline-block', marginTop:32}}>
            Launch app →
          </a>
        </div>
      </section>
    </>
  );
}

window.Pricing = Pricing;
