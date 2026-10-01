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
    badge: 'Full assistant',
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

// The institution subscription lives on its own page (Institutions.jsx, which also owns
// INSTITUTION_QUOTE_MAILTO and INSTITUTION_INCLUDES); Pricing keeps a summary.

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
  const link = (route, text) => (
    <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute(route)} onKeyDown={(e) => { if (e.key === 'Enter') setRoute(route); }}>{text}</span>
  );
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{paddingBottom:40}}>
        <div className="container">
          <h1 className="display" style={{maxWidth:900}}>Grant alerts stay free.</h1>
          <p className="lede" style={{marginTop:24, maxWidth:680}}>
            Monthly on the Free plan. Weekly alerts and the full assistant are Pro or Max, from January 1, 2027.
          </p>
          <p style={{marginTop:14, maxWidth:680, color:'var(--ink-2)'}}>
            Plans and checkout open December 1, 2026. If you have a GrantOtter account before then,
            you have Pro free through December 31 — nothing to do. Prices are in US dollars.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{padding:'16px 0 72px'}}>
        <div className="container">
          <div className="plans">
            {PRICING_PLANS.map(p => (
              <div key={p.name} className={`plan ${p.badge ? 'featured' : ''}`}>
                <div className="plan-top">
                  <h2>{p.name}</h2>
                  {p.badge && <span className="tag orange">{p.badge}</span>}
                </div>
                <p className="blurb">{p.blurb}</p>
                <div className="plan-price">
                  <span className="amount">{p.price}</span>
                  <span className="unit">{p.unit}</span>
                </div>
                <ul className="gets">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <a href={APP_URL} target="_blank" rel="noopener" className={p.badge ? 'btn btn-signal' : 'btn btn-ghost'}>{p.cta}</a>
              </div>
            ))}
          </div>
          <p className="small" style={{marginTop:18}}>
            Checkout is available to US billing addresses for now. Cancel anytime from the billing page; a cancelled plan runs to the end of the period.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="sec tint" style={{padding:'72px 0'}}>
        <div className="container">
          <SecHead title="What happens when." />
          <div className="steps dated">
            {PRICING_TIMELINE.map(([when, what]) => (
              <div key={when} className="step">
                <h3>{when}</h3>
                <p>{what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra usage */}
      <section className="sec" style={{padding:'72px 0'}}>
        <div className="container">
          <div className="split top">
            <div className="sec-head" style={{marginBottom:0}}>
              <div className="kicker">Extra usage, on Pro and Max</div>
              <h2>For the deadline week.</h2>
            </div>
            <ul className="gets" style={{marginTop:8}}>
              {[
                'Available on Pro and Max',
                'Buy any whole-dollar amount from $10 to $500',
                'Valid for one year from purchase',
                'Used only after your plan’s limit is reached',
              ].map(l => <li key={l} style={{fontSize:17}}>{l}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Institution subscription: summary; the full page is #institutions */}
      <section id="institution" className="sec tint" style={{padding:'72px 0'}}>
        <div className="container">
          <div className="split top" style={{gridTemplateColumns:'minmax(0,1.2fr) minmax(0,0.8fr)'}}>
            <div>
              <div className="sec-head" style={{marginBottom:28}}>
                <div className="kicker">Institution subscription</div>
                <h2>Your institution’s research, mapped.</h2>
                <p>
                  An institution subscription maps your faculty once, and everyone at the institution draws on it.
                  Departments or schools can subscribe, and a department subscription searches the whole institution.
                </p>
              </div>
              {INSTITUTION_INCLUDES.map(([title, desc]) => (
                <div key={title} className="mail-row" style={{gridTemplateColumns:'1fr'}}>
                  <div><strong>{title}</strong><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <div className="quote-card">
              <div className="price">Custom</div>
              <p className="small" style={{margin:'10px 0 22px'}}>Priced per institution or unit. Request a quote and we reply with one.</p>
              <a href={INSTITUTION_QUOTE_MAILTO} className="btn btn-signal" style={{width:'100%'}}>Request a quote</a>
              <p style={{marginTop:18}}>{link('institutions', 'See what research offices, deans and chairs get')}</p>
              <p className="small" style={{marginTop:14}}>
                Researchers at partner institutions with faculty search included can search and read faculty profiles on any plan, Free included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="container">
          <SecHead title="Pricing, plainly." />
          <div className="faq">
            {PRICING_FAQ.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p style={{marginTop:28}}>
            <a href="#blog/pricing" className="text-link">Why we are introducing plans: read the announcement</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final band">
        <div className="container">
          <h2>Start with the free plan.</h2>
          <p className="muted" style={{margin:'20px auto 0', maxWidth:520, fontSize:18, lineHeight:1.6}}>
            Build your profile, get your grant alerts, and upgrade when an application needs the full assistant.
          </p>
          <div style={{marginTop:32}}>
            <a href={APP_URL} target="_blank" rel="noopener" className="btn btn-signal">Start free</a>
          </div>
        </div>
      </section>
    </>
  );
}

window.Pricing = Pricing;
