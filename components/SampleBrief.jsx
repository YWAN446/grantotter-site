const EMAIL_GREEN = '#2c6e49';

function EmailFrame({ filename, badge, children }) {
  return (
    <div>
      <div className="tick-row" style={{marginBottom:8, justifyContent:'space-between'}}>
        <span>// {filename}</span>
        <span>{badge}</span>
      </div>
      <div style={{border:'1px solid var(--line-2)', background:'#f6f7f8', padding:'22px 22px 18px', borderRadius:4}}>
        <div style={{background:'#ffffff', border:'1px solid #e5e7eb', borderRadius:8, padding:'20px 22px', color:'#333', fontFamily:'Inter, sans-serif'}}>
          {children}
        </div>
      </div>
    </div>
  );
}

function EmailH2({ children }) {
  return (
    <h4 style={{margin:'18px 0 6px', color:'#1f2937', fontSize:14, fontWeight:700, borderBottom:`2px solid ${EMAIL_GREEN}`, paddingBottom:4}}>{children}</h4>
  );
}

function EmailItem({ headline, summary, why, source, url }) {
  return (
    <div style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'12px 14px', margin:'10px 0', background:'#fff'}}>
      <div style={{color:EMAIL_GREEN, fontSize:13.5, fontWeight:600, lineHeight:1.4, marginBottom:6}}>{headline}</div>
      <p style={{margin:'0 0 8px', fontSize:12.5, color:'#333', lineHeight:1.55}}>{summary}</p>
      {why && <p style={{margin:'0 0 8px', fontSize:12.5, color:'#555', lineHeight:1.55}}><strong>Why it matters:</strong> {why}</p>}
      <a href={url} target="_blank" rel="noopener" style={{color:EMAIL_GREEN, fontSize:12.5, textDecoration:'none'}}>Read more — {source} →</a>
    </div>
  );
}

function EmailBullet({ id, title, url }) {
  return (
    <li style={{margin:'4px 0', fontSize:12.5, lineHeight:1.5, color:'#333'}}>
      {id && <span style={{color:'#6b7280', fontWeight:600}}>{id} — </span>}
      {title}{' '}
      <a href={url} target="_blank" rel="noopener" style={{color:EMAIL_GREEN, textDecoration:'none'}}>(view)</a>
    </li>
  );
}

