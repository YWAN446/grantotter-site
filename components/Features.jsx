function FeatureRow({ num, tag, title, desc, children, reverse }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <section style={{padding: isMobile ? '56px 0' : '96px 0', borderBottom:'1px solid var(--line)'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 72, alignItems:'center'}}>
          <div style={{order: (!isMobile && reverse) ? 2 : 1}}>
            <div className="bracket-label" style={{marginBottom:20}}>{num} / {tag}</div>
            <h2 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize: isMobile ? 36 : 64, lineHeight: isMobile ? 1.1 : 0.98, letterSpacing:'-0.025em', fontStyle:'italic', fontWeight:400, marginBottom:24}}>{title}</h2>
            <p style={{fontSize: isMobile ? 15 : 16, lineHeight:1.6, color:'var(--ink-2)', maxWidth:520}}>{desc}</p>
          </div>
          <div style={{order: (!isMobile && reverse) ? 1 : 2}}>{children}</div>
        </div>
      </div>
    </section>
  );
}

function ProfileDemo() {
  return (
    <div className="term">
      <div className="term-head">
        <div style={{display:'flex', gap:10, alignItems:'center'}}><div className="dots"><span/><span/><span/></div><span>profile.md</span></div>
        <span>generated from open sources</span>
      </div>
      <div className="term-body" style={{fontSize:12}}>
        <div><span style={{color:'var(--muted)'}}>name:</span> <span className="key">Your Name, PhD</span></div>
        <div><span style={{color:'var(--muted)'}}>position:</span> <span>Assistant Professor</span></div>
        <div><span style={{color:'var(--muted)'}}>institution:</span> <span>Emory University · Rollins School of Public Health</span></div>
        <div style={{margin:'10px 0', height:1, background:'var(--line)'}}/>
        <div style={{color:'var(--muted)'}}>research_expertise:</div>
        {[
          ['infectious disease modeling', 5],
          ['AI/LLM applications in research', 4],
          ['biostatistics', 3],
          ['health policy', 2],
        ].map(([area, score]) => (
          <div key={area} style={{display:'grid', gridTemplateColumns:'1fr 60px', paddingLeft:12, paddingTop:4, alignItems:'center'}}>
            <span style={{color:'var(--ink-2)'}}>— {area}</span>
            <span style={{display:'flex', gap:2}}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{width:6, height:6, background: i<=score ? 'var(--teal)' : 'var(--line-2)'}}/>
              ))}
            </span>
          </div>
        ))}
        <div style={{margin:'10px 0', height:1, background:'var(--line)'}}/>
        <div style={{color:'var(--muted)'}}>grant_suitability:</div>
        <div style={{paddingLeft:12, color:'var(--ink-2)'}}>
          <div><span style={{color:'var(--muted)'}}>pi_ready:</span> R21 · R03 · foundation grants</div>
          <div><span style={{color:'var(--muted)'}}>co_i:</span> R01 · multi-site · international</div>
          <div><span style={{color:'var(--muted)'}}>publications:</span> 50+ · h-index 15</div>
        </div>
        <div style={{marginTop:12, padding:'8px 10px', background:'color-mix(in oklab, var(--teal) 8%, transparent)', borderLeft:'2px solid var(--teal-deep)'}}>
          <div className="mono" style={{fontSize:11, color:'var(--teal-deep)'}}>◇ sources used</div>
          <div style={{color:'var(--muted)', marginTop:4}}>→ web search · Google Scholar · PubMed · ORCID</div>
        </div>
      </div>
    </div>
  );
}

