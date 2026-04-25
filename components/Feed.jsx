const { useState, useEffect } = React;

function Feed() {
  const [allItems, setAllItems]       = useState([]);
  const [activeSource, setActive]     = useState('All');
  const [lastUpdated, setLastUpdated] = useState('');
  const [status, setStatus]           = useState('loading'); // loading | ok | error

  useEffect(() => {
    async function loadFeed() {
      try {
        const res = await fetch('feed.xml');
        if (!res.ok) throw new Error('Feed not available');
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        if (xml.querySelector('parsererror')) throw new Error('Invalid XML');

        const lastBuild = xml.querySelector('channel > lastBuildDate');
        if (lastBuild) {
          const d = new Date(lastBuild.textContent);
          setLastUpdated(d.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
          }));
        }

        const items = Array.from(xml.querySelectorAll('item')).map(item => ({
          title:       item.querySelector('title')?.textContent       || 'Untitled',
          link:        item.querySelector('link')?.textContent        || '#',
          description: item.querySelector('description')?.textContent || '',
          pubDate:     item.querySelector('pubDate')?.textContent     || '',
          source:      item.querySelector('source')?.textContent      || 'Unknown',
          categories:  Array.from(item.querySelectorAll('category')).map(c => c.textContent),
        }));

        setAllItems(items);
        setStatus('ok');
      } catch {
        setStatus('error');
      }
    }
    loadFeed();
  }, []);

  const sources  = ['All', ...new Set(allItems.map(i => i.source))];
  const filtered = activeSource === 'All' ? allItems : allItems.filter(i => i.source === activeSource);

  return (
    <>
      {/* Hero */}
      <section style={{padding:'80px 0 56px', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>weekly feed</div>
          <h1 style={{fontFamily:'Instrument Serif,Georgia,serif', fontSize:'clamp(52px,8vw,120px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, marginBottom:28}}>
            Grant funding,<br/><em style={{color:'var(--teal-deep)'}}>every Monday.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--muted)', maxWidth:520, marginBottom:36, lineHeight:1.6}}>
            Aggregated opportunities from NIH, NSF, DARPA, and more — updated weekly. Subscribe to stay ahead of deadlines.
          </p>
          <div style={{display:'flex', alignItems:'center', gap:16, flexWrap:'wrap'}}>
            <RssSubscribeButton label="Subscribe to feed" btnClass="btn btn-signal" />
            <a href="feed.xml" className="btn btn-ghost" style={{fontSize:12}} target="_blank" rel="noopener">
              Raw XML →
            </a>
          </div>
        </div>
      </section>

      {/* Feed content */}
      <section style={{padding:'48px 0 96px'}}>
        <div className="container" style={{maxWidth:860}}>

          {lastUpdated && (
            <div className="mono" style={{fontSize:11, color:'var(--muted)', letterSpacing:'0.04em', marginBottom:24}}>
              <span style={{color:'var(--orange-deep)'}}>◆ </span>Last updated: {lastUpdated}
            </div>
          )}

          {/* Source filter */}
          {status === 'ok' && sources.length > 1 && (
            <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:32}}>
              {sources.map(src => (
                <button key={src}
                  onClick={() => setActive(src)}
                  style={{
                    fontFamily:'JetBrains Mono,monospace', fontSize:11, letterSpacing:'0.04em',
                    padding:'4px 10px', border:'1px solid', borderRadius:2, cursor:'pointer', transition:'all 0.15s',
                    borderColor: src === activeSource ? 'var(--teal-deep)' : 'var(--line-2)',
                    background:  src === activeSource ? 'var(--teal-deep)' : 'var(--bg-2)',
                    color:       src === activeSource ? 'var(--bg)'        : 'var(--ink-2)',
                  }}>
                  {src}
                </button>
              ))}
            </div>
          )}

          {/* States */}
          {status === 'loading' && (
            <div style={{padding:'80px 0', textAlign:'center', color:'var(--muted)', fontFamily:'JetBrains Mono,monospace', fontSize:12}}>
              <div className="blink" style={{marginBottom:16, fontSize:18, color:'var(--teal-deep)'}}>◆</div>
              Loading this week's funding updates...
            </div>
          )}

          {status === 'error' && (
            <div style={{padding:'64px 0', fontFamily:'JetBrains Mono,monospace', fontSize:12, color:'var(--muted)'}}>
              <div style={{color:'var(--ink)', fontSize:13, marginBottom:8, fontWeight:600}}>Feed not yet available</div>
              The weekly feed is generated every Monday at 9:00 AM UTC.<br/>
              Check back soon or{' '}
              <a href="feed.xml" style={{color:'var(--teal-deep)'}}>subscribe via RSS</a> to get notified.
            </div>
          )}

          {/* Items */}
          {status === 'ok' && filtered.length === 0 && (
            <div style={{padding:'64px 0', fontFamily:'JetBrains Mono,monospace', fontSize:12, color:'var(--muted)'}}>
              <div style={{color:'var(--ink)', fontSize:13, marginBottom:8}}>No entries found</div>
              Try selecting a different source filter.
            </div>
          )}

          {status === 'ok' && filtered.map((item, idx) => {
            const date = item.pubDate
              ? new Date(item.pubDate).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' })
              : '';
            return (
              <div key={idx} style={{
                border:'1px solid var(--line-2)', background:'var(--paper)',
                padding:'20px 24px', marginBottom:8, transition:'border-color 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--teal)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--line-2)'}>

                <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16, marginBottom:6}}>
                  <p style={{fontFamily:'Inter,sans-serif', fontSize:14, fontWeight:500, color:'var(--ink)', lineHeight:1.4, margin:0}}>
                    <a href={item.link} target="_blank" rel="noopener"
                       style={{color:'inherit', textDecoration:'none'}}
                       onMouseEnter={e => e.currentTarget.style.color='var(--teal-deep)'}
                       onMouseLeave={e => e.currentTarget.style.color='inherit'}>
                      {item.title}
                    </a>
                  </p>
                  <span style={{
                    fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.04em',
                    padding:'3px 8px', border:'1px solid var(--teal)', borderRadius:2,
                    color:'var(--teal-deep)', background:'color-mix(in oklab,var(--teal) 10%,transparent)',
                    whiteSpace:'nowrap', flexShrink:0,
                  }}>
                    {item.source}
                  </span>
                </div>

                {date && (
                  <div className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'0.04em', marginBottom:8}}>
                    {date}
                  </div>
                )}

                <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.55, margin:0}}>
                  {item.description}
                </p>

                {item.categories.length > 0 && (
                  <div style={{display:'flex', flexWrap:'wrap', gap:4, marginTop:10}}>
                    {item.categories.map((cat, i) => (
                      <span key={i} style={{
                        fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.04em',
                        padding:'2px 7px', border:'1px solid var(--line-2)', borderRadius:2,
                        color:'var(--muted)', background:'var(--bg-2)',
                      }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </section>
    </>
  );
}

window.Feed = Feed;
