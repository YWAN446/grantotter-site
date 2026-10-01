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

function OtterMark({ size = 32 }) {
  return (
    <img src="logo-mark.png?v=2" alt="" width={size} height={size} style={{display:'block', objectFit:'contain'}} />
  );
}

const APP_URL = 'https://app.grantotter.com';
const SLACK_URL = 'https://join.slack.com/t/grantottercommunity/shared_invite/zt-3wb5fmemq-CPTYpyWjXzl8wkmhn6tw4Q';
const THEME_KEY = 'grantotter.site.theme';

// The theme lives on <html data-theme>; index.html sets it before paint.
function useTheme() {
  const [theme, setTheme] = useStateC(() => document.documentElement.getAttribute('data-theme') || 'light');
  function toggle() {
    // Read the live attribute: the nav mounts two toggles (desktop and narrow) with separate state.
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private window: the choice lasts for this page view */ }
    setTheme(next);
  }
  return [theme, toggle];
}

function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const dark = theme === 'dark';
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Light theme' : 'Dark theme'}>
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      )}
    </button>
  );
}

function Nav({ route, setRoute }) {
  const [menuOpen, setMenuOpen] = useStateC(false);
  const isNarrow = useWindowWidth() <= 1040;

  const navLinks = [
    ['features',     'Features'],
    ['institutions', 'For institutions'],
    ['pricing',      'Pricing'],
    ['feed',         'Weekly Feed'],
    ['blog',         'Blog'],
    ['tutorial',     'Get Started'],
  ];
  const go = (k) => { setRoute(k); setMenuOpen(false); };
  const onKey = (k) => (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(k); } };

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-inner">
        <a className="nav-logo" role="link" tabIndex={0} onClick={() => go('home')} onKeyDown={onKey('home')} aria-label="GrantOtter home">
          <span className="mark"><OtterMark /></span>
          <span>GrantOtter</span>
        </a>
        <div className="nav-links">
          {navLinks.map(([k, label]) => (
            <a key={k} role="link" tabIndex={0}
               className={`nav-link ${route === k ? 'active' : ''}`}
               aria-current={route === k ? 'page' : undefined}
               onClick={() => go(k)} onKeyDown={onKey(k)}>
              {label}
            </a>
          ))}
          <span style={{width:6}}/>
          <ThemeToggle />
          <span style={{width:6}}/>
          <a className="nav-cta" href={APP_URL} target="_blank" rel="noopener">Start free</a>
        </div>
        {isNarrow && (
          <div style={{display:'flex', alignItems:'center', gap:4}}>
            <ThemeToggle />
            <button className="nav-hamburger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        )}
      </div>
      {isNarrow && menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map(([k, label]) => (
            <a key={k} role="link" tabIndex={0}
               className={`nav-link ${route === k ? 'active' : ''}`}
               onClick={() => go(k)} onKeyDown={onKey(k)}>
              {label}
            </a>
          ))}
          <a className="nav-mobile-cta" href={APP_URL} target="_blank" rel="noopener">Start free</a>
        </div>
      )}
    </nav>
  );
}

// Kept for pages that still reference it; the home page no longer shows a ticker.
function Ticker() { return null; }

function Footer({ setRoute }) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const cols = isMobile ? '1fr 1fr' : '1.6fr 1fr 1fr 1fr';
  const groups = [
    ['Product', [
      { label: 'Features',         onClick: () => setRoute('features') },
      { label: 'For institutions', onClick: () => setRoute('institutions') },
      { label: 'Pricing',          onClick: () => setRoute('pricing') },
      { label: 'Weekly Feed',      onClick: () => setRoute('feed') },
    ]],
    ['Resources', [
      { label: 'Get Started', onClick: () => setRoute('tutorial') },
      { label: 'Blog',        onClick: () => setRoute('blog') },
      { label: 'Help',        onClick: () => setRoute('help') },
      { label: 'Privacy',     onClick: () => setRoute('privacy') },
      { label: 'Terms',       onClick: () => setRoute('terms') },
    ]],
    ['App', [
      { label: 'Open the app',         href: APP_URL, external: true },
      { label: 'Join the Slack group', href: SLACK_URL, external: true },
      { label: 'Contact us',           href: 'mailto:grantotter42@gmail.com' },
    ]],
  ];
  return (
    <footer style={{background:'var(--band-bg)', color:'var(--band-ink)', padding: isMobile ? '48px 0 24px' : '72px 0 32px', fontSize:15, borderTop:'1px solid var(--line)'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns: cols, gap: isMobile ? 28 : 40, paddingBottom: isMobile ? 32 : 48, borderBottom:'1px solid color-mix(in oklab, var(--band-ink) 16%, transparent)'}}>
          <div style={{gridColumn: isMobile ? '1 / -1' : 'auto', maxWidth:340}}>
            <div style={{display:'flex', alignItems:'center', gap:10, fontWeight:600, fontSize:18}}>
              <OtterMark size={34} /> GrantOtter
            </div>
            <p style={{marginTop:14, color:'var(--band-muted)', lineHeight:1.6}}>
              A grant assistant for researchers: find the funding, build the team, draft the application.
            </p>
          </div>
          {groups.map(([title, rows]) => (
            <div key={title}>
              <div style={{color:'var(--band-muted)', fontSize:14, fontWeight:600, marginBottom:12}}>{title}</div>
              {rows.map(r => (
                r.href
                  ? <a key={r.label} href={r.href} target={r.external ? '_blank' : undefined} rel={r.external ? 'noopener' : undefined}
                       style={{display:'block', padding:'6px 0'}} className="footlink">{r.label}</a>
                  : <a key={r.label} role="link" tabIndex={0} style={{display:'block', padding:'6px 0', cursor:'pointer'}} className="footlink"
                       onClick={r.onClick} onKeyDown={(e) => { if (e.key === 'Enter') r.onClick(); }}>{r.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{display:'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent:'space-between', gap:8, paddingTop:24, color:'var(--band-muted)', fontSize:14}}>
          <span>© 2026 GrantOtter. Built by researchers, for researchers.</span>
          <span>Grant alerts are free, monthly on the Free plan.</span>
        </div>
      </div>
      <style>{`.footlink:hover{color:#6ADAD6;}`}</style>
    </footer>
  );
}

// Shared section head for the redesigned pages.
function SecHead({ kicker, title, children }) {
  return (
    <div className="sec-head">
      {kicker && <div className="kicker">{kicker}</div>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

Object.assign(window, { OtterMark, Nav, Ticker, Footer, RssSubscribeButton, ThemeToggle, SecHead, APP_URL, SLACK_URL });
