const { useState: useStateL, useEffect: useEffectL } = React;

function Hero({ setRoute, heroVariant, showOtter }) {
  const [query, setQuery] = useStateL('');
  const [idx, setIdx] = useStateL(0);
  const isMobile = useWindowWidth() < 768;
  const samples = [
    'CRISPR-based gene therapy for pediatric sickle cell',
    'longitudinal study of urban food insecurity, ages 12–18',
    'ML models for early detection of pancreatic adenocarcinoma',
    'community-led groundwater remediation in the Southeast',
  ];
  useEffectL(() => {
    let i = 0;
    const full = samples[idx];
    setQuery('');
    const t = setInterval(() => {
      i++;
      setQuery(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(t);
        setTimeout(() => setIdx(x => (x + 1) % samples.length), 2400);
      }
    }, 28);
    return () => clearInterval(t);
  }, [idx]);

  if (heroVariant === 'editorial') {
    return <HeroEditorial setRoute={setRoute} showOtter={showOtter} />;
  }

  return (
    <section style={{padding:'56px 0 96px', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, pointerEvents:'none'}}>
        <div className="gridbg" style={{position:'absolute', inset:0, maskImage:'radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)'}}/>
      </div>
      <div className="container" style={{position:'relative'}}>
        {!isMobile && (
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:28, color:'var(--muted)', fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:'0.06em'}}>
            <span>N 33°47′37″ · W 84°19′26″ — ATLANTA, GA · EMORY UNIVERSITY</span>
            <span>SPRING 2026 · <span style={{color:'var(--orange-deep)'}}>NIH · NSF · DARPA · FOUNDATIONS</span></span>
          </div>
        )}

        <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? 40 : 64, alignItems:'start'}}>
          <div>
            <div className="bracket-label" style={{marginBottom:24}}>01 / the grant workflow, rebuilt</div>
            <h1 style={{
              fontFamily:'Instrument Serif, Georgia, serif',
              fontWeight:400,
              fontSize:'clamp(56px, 7vw, 104px)',
              lineHeight:0.95,
              letterSpacing:'-0.03em',
              color:'var(--ink)',
            }}>
              From <em style={{color:'var(--teal-deep)'}}>blank page</em><br/>
              to <em style={{color:'var(--orange-deep)'}}>submitted proposal</em>.<br/>
              <span className="mono" style={{fontStyle:'normal', fontSize:'0.42em', letterSpacing:'-0.01em', color:'var(--muted)', display:'inline-block', marginTop:18}}>
                &nbsp;→ &nbsp;in one workspace.
              </span>
            </h1>

            <p style={{marginTop:32, maxWidth:520, fontSize:17, lineHeight:1.55, color:'var(--ink-2)'}}>
              GrantOtter is an AI-native workspace for faculty and research teams at Emory and beyond.
              Build a researcher profile, discover best-fit funding, find collaborators,
              and draft biosketches — with the grant-specific boilerplate handled for you.
            </p>

            <div style={{display:'flex', gap:12, marginTop:36, flexWrap:'wrap'}}>
              <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-primary">
                Launch app <span>→</span>
              </a>
              <button className="btn btn-ghost" onClick={() => setRoute('features')}>
                <span style={{color:'var(--teal-deep)'}}>▶</span> See how it works
              </button>
            </div>

            <div style={{display:'flex', gap:24, marginTop:40, color:'var(--muted)', fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:'0.04em'}}>
              <span><span style={{color:'var(--teal-deep)'}}>✓</span> Free for researchers</span>
              <span><span style={{color:'var(--teal-deep)'}}>✓</span> No credit card</span>
              <span><span style={{color:'var(--teal-deep)'}}>✓</span> Built at Emory</span>
            </div>
          </div>

          <div style={{paddingTop:40}}>
            <div className="tick-row" style={{marginBottom:10, justifyContent:'space-between'}}>
              <span>// live discovery · demo</span>
              <span>⌘K</span>
            </div>
            <div className="term fade-in" key={idx}>
              <div className="term-head">
                <div style={{display:'flex', alignItems:'center', gap:10}}>
                  <div className="dots"><span/><span/><span/></div>
                  <span>grantotter · discover.sh</span>
                </div>
                <span>● matching</span>
              </div>
              <div className="term-body">
                <div>
                  <span className="prompt">otter@lab:~$</span> <span className="key">match</span> <span style={{color:'var(--muted)'}}>--profile</span>=<span className="str">my_profile_2026</span>
                </div>
                <div style={{paddingLeft:0, marginTop:6, color:'var(--ink-2)'}}>
                  <span style={{color:'var(--muted)'}}>?</span> describe your work:
                </div>
                <div style={{paddingLeft:0, color:'var(--ink)', minHeight:22}}>
                  <span style={{color:'var(--teal-deep)'}}>&gt;</span> {query}<span className="blink" style={{color:'var(--ink)'}}>▊</span>
                </div>

                <div style={{height:1, background:'var(--line)', margin:'14px 0'}}/>

                <div className="comment">→ top matches · sorted by fit × deadline</div>
                <div style={{marginTop:12, display:'grid', gap:10, overflowX:'auto'}}>
                  {[
                    { agency: 'NIH · R01',    code: 'PA-25-303',       fit: 94, amt: '$2.4M / 4y', due: 'Jun 05' },
                    { agency: 'NSF · CAREER', code: 'NSF 25-590',      fit: 91, amt: '$600k / 5y', due: 'Jul 22' },
                    { agency: 'DARPA · YFA',  code: 'HR001-26-S-0004', fit: 87, amt: '$1M / 3y',   due: 'Aug 14' },
                    { agency: 'Emory · IRG',  code: 'Emory-IRG-2026',  fit: 82, amt: '$50k / 1y',  due: 'Sep 01' },
                  ].map((r, i) => (
                    <div key={i} style={{display:'grid', gridTemplateColumns:'110px 1fr 80px 90px 70px', gap:10, alignItems:'center', padding:'8px 10px', background:'var(--bg-2)', borderLeft:`2px solid ${i===0 ? 'var(--teal-deep)' : 'var(--line-2)'}`, minWidth:460}}>
                      <span style={{color:'var(--teal-deep)', fontWeight:600}}>{r.agency}</span>
                      <span style={{color:'var(--muted)'}}>{r.code}</span>
                      <span style={{color:'var(--ink)'}}>{r.amt}</span>
                      <span style={{color:'var(--muted)'}}>due {r.due}</span>
                      <span style={{display:'flex', alignItems:'center', gap:6, justifyContent:'flex-end'}}>
                        <span style={{width:28, height:4, background:'var(--line)', position:'relative'}}>
                          <span style={{position:'absolute', inset:0, width:`${r.fit}%`, background: i===0 ? 'var(--orange)' : 'var(--teal)'}}/>
                        </span>
                        <span style={{color:'var(--ink)', fontWeight:600}}>{r.fit}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{marginTop:16, color:'var(--muted)'}}>
                  <span className="prompt">otter@lab:~$</span> <span className="blink">▊</span>
                </div>
              </div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', marginTop:12, fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'var(--muted)', letterSpacing:'0.06em'}}>
              <span>NIH · NSF · DARPA</span>
              <span>foundations + Emory internal</span>
              <span>updated weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroEditorial({ setRoute, showOtter }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <section style={{padding: isMobile ? '48px 0 64px' : '80px 0 120px', position:'relative'}}>
      <div className="container">
        <div className="bracket-label" style={{marginBottom: isMobile ? 24 : 40}}>01 / mission</div>
        <h1 style={{
          fontFamily:'Instrument Serif, Georgia, serif',
          fontSize: isMobile ? 'clamp(44px, 12vw, 72px)' : 'clamp(72px, 9vw, 140px)',
          lineHeight:1.02, letterSpacing:'-0.035em',
          maxWidth:1200,
          paddingBottom: '0.12em',
          overflow: 'visible',
        }}>
          The grant process is <em style={{color:'var(--orange-deep)'}}>the tax</em><br/>
          on <em style={{color:'var(--teal-deep)'}}>good research.</em>
        </h1>
        <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 420px', gap: isMobile ? 32 : 60, marginTop: isMobile ? 40 : 120, alignItems:'end'}}>
          <p style={{fontSize: isMobile ? 16 : 20, lineHeight:1.5, maxWidth:640, color:'var(--ink-2)'}}>
            Before you write a single word, researchers spend <span className="mono" style={{color:'var(--orange-deep)', fontWeight:600}}>20–40 hours</span> just to{' '}
            <span className="mono" style={{color:'var(--orange-deep)', fontWeight:600}}>find the right opportunity</span>,{' '}
            <span className="mono" style={{color:'var(--orange-deep)', fontWeight:600}}>assemble the right team</span>, and{' '}
            <span className="mono" style={{color:'var(--orange-deep)', fontWeight:600}}>shape an idea worth funding</span>.
            Without the right tools, each one is a research project in itself.{' '}
            <span style={{color:'var(--teal-deep)', fontWeight:600}}>GrantOtter</span> handles all three with AI — so you arrive at the blank page already knowing{' '}
            <span style={{color:'var(--teal-deep)', fontWeight:600}}>What, Who, and How</span>.
          </p>
          <div>
            <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{display:'inline-block', marginBottom:12}}>
              Launch app — it's free <span>→</span>
            </a><br/>
            <button className="btn btn-ghost" onClick={() => setRoute('features')}>
              See how it works →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="bracket-label">02 / our approach</span>
          </div>
          <h2>From <em>opportunity</em> to <em>proposal</em> — in one place.</h2>
        </div>

        <div style={{border:'1px solid var(--line-2)', borderRadius:4, overflow:'hidden', background:'var(--bg-2)'}}>
          <video controls playsInline style={{width:'100%', display:'block'}}>
            <source src="GrantOtterPromo.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
}

function ModulesGrid({ setRoute }) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w < 1024;
  const mods = [
    { n: '01', k: 'PROFILE',   name: 'Researcher Profile',    desc: 'Just your name and institution — that\'s all it takes. GrantOtter searches Google Scholar, PubMed, ORCID, and your faculty page to build a complete profile from open data. Upload your CV for an even faster, more accurate result.',  stat: 'Minimum input · maximum coverage', color: 'teal' },
    { n: '02', k: 'DISCOVER',  name: 'Grant Discovery',       desc: 'Match your profile against 2,000+ active opportunities across NIH, NSF, DARPA, foundations, and Emory internal grants. A three-stage pipeline — hard filter, rule-based scoring, then AI ranking — surfaces your best fits with plain-language explanations.',            stat: '2,000+ grants indexed',  color: 'orange' },
    { n: '03', k: 'TEAM',      name: 'Collaborator Search',   desc: 'Describe the expertise you need in plain language and GrantOtter finds the best-matched Emory faculty — then shows you the connection path between you and each person through shared departments, centers, and co-authorships. Warm introductions, not cold outreach.',          stat: '450+ Emory faculty',     color: 'teal' },
    { n: '04', k: 'BRAINSTORM', name: 'Concept Brainstorming', desc: 'Select a grant and your team profiles, then generate 2–3 concrete proposal concepts with budget estimates and strategic framing tailored to the specific funding opportunity.',  stat: '2–3 concepts · with budget estimates', color: 'orange' },
    { n: '05', k: 'BIOSKETCH', name: 'NIH Biosketch',         desc: 'Generate a formatted NIH Biographical Sketch from your researcher profile. Aligned with current NIH Common Form guidance including section limits and citation requirements.',   stat: 'NIH Common Form',        color: 'teal' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="bracket-label">03 / modules</span>
          </div>
          <h2>Five modules. <em>One workspace.</em></h2>
        </div>

        <div style={{display:'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)', border:'1px solid var(--line-2)', borderRight:0}}>
          {mods.map((m, i) => (
            <div key={m.n} onClick={() => setRoute('features')} style={{
              borderRight:'1px solid var(--line-2)',
              padding: isMobile ? '20px 16px 18px' : '28px 22px 24px',
              background: i % 2 === 0 ? 'var(--paper)' : 'transparent',
              cursor:'pointer',
              minHeight: isMobile ? 'auto' : 340,
              display:'flex', flexDirection:'column',
              transition:'background .2s',
            }}>
              <div className="tick-row" style={{justifyContent:'space-between', marginBottom:22}}>
                <span>{m.n}</span>
                <span className={`tag ${m.color}`} style={{fontSize:10, padding:'2px 6px'}}>{m.k}</span>
              </div>
              <h3 style={{
                fontFamily:'Instrument Serif, Georgia, serif',
                fontWeight:400, fontStyle:'italic',
                fontSize:28, lineHeight:1.05, letterSpacing:'-0.02em',
                marginBottom:18, color:'var(--ink)',
              }}>{m.name}</h3>
              <p style={{fontSize:13, lineHeight:1.55, color:'var(--ink-2)', flex:1}}>{m.desc}</p>
              <div style={{marginTop:20, paddingTop:14, borderTop:'1px dashed var(--line)', fontFamily:'JetBrains Mono, monospace', fontSize:11, color:'var(--muted)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span>{m.stat}</span>
                <span style={{color:'var(--teal-deep)'}}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WeeklyFeed({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <section className="section" style={{background:'var(--paper)'}}>
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="bracket-label">04 / weekly feed</span>
            <span className="mono" style={{color:'var(--muted)', fontSize:11}}>updated every monday</span>
          </div>
          <h2>Grant opportunities and agency news, <em>delivered weekly.</em></h2>
        </div>

        <div style={{border:'1px solid var(--line-2)', background:'var(--bg)', padding: isMobile ? '24px 20px 20px' : '40px 40px 32px'}}>
          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 48, alignItems:'center'}}>
            <div>
              <p style={{fontSize:16, lineHeight:1.6, color:'var(--ink-2)', marginBottom:28}}>
                Every Monday, GrantOtter aggregates the latest funding opportunities, deadlines, and agency news from NIH, NSF, and DARPA into a single weekly digest — no account required.
              </p>
              <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
                <button className="btn btn-primary" onClick={() => setRoute('feed')}>
                  View this week's feed →
                </button>
                <RssSubscribeButton label="Subscribe" btnClass="btn btn-ghost" />
              </div>
            </div>
            <div style={{display:'grid', gap:12}}>
              {[
                { agency: 'NIH',   label: 'Funding opportunities, FOA updates, NOT notices' },
                { agency: 'NSF',   label: 'Program announcements, solicitations, deadlines' },
                { agency: 'DARPA', label: 'BAAs, broad agency announcements, YFA cycles' },
              ].map((item, i) => (
                <div key={i} style={{display:'flex', alignItems:'center', gap:16, padding:'14px 18px', border:'1px solid var(--line-2)', background:'var(--paper)'}}>
                  <span className={`tag ${i === 1 ? 'orange' : 'teal'}`} style={{fontSize:10, minWidth:52, textAlign:'center'}}>{item.agency}</span>
                  <span style={{fontSize:13, color:'var(--ink-2)'}}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ setRoute }) {
  return (
    <section style={{padding:'120px 0', background:'var(--ink)', color:'var(--bg)', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(#2B3634 1px, transparent 1px), linear-gradient(90deg, #2B3634 1px, transparent 1px)', backgroundSize:'48px 48px', opacity:0.3, maskImage:'radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)'}}/>
      <div className="container" style={{position:'relative', textAlign:'center'}}>
        <h2 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize:'clamp(56px, 8vw, 120px)', fontStyle:'italic', fontWeight:400, lineHeight:0.95, letterSpacing:'-0.03em', maxWidth:1100, margin:'0 auto'}}>
          Your next grant: <span style={{color:'var(--teal)'}}>found.</span><br/>
          Your team: <span style={{color:'var(--teal)'}}>assembled.</span><br/>
          Your proposal: <span style={{color:'var(--teal)'}}>drafted.</span><br/>
          <span style={{fontSize:'0.55em', letterSpacing:'-0.01em'}}>Start to finish, <span style={{color:'var(--orange)'}}>in hours.</span></span>
        </h2>
        <div style={{marginTop:48, display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
          <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal">
            Launch app — free →
          </a>
          <a href="tutorial.html" className="btn btn-ghost" style={{background:'var(--teal-deep)', color:'#fff', borderColor:'var(--teal-deep)'}}>
            Get started guide
          </a>
          <a href="https://join.slack.com/t/grantottercommunity/shared_invite/zt-3wb5fmemq-CPTYpyWjXzl8wkmhn6tw4Q" target="_blank" rel="noopener" className="btn btn-ghost" style={{background:'#4A154B', color:'#fff', borderColor:'#4A154B', display:'inline-flex', alignItems:'center', gap:8}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
            Join Slack group
          </a>
        </div>
        <div style={{marginTop:32, fontFamily:'JetBrains Mono, monospace', fontSize:11, color:'#5C6664'}}>
          no credit card · no account required to browse
        </div>
      </div>
    </section>
  );
}

function Landing({ setRoute, heroVariant, showOtter }) {
  return (
    <>
      <Hero setRoute={setRoute} heroVariant={heroVariant} showOtter={showOtter} />
      <Ticker />
      <OurApproach />
      <ModulesGrid setRoute={setRoute} />
      <WeeklyFeed setRoute={setRoute} />
      <FinalCTA setRoute={setRoute} />
    </>
  );
}

window.Landing = Landing;
