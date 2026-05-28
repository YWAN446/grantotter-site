function Terms({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  const terms = [
    {
      n: '1', label: 'The service',
      body: 'GrantOtter is a free, web-based tool that helps researchers discover grant opportunities, generate researcher profiles, and manage grant applications using AI. The service is provided as-is and may be modified, suspended, or discontinued at any time without notice.',
    },
    {
      n: '2', label: 'Eligibility',
      body: 'You must be at least 18 years old to use GrantOtter. By creating an account, you confirm that the information you provide is accurate and that you will use the service only for lawful purposes.',
    },
    {
      n: '3', label: 'Your account',
      list: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You are responsible for all activity that occurs under your account.',
        <>Notify us immediately at <a href="mailto:grantotter42@gmail.com" style={{color:'var(--teal-deep)'}}>grantotter42@gmail.com</a> if you suspect unauthorized access.</>,
      ],
    },
    {
      n: '4', label: 'Acceptable use',
      intro: 'You agree not to:',
      list: [
        'Use GrantOtter to generate false, misleading, or fraudulent grant applications.',
        "Attempt to access other users' data or circumvent security measures.",
        'Use the service in any way that violates applicable law or regulations.',
        'Reverse engineer, scrape, or copy the service or its underlying AI outputs for commercial redistribution.',
      ],
    },
    {
      n: '5', label: 'AI-generated content', accent: 'var(--orange-deep)',
      body: <span>GrantOtter uses AI to generate researcher profiles, grant recommendations, proposal concepts, and biosketches. These outputs are provided as a starting point and <span style={{color:'var(--orange-deep)', fontWeight:600}}>may contain errors, omissions, or inaccuracies</span>. You are solely responsible for reviewing, verifying, and editing all AI-generated content before using it in any official submission.</span>,
    },
    {
      n: '6', label: 'Intellectual property',
      body: <>You <span style={{color:'var(--teal-deep)', fontWeight:600}}>retain ownership</span> of all content you upload or create within GrantOtter. By using the service, you grant GrantOtter a limited license to process and store your content solely to provide the service to you.</>,
    },
    {
      n: '7', label: 'Disclaimer of warranties', accent: 'var(--orange-deep)',
      body: <span>GrantOtter is provided <span style={{color:'var(--orange-deep)', fontWeight:600}}>"as is"</span> without warranties of any kind, express or implied. We do not guarantee that the service will be uninterrupted, error-free, or that grant recommendations will result in successful funding outcomes.</span>,
    },
    {
      n: '8', label: 'Limitation of liability', accent: 'var(--orange-deep)',
      body: 'To the maximum extent permitted by law, Yuke Wang shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of GrantOtter, including but not limited to lost funding opportunities, data loss, or reliance on AI-generated content.',
    },
    {
      n: '9', label: 'Termination',
      body: <>We reserve the right to suspend or terminate your account at any time for violation of these Terms. You may delete your account at any time by contacting <a href="mailto:grantotter42@gmail.com" style={{color:'var(--teal-deep)'}}>grantotter42@gmail.com</a>.</>,
    },
    {
      n: '10', label: 'Governing law',
      body: 'These Terms are governed by the laws of the State of Illinois, United States, without regard to conflict of law principles.',
    },
    {
      n: '11', label: 'Changes to these terms',
      body: "We may update these Terms from time to time. Continued use of GrantOtter after changes constitutes your acceptance of the revised Terms.",
    },
    {
      n: '12', label: 'Contact',
      body: <>Questions about these Terms? Email <a href="mailto:grantotter42@gmail.com" style={{color:'var(--teal-deep)'}}>grantotter42@gmail.com</a>.</>,
    },
  ];

  function TermItem({ t }) {
    const accent = t.accent || 'var(--ink)';
    return (
      <div style={{borderTop:'1px solid var(--line-2)', paddingTop:18, paddingBottom:18}}>
        <div style={{display:'grid', gridTemplateColumns:'36px 1fr', gap:14, alignItems:'start'}}>
          <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color: t.accent ? t.accent : 'var(--muted)', letterSpacing:'0.06em', paddingTop:3}}>{t.n.padStart(2,'0')}</span>
          <div>
            <div style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:accent, letterSpacing:'0.04em', marginBottom:8}}>{t.label}</div>
            {t.intro && <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, margin:'0 0 6px'}}>{t.intro}</p>}
            {t.body  && <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, margin:0}}>{t.body}</p>}
            {t.list  && (
              <ul style={{display:'grid', gap:8, margin:'10px 0 0', paddingLeft:0, listStyle:'none'}}>
                {t.list.map((item, i) => (
                  <li key={i} style={{display:'grid', gridTemplateColumns:'16px 1fr', gap:10, fontSize:13, color:'var(--ink-2)', lineHeight:1.6}}>
                    <span style={{color:'var(--muted)', fontFamily:'JetBrains Mono,monospace', fontSize:11, paddingTop:2}}>+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{padding: isMobile ? '48px 0 36px' : '80px 0 56px', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>terms of service</div>
          <h1 style={{fontFamily:'Instrument Serif,Georgia,serif', fontSize: isMobile ? 'clamp(44px,12vw,72px)' : 'clamp(52px,7vw,110px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, marginBottom:28}}>
            Simple rules,<br/><em style={{color:'var(--orange-deep)'}}>plainly stated.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--muted)', maxWidth:520, lineHeight:1.6, marginBottom:36}}>
            What you agree to by using GrantOtter — no legalese, just the essentials.
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="section" id="terms">
        <div className="container">
          <div className="section-header">
            <div className="left">
              <span className="bracket-label">terms of service</span>
            </div>
            <h2>Terms of <em style={{color:'var(--orange-deep)'}}>Service</em></h2>
          </div>

          <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:36}}>
            By accessing or using GrantOtter at{' '}
            <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" style={{color:'var(--teal-deep)'}}>grantotter.streamlit.app</a>
            {' '}or{' '}
            <a href="https://grantotter.com" style={{color:'var(--teal-deep)'}}>grantotter.com</a>,
            you agree to these Terms of Service. If you do not agree, do not use the service.
          </p>

          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 0 : '0 48px', borderTop:'1px solid var(--line-2)'}}>
            <div>{terms.slice(0, isMobile ? terms.length : 6).map(t => <TermItem key={t.n} t={t} />)}</div>
            {!isMobile && <div>{terms.slice(6).map(t => <TermItem key={t.n} t={t} />)}</div>}
          </div>

          <div style={{marginTop:48, paddingTop:32, borderTop:'1px solid var(--line-2)', display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 12 : 0, justifyContent:'space-between'}}>
            <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--muted)'}}>Last updated: May 2026</span>
            <button onClick={() => setRoute('privacy')} className="tag teal" style={{cursor:'pointer', background:'none', border:'1px solid var(--teal)', font:'inherit'}}>
              Read Privacy Policy →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

window.Terms = Terms;
