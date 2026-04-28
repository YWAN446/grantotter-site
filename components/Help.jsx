const { useState: useStateH } = React;

function FaqItem({ q, children }) {
  const [open, setOpen] = useStateH(false);
  return (
    <div style={{borderBottom:'1px solid var(--line-2)'}}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width:'100%', textAlign:'left', background:'none', border:'none', cursor:'pointer',
          padding:'18px 0', display:'flex', alignItems:'center', justifyContent:'space-between', gap:24,
        }}>
        <span style={{fontFamily:'Inter,sans-serif', fontSize:14, fontWeight:500, color:'var(--ink)', lineHeight:1.4}}>{q}</span>
        <span style={{
          fontFamily:'JetBrains Mono,monospace', fontSize:14, color:'var(--teal-deep)',
          flexShrink:0, transition:'transform 0.2s', display:'inline-block',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>+</span>
      </button>
      {open && (
        <div style={{paddingBottom:20, fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
          {children}
        </div>
      )}
    </div>
  );
}

function Help({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  const faqs = [
    {
      q: 'How do I create an account?',
      a: <p>Go to <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" style={{color:'var(--teal-deep)'}}>grantotter.streamlit.app</a>, click the <strong>Create Account</strong> tab, enter your email and a password (minimum 6 characters), and click <strong>Create Account</strong>. You will be signed in automatically.</p>,
    },
    {
      q: 'I forgot my password. How do I reset it?',
      a: <p>On the sign-in screen, click <strong>Forgot password?</strong>, enter your email address, and click <strong>Send Reset Email</strong>. You'll receive an email with a link to set a new password. If you don't see it within a few minutes, check your spam folder.</p>,
    },
    {
      q: 'What information does GrantOtter need to generate my profile?',
      a: <p>Only your <strong>name</strong> and <strong>institution</strong> are required. Providing additional details — your Google Scholar URL, ORCID iD, department, and a link to your faculty page or CV — significantly improves profile quality. We also recommend filling in <strong>Developing Research Interests</strong> and <strong>Areas to Avoid</strong> to get better-targeted grant recommendations.</p>,
    },
    {
      q: 'What does the generated researcher profile include?',
      a: <p>The profile goes beyond a publication list. It includes scored research expertise areas, financial parameters (estimated salary, F&A rates, fringe rates), grant suitability as PI or co-investigator, active and past grant history, collaborator network, and publication impact metrics. It's the knowledge base that powers every other GrantOtter feature.</p>,
    },
    {
      q: 'What types of grants does GrantOtter search?',
      a: <p>GrantOtter covers <strong>federal funding opportunities</strong> (NIH, NSF, DARPA via Grants.gov), <strong>foundation grants</strong>, and <strong>internal institutional grants</strong>. For any other funder, you can paste the full grant information as plain text in the Draft Concepts tab to run brainstorming against it directly.</p>,
    },
    {
      q: 'How often is the grant database updated?',
      a: <p>The grant database is refreshed regularly. The <button onClick={() => setRoute('feed')} style={{background:'none', border:'none', cursor:'pointer', color:'var(--teal-deep)', padding:0, font:'inherit', textDecoration:'underline'}}>Weekly Funding Feed</button> aggregates new announcements from NIH, NSF, and DARPA every Monday.</p>,
    },
    {
      q: 'How does grant matching work?',
      a: (
        <div style={{display:'grid', gap:8, marginTop:4}}>
          {[
            ['01 · Hard filters',       'Eliminate ineligible grants based on eligibility, deadline, budget, and mechanism preferences.'],
            ['02 · Rule-based scoring', 'Rank the remaining grants across expertise match, agency preference, career stage, and budget fit.'],
            ['03 · LLM evaluation',     'Read your profile and each top candidate in depth — producing a ranked list with plain-language rationale.'],
          ].map(([label, desc]) => (
            <div key={label} style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '160px 1fr', gap: isMobile ? 6 : 16, padding:'10px 14px', background:'var(--bg-2)', borderLeft:'2px solid var(--teal-deep)'}}>
              <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--teal-deep)', letterSpacing:'0.02em'}}>{label}</span>
              <span style={{fontSize:13, color:'var(--ink-2)'}}>{desc}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      q: 'What is My Workspace?',
      a: <p><strong>My Workspace</strong> is your central hub — a single place to manage your researcher profile, preferred collaborators, saved grant opportunities, and previous proposals. It consolidates everything you need before diving into a specific application.</p>,
    },
    {
      q: 'What is My Applications?',
      a: <p><strong>My Applications</strong> is an end-to-end grant application hub. For each application, you can link the grant opportunity, assemble your team (PI + co-investigators), attach draft concepts, biosketches, and supporting documents, and track every submission task with a checklist. A single <strong>Download All as ZIP</strong> button bundles everything — so you can load the full context into any AI platform.</p>,
    },
    {
      q: 'Can I use GrantOtter for team proposals?',
      a: <p>Yes. Use <strong>Find Collaborators</strong> to search an institution-wide faculty pool by research expertise. Save them to your preferred collaborators list in <strong>My Workspace</strong>, then pull them into any application, brainstorming session, or biosketch. In <strong>My Applications</strong>, you can assemble your full team and keep all profiles together for download.</p>,
    },
    {
      q: 'What is the Power User workflow?',
      a: <p>Use <strong>My Applications</strong> to assemble your full application package, then hit <strong>Download All as ZIP</strong> — this bundles your grant document, team profiles, brainstorming report, and biosketch into a single file. Upload the contents into Claude, ChatGPT, or Gemini to give the AI full context, then develop your Specific Aims, write recruitment emails, or refine the proposal through conversation.</p>,
    },
    {
      q: 'What is the NIH biosketch output used for?',
      a: <p>The Create Biosketch tab generates a draft NIH Biographical Sketch covering all four required sections (Personal Statement, Positions &amp; Honors, Contributions to Science, Research Support). Use it as a reference to populate your biosketch on <a href="https://www.ncbi.nlm.nih.gov/sciencv/" target="_blank" rel="noopener" style={{color:'var(--teal-deep)'}}>SciENcv</a>, the official NIH tool.</p>,
    },
    {
      q: 'Is my data secure? How does GrantOtter handle my privacy?',
      a: (
        <div style={{display:'grid', gap:10, marginTop:4}}>
          {[
            { n:'01', label:'Open data sources only',        desc:'Profiles are built from publicly available sources — PubMed, Google Scholar, ORCID, faculty pages, NIH RePORTER. Only your name and institution are required. CV uploads are processed server-side and never shared externally.' },
            { n:'02', label:'Platform-level security',       desc:'All data is stored in Supabase with row-level security (RLS) — you can only access your own data. All credentials are encrypted. Uploaded documents are stored in a private, access-controlled bucket.' },
            { n:'03', label:'Never used for AI training',    desc:'Your profiles, applications, and documents are never used to train AI models or shared with third parties. You can request deletion at any time by emailing grantotter42@gmail.com.' },
          ].map(p => (
            <div key={p.n} style={{padding:'12px 16px', border:'1px solid var(--line-2)', background:'var(--paper)', display:'grid', gridTemplateColumns:'36px 1fr', gap:12, alignItems:'start'}}>
              <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--muted)', letterSpacing:'0.06em', paddingTop:2}}>{p.n}</span>
              <div>
                <div style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--teal-deep)', letterSpacing:'0.04em', marginBottom:4}}>{p.label}</div>
                <div style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.6}}>{p.desc}</div>
              </div>
            </div>
          ))}
          <button onClick={() => setRoute('privacy')} style={{background:'none', border:'none', cursor:'pointer', color:'var(--teal-deep)', padding:0, font:'inherit', fontSize:12, fontFamily:'JetBrains Mono,monospace', textDecoration:'underline', textAlign:'left'}}>
            Read the full Privacy Policy →
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{padding: isMobile ? '48px 0 36px' : '80px 0 56px', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>help &amp; support</div>
          <h1 style={{fontFamily:'Instrument Serif,Georgia,serif', fontSize: isMobile ? 'clamp(44px,12vw,72px)' : 'clamp(52px,7vw,110px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, marginBottom:28}}>
            Questions,<br/><em style={{color:'var(--teal-deep)'}}>answered.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--muted)', maxWidth:520, lineHeight:1.6, marginBottom:36}}>
            Frequently asked questions, contact options, and live demo scheduling — all in one place.
          </p>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            {[['FAQ', '#faq', 'teal'], ['Contact', '#contact', 'teal'], ['Schedule a Demo', '#demo', 'orange']].map(([label, href, color]) => (
              <a key={label} href={href} className={`tag ${color}`} style={{fontSize:11, cursor:'pointer', textDecoration:'none'}}>
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — full width, no maxWidth cap */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="left">
              <span className="bracket-label">01 / faq</span>
            </div>
            <h2>Frequently asked <em>questions.</em></h2>
          </div>
          <div style={{borderTop:'1px solid var(--line-2)'}}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q}>{faq.a}</FaqItem>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Demo — two columns */}
      <section className="section" style={{background:'var(--paper)'}} id="contact">
        <div className="container">
          <div className="section-header">
            <div className="left">
              <span className="bracket-label">02 / contact &amp; demo</span>
            </div>
            <h2>Get in touch or <em>see it live.</em></h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:24}} id="demo">

            {/* Contact card */}
            <div style={{border:'1px solid var(--line-2)', background:'var(--bg)', padding:'32px 36px'}}>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:20}}>
                <div style={{width:44, height:44, border:'1px solid var(--line-2)', display:'grid', placeItems:'center', fontFamily:'JetBrains Mono,monospace', fontSize:18, color:'var(--teal-deep)', background:'color-mix(in oklab,var(--teal) 8%,transparent)', flexShrink:0}}>
                  @
                </div>
                <div className="tick-row" style={{flexDirection:'column', alignItems:'flex-start', gap:2}}>
                  <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase'}}>02 / contact</span>
                  <span style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontSize:22, color:'var(--ink)'}}>Email us</span>
                </div>
              </div>
              <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.6, marginBottom:20}}>
                Have a question not covered here, a feature request, or running into an issue? Reach out — we typically respond within one business day.
              </p>
              <a href="mailto:grantotter42@gmail.com" style={{fontFamily:'JetBrains Mono,monospace', fontSize:13, color:'var(--teal-deep)', fontWeight:600, display:'block', marginBottom:6}}>
                grantotter42@gmail.com
              </a>
              <p style={{fontSize:12, color:'var(--muted)', lineHeight:1.5}}>
                Account issues, password resets, bug reports, and general questions.
              </p>
            </div>

            {/* Demo card */}
            <div style={{border:'1px solid var(--orange)', background:'color-mix(in oklab,var(--orange) 5%,transparent)', padding:'32px 36px'}}>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:20}}>
                <div style={{width:44, height:44, border:'1px solid var(--orange)', display:'grid', placeItems:'center', fontFamily:'JetBrains Mono,monospace', fontSize:18, color:'var(--orange-deep)', background:'color-mix(in oklab,var(--orange) 10%,transparent)', flexShrink:0}}>
                  ◈
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:2}}>
                  <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase'}}>03 / live demo</span>
                  <span style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontSize:22, color:'var(--ink)'}}>30-minute walkthrough</span>
                </div>
              </div>
              <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.6, marginBottom:20}}>
                Want a guided walkthrough for yourself or your department? We walk through the full workflow — profile generation to a complete application — using a real grant relevant to your group.
              </p>
              <a href="https://calendly.com/ywan446-emory/30min" target="_blank" rel="noopener" className="btn btn-signal">
                Book a Demo Session →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

window.Help = Help;
