function Pricing({ setRoute }) {
  return (
    <>
      <section style={{padding:'80px 0 40px'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>plans / pricing</div>
          <h1 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:'clamp(64px, 9vw, 140px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, maxWidth:1200}}>
            <em style={{color:'var(--teal-deep)'}}>Free</em> for researchers.<br/>
            <span style={{fontSize:'0.45em', color:'var(--muted)', letterSpacing:'-0.01em'}}>Institutional licensing coming soon.</span>
          </h1>
        </div>
      </section>

      <section style={{padding:'20px 0 80px'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, border:'1px solid var(--line-2)', maxWidth:860}}>

            {/* Free tier */}
            <div style={{padding:'36px 32px 40px', borderRight:'1px solid var(--line-2)', position:'relative'}}>
              <div style={{position:'absolute', top:0, left:0, right:0, height:3, background:'var(--teal-deep)'}}/>
              <div className="tick-row" style={{justifyContent:'space-between', marginBottom:16}}>
                <span>01</span>
                <span className="tag teal" style={{fontSize:10}}>current</span>
              </div>
              <h3 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:40, fontStyle:'italic', fontWeight:400, letterSpacing:'-0.02em', marginBottom:8}}>Researcher</h3>
              <p style={{fontSize:13, color:'var(--muted)', marginBottom:24}}>Full access for individual faculty and research teams.</p>
              <div style={{marginBottom:28, paddingBottom:20, borderBottom:'1px dashed var(--line)'}}>
                <div style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:72, fontStyle:'italic', letterSpacing:'-0.03em', fontWeight:400, lineHeight:1, color:'var(--teal-deep)'}}>$0</div>
                <div className="mono" style={{fontSize:12, color:'var(--muted)', marginTop:6}}>free · always</div>
              </div>
              <div style={{display:'grid', gap:10, marginBottom:32}}>
                {[
                  'Researcher profile generation',
                  'Grant discovery — 2,000+ opportunities',
                  'Concept brainstorming',
                  'NIH biosketch generation',
                  'Weekly grant alerts by email',
                  'Saved grants & applications workspace',
                ].map(l => (
                  <div key={l} style={{display:'grid', gridTemplateColumns:'14px 1fr', gap:10, fontSize:13, color:'var(--ink-2)'}}>
                    <span style={{color:'var(--teal-deep)'}}>+</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{display:'block', textAlign:'center', textDecoration:'none'}}>
                Launch app →
              </a>
            </div>

            {/* Institutional tier */}
            <div style={{padding:'36px 32px 40px', background:'var(--paper)'}}>
              <div className="tick-row" style={{justifyContent:'space-between', marginBottom:16}}>
                <span>02</span>
                <span className="tag" style={{fontSize:10}}>coming soon</span>
              </div>
              <h3 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:40, fontStyle:'italic', fontWeight:400, letterSpacing:'-0.02em', marginBottom:8}}>Institution</h3>
              <p style={{fontSize:13, color:'var(--muted)', marginBottom:24}}>For departments, research offices, and university-wide deployment.</p>
              <div style={{marginBottom:28, paddingBottom:20, borderBottom:'1px dashed var(--line)'}}>
                <div style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:40, fontStyle:'italic', letterSpacing:'-0.02em', color:'var(--muted)'}}>custom</div>
                <div className="mono" style={{fontSize:12, color:'var(--muted)', marginTop:6}}>contact us to discuss</div>
              </div>
              <div style={{display:'grid', gap:10, marginBottom:32}}>
                {[
                  'Everything in Researcher',
                  'Collaborator search — institution faculty profiles',
                  'Multi-user shared workspace',
                  'Institution-wide faculty profiles',
                  'Branded grant alert emails',
                  'Admin dashboard',
                  'Priority support + onboarding',
                  'Custom grant repository integration',
                ].map(l => (
                  <div key={l} style={{display:'grid', gridTemplateColumns:'14px 1fr', gap:10, fontSize:13, color:'var(--ink-2)'}}>
                    <span style={{color:'var(--muted)'}}>+</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:grantotter42@gmail.com?subject=GrantOtter institutional license" className="btn btn-ghost" style={{display:'block', textAlign:'center', textDecoration:'none'}}>
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </section>

</>
  );
}

window.Pricing = Pricing;