function DiscoverDemo() {
  return (
    <div style={{border:'1px solid var(--line-2)', background:'var(--paper)', overflowX:'auto'}}>
      <div style={{minWidth:520}}>
        <div style={{padding:'10px 14px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', fontFamily:'JetBrains Mono, monospace', fontSize:11, color:'var(--muted)', background:'var(--bg-2)'}}>
          <span>discover · 2,000+ opportunities indexed</span>
          <span>sort: fit × deadline ↓</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'60px 1fr 110px 90px 90px', padding:'10px 14px', fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', borderBottom:'1px solid var(--line)'}}>
          <span>fit</span><span>opportunity</span><span>amount</span><span>deadline</span><span>status</span>
        </div>
        {[
          { fit: 10,  agency: 'NIH / NLM',      title: 'PAR-25-131 · Computational Curation at Scale (R01)',     amt: '$250k',     due: 'Apr \'27', status: 'draft' },
          { fit: 9,  agency: 'Wellcome Trust',  title: 'Evidence Synthesis Infrastructure Hub',                  amt: '$1.9–2.4M', due: 'May 07', status: 'saved' },
          { fit: 9, agency: 'Emory EGHI',     title: 'EGHI Faculty Seed Grant — global health pilot',          amt: '$20k',      due: 'May 31', status: 'new' },
          { fit: 9,  agency: 'Emory RSPH',      title: 'RSPH Dean\'s Pilot Innovation Grant',                    amt: '$20–50k',   due: 'May 31', status: 'saved' },
          { fit: 7,  agency: 'Wellcome Trust',  title: 'Early-Career Award — 5 year independent program',        amt: '~$508k',    due: 'Jul 21', status: 'new' },
          { fit: 6,  agency: 'NIH (multi)',     title: 'PAR-25-144 · Dissemination & Implementation (R01)',      amt: 'TBD',       due: 'Jan \'28', status: 'new' },
        ].map((r, i) => (
          <div key={i} style={{display:'grid', gridTemplateColumns:'60px 1fr 110px 90px 90px', padding:'14px 14px', alignItems:'center', borderBottom:'1px solid var(--line)', fontSize:12, background: i===2 ? 'color-mix(in oklab, var(--orange) 6%, transparent)' : 'transparent'}}>
            <div style={{display:'flex', alignItems:'center', gap:6}}>
              <div style={{width:24, height:4, background:'var(--line)', position:'relative'}}><div style={{position:'absolute', inset:0, width:`${r.fit*10}%`, background:'var(--teal)'}}/></div>
              <span className="mono" style={{color:'var(--ink)', fontWeight:600, fontSize:11}}>{r.fit}</span>
            </div>
            <div>
              <div className="mono" style={{color:'var(--teal-deep)', fontSize:10, fontWeight:600}}>{r.agency}</div>
              <div style={{color:'var(--ink)', marginTop:2}}>{r.title}</div>
            </div>
            <div className="mono" style={{color:'var(--ink)'}}>{r.amt}</div>
            <div className="mono" style={{color:'var(--muted)'}}>{r.due}</div>
            <div><span className={`tag ${r.status==='draft'?'orange':r.status==='saved'?'teal':''}`} style={{fontSize:9}}>{r.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamDemo() {
  const cards = [
    { name: 'Dr. Andrew Park',      inst: 'RSPH · Biostatistics',       overlap: 'dept.', methods: ['behavioral modeling', 'mixed models'], fit: 95 },
    { name: 'Dr. Anita Mueller',    inst: 'Nursing · Maternal and Child Health',            overlap: 'school', methods: ['diet assessment', 'child nutrition'], fit: 87 },
    { name: 'Dr. Scott Miller',    inst: 'RSPH · Behavioral Sciences',  overlap: 'co-author', methods: ['behavior change', 'interventions'],  fit: 73 },
  ];
  return (
    <div>
      <div className="tick-row" style={{marginBottom:8}}><span>suggested co-investigators · Emory RSPH + Nursing</span></div>
      <div style={{display:'grid', gap:10}}>
        {cards.map((c, i) => (
          <div key={i} style={{border:'1px solid var(--line-2)', background:'var(--paper)', padding:'16px 18px', display:'grid', gridTemplateColumns:'1fr 60px', gap:16, alignItems:'center'}}>
            <div>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:4}}>
                <div style={{width:28, height:28, borderRadius:'50%', background:'var(--bg-2)', border:'1px solid var(--line-2)', display:'grid', placeItems:'center', fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'var(--muted)'}}>{c.name.split(' ')[1][0]}{c.name.split(' ')[2][0]}</div>
                <div style={{fontWeight:600, color:'var(--ink)'}}>{c.name}</div>
              </div>
              <div className="mono" style={{fontSize:11, color:'var(--muted)', marginBottom:8}}>{c.inst} · {c.overlap} connection</div>
              <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
                {c.methods.map(m => <span key={m} className="tag" style={{fontSize:10}}>{m}</span>)}
              </div>
            </div>
            <div style={{textAlign:'right'}}>
              <div className="mono" style={{fontSize:22, fontWeight:600, color:'var(--teal-deep)'}}>{c.fit}</div>
              <div className="mono" style={{fontSize:9, color:'var(--muted)', textTransform:'uppercase'}}>fit</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdeateDemo() {
  const concepts = [
    {
      num: '01', color: 'var(--teal-deep)', bg: 'var(--teal)',
      title: 'AI-Powered Data Curation Platform for Infectious Disease Research',
      approach: 'Multi-agent LLM system for automated literature discovery, data extraction, and structured database curation.',
      budget: '$1.6M · 4 years', innovation: 5, team: 5, cost: 4,
    },
    {
      num: '02', color: 'var(--orange-deep)', bg: 'var(--orange)',
      title: 'Data Curation and Analysis for Infectious Disease Surveillance',
      approach: 'Combines disease surveillance data with mobility and behavioral data to identify and predict outbreaks.',
      budget: '$1.2M · 4 years', innovation: 4, team: 4, cost: 5,
    },
  ];
  return (
    <div className="term">
      <div className="term-head">
        <div style={{display:'flex', gap:10, alignItems:'center'}}><div className="dots"><span/><span/><span/></div><span>brainstorm · concept-draft.md</span></div>
        <span>2 concepts generated</span>
      </div>
      <div className="term-body" style={{fontSize:12}}>
        <div style={{marginBottom:12, paddingBottom:10, borderBottom:'1px solid var(--line)'}}>
          <div style={{color:'var(--muted)', fontSize:11}}>grant</div>
          <div style={{color:'var(--ink)', fontWeight:600}}>PAR-25-131 · Computational Curation at Scale (R01)</div>
          <div style={{display:'flex', gap:16, marginTop:4, color:'var(--muted)'}}>
            <span>NIH / NLM</span><span>·</span><span>$250k ceiling</span><span>·</span><span>Apr 2027</span>
          </div>
        </div>
        {concepts.map(c => (
          <div key={c.num} style={{background:`color-mix(in oklab, ${c.bg} 8%, transparent)`, padding:'10px 12px', borderLeft:`2px solid ${c.color}`, marginBottom:10}}>
            <div style={{color:c.color, fontWeight:600, marginBottom:4}}>◆ CONCEPT {c.num}</div>
            <div style={{color:'var(--ink)', marginBottom:4}}>{c.title}</div>
            <div style={{color:'var(--ink-2)', marginBottom:8, fontSize:11, lineHeight:1.5}}>{c.approach}</div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <span style={{color:'var(--muted)'}}>est. {c.budget}</span>
              <span style={{display:'flex', gap:10, fontFamily:'JetBrains Mono, monospace', fontSize:10}}>
                {[['innov', c.innovation], ['team', c.team], ['cost', c.cost]].map(([label, val]) => (
                  <span key={label}><span style={{color:'var(--muted)'}}>{label} </span><span style={{color:c.color, fontWeight:600}}>{val}/5</span></span>
                ))}
              </span>
            </div>
          </div>
        ))}
        <div style={{color:'var(--muted)', fontSize:11, marginTop:4}}>
          → team profiles used: PI · 2 co-investigators
          &nbsp;·&nbsp; <span style={{color:'var(--teal-deep)'}}>recommended: concept 01</span>
        </div>
      </div>
    </div>
  );
}

function BiosketcDemo() {
  const sections = [
    ['Professional Preparation', 'education · 3 degrees'],
    ['Appointments & Positions', '4 roles · 2023–present'],
    ['A · Personal Statement',   '~600 words · grant-tailored'],
    ['B · Positions & Honors',   'current + prior positions'],
    ['C · Contributions to Science', '5 contributions · with citations'],
    ['D · Research Support',     'active + recently completed'],
    ['Products',                 '5 related · 5 other significant'],
  ];
  return (
    <div className="term">
      <div className="term-head">
        <div style={{display:'flex', gap:10, alignItems:'center'}}><div className="dots"><span/><span/><span/></div><span>biosketch.md</span></div>
        <span>NIH Common Form</span>
      </div>
      <div className="term-body" style={{fontSize:12}}>
        <div style={{marginBottom:10, paddingBottom:10, borderBottom:'1px solid var(--line)'}}>
          <div style={{color:'var(--muted)', fontSize:11}}>grant</div>
          <div style={{color:'var(--ink)', fontWeight:600}}>PAR-25-131 · Computational Curation at Scale (R01)</div>
        </div>
        <div style={{marginBottom:10, paddingBottom:10, borderBottom:'1px solid var(--line)', padding:'8px 10px', background:'color-mix(in oklab, var(--teal) 8%, transparent)', borderLeft:'2px solid var(--teal-deep)'}}>
          <div className="mono" style={{fontSize:10, color:'var(--teal-deep)', marginBottom:4}}>A · personal statement (preview)</div>
          <div style={{color:'var(--ink-2)', lineHeight:1.5, fontSize:11}}>"I am uniquely positioned to contribute to computational approaches for curation at scale through my experience developing and deploying tools that transform complex biomedical data into actionable public health resources..."</div>
        </div>
        <div style={{display:'grid', gap:0}}>
          {sections.map(([name, note], i) => (
            <div key={i} style={{display:'grid', gridTemplateColumns:'16px 1fr', gap:8, padding:'6px 0', borderBottom: i<sections.length-1?'1px solid var(--line)':'none', alignItems:'start'}}>
              <span style={{color:'var(--teal-deep)', marginTop:1}}>✓</span>
              <div>
                <span style={{color:'var(--ink)'}}>{name}</span>
                <span style={{color:'var(--muted)', marginLeft:8, fontSize:11}}>{note}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:10, color:'var(--muted)', fontSize:11}}>
          → ORCID linked · aligned with NIH Common Form
        </div>
      </div>
    </div>
  );
}

function Features({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <>
      <section style={{padding: isMobile ? '48px 0 36px' : '80px 0 60px'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>product / features</div>
          <h1 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize: isMobile ? 'clamp(44px, 12vw, 72px)' : 'clamp(64px, 9vw, 140px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, maxWidth:1200}}>
            Every step of the <em style={{color:'var(--teal-deep)'}}>grant workflow</em>,<br/>
            <em style={{color:'var(--orange-deep)'}}>handled.</em>
          </h1>
          <div style={{display:'flex', flexWrap:'wrap', gap: isMobile ? 12 : 24, marginTop:40, fontFamily:'JetBrains Mono, monospace', fontSize:12, color:'var(--muted)'}}>
            {['01 profile','02 discover','03 team','04 brainstorm','05 biosketch'].map(x => (
              <span key={x}><span style={{color:'var(--teal-deep)'}}>▸</span> {x}</span>
            ))}
          </div>
        </div>
      </section>

      <FeatureRow num="01" tag="profile" title={<>A researcher profile, <em style={{color:'var(--teal-deep)'}}>built for you</em>.</>}
        desc="Just your name and institution — that's all GrantOtter needs to get started. It searches open sources for your publications, grants, and research areas to build a structured profile used across all five modules. Minimum input, maximum coverage.">
        <ProfileDemo/>
      </FeatureRow>

      <FeatureRow reverse num="02" tag="discover" title={<>Ranked matches across <em style={{color:'var(--orange-deep)'}}>2,000+</em> opportunities.</>}
        desc="A three-stage pipeline: hard filters eliminate ineligible grants, a rule-based scorer ranks by field and career stage, then LLM evaluates the top candidates against your profile and writes fit explanations. Federal, foundation, and Emory internal grants — updated every Monday.">
        <DiscoverDemo/>
      </FeatureRow>

      <FeatureRow num="03" tag="team" title={<>Find the co-I with <em style={{color:'var(--teal-deep)'}}>expertise you need</em>.</>}
        desc="Semantic search across 450+ Emory RSPH and Nursing faculty — find collaborators by expertise, not just keywords. GrantOtter surfaces connection paths between you and potential co-investigators through shared departments, centers, and prior collaborations.">
        <TeamDemo/>
      </FeatureRow>

      <FeatureRow reverse num="04" tag="brainstorm" title={<>From grant + team to <em style={{color:'var(--orange-deep)'}}>funded concept</em>.</>}
        desc="Select a grant opportunity and your team profiles. GrantOtter generates 2–3 concrete proposal concepts with strategic framing, budget estimates, and rationale tailored to the specific agency and mechanism.">
        <IdeateDemo/>
      </FeatureRow>

      <FeatureRow num="05" tag="biosketch" title={<>NIH Biosketch, <em style={{color:'var(--teal-deep)'}}>formatted correctly</em>.</>}
        desc="Generate a formatted NIH Biographical Sketch directly from your researcher profile. Aligned with current NIH Common Form guidance — Personal Statement character limits, Contributions to Science structure, and required header fields.">
        <BiosketcDemo/>
      </FeatureRow>

      <section style={{padding: isMobile ? '64px 0' : '100px 0', textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize: isMobile ? 36 : 64, fontStyle:'italic', letterSpacing:'-0.02em'}}>Ready to try it on your own profile?</h2>
          <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{display:'inline-block', marginTop:32}}>Launch app — free →</a>
        </div>
      </section>
    </>
  );
}

window.Features = Features;
