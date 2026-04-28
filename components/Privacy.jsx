function PrivacyList({ items, accent = 'var(--teal-deep)' }) {
  return (
    <ul style={{display:'grid', gap:8, margin:'10px 0 0', paddingLeft:0, listStyle:'none'}}>
      {items.map((item, i) => (
        <li key={i} style={{display:'grid', gridTemplateColumns:'16px 1fr', gap:10, fontSize:13, color:'var(--ink-2)', lineHeight:1.6}}>
          <span style={{color:accent, fontFamily:'JetBrains Mono,monospace', fontSize:11, paddingTop:2}}>+</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PolicyBlock({ label, children, accent = 'var(--muted)' }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '200px 1fr', gap: isMobile ? 10 : 32, paddingTop:24, paddingBottom:24, borderTop:'1px dashed var(--line)'}}>
      <div style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:accent, letterSpacing:'0.06em', textTransform:'uppercase', paddingTop:2}}>
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Privacy({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  const pillars = [
    {
      n: '01', label: 'Open data sources',
      accent: 'var(--teal-deep)',
      border: 'var(--teal)',
      desc: <>Researcher profiles are built from <span style={{color:'var(--teal-deep)', fontWeight:600}}>publicly available sources</span> — no private data required.</>,
      items: [
        'PubMed, Google Scholar, ORCID, faculty pages, NIH RePORTER',
        'Only your name and institution are required to get started',
        'Optional CV upload is processed server-side and never shared externally',
      ],
      listAccent: 'var(--teal-deep)',
    },
    {
      n: '02', label: 'Platform-level security',
      accent: 'var(--teal-deep)',
      border: 'var(--teal)',
      desc: <>All data is stored in <span style={{color:'var(--teal-deep)', fontWeight:600}}>Supabase</span> with strict per-user row-level security.</>,
      items: [
        'Row-level security (RLS) — you can only access your own data',
        'All credentials and passwords are fully encrypted',
        'Encryption at rest and in transit',
        'Uploaded documents stored in a private, access-controlled bucket',
      ],
      listAccent: 'var(--teal-deep)',
    },
    {
      n: '03', label: 'Never used for AI training',
      accent: 'var(--orange-deep)',
      border: 'var(--orange)',
      desc: <>Your content is <span style={{color:'var(--orange-deep)', fontWeight:600}}>never used to train AI models</span> or shared with third parties — strictly yours.</>,
      items: [
        'Your data is never used to train AI models or shared with third parties',
        'Grant concepts, biosketches, and documents are visible only to you',
        <>You can request deletion anytime at <a href="mailto:grantotter42@gmail.com" style={{color:'var(--orange-deep)'}}>grantotter42@gmail.com</a></>,
      ],
      listAccent: 'var(--orange-deep)',
    },
  ];

  const thirdParties = [
    { name: 'Supabase',           color: 'var(--teal-deep)',   desc: 'Database and file storage with row-level security. Only you can access your own data.' },
    { name: 'Anthropic (Claude)', color: 'var(--orange-deep)', desc: "AI processing for profile generation, grant matching, brainstorming, and biosketch generation. Anthropic's data processing agreement applies." },
    { name: 'Voyage AI',          color: 'var(--orange-deep)', desc: 'Semantic search embeddings for collaborator search. Researcher names and profile text from the shared institution pool are sent for embedding generation.' },
    { name: 'Google Analytics',   color: 'var(--muted)',       desc: 'Anonymized website and app usage tracking.' },
    { name: 'Gmail (SMTP)',        color: 'var(--muted)',       desc: 'Used to send grant match results to your email when you request it.' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{padding: isMobile ? '48px 0 36px' : '80px 0 56px', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>privacy policy</div>
          <h1 style={{fontFamily:'Instrument Serif,Georgia,serif', fontSize: isMobile ? 'clamp(44px,12vw,72px)' : 'clamp(52px,7vw,110px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, marginBottom:28}}>
            Your data,<br/><em style={{color:'var(--teal-deep)'}}>your control.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--muted)', maxWidth:520, lineHeight:1.6, marginBottom:36}}>
            Plain-language summary of how GrantOtter collects, uses, and protects your data.
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="section" id="privacy">
        <div className="container">
          <div className="section-header">
            <div className="left">
              <span className="bracket-label">privacy</span>
            </div>
            <h2><em>Privacy</em> Policy</h2>
          </div>

          {/* Three pillars — 3-column grid */}
          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap:16, marginBottom:48}}>
            {pillars.map(p => (
              <div key={p.n} style={{border:`1px solid var(--line-2)`, background:'var(--paper)', padding:'20px 24px', position:'relative', overflow:'hidden'}}>
                {/* Top accent bar */}
                <div style={{position:'absolute', top:0, left:0, right:0, height:3, background:p.border}}/>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12, marginTop:4}}>
                  <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--muted)', letterSpacing:'0.06em'}}>{p.n}</span>
                  <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:p.accent, letterSpacing:'0.04em'}}>{p.label}</span>
                </div>
                <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.6, marginBottom:0}}>{p.desc}</p>
                <PrivacyList items={p.items} accent={p.listAccent} />
              </div>
            ))}
          </div>

          {/* Policy subsections */}
          <div style={{borderTop:'1px solid var(--line-2)'}}>

            <PolicyBlock label="What we collect" accent="var(--teal-deep)">
              <PrivacyList items={[
                <><span style={{color:'var(--teal-deep)', fontWeight:600}}>Account information</span> — your email address and encrypted password, collected when you create an account.</>,
                <><span style={{color:'var(--teal-deep)', fontWeight:600}}>Researcher profiles</span> — AI-generated profiles based on your name, institution, and publicly available sources. CV uploads are processed server-side and not shared externally.</>,
                <><span style={{color:'var(--teal-deep)', fontWeight:600}}>Application data</span> — grant applications, draft concepts, biosketches, checklists, and documents you create or upload within the app.</>,
                <><span style={{color:'var(--muted)', fontWeight:600}}>Usage analytics</span> — anonymized usage events recorded in Supabase; website visits tracked via Google Analytics. No personal identifiers are linked to these events.</>,
              ]} />
            </PolicyBlock>

            <PolicyBlock label="How we use your data" accent="var(--teal-deep)">
              <PrivacyList items={[
                'To provide and operate the GrantOtter service.',
                'To generate researcher profiles, match grants, and produce biosketches using AI.',
                'To send grant match results to your email when you request it.',
                'To improve the product based on aggregated, anonymized usage patterns.',
              ]} />
            </PolicyBlock>

            <PolicyBlock label="Third-party services" accent="var(--orange-deep)">
              <div style={{display:'grid', gap:8}}>
                {thirdParties.map(({ name, color, desc }) => (
                  <div key={name} style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '160px 1fr', gap: isMobile ? 4 : 16, padding:'10px 14px', background:'var(--bg-2)', fontSize:13}}>
                    <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color, fontWeight:600}}>{name}</span>
                    <span style={{color:'var(--ink-2)', lineHeight:1.5}}>{desc}</span>
                  </div>
                ))}
              </div>
            </PolicyBlock>

            <PolicyBlock label="Data retention & deletion" accent="var(--orange-deep)">
              <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, margin:0}}>
                Your data is retained for as long as your account is active. You can <span style={{color:'var(--orange-deep)', fontWeight:600}}>request deletion</span> of your account and all associated data at any time by emailing{' '}
                <a href="mailto:grantotter42@gmail.com" style={{color:'var(--teal-deep)'}}>grantotter42@gmail.com</a>.
                We will process deletion requests within 30 days.
              </p>
            </PolicyBlock>

            <PolicyBlock label="Cookies">
              <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, margin:0}}>
                GrantOtter uses cookies for authentication session management (via Supabase Auth) and for Google Analytics. <span style={{color:'var(--teal-deep)', fontWeight:600}}>No advertising or tracking cookies</span> are used.
              </p>
            </PolicyBlock>

            <PolicyBlock label="Changes to this policy">
              <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, margin:0}}>
                If we make material changes to this policy, we will update the "Last updated" date above. Continued use of GrantOtter after changes constitutes acceptance of the updated policy.
              </p>
            </PolicyBlock>

            <PolicyBlock label="Contact" accent="var(--teal-deep)">
              <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, margin:0}}>
                Questions about this policy? Email <a href="mailto:grantotter42@gmail.com" style={{color:'var(--teal-deep)'}}>grantotter42@gmail.com</a>.
              </p>
            </PolicyBlock>

          </div>

          <div style={{marginTop:48, paddingTop:32, borderTop:'1px solid var(--line-2)', display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 12 : 0, justifyContent:'space-between'}}>
            <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--muted)'}}>Last updated: April 2026</span>
            <button onClick={() => setRoute('terms')} className="tag orange" style={{cursor:'pointer', background:'none', border:'1px solid var(--orange)', font:'inherit'}}>
              Read Terms of Service →
            </button>
          </div>
        </div>
      </section>

    </>
  );
}

window.Privacy = Privacy;
