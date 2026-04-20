function Signup({ setRoute }) {
  return (
    <section style={{minHeight:'calc(100vh - 60px)', padding:'80px 0', background:'var(--paper)'}}>
      <div className="container" style={{maxWidth:900}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start'}}>

          <div>
            <div className="bracket-label" style={{marginBottom:24}}>get started</div>
            <h1 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:'clamp(52px, 7vw, 88px)', fontStyle:'italic', fontWeight:400, lineHeight:0.97, letterSpacing:'-0.03em', marginBottom:28}}>
              Your workspace<br/>is <em style={{color:'var(--teal-deep)'}}>ready.</em>
            </h1>
            <p style={{fontSize:17, lineHeight:1.55, color:'var(--ink-2)', marginBottom:36, maxWidth:460}}>
              GrantOtter is free to use — no account setup required to get started. Launch the app, generate your researcher profile, and match grants in minutes.
            </p>

            <div style={{display:'grid', gap:12, marginBottom:40}}>
              <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{display:'block', textAlign:'center', textDecoration:'none', padding:'16px 24px', fontSize:16}}>
                Launch GrantOtter app →
              </a>
              <a href="tutorial.html" className="btn btn-ghost" style={{display:'block', textAlign:'center', textDecoration:'none'}}>
                Read the get started guide first
              </a>
            </div>

            <div style={{display:'flex', gap:24, color:'var(--muted)', fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:'0.04em', flexWrap:'wrap'}}>
              <span><span style={{color:'var(--teal-deep)'}}>✓</span> Free forever</span>
              <span><span style={{color:'var(--teal-deep)'}}>✓</span> No credit card</span>
              <span><span style={{color:'var(--teal-deep)'}}>✓</span> No install</span>
            </div>
          </div>

          <div style={{position:'sticky', top:100}}>
            <div className="term">
              <div className="term-head">
                <div style={{display:'flex', gap:10, alignItems:'center'}}><div className="dots"><span/><span/><span/></div><span>what to expect</span></div>
                <span>5 modules</span>
              </div>
              <div className="term-body" style={{fontSize:13}}>
                {[
                  ['01', 'Generate Profile',    'Upload your CV or search by name → structured researcher profile'],
                  ['02', 'Match Grants',        'Profile + filters → top 10 ranked grants with fit explanations'],
                  ['03', 'Find Collaborators',  'Search 450+ Emory RSPH + Nursing faculty by research area'],
                  ['04', 'Brainstorm Concepts', 'Grant + team → 2–3 concrete proposal concepts with budgets'],
                  ['05', 'Create Biosketch',    'Profile → formatted NIH Biographical Sketch (Common Form)'],
                ].map(([n, title, desc]) => (
                  <div key={n} style={{padding:'10px 0', borderBottom:'1px solid var(--line)', display:'grid', gap:4}}>
                    <div style={{display:'flex', gap:12, alignItems:'center'}}>
                      <span className="mono" style={{color:'var(--muted)', fontSize:11}}>{n}</span>
                      <span style={{color:'var(--ink)', fontWeight:500}}>{title}</span>
                    </div>
                    <div style={{paddingLeft:28, color:'var(--muted)', fontSize:12}}>{desc}</div>
                  </div>
                ))}
                <div style={{marginTop:16, color:'var(--muted)'}}>
                  <span className="prompt">otter@lab:~$</span> <span className="blink">▊</span>
                </div>
              </div>
            </div>

            <div style={{marginTop:14, padding:'16px 18px', background:'var(--bg)', border:'1px solid var(--line-2)'}}>
              <div className="tick-row" style={{marginBottom:10}}><span>need help?</span></div>
              <div style={{display:'grid', gap:8, fontSize:13, color:'var(--ink-2)'}}>
                <a href="tutorial.html" style={{color:'inherit', textDecoration:'none'}}>→ <span style={{color:'var(--teal-deep)'}}>Get started guide</span> — step by step walkthrough</a>
                <a href="help.html" style={{color:'inherit', textDecoration:'none'}}>→ <span style={{color:'var(--teal-deep)'}}>Help page</span> — FAQs and tips</a>
                <a href="mailto:grantotter42@gmail.com" style={{color:'inherit', textDecoration:'none'}}>→ <span style={{color:'var(--teal-deep)'}}>Email us</span> — grantotter42@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

window.Signup = Signup;
