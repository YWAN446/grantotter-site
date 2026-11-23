// Plans and prices. Owner decisions 2026-09: Free / Pro / Max, extra usage,
// institution subscription; plans and checkout open January 1, 2027, and every account's
// first Pro or Max subscription starts with a free month (card up front, once per person);
// accounts created before then keep Pro free through January 7, 2027 (owner 2026-11-21).
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
      'Join projects others share with you: read, comment and edit',
    ],
    cta: 'Start free',
  },
  {
    n: '02', name: 'Pro', price: '$25', unit: 'per month',
    yearly: '$250', yearlyNote: 'about $20.83 a month',
    blurb: 'The full assistant, from first match to finished documents.',
    accent: 'var(--orange-deep)',
    badge: 'Full assistant',
    features: [
      'First month free',
      'Everything in Free, with weekly grant alerts',
      'The full assistant, within a daily and weekly allowance',
      'Projects with deadlines, a guided checklist, your team and documents',
      'Draft every document and review it with a mock panel',
      'Edit, comment and share with co-investigators; Word downloads in NIH format',
      'Deep draft, review and revise, charged to your extra usage credit',
    ],
    cta: 'Open the app',
  },
  {
    n: '03', name: 'Max', price: '$100', unit: 'per month',
    yearly: '$1,000', yearlyNote: 'about $83.33 a month',
    blurb: 'Deep drafting and review included in your allowance, for heavy application seasons.',
    accent: 'var(--teal-deep)',
    features: [
      'First month free',
      'Everything in Pro',
      'Deep draft, review and revise included in your allowance',
      'Whole-application review — a mock study section over every document',
      '5× Pro’s usage allowance',
      '20% less than five Pro plans ($125)',
    ],
    cta: 'Open the app',
  },
];

const PRICING_TIMELINE = [
  ['January 1, 2027', 'Plans and checkout open. Your first Pro or Max subscription starts with a free month; new accounts start on Free.'],
  ['January 1–7, 2027', 'Everyone with an account before January 1 keeps Pro free. Add a card by January 7 to keep it; your first month is free.'],
  ['January 8, 2027', 'Accounts without a subscription move to Free and keep monthly grant alerts and the Feed.'],
];

// The institution subscription lives on its own page (Institutions.jsx, which also owns
// INSTITUTION_QUOTE_MAILTO and INSTITUTION_INCLUDES); Pricing keeps a summary.

const PRICING_FAQ = [
  {
    q: 'How does $25 a month compare to the alternatives?',
    a: 'A professional grant writer typically charges $5,000–$15,000 per proposal. Institution-licensed funding databases cost hundreds of dollars a month per seat, billed through your institution, and stop at discovery. GrantOtter Pro is $25 a month, self-serve, cancel anytime — and it goes from discovery through matching, team building and the application documents.',
  },
  {
    q: 'Will I be charged?',
    a: 'Only when you choose a plan, and never before January 1, 2027. Your first Pro or Max subscription starts with a free month: nothing is charged for 30 days (a card that has already had a free month is charged at sign-up), and you can cancel before then.',
  },
  {
    q: 'What happens on January 8 if I don’t subscribe?',
    a: 'Your account moves to Free. You keep monthly grant alerts and the Feed, and your free month waits for whenever you first choose Pro or Max.',
  },
  {
    q: 'Is there a yearly plan?',
    a: 'Yes. Pro is $250 a year and Max is $1,000 a year, two months free compared with paying monthly. Your first month is still free. A yearly plan renews each year until you cancel; we email a reminder before each renewal. Yearly payments are not refunded; if you cancel, you keep access to the end of the paid year.',
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
    q: 'Do the people I share a project with need a paid plan?',
    a: 'No. Anyone you invite can join with a free account and read, comment on and edit the project’s documents. Sharing a project is part of Pro and Max, and a collaborator who wants their own GrantOtter chat about the project, or to have GrantOtter resolve comments, needs Pro or Max of their own.',
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

// Monthly / Yearly choice for the plan cards (annual plan, owner 2026-11-21; default Monthly).
// A roving-tabindex radiogroup: the arrow keys move and select.
function PricingIntervalSwitch({ value, onChange }) {
  const refs = React.useRef({});
  const options = [['month', 'Monthly'], ['year', 'Yearly']];
  const onKeyDown = (e) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
    e.preventDefault();
    const next = value === 'month' ? 'year' : 'month';
    onChange(next);
    if (refs.current[next]) refs.current[next].focus();
  };
  return (
    <div role="radiogroup" aria-label="Billing interval" onKeyDown={onKeyDown}
         style={{display:'inline-flex', gap:4, padding:3, border:'1px solid var(--line-2)', borderRadius:999, margin:'0 0 22px'}}>
      {options.map(([v, label]) => (
        <button key={v} type="button" role="radio" aria-checked={value === v} tabIndex={value === v ? 0 : -1}
                aria-label={v === 'year' ? 'Yearly, 2 months free' : undefined}
                ref={(el) => { refs.current[v] = el; }} onClick={() => onChange(v)}
                style={{border:0, cursor:'pointer', borderRadius:999, padding:'7px 16px', fontSize:14, fontFamily:'inherit',
                        background: value === v ? 'var(--teal-deep)' : 'transparent',
                        color: value === v ? 'var(--bg)' : 'var(--ink-2)'}}>
          {label}{v === 'year' && <span style={{marginLeft:8, fontSize:12, opacity:0.85}}>2 months free</span>}
        </button>
      ))}
    </div>
  );
}

function Pricing({ setRoute }) {
  const [interval, setBillingInterval] = React.useState('month');
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
            Plans and checkout open January 1, 2027, and your first Pro or Max subscription starts
            with a free month. If you have a GrantOtter account before then, you keep Pro free through
            January 7. Prices are in US dollars.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{padding:'16px 0 72px'}}>
        <div className="container">
          <p className="anchor-note">
            For scale: a professional grant writer charges <em>$5,000–$15,000 per proposal</em>, and
            institution-licensed funding databases run hundreds of dollars a month per seat.
          </p>
          <PricingIntervalSwitch value={interval} onChange={setBillingInterval} />
          <div className="plans">
            {PRICING_PLANS.map(p => (
              <div key={p.name} className={`plan ${p.badge ? 'featured' : ''}`}>
                <div className="plan-top">
                  <h2>{p.name}</h2>
                  {p.badge && <span className="tag orange">{p.badge}</span>}
                </div>
                <p className="blurb">{p.blurb}</p>
                <div className="plan-price">
                  <span className="amount">{interval === 'year' && p.yearly ? p.yearly : p.price}</span>
                  <span className="unit">{interval === 'year' && p.yearly ? `per year (${p.yearlyNote})` : p.unit}</span>
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
          <div className="split top wide-left">
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
