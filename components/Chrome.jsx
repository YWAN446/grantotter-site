const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

function useWindowWidth() {
  const [w, setW] = React.useState(() => window.innerWidth);
  React.useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
}
window.useWindowWidth = useWindowWidth;

function RssSubscribeButton({ label = 'Subscribe', btnClass = 'btn btn-ghost' }) {
  const [open, setOpen]     = useStateC(false);
  const [copied, setCopied] = useStateC(false);
  const ref    = useRefC(null);
  const RSS_URL = 'https://grantotter.com/feed.xml';

  useEffectC(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  function copyRss() {
    navigator.clipboard.writeText(RSS_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const options = [
    {
      href:  'https://theoldreader.com/feeds/subscribe?url=https%3A%2F%2Fgrantotter.com%2Ffeed.xml',
      label: 'The Old Reader',
      sub:   'Free RSS reader — no paywalls',
      icon: (
        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" style={{borderRadius:3,flexShrink:0}}>
          <rect width="40" height="40" rx="4" fill="#E8691A"/>
          <circle cx="20" cy="20" r="9" stroke="white" strokeWidth="2.5" fill="none"/>
          <path d="M14 20a6 6 0 0 1 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="20" r="2.5" fill="white"/>
        </svg>
      ),
    },
    {
      href:  'https://www.inoreader.com/?add_feed=https://grantotter.com/feed.xml',
      label: 'Inoreader',
      sub:   'Powerful free RSS reader with filters',
      icon: (
        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" style={{borderRadius:3,flexShrink:0}}>
          <rect width="40" height="40" rx="4" fill="#0062FF"/>
          <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="3" fill="none"/>
          <circle cx="20" cy="20" r="4" fill="white"/>
        </svg>
      ),
    },
    {
      href:  'https://blogtrottr.com/?subscribe=https://grantotter.com/feed.xml',
      label: 'Get it by email',
      sub:   'Blogtrottr — weekly updates in your inbox',
      icon: (
        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" style={{borderRadius:3,flexShrink:0}}>
          <rect width="40" height="40" rx="4" fill="#E53E3E"/>
          <path d="M8 13h24v14H8V13zm0 0l12 9 12-9" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const rowStyle = {
    display:'flex', alignItems:'center', gap:10, padding:'10px 14px',
    color:'var(--ink-2)', textDecoration:'none', width:'100%', background:'none',
    border:'none', cursor:'pointer', fontFamily:'JetBrains Mono,monospace', fontSize:12,
    textAlign:'left', transition:'background 0.15s',
  };

  return (
    <div style={{position:'relative', display:'inline-block'}} ref={ref}>
      <button
        className={btnClass}
        style={{display:'inline-flex', alignItems:'center', gap:8}}
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="6.18" cy="17.82" r="2.18"/>
          <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
        </svg>
        {label}
      </button>

      {open && (
        <div style={{
          position:'absolute', top:'calc(100% + 8px)', left:0,
          background:'var(--paper)', border:'1px solid var(--line-2)', borderRadius:3,
          boxShadow:'0 20px 50px -20px rgba(0,0,0,0.3)',
          minWidth:280, zIndex:200, overflow:'hidden',
          fontFamily:'JetBrains Mono,monospace', fontSize:12,
        }}>
          <div style={{padding:'10px 14px 8px', fontSize:10, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', borderBottom:'1px solid var(--line)', background:'var(--bg-2)'}}>
            Subscribe to weekly updates
          </div>

          {options.map(opt => (
            <a key={opt.label} href={opt.href} target="_blank" rel="noopener"
               style={rowStyle}
               onMouseEnter={e => e.currentTarget.style.background='var(--bg-2)'}
               onMouseLeave={e => e.currentTarget.style.background='none'}>
              {opt.icon}
              <span style={{display:'flex', flexDirection:'column', gap:2}}>
                {opt.label}
                <span style={{fontSize:10, color:'var(--muted)'}}>{opt.sub}</span>
              </span>
            </a>
          ))}

          <div style={{height:1, background:'var(--line)'}}/>

          <button onClick={copyRss} style={rowStyle}
            onMouseEnter={e => e.currentTarget.style.background='var(--bg-2)'}
            onMouseLeave={e => e.currentTarget.style.background='none'}>
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" style={{background:'var(--bg-2)', borderRadius:3, flexShrink:0}}>
              <path d="M14 12h14v16H14V12zm-4 4h4m0 0v12h14" stroke="var(--muted)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{display:'flex', flexDirection:'column', gap:2}}>
              {copied ? 'Copied!' : 'Copy RSS link'}
              <span style={{fontSize:10, color:'var(--muted)'}}>{copied ? 'Paste into your RSS reader' : 'Paste into any RSS reader or podcast app'}</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function OtterMark({ size = 22, showOtter = true }) {
  if (!showOtter) {
    return (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
        <rect x="1" y="1" width="20" height="20" stroke="var(--ink)" strokeWidth="1.5"/>
        <path d="M6 11 L10 11 L10 7 L16 7" stroke="var(--teal-deep)" strokeWidth="1.5" fill="none"/>
        <circle cx="16" cy="7" r="1.5" fill="var(--orange)"/>
      </svg>
    );
  }
  return (
    <img src="logo-mark.png" alt="GrantOtter" width={size} height={size} style={{display:'block', objectFit:'contain'}} />
  );
}

function Nav({ route, setRoute, showOtter }) {
  const [menuOpen, setMenuOpen] = useStateC(false);
  const isMobile = useWindowWidth() < 768;

  const navLinks = [
    ['home',     'Home'],
    ['features', 'Features'],
    ['feed',     'Weekly Feed'],
    ['blog',     'Blog'],
    ['tutorial', 'Get Started'],
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" onClick={() => { setRoute('home'); setMenuOpen(false); }} style={{cursor:'pointer'}}>
          <span className="mark"><OtterMark showOtter={showOtter} /></span>
          <span>GrantOtter</span>
        </a>
        <div className="nav-links">
          {navLinks.map(([k, label]) => (
            <a key={k}
               className={`nav-link ${route === k ? 'active' : ''}`}
               onClick={() => setRoute(k)}
               style={{cursor:'pointer'}}>
              {label}
            </a>
          ))}
          <span style={{width:12}}/>
          <a className="nav-cta" href="https://grantotter.streamlit.app" target="_blank" rel="noopener">
            Launch app <span className="arrow">→</span>
          </a>
        </div>
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {isMobile && menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map(([k, label]) => (
            <a key={k}
               className={`nav-link ${route === k ? 'active' : ''}`}
               onClick={() => { setRoute(k); setMenuOpen(false); }}
               style={{cursor:'pointer'}}>
              {label}
            </a>
          ))}
          <a className="nav-mobile-cta" href="https://grantotter.streamlit.app" target="_blank" rel="noopener">
            Launch app →
          </a>
        </div>
      )}
    </nav>
  );
}

function Ticker() {
  const items = [
    ['FEDERAL_AGENCIES', 'NIH · NSF · DARPA · DOE · NASA · USDA · DOD · and more via Grants.gov'],
    ['FOUNDATIONS',      'ACS · Komen · Gates · Simons · Sloan · Wellcome · and 200+ more'],
    ['GRANTS_INDEXED',   '2,000+ · updated every Monday'],
    ['EMORY_RESEARCHERS','450+ Emory RSPH + Nursing faculty indexed'],
    ['MODULES',          'Profile · Discover · Collaborate · Brainstorm · Biosketch'],
    ['RESEARCHERS',       '41 users · 7 institutions'],
    ['COST',             'Free for researchers'],
  ];
  const row = (
    <>
      {items.map(([k, v], i) => (
        <span key={i}><span className="sig">◆</span> {k}<span style={{color:'var(--line-2)', margin:'0 6px'}}>/</span><span style={{color:'var(--ink)'}}>{v}</span></span>
      ))}
    </>
  );
  return (
    <div className="scroll-ticker">
      <div className="ticker-track">
        {row}{row}
      </div>
    </div>
  );
}

function Footer({ setRoute }) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w < 1024;
  const footerCols = isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr 1fr' : '2fr 1fr 1fr 1fr';
  return (
    <footer style={{background:'var(--ink)', color:'var(--bg)', padding: isMobile ? '40px 0 20px' : '64px 0 28px', fontFamily:'JetBrains Mono, monospace', fontSize:12}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns: footerCols, gap: isMobile ? 24 : 40, paddingBottom: isMobile ? 28 : 48, borderBottom:'1px solid #2B3634'}}>
          <div style={{gridColumn: isMobile ? '1 / -1' : 'auto'}}>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:18}}>
              <img src="logo-mark.png" alt="GrantOtter" width={22} height={22} style={{objectFit:'contain'}} />
              <span style={{fontSize:14, fontWeight:600}}>GrantOtter</span>
            </div>
            <p style={{color:'#8A9491', maxWidth:320, lineHeight:1.6, fontFamily:'Inter, sans-serif', fontSize:13}}>
              AI-powered grant discovery for faculty and research teams.
            </p>
            <div style={{marginTop:24, display:'flex', gap:10, alignItems:'center', color:'#8A9491'}}>
              <span style={{width:6, height:6, borderRadius:'50%', background:'#3BD171', boxShadow:'0 0 6px #3BD171'}}/>
              <span>All systems operational</span>
            </div>
          </div>
          {[
            ['Product', [
              { label: 'Features',    onClick: () => setRoute('features') },
              { label: 'Weekly Feed', onClick: () => setRoute('feed') },
            ]],
            ['Resources', [
              { label: 'Get Started', onClick: () => setRoute('tutorial') },
              { label: 'Blog',        onClick: () => setRoute('blog') },
              { label: 'Help',        onClick: () => setRoute('help') },
              { label: 'Privacy',     onClick: () => setRoute('privacy') },
              { label: 'Terms',       onClick: () => setRoute('terms') },
            ]],
            ['App', [
              { label: 'Launch App', href: 'https://grantotter.streamlit.app', external: true },
              { label: 'Join Slack', href: 'https://join.slack.com/t/grantottercommunity/shared_invite/zt-3wb5fmemq-CPTYpyWjXzl8wkmhn6tw4Q', external: true },
            ]],
          ].map(([title, rows]) => (
            <div key={title}>
              <div style={{color:'#8A9491', textTransform:'uppercase', letterSpacing:'0.08em', fontSize:11, marginBottom:14}}>{title}</div>
              {rows.map(r => (
                r.href
                  ? <a key={r.label} href={r.href} target={r.external ? '_blank' : undefined} rel={r.external ? 'noopener' : undefined}
                       style={{display:'block', padding:'5px 0', color:'inherit', textDecoration:'none'}} className="footlink">{r.label}</a>
                  : <div key={r.label} style={{padding:'5px 0', cursor:'pointer'}} className="footlink" onClick={r.onClick}>{r.label}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{display:'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent:'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap:8, paddingTop:24, color:'#5C6664'}}>
          <span>© 2026 GrantOtter. Built for researchers, by researchers.</span>
          <span>Free for researchers · <a href="mailto:grantotter42@gmail.com" style={{color:'#5C6664', textDecoration:'none'}}>Contact us</a></span>
        </div>
      </div>
      <style>{`.footlink:hover{color:var(--teal);} `}</style>
    </footer>
  );
}

Object.assign(window, { OtterMark, Nav, Ticker, Footer, RssSubscribeButton });
