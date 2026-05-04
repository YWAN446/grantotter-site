function Tip({ children }) {
  return (
    <div style={{padding:'12px 16px', background:'color-mix(in oklab,var(--orange) 6%,transparent)', borderLeft:'2px solid var(--orange-deep)', margin:'16px 0', fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
      <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--orange-deep)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:6}}>◆ tip</span>
      {children}
    </div>
  );
}

function Banner({ children }) {
  return (
    <div style={{padding:'14px 18px', background:'color-mix(in oklab,var(--teal) 6%,transparent)', borderLeft:'2px solid var(--teal-deep)', margin:'0 0 24px', fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
      {children}
    </div>
  );
}

function Media({ src, alt, caption, isVideo }) {
  return (
    <div style={{border:'1px solid var(--line-2)', background:'var(--paper)', marginTop:24, overflow:'hidden'}}>
      {isVideo
        ? <video autoPlay loop muted playsInline style={{width:'100%', display:'block'}}><source src={src} type="video/mp4"/></video>
        : <img src={src} alt={alt} style={{width:'100%', display:'block'}}/>
      }
      <div style={{padding:'10px 16px', borderTop:'1px solid var(--line)', fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--muted)'}}>
        {caption}
      </div>
    </div>
  );
}

function OL({ children }) {
  return <ol style={{display:'grid', gap:10, paddingLeft:0, listStyle:'none', margin:'12px 0'}}>{children}</ol>;
}
function UL({ children }) {
  return <ul style={{display:'grid', gap:8, paddingLeft:0, listStyle:'none', margin:'8px 0'}}>{children}</ul>;
}
function Li({ n, accent = 'var(--teal-deep)', children }) {
  return (
    <li style={{display:'grid', gridTemplateColumns:'20px 1fr', gap:10, fontSize:13, color:'var(--ink-2)', lineHeight:1.6}}>
      <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:accent, paddingTop:3}}>{n}</span>
      <span>{children}</span>
    </li>
  );
}

function H3({ children }) {
  return <div style={{fontFamily:'JetBrains Mono,monospace', fontSize:12, color:'var(--ink)', letterSpacing:'0.04em', textTransform:'uppercase', margin:'24px 0 10px', paddingTop:20, borderTop:'1px dashed var(--line)'}}>{children}</div>;
}

function Code({ children }) {
  return <code style={{fontFamily:'JetBrains Mono,monospace', fontSize:12, background:'var(--bg-2)', border:'1px solid var(--line-2)', padding:'1px 5px', borderRadius:2, color:'var(--teal-deep)'}}>{children}</code>;
}

function Step({ id, n, tag, tagColor = 'teal', bg, children }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <section className="section" id={id} style={bg ? {background: bg} : {}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '180px 1fr', gap: isMobile ? 20 : 48, alignItems:'start'}}>
          <div style={{display:'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : 'flex-start', gap:10, position: isMobile ? 'static' : 'sticky', top:80}}>
            <span className="bracket-label" style={{fontSize:14}}>{n}</span>
            <span className={`tag ${tagColor}`} style={{alignSelf:'flex-start', fontSize:10}}>{tag}</span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

function StepH2({ children }) {
  return <h2 style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontWeight:400, fontSize:'clamp(28px,3vw,40px)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:20, color:'var(--ink)'}}>{children}</h2>;
}

function Tutorial({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  const toc = [
    ['Step 0: Sign Up',          '#step0', 'teal'],
    ['Step 1: My Workspace',     '#step1', 'teal'],
    ['Step 2: Generate Profile', '#step2', 'teal'],
    ['Step 3: Match Grants',     '#step3', 'teal'],
    ['Step 4: Collaborators',    '#step4', 'teal'],
    ['Step 5: My Applications',  '#step5', 'teal'],
    ['Step 6: Draft Concepts',   '#step6', 'teal'],
    ['Step 7: Biosketch',        '#step7', 'teal'],
    ['⚡ Power User',            '#power-user', 'orange'],
  ];

  return (
    <>
      {/* Hero */}
      <section style={{padding: isMobile ? '48px 0 36px' : '80px 0 56px', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>get started</div>
          <h1 style={{fontFamily:'Instrument Serif,Georgia,serif', fontSize: isMobile ? 'clamp(44px,12vw,72px)' : 'clamp(52px,7vw,110px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, marginBottom:28}}>
            The full workflow,<br/><em style={{color:'var(--teal-deep)'}}>step by step.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--muted)', maxWidth:560, lineHeight:1.6, marginBottom:36}}>
            From building your researcher profile to managing a full grant application — every feature, explained.
          </p>
          <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
            {toc.map(([label, href, color]) => (
              <a key={href} href={href} className={`tag ${color}`} style={{cursor:'pointer', textDecoration:'none', fontSize:10}}
                onClick={e => { e.preventDefault(); document.getElementById(href.slice(1))?.scrollIntoView({behavior:'smooth'}); }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Step 0: Sign Up */}
      <Step id="step0" n="step 0" tag="Before You Begin" bg="var(--paper)">
        <StepH2>Sign Up &amp; Log In</StepH2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          GrantOtter is a web app — no installation needed. Open it at{' '}
          <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" style={{color:'var(--orange-deep)', fontWeight:600}}>grantotter.streamlit.app</a>{' '}
          in any browser. You'll be greeted with a sign-in screen before accessing the app.
        </p>
        <H3>Creating an account</H3>
        <OL>
          <Li n="1.">Click the <strong style={{color:'var(--teal-deep)'}}>Create Account</strong> tab on the welcome screen.</Li>
          <Li n="2.">Enter your email address and choose a password (minimum 6 characters).</Li>
          <Li n="3.">Click <strong style={{color:'var(--teal-deep)'}}>Create Account</strong>. You will be signed in automatically.</Li>
        </OL>
        <H3>Signing in on return visits</H3>
        <OL>
          <Li n="1.">Go to <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" style={{color:'var(--orange-deep)'}}>grantotter.streamlit.app</a>.</Li>
          <Li n="2.">Enter your email and password in the <strong style={{color:'var(--teal-deep)'}}>Sign In</strong> tab and click <strong style={{color:'var(--teal-deep)'}}>Sign In</strong>.</Li>
        </OL>
        <Tip>To sign out, use the <strong style={{color:'var(--teal-deep)'}}>Sign Out</strong> button in the sidebar at any time. Your profile and saved data are stored securely and will be there when you sign back in.</Tip>
        <Tip><strong style={{color:'var(--orange-deep)'}}>Forgot your password?</strong> On the sign-in screen, click <strong style={{color:'var(--orange-deep)'}}>Forgot password?</strong>, enter your email, and click <strong style={{color:'var(--teal-deep)'}}>Send Reset Email</strong>. A reset link will arrive in your inbox within a few minutes.</Tip>
        <Media src="media/sign_up.png" alt="GrantOtter sign-up screen" isVideo={false}
          caption="The sign-up screen — click the Sign Up tab, fill in your email and password, then click Create Account." />
      </Step>

      {/* Step 1: My Workspace */}
      <Step id="step1" n="step 1" tag="Tab: My Workspace">
        <StepH2>Meet My Workspace — Your Central Hub</StepH2>
        <Banner>
          <strong>My Workspace is the home base for everything you build in GrantOtter.</strong>{' '}
          Before diving into any feature, it helps to know where things live. Your researcher profile, preferred collaborators, saved grant opportunities, and previous proposals are all managed from this single tab.
        </Banner>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>My Workspace has five sections:</p>
        <UL>
          <Li n="→"><strong>My Profile</strong> — your AI-generated researcher profile (created in Step 2). Download it, replace it with an edited version, or delete it here. This profile powers grant matching, brainstorming, and biosketch generation — and triggers <span style={{color:'var(--teal-deep)', fontWeight:600}}>weekly grant alert emails</span> <span style={{color:'var(--orange-deep)', fontWeight:600}}>every Monday</span> with new matched opportunities.</Li>
          <Li n="→"><strong>Potential Collaborators</strong> — a discovery shortlist of researchers you're considering. Add anyone interesting from the chatbot or institution pool. These are not yet part of your active team.</Li>
          <Li n="→"><strong>Preferred Collaborators</strong> — profiles of team members you've committed to working with. These appear in team selectors across the app and are used in grant matching and brainstorming. Promote researchers from Potential Collaborators to this list once you've decided to include them on a proposal.</Li>
          <Li n="→"><strong>Saved Grant Opportunities</strong> — grants you've bookmarked from Match Grants results for later review.</Li>
          <Li n="→"><strong>Previous Proposals</strong> — upload specific aims pages, 2-pagers, or full proposals from past applications. These can be used as an alternative starting point for new grant matching.</Li>
        </UL>
        <Media src="media/my_workspace.png" alt="My Workspace tab" isVideo={false}
          caption="My Workspace — your central hub for managing your profile, collaborators, saved grants, and previous proposals." />
      </Step>

      {/* Step 2: Generate Profile */}
      <Step id="step2" n="step 2" tag="Tab: Generate Profile" bg="var(--paper)">
        <StepH2>Generate Your Researcher Profile</StepH2>
        <Banner>
          <strong>The profile is the foundation of everything in GrantOtter.</strong>{' '}
          Every feature — grant matching, concept brainstorming, biosketch generation — draws from your researcher profile <Code>.md</Code> file as its primary knowledge base. The more complete and accurate your profile, the better every downstream result will be.
        </Banner>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>
          GrantOtter builds this profile by searching the web — pulling from <span style={{color:'var(--teal-deep)'}}>Google Scholar</span>, <span style={{color:'var(--teal-deep)'}}>PubMed</span>, <span style={{color:'var(--teal-deep)'}}>ORCID</span>, <span style={{color:'var(--teal-deep)'}}>ResearchGate</span>, your institution's <span style={{color:'var(--teal-deep)'}}>faculty page</span>, <span style={{color:'var(--teal-deep)'}}>NIH RePORTER</span>, and public grant databases. It includes:
        </p>
        <UL>
          <Li n="+"><strong>Research expertise</strong> — scored areas with evidence and recent activity</Li>
          <Li n="+"><strong>Financial parameters</strong> — estimated salary, F&amp;A rates, fringe rates, and budget implications</Li>
          <Li n="+"><strong>Grant suitability</strong> — readiness as PI vs. co-investigator, recommended mechanisms (R01, R21, K-awards, etc.)</Li>
          <Li n="+"><strong>Active &amp; past grants</strong> — funding history with roles and amounts where publicly available</Li>
          <Li n="+"><strong>Collaborator network</strong> — frequent co-authors and key institutional partnerships</Li>
          <Li n="+"><strong>Publication impact</strong> — citation counts, h-index, high-impact journals</Li>
        </UL>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, margin:'16px 0 12px'}}>
          Your name and institution are the only required fields. We strongly recommend completing two fields that directly shape your grant recommendations in Match Grants:
        </p>
        <UL>
          <Li n="→" accent="var(--teal-deep)"><strong style={{color:'var(--teal-deep)'}}>Developing Research Interests</strong> — areas you're actively moving into, even if you have few publications there yet. GrantOtter will prioritize these when ranking grants.</Li>
          <Li n="→" accent="var(--teal-deep)"><strong style={{color:'var(--orange-deep)'}}>Areas to Avoid</strong> — research areas you do <em>not</em> want to see in grant recommendations. This filters out irrelevant matches so your ranked list stays focused.</Li>
        </UL>
        <Tip>
          The best profile starts with your CV. Upload it directly in the form for the most accurate and complete result. If you don't have a CV ready, make sure these are up to date:{' '}
          <strong>Google Scholar</strong> (publications + citations),{' '}
          <strong>ORCID</strong> (publications + grants linked), and your{' '}
          <strong>faculty or personal website</strong> (current role, affiliations, research areas).
        </Tip>
        <H3>How to do it</H3>
        <OL>
          <Li n="1.">Open GrantOtter and go to the <strong style={{color:'var(--teal-deep)'}}>Generate Profile</strong> tab.</Li>
          <Li n="2.">Enter your full name and institution (e.g., <em>"Yuke Wang, Emory University"</em>). These are the only required fields.</Li>
          <Li n="3.">Optionally fill in Department, Rank, ORCID, and Google Scholar URL — especially important if your name is common.</Li>
          <Li n="4.">Optionally upload your <strong style={{color:'var(--teal-deep)'}}>CV</strong> (PDF, Word, Markdown, or plain text — up to 10 MB). When provided, the CV is treated as the highest-priority source of truth and the AI fills gaps with web search.</Li>
          <Li n="5.">Fill in <strong style={{color:'var(--teal-deep)'}}>Developing Research Interests</strong> and <strong style={{color:'var(--orange-deep)'}}>Areas to Avoid</strong>.</Li>
          <Li n="6.">Click <strong style={{color:'var(--teal-deep)'}}>Generate Profile</strong>. The AI will search the web and stream the profile live — this takes <span style={{color:'var(--orange-deep)', fontWeight:600}}>2–3 minutes</span>.</Li>
          <Li n="7.">Review the profile and save it as <strong style={{color:'var(--teal-deep)'}}>My Profile</strong> in your workspace.</Li>
        </OL>
        <div style={{padding:'14px 18px', background:'color-mix(in oklab,var(--teal) 6%,transparent)', borderLeft:'2px solid var(--teal-deep)', margin:'16px 0', fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
          <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--teal-deep)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:6}}>◆ Weekly grant alerts</span>
          Once your profile is saved as <strong style={{color:'var(--teal-deep)'}}>My Profile</strong>, GrantOtter will automatically email you <span style={{color:'var(--orange-deep)', fontWeight:600}}>every Monday</span> with new grant opportunities matched to your research. Each alert includes AI-generated explanations and one-click buttons to rate or save grants directly to your workspace.
        </div>
        <Media src="media/generate_profile.mp4" alt="Generate Profile" isVideo={true}
          caption="Enter your name and institution, click Generate Profile, and watch your researcher profile stream in live." />
        <H3>Reviewing and updating your profile</H3>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>The AI-generated profile is a strong first draft — take a few minutes to review it before using it for grant matching. Things to check:</p>
        <UL>
          <Li n="+"><strong>Expertise scores</strong> — adjust any that feel too high or too low (scale 1–5)</Li>
          <Li n="+"><strong>Missing or incorrect affiliations</strong> — department, secondary appointments, collaborating centers</Li>
          <Li n="+"><strong>Publication list</strong> — titles, years, and your authorship role</Li>
          <Li n="+"><strong>Grant history</strong> — confirm listed grants and your role on each (PI, co-I, key personnel)</Li>
          <Li n="+"><strong>Contact identifiers</strong> — ORCID iD and Google Scholar URL</Li>
        </UL>
        <H3>How to update your profile</H3>
        <OL>
          <Li n="1.">Go to <strong style={{color:'var(--teal-deep)'}}>My Workspace</strong> and find your saved profile under <em>My Profile</em>.</Li>
          <Li n="2.">Click <strong style={{color:'var(--teal-deep)'}}>Download</strong> to save the <Code>.md</Code> file to your computer.</Li>
          <Li n="3.">Open the file in any text editor (Notepad, VS Code, Obsidian, etc.) and review each section.</Li>
          <Li n="4.">Make any corrections, then save the file.</Li>
          <Li n="5.">Return to <strong style={{color:'var(--teal-deep)'}}>My Workspace</strong>, click <strong style={{color:'var(--teal-deep)'}}>Replace</strong> under My Profile, and upload the edited file.</Li>
        </OL>
      </Step>

      {/* Step 3: Match Grants */}
      <Step id="step3" n="step 3" tag="Tab: Match Grants">
        <StepH2>Match Grants to Your Profile</StepH2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:24}}>
          GrantOtter compares your profile against <span style={{color:'var(--orange-deep)', fontWeight:600}}>2,000+</span> open funding opportunities — federal grants (e.g., from <span style={{color:'var(--teal-deep)'}}>NIH</span> and <span style={{color:'var(--teal-deep)'}}>NSF</span>), plus foundation and institutional grants — using a three-stage pipeline:
        </p>
        {/* Pipeline */}
        <div style={{display:'grid', gap:8, marginBottom:24}}>
          {[
            ['01 · Hard filters',       'var(--teal-deep)', 'Instantly removes ineligible grants based on your eligibility type, application deadline, budget range, and funding mechanism.'],
            ['02 · Rule-based scoring', 'var(--teal-deep)', 'Scores remaining grants across multiple dimensions — research expertise match, agency preference, career stage fit, and budget alignment — to surface the strongest candidates.'],
            ['03 · LLM evaluation',     'var(--orange-deep)', 'AI reads your profile and each top candidate in depth, ranks them by overall alignment, and writes a plain-language rationale for each recommendation.'],
          ].map(([label, color, desc]) => (
            <div key={label} style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:16, padding:'14px 18px', background:'var(--bg-2)', borderLeft:`2px solid ${color}`}}>
              <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color, letterSpacing:'0.02em', paddingTop:2}}>{label}</span>
              <span style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.6}}>{desc}</span>
            </div>
          ))}
        </div>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>You can match grants in two modes:</p>
        <UL>
          <Li n="→" accent="var(--teal-deep)"><strong style={{color:'var(--teal-deep)'}}>By Researcher Profile</strong> — matches based on your expertise, grant history, and research interests. Best for general discovery.</Li>
          <Li n="→" accent="var(--teal-deep)"><strong style={{color:'var(--teal-deep)'}}>By Previous Proposal</strong> — paste or upload a previous proposal (specific aims page, 2-pager, or full proposal) and GrantOtter finds new funding opportunities aligned with that research direction. Ideal for finding a new home for a rejected proposal.</Li>
        </UL>
        <H3>How to do it</H3>
        <OL>
          <Li n="1.">Go to the <strong style={{color:'var(--teal-deep)'}}>Match Grants</strong> tab and choose your matching mode.</Li>
          <Li n="2.">Set your filters: <strong style={{color:'var(--orange-deep)'}}>Deadline</strong> (days ahead to include), <strong style={{color:'var(--orange-deep)'}}>Minimum award</strong>, and <strong style={{color:'var(--orange-deep)'}}>Maximum award</strong> (enter 0 for no maximum).</Li>
          <Li n="3.">Select your profile (Researcher Profile mode) or upload/select a proposal (Previous Proposal mode). Proposals saved in My Workspace appear automatically in the dropdown.</Li>
          <Li n="4.">Click <strong style={{color:'var(--teal-deep)'}}>Find My Grants</strong>. Results appear in <span style={{color:'var(--orange-deep)', fontWeight:600}}>about a minute</span>.</Li>
          <Li n="5.">Review the ranked list — each grant shows a fit score, rationale, and deadline.</Li>
          <Li n="6.">Click <strong style={{color:'var(--teal-deep)'}}>Email Results</strong> to send the full report to your inbox, or <strong style={{color:'var(--teal-deep)'}}>Save</strong> a promising grant directly to My Workspace.</Li>
        </OL>
        <Tip>When saving a grant to My Workspace, the dropdown searches by both <strong style={{color:'var(--teal-deep)'}}>grant number</strong> (e.g., <em>PAR-25-131</em>) and <strong style={{color:'var(--teal-deep)'}}>title</strong>. Type either to quickly find the right grant.</Tip>
        <Tip>If you have a previously rejected proposal, upload it to <strong style={{color:'var(--teal-deep)'}}>My Workspace → Previous Proposals</strong> first. It will be saved for reuse across sessions so you don't need to re-upload each time.</Tip>
        <Media src="media/match_grants.mp4" alt="Match Grants" isVideo={true}
          caption="Set your filters, select your profile, click Find My Grants, and review your ranked funding matches." />
      </Step>

      {/* Step 4: Find Collaborators */}
      <Step id="step4" n="step 4" tag="Tab: Find Collaborators" bg="var(--paper)">
        <StepH2>Find &amp; Add Collaborators</StepH2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:20}}>
          GrantOtter gives you three ways to build your team: use the AI chatbot to discover collaborators through your institution network, search the faculty pool directly by name or keyword, or add colleagues you already know.
        </p>
        <H3>AI collaborator chatbot</H3>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>
          The chatbot is the most powerful way to find collaborators. Describe the expertise you're looking for in plain language, and the AI searches the institution network, identifies the best-matched faculty, and tells you <span style={{color:'var(--orange-deep)', fontWeight:600}}>how you're already connected</span> to each person — through shared departments, centers, co-authorships, or institutional affiliations.
        </p>
        <OL>
          <Li n="1.">Go to the <strong style={{color:'var(--teal-deep)'}}>Find Collaborators</strong> tab and use the chatbot at the bottom of the page.</Li>
          <Li n="2.">Describe what you're looking for — e.g., <em>"I need a biostatistician with experience in longitudinal data and clinical trials"</em> or <em>"Who works on social determinants of health and has NIH R01 funding?"</em></Li>
          <Li n="3.">The AI returns a list of faculty matches with expertise summaries and <strong style={{color:'var(--orange-deep)'}}>connection paths</strong> showing how you're linked through your institution network.</Li>
          <Li n="4.">Save promising matches to your <strong style={{color:'var(--teal-deep)'}}>Potential Collaborators</strong> list in My Workspace — a holding list for people you're considering but haven't committed to yet.</Li>
        </OL>
        <H3>Search the institution profile pool</H3>
        <OL>
          <Li n="1.">Open the <em>Institution Profile Pool</em> section in the Find Collaborators tab.</Li>
          <Li n="2.">Enter a name or keyword in the search box (e.g., <em>"Lin"</em> or <em>"health disparities"</em>).</Li>
          <Li n="3.">Browse results and click on a profile to read their full expertise summary, publication record, and grant history.</Li>
          <Li n="4.">Save to <strong style={{color:'var(--teal-deep)'}}>Potential Collaborators</strong> for consideration, or directly to <strong style={{color:'var(--teal-deep)'}}>Preferred Collaborators</strong> if you're ready to include them on a proposal.</Li>
        </OL>
        <Media src="media/add_collaborator.mp4" alt="Find Collaborators" isVideo={true}
          caption="Describe the expertise you need, get matched faculty with connection paths through your institution network, and add them to your team." />
        <H3>Add a known collaborator</H3>
        <OL>
          <Li n="1.">Use the <strong style={{color:'var(--teal-deep)'}}>Generate Profile</strong> tab to auto-generate a colleague's profile (enter their name + institution), or upload a profile file they've shared with you.</Li>
          <Li n="2.">Save the profile as a <strong style={{color:'var(--teal-deep)'}}>Preferred Collaborator</strong> — preferred collaborators appear in team selectors across the app and are used in grant matching and brainstorming.</Li>
        </OL>
        <Tip>Use <strong style={{color:'var(--teal-deep)'}}>Potential Collaborators</strong> as a discovery shortlist — save anyone interesting from the chatbot or profile pool, then promote them to <strong style={{color:'var(--teal-deep)'}}>Preferred Collaborators</strong> in My Workspace once you've decided to include them on a proposal. Only preferred collaborators are used in grant matching and team assembly.</Tip>
      </Step>

      {/* Step 5: My Applications */}
      <Step id="step5" n="step 5" tag="Tab: My Applications">
        <StepH2>Manage Your Application</StepH2>
        <Banner>
          <strong>My Applications is your end-to-end grant application hub.</strong>{' '}
          Everything GrantOtter generates — profiles, concepts, biosketches — can be assembled into a single application package and <span style={{color:'var(--teal-deep)', fontWeight:600}}>downloaded as a ZIP</span>, ready to load into any AI platform for the next stage of writing.
        </Banner>
        <Tip>Create your application as soon as you identify a grant you want to pursue — ideally right after Step 3 (Match Grants). That way, when you generate draft concepts (Step 6) and biosketches (Step 7), the <strong style={{color:'var(--teal-deep)'}}>Save to Application</strong> button will already have a destination.</Tip>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>Each application has five sections:</p>
        <UL>
          <Li n="→"><strong>Overview</strong> — title, status (Not Started / In Progress / Submitted), submission deadline, and notes</Li>
          <Li n="→"><strong>Grant Opportunity</strong> — link the FOA or RFA from the grant repository so the full document is always at hand</Li>
          <Li n="→"><strong>Team Members</strong> — select the PI and co-investigators; their profiles are bundled into the ZIP download</Li>
          <Li n="→"><strong>Documents</strong> — attach draft concepts, biosketches, budget justification, letters of support, facilities pages, and any other files (PDF, Word, Markdown, or plain text)</Li>
          <Li n="→"><strong>Checklist</strong> — track every submission component with <span style={{color:'var(--orange-deep)', fontWeight:600}}>color-coded due-date badges</span> (red = overdue, orange = within 7 days, yellow = within 30 days, green = more than 30 days out). Use <strong style={{color:'var(--teal-deep)'}}>Generate Checklist</strong> to auto-populate items from the grant FOA with due dates pre-filled.</Li>
        </UL>
        <H3>How to do it</H3>
        <OL>
          <Li n="1.">Go to the <strong style={{color:'var(--teal-deep)'}}>My Applications</strong> tab and click <strong style={{color:'var(--teal-deep)'}}>New Application</strong>.</Li>
          <Li n="2.">Give the application a name (e.g., <em>"NIH R01 — Health Informatics 2026"</em>) and set the submission deadline. You can rename it at any time using the <strong style={{color:'var(--teal-deep)'}}>Rename</strong> button.</Li>
          <Li n="3.">In <strong style={{color:'var(--teal-deep)'}}>Grant Opportunity</strong>, search for and link the grant by grant number (e.g., <Code>PAR-25-131</Code>) or title — both work.</Li>
          <Li n="4.">In <strong style={{color:'var(--teal-deep)'}}>Team Members</strong>, select yourself (My Profile) as PI and add co-investigators from your Preferred Collaborators list.</Li>
          <Li n="5.">In <strong style={{color:'var(--teal-deep)'}}>Documents</strong>, upload supporting files or use the <strong style={{color:'var(--teal-deep)'}}>Save to Application</strong> button from the Draft Concepts or Create Biosketch tabs to attach outputs directly.</Li>
          <Li n="6.">In <strong style={{color:'var(--teal-deep)'}}>Checklist</strong>, click <strong style={{color:'var(--teal-deep)'}}>Generate Checklist</strong> to have AI extract required submission components from the linked grant FOA — with due dates pre-filled based on the application deadline. Edit items or add custom ones as needed.</Li>
          <Li n="7.">When ready, click <strong style={{color:'var(--teal-deep)'}}>Download All as ZIP</strong> — this bundles the grant document, all team profiles, and every attached file into a single package.</Li>
        </OL>
        <Tip>Use the ZIP download as the starting point for your AI writing session. Upload it to <strong style={{color:'var(--orange-deep)'}}>Claude</strong>, <strong style={{color:'var(--orange-deep)'}}>ChatGPT</strong>, or <strong style={{color:'var(--orange-deep)'}}>Gemini</strong> — the AI gets full context on the grant, your team, and your draft concepts in one go. See the <a href="#power-user" style={{color:'var(--orange-deep)'}} onClick={e => { e.preventDefault(); document.getElementById('power-user')?.scrollIntoView({behavior:'smooth'}); }}>Power User section</a> below.</Tip>
        <Media src="media/create_application.mp4" alt="My Applications" isVideo={true}
          caption="Create a new application, link the grant, assemble your team, attach documents, and download everything as a ZIP." />
      </Step>

      {/* Step 6: Draft Concepts */}
      <Step id="step6" n="step 6" tag="Tab: Draft Concepts" bg="var(--paper)">
        <StepH2>Brainstorm Proposal Concepts</StepH2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:20}}>
          Once you've found a promising grant, GrantOtter can generate <span style={{color:'var(--orange-deep)', fontWeight:600}}>2–3 tailored proposal concepts</span> aligned with the funding opportunity's priorities, your team's expertise, and realistic budget constraints — <span style={{color:'var(--orange-deep)', fontWeight:600}}>in minutes</span>.
        </p>
        <H3>How to do it</H3>
        <OL>
          <Li n="1.">Go to the <strong style={{color:'var(--teal-deep)'}}>Draft Concepts</strong> tab.</Li>
          <Li n="2.">Select a grant document. The built-in grant repository covers federal, foundation, and institutional funding opportunities. Pick from the list, enter a federal grant number directly (e.g., <Code>PA-25-131</Code>), or paste the full grant information as plain text for any other funder.</Li>
          <Li n="3.">Select the <strong style={{color:'var(--orange-deep)'}}>PI</strong> — your own profile (<em>My Profile</em>) or any preferred collaborator. The PI doesn't have to be you.</Li>
          <Li n="4.">Add <strong style={{color:'var(--orange-deep)'}}>Co-Investigators</strong> from your Preferred Collaborators list.</Li>
          <Li n="5.">Optionally add <strong style={{color:'var(--orange-deep)'}}>Guidance</strong>: a short paragraph describing your angle, preliminary data, or any constraints. The more detail, the more targeted the concepts.</Li>
          <Li n="6.">Click <strong style={{color:'var(--teal-deep)'}}>Generate Concepts</strong>. GrantOtter produces 2–3 proposal concepts, each with: a working title and central hypothesis, specific aims outline, innovation score and rationale, and estimated budget breakdown.</Li>
          <Li n="7.">Download the brainstorming report as a Markdown file, or use <strong style={{color:'var(--teal-deep)'}}>Save to Application</strong> to attach it directly to an application (requires creating an application in My Applications first).</Li>
        </OL>
        <Media src="media/concept_brainstorming.mp4" alt="Draft Concepts" isVideo={true}
          caption="Select a grant, choose your PI and co-investigators, add optional guidance, and click Generate Concepts for 2–3 tailored proposal ideas." />
      </Step>

      {/* Step 7: Create Biosketch */}
      <Step id="step7" n="step 7" tag="Tab: Create Biosketch">
        <StepH2>Generate an NIH Biosketch</StepH2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:20}}>
          GrantOtter auto-generates a properly formatted NIH Biographical Sketch (Format Page) from your researcher profile — pulling your publications, positions, and personal statement to give you a solid first draft in <span style={{color:'var(--orange-deep)', fontWeight:600}}>seconds instead of hours</span>.
        </p>
        <H3>How to do it</H3>
        <OL>
          <Li n="1.">Go to the <strong style={{color:'var(--teal-deep)'}}>Create Biosketch</strong> tab.</Li>
          <Li n="2.">Select the <strong style={{color:'var(--orange-deep)'}}>target grant</strong> from the dropdown — the biosketch will be tailored to that FOA's scope.</Li>
          <Li n="3.">Select the <strong style={{color:'var(--orange-deep)'}}>researcher profile</strong> to generate the biosketch for.</Li>
          <Li n="4.">Click <strong style={{color:'var(--teal-deep)'}}>Generate Biosketch</strong>. GrantOtter drafts all four sections: Personal Statement, Positions &amp; Scientific Appointments &amp; Honors, Contributions to Science, and Research Support.</Li>
          <Li n="5.">Download the output as a Markdown file, or use <strong style={{color:'var(--teal-deep)'}}>Save to Application</strong> to attach it directly to an application. Use the downloaded file as a reference to fill in the NIH Biographical Sketch common form on <a href="https://www.ncbi.nlm.nih.gov/sciencv/" target="_blank" rel="noopener" style={{color:'var(--teal-deep)'}}>SciENcv</a>.</Li>
        </OL>
        <Tip>Always review the <strong style={{color:'var(--orange-deep)'}}>Contributions to Science</strong> section carefully. The AI selects your most relevant publications for the target grant — but verify dates, journal names, and authorship order before entering them into SciENcv.</Tip>
        <Media src="media/biosketch.png" alt="NIH Biosketch draft" isVideo={false}
          caption="Select a target grant and researcher profile, click Generate Biosketch, and get a formatted NIH Biographical Sketch draft in seconds." />
      </Step>

      {/* Power User */}
      <Step id="power-user" n="⚡ power user" tag="Claude · ChatGPT · Gemini" tagColor="orange" bg="var(--paper)">
        <StepH2>Take Your Proposal Further <em style={{color:'var(--orange-deep)'}}>with AI</em></StepH2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          GrantOtter generates a set of rich, structured documents — your researcher profile, a grant summary, a brainstorming report, and a biosketch draft. Together, these files form a <span style={{color:'var(--orange-deep)', fontWeight:600}}>ready-made knowledge base</span> that you can hand off to any general-purpose AI assistant to continue developing your proposal through natural language conversation.
        </p>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:24}}>
          Instead of starting from a blank page, you're starting with context the AI can actually use — your expertise, your team, the grant's requirements, and a set of targeted concepts. The difference in output quality is significant.
        </p>
        <H3>How to do it</H3>
        <OL>
          <Li n="1." accent="var(--orange-deep)">In <strong style={{color:'var(--teal-deep)'}}>My Applications</strong>, assemble your full application package — link the grant, add your team, attach your draft concepts and biosketches.</Li>
          <Li n="2." accent="var(--orange-deep)">Click <strong style={{color:'var(--teal-deep)'}}>Download All as ZIP</strong>. This bundles: the grant FOA/RFA document, your researcher profile and all team member profiles, draft concept reports and biosketch drafts, and any other attached documents.</Li>
          <Li n="3." accent="var(--orange-deep)">Open your AI app of choice — <span style={{color:'var(--orange-deep)', fontWeight:600}}>Claude</span>, <span style={{color:'var(--orange-deep)', fontWeight:600}}>ChatGPT</span>, or <span style={{color:'var(--orange-deep)', fontWeight:600}}>Gemini</span> — and create a new project or conversation.</Li>
          <Li n="4." accent="var(--orange-deep)">Upload the ZIP contents as context attachments.</Li>
          <Li n="5." accent="var(--orange-deep)">Start the conversation with a clear instruction. Examples:
            <UL>
              <Li n="›"><em>"Based on my profile and the brainstorming report, draft a one-page Specific Aims section for the PA-25-131 proposal. Use NIH formatting conventions."</em></Li>
              <Li n="›"><em>"Draft a short email I can send to Dr. [Name] inviting them to join this proposal as a co-investigator. Mention their expertise in [X] and explain how it complements the team."</em></Li>
            </UL>
          </Li>
          <Li n="6." accent="var(--orange-deep)">Iterate through conversation — ask the AI to tighten the language, adjust the framing, or tailor the tone. Each round takes seconds, not hours.</Li>
        </OL>
        <div style={{padding:'14px 18px', background:'color-mix(in oklab,var(--orange) 6%,transparent)', borderLeft:'2px solid var(--orange-deep)', margin:'16px 0', fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
          <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--orange-deep)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:6}}>◆ real example</span>
          In a recent session, a researcher uploaded their GrantOtter profile, a collaborator's profile, and a brainstorming report into Claude. In one conversation, they drafted a complete Specific Aims page in a Word-ready format, then immediately drafted a recruitment email to bring a colleague on board as co-investigator — both in <span style={{color:'var(--orange-deep)', fontWeight:600}}>under 2 minutes</span>.
        </div>
        <Media src="media/power_user.mp4" alt="Power User workflow" isVideo={true}
          caption="Download the ZIP from My Applications, upload the contents into Claude or ChatGPT, and use them as context to draft Specific Aims, recruitment emails, and more — in seconds." />
      </Step>

      {/* Next Steps CTA */}
      <section style={{padding: isMobile ? '64px 0' : '96px 0', background:'var(--ink)', color:'var(--bg)', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(#2B3634 1px,transparent 1px),linear-gradient(90deg,#2B3634 1px,transparent 1px)', backgroundSize:'48px 48px', opacity:0.3, maskImage:'radial-gradient(ellipse at 50% 50%,black 30%,transparent 75%)'}}/>
        <div className="container" style={{position:'relative'}}>
          <div className="bracket-label" style={{marginBottom:24, color:'#5C6664'}}>you're ready</div>
          <h2 style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontWeight:400, fontSize:'clamp(40px,5vw,80px)', lineHeight:0.95, letterSpacing:'-0.03em', marginBottom:16}}>
            The full workflow,<br/><em style={{color:'var(--teal)'}}>start to finish.</em>
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap:10, marginBottom:48}}>
            <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', gap:'6px 4px'}}>
              {[
                {label:'Generate profile',    accent:'var(--teal)'},
                {label:'Match grants',        accent:'var(--teal)'},
                {label:'Find collaborators',  accent:'var(--teal)'},
                {label:'Manage application',  accent:'var(--orange)'},
                {label:'Draft concepts',      accent:'var(--orange)'},
                {label:'Create biosketches',  accent:'var(--orange)'},
              ].map(({label, accent}, i, arr) => (
                <React.Fragment key={label}>
                  <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:11, color:accent, background:`color-mix(in oklab,${accent} 16%,#0C1412)`, border:`1px solid color-mix(in oklab,${accent} 40%,#0C1412)`, padding:'4px 10px', borderRadius:2, letterSpacing:'0.02em', whiteSpace:'nowrap'}}>{label}</span>
                  {i < arr.length - 1 && <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:20, color:'#000', fontWeight:600}}>→</span>}
                </React.Fragment>
              ))}
            </div>
            <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'#C8D8D3', background:'#000', border:'1px solid #1A2220', padding:'4px 10px', borderRadius:2, alignSelf:'flex-start', whiteSpace:'nowrap'}}>· most researchers finish profile-to-matching in under 30 min</span>
          </div>

          {/* Three cards */}
          {(() => {
            const chairMailto = 'mailto:?subject=' + encodeURIComponent('GrantOtter — AI grant discovery for our department') + '&body=' + encodeURIComponent(
              'Hi,\n\nI\u2019ve been using GrantOtter, an AI-powered grant discovery platform that matches researchers to relevant funding opportunities based on their expertise and research profile.\n\nI think it would be valuable for our department. A few highlights:\n\n\u2022 Covers federal, major foundations, and internal grants (2,000+ opportunities, updated weekly)\n\u2022 Generates a rich researcher profile from your publications, grant history, and expertise\n\u2022 Sends a personalized digest of new matching opportunities to each researcher every Monday by email\n\u2022 Supports the full workflow: find collaborators, brainstorm proposal concepts, generate NIH biosketches, and manage application packages\n\nWould you be open to a 1-hour demo for our department? Sessions are free and tailored to your department\u2019s research areas.\n\nLearn more: https://grantotter.com\n\nBest,\n[Your Name]'
            );
            const cards = [
              {
                n: '01', color: 'var(--teal)',
                label: 'Get Matched Every Monday',
                desc: 'Generate your researcher profile and save it as My Profile in My Workspace. GrantOtter will automatically email you new grant opportunities matched to your expertise every Monday.',
              },
              {
                n: '02', color: 'var(--teal)',
                label: 'Start an Application',
                desc: 'Open My Applications, create your first application, link a grant, assemble your team, and start building your submission package.',
              },
              {
                n: '03', color: 'var(--orange)',
                label: 'Share with Your Chair',
                desc: 'Bring GrantOtter to your whole department. Click to open a ready-to-send email to your department chair with a link to book a free 30-minute demo session.',
                mailto: chairMailto,
              },
            ];
            return (
          <div style={{display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap:16, marginBottom:48}}>
            {cards.map(c => (
              <div key={c.n}
                onClick={c.mailto ? () => { window.location.href = c.mailto; } : undefined}
                style={{border:'1px solid var(--line-2)', padding:'24px 28px', background:'var(--paper)', cursor: c.mailto ? 'pointer' : 'default', transition:'border-color .15s'}}
                onMouseEnter={e => (c.mailto) && (e.currentTarget.style.borderColor = c.color)}
                onMouseLeave={e => (c.mailto) && (e.currentTarget.style.borderColor = 'var(--line-2)')}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
                  <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--muted)', letterSpacing:'0.06em'}}>{c.n}</span>
                  {c.mailto && <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:12, color:c.color}}>✉ draft email →</span>}
                </div>
                <div style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontSize:22, color:'var(--ink)', marginBottom:10, lineHeight:1.1}}>{c.label}</div>
                <p style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.6, margin:0}}>{c.desc}</p>
              </div>
            ))}
          </div>
            );
          })()}

          <div style={{marginTop:0, display:'flex', gap:14, flexWrap:'wrap'}}>
            <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal">
              Launch app — free →
            </a>
            <button className="btn btn-ghost" onClick={() => setRoute('home')} style={{background:'var(--teal-deep)', color:'#fff', borderColor:'var(--teal-deep)'}}>
              Back to home
            </button>
            <a href="https://join.slack.com/t/grantottercommunity/shared_invite/zt-3wb5fmemq-CPTYpyWjXzl8wkmhn6tw4Q" target="_blank" rel="noopener" className="btn btn-ghost" style={{background:'#4A154B', color:'#fff', borderColor:'#4A154B', display:'inline-flex', alignItems:'center', gap:8}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
              Join Slack group
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

window.Tutorial = Tutorial;
