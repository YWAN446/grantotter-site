// Shown for #signup and for any hash the router does not know.
function Signup({ setRoute }) {
  const link = (route, text) => (
    <span className="text-link" role="link" tabIndex={0} onClick={() => setRoute(route)} onKeyDown={(e) => { if (e.key === 'Enter') setRoute(route); }}>{text}</span>
  );
  const expect = [
    ['Build your profile', 'Give your name and institution, or drop in your CV; the assistant researches your public record and writes your researcher profile.'],
    ['Match grants', 'Ask for a match and get ranked grants, each with the reason it fits.'],
    ['Get alerts', 'New matches by email on Monday: monthly on the Free plan, weekly on Pro and Max.'],
    ['Work an application', 'One chat per application keeps the deadline, team, checklist and drafts. Pro and Max.'],
  ];
  return (
    <section className="sec tint" style={{minHeight:'calc(100vh - 64px)'}}>
      <div className="container">
        <div className="split top">
          <div>
            <h1 className="display" style={{fontSize:'clamp(42px, 6vw, 76px)'}}>Your workspace is ready.</h1>
            <p className="lede" style={{margin:'24px 0 32px', maxWidth:480}}>
              Start on the free plan: open the app, build your researcher profile, and get grant alerts matched to your work.
            </p>
            <div style={{display:'flex', gap:16, flexWrap:'wrap', alignItems:'center'}}>
              <a href={APP_URL} target="_blank" rel="noopener" className="btn btn-signal">Start free</a>
              {link('tutorial', 'Read the get started guide first')}
            </div>
            <p className="small" style={{marginTop:20}}>No credit card to start. Nothing to install.</p>
          </div>
          <div>
            {expect.map(([title, desc]) => (
              <div key={title} className="mail-row" style={{gridTemplateColumns:'1fr'}}>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
            <p style={{marginTop:24}}>
              Need help? {link('help', 'Help and FAQs')}
              <span className="small" style={{margin:'0 10px'}}>or</span>
              <a className="text-link" href="mailto:grantotter42@gmail.com">email us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Signup = Signup;