function SampleBrief({ setRoute }) {
  const isMobile = useWindowWidth() < 1024;
  return (
    <>
      <section style={{padding: isMobile ? '48px 0 24px' : '80px 0 40px'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>sample issue · week of jul 27, 2026</div>
          <h1 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize: isMobile ? 'clamp(40px, 11vw, 64px)' : 'clamp(52px, 6.5vw, 96px)', lineHeight:0.97, letterSpacing:'-0.03em', fontStyle:'italic', fontWeight:400, marginBottom:24}}>
            What lands in <em style={{color:'var(--teal-deep)'}}>your inbox.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--ink-2)', maxWidth:640, lineHeight:1.6}}>
            Real excerpts from the two weekly news briefs sent to GrantOtter users the week of
            July 27, 2026 — every item below links to its original source. This sample is static;
            subscribers get a fresh issue every Monday, and saving a researcher profile adds a
            third email: personalized grant alerts.
          </p>
        </div>
      </section>

      <section style={{padding:'20px 0 40px'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:32, alignItems:'start'}}>

            <EmailFrame filename="this-week-in-grant-news.eml" badge="federal · sample">
              <div style={{fontSize:17, fontWeight:700, color:EMAIL_GREEN, marginBottom:2}}>This Week in Grant News</div>
              <div style={{fontSize:11.5, color:'#888', marginBottom:12}}>Week of July 27, 2026 · from GrantOtter</div>
              <p style={{margin:'0 0 6px', fontSize:12.5, color:'#333', lineHeight:1.55}}>
                A consequential week for NIH applicants: a new notice reshapes support letters for FY2027,
                and ORCID linking guidance arrives ahead of the senior/key-personnel requirement.
              </p>

              <EmailH2>Policy</EmailH2>
              <EmailItem
                headline="NIH Replaces Letters of Support with Letters of Collaboration"
                summary="Effective FY2027, NIH will eliminate letters of support in favor of letters of collaboration — capped at 100 words and limited to documenting genuine collaborative commitments, aligning NIH practice with NSF."
                why="Endorsement-style letters that praise a project without committing resources will no longer be allowed. Templates and boilerplate letters in your current drafts will need rework before FY2027 submissions."
                source="NIH Guide NOT-OD-26-094"
                url="https://grants.nih.gov/grants/guide/notice-files/NOT-OD-26-094.html"
              />

              <EmailH2>Agency News</EmailH2>
              <EmailItem
                headline="Step-by-Step Guidance for Linking Your ORCID iD to eRA Commons"
                summary="NIH published a walkthrough for linking ORCID identifiers to eRA Commons accounts — now required for all senior/key personnel on grant applications. An ORCID iD can be linked to only one eRA Commons account."
                why="If anyone on your application hasn't linked their ORCID iD, this is the checklist to send them before your next submission."
                source="NIH Extramural Nexus"
                url="https://grants.nih.gov/news-events/nih-extramural-nexus-news/2026/07/step-by-step-guidance-available-to-link-your-orcid-id-to-your-era-commons-profile"
              />

              <EmailH2>All Grant Opportunities This Week</EmailH2>
              <ul style={{margin:'6px 0', paddingLeft:20}}>
                <EmailBullet id="RFA-RM-27-002" title="NIH Director's New Innovator Award (DP2)" url="https://grants.nih.gov/grants/guide/rfa-files/RFA-RM-27-002.html" />
                <EmailBullet id="PAR-24-174" title="Global Infectious Disease Research Training Program (D43)" url="https://grants.nih.gov/grants/guide/pa-files/PAR-24-174.html" />
                <EmailBullet id="PAR-25-051" title="Blueprint Neurotherapeutics Network: Small Molecule Drug Discovery" url="https://grants.nih.gov/grants/guide/pa-files/PAR-25-051.html" />
              </ul>
              <div style={{fontSize:11, color:'#9ca3af', marginTop:14, borderTop:'1px solid #e5e7eb', paddingTop:8}}>
                Excerpt — the full issue also covers budget & appropriations, deadlines, RFIs, and webinars.
              </div>
            </EmailFrame>

            <EmailFrame filename="this-week-in-foundation-grant-news.eml" badge="foundation · sample">
              <div style={{fontSize:17, fontWeight:700, color:EMAIL_GREEN, marginBottom:2}}>This Week in Foundation Grant News</div>
              <div style={{fontSize:11.5, color:'#888', marginBottom:12}}>Week of July 27, 2026 · from GrantOtter</div>
              <p style={{margin:'0 0 6px', fontSize:12.5, color:'#333', lineHeight:1.55}}>
                From this week's funder newsletters: Arnold Ventures opens two evidence RFPs with
                September letters of interest, and Wellcome's photography prize returns.
              </p>

              <EmailH2>This Week's Top Stories</EmailH2>
              <EmailItem
                headline="Arnold Ventures: Strengthening Evidence RFP — RCTs for Social Programs"
                summary="Funds rigorous randomized controlled trials evaluating U.S. social programs and policies, with special interest in replications and long-term follow-ups of prior RCTs. Letters of interest due September 11, 2026."
                why="A rare funder of replication and extended follow-up studies — strong fit if you have an existing RCT cohort to extend."
                source="Arnold Ventures newsletter"
                url="https://www.arnoldventures.org/evidence-evaluation-rfps"
              />
              <EmailItem
                headline="Arnold Ventures: Building Evidence RFP — Quasi-Experimental Designs"
                summary="Supports causal research using natural experiments, regression discontinuity, difference-in-differences, and IV designs across priority areas including higher education, career pathways, health care, Medicaid, infrastructure, and public finance."
                why="QED-friendly funding is scarce — this is one of the few programs that funds observational causal inference at scale."
                source="Arnold Ventures newsletter"
                url="https://www.arnoldventures.org/evidence-evaluation-rfps"
              />

              <EmailH2>All Grant Opportunities This Week</EmailH2>
              <ul style={{margin:'6px 0', paddingLeft:20}}>
                <EmailBullet title="Arnold Ventures — Strengthening Evidence RFP (LOI due Sep 11, 2026)" url="https://www.arnoldventures.org/evidence-evaluation-rfps" />
                <EmailBullet title="Arnold Ventures — Building Evidence RFP (rolling LOI)" url="https://www.arnoldventures.org/evidence-evaluation-rfps" />
                <EmailBullet title="Wellcome Photography Prize 2026 (deadline Oct 21, 2026)" url="https://wellcome.org/grant-funding/schemes/wellcome-photography-prize" />
              </ul>
              <div style={{background:'#f0f7f3', border:`1px solid ${EMAIL_GREEN}22`, borderRadius:6, padding:'10px 12px', marginTop:12, fontSize:12, color:'#333', lineHeight:1.55}}>
                <strong style={{color:EMAIL_GREEN}}>The pipeline at work:</strong> both Arnold Ventures RFPs above were
                drafted into GrantOtter's grant database from this issue, human-reviewed, and are now
                matchable — subscribers with relevant profiles saw them in their personalized alerts.
              </div>
            </EmailFrame>

          </div>
        </div>
      </section>

      <section style={{padding: isMobile ? '40px 0 72px' : '56px 0 104px'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontFamily:'Instrument Serif, Georgia, serif', fontSize: isMobile ? 32 : 52, fontStyle:'italic', fontWeight:400, letterSpacing:'-0.02em', marginBottom:12}}>
            A fresh issue, <em style={{color:'var(--orange-deep)'}}>every Monday.</em>
          </h2>
          <p style={{fontSize:14, color:'var(--ink-2)', maxWidth:520, margin:'0 auto 28px', lineHeight:1.6}}>
            Create a free account to get both briefs. Save your researcher profile in My Workspace
            and personalized grant alerts join them — your top matches, scored and explained.
          </p>
          <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
            <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal">
              Create a free account →
            </a>
            <button className="btn btn-ghost" onClick={() => setRoute('home')}>
              ← Back to home
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

window.SampleBrief = SampleBrief;
