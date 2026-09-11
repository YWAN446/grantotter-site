/* TutorialV2 — the v2 (chat-first) tutorial. Kept fully self-contained: the site loads every
   component file as a separate non-module <script type="text/babel">, so all of these share one
   global scope with Tutorial.jsx's same-named helpers. Every helper below is copied from
   Tutorial.jsx and renamed with a V2 suffix so loading both files never lets one silently
   overwrite the other's Tip/Banner/Media/etc. This file is NOT wired into docs/index.html yet —
   that route swap happens at the P6 cutover flip (see docs/DEPLOY_V2.md step 9). */

function TipV2({ children }) {
  return (
    <div style={{padding:'12px 16px', background:'color-mix(in oklab,var(--orange) 6%,transparent)', borderLeft:'2px solid var(--orange-deep)', margin:'16px 0', fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
      <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--orange-deep)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:6}}>◆ tip</span>
      {children}
    </div>
  );
}

function BannerV2({ children }) {
  return (
    <div style={{padding:'14px 18px', background:'color-mix(in oklab,var(--teal) 6%,transparent)', borderLeft:'2px solid var(--teal-deep)', margin:'0 0 24px', fontSize:13, color:'var(--ink-2)', lineHeight:1.65}}>
      {children}
    </div>
  );
}

function MediaV2({ src, alt, caption, isVideo, narrow }) {
  // `narrow` (px) caps the frame width for tall, long-format screenshots (panel clips,
  // chat columns, phone shots) so they read as figures instead of dominating the page.
  const sizing = narrow ? {maxWidth: narrow, marginLeft:'auto', marginRight:'auto'} : {};
  return (
    <div style={{border:'1px solid var(--line-2)', background:'var(--paper)', marginTop:24, overflow:'hidden', ...sizing}}>
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

function OLV2({ children }) {
  return <ol style={{display:'grid', gap:10, paddingLeft:0, listStyle:'none', margin:'12px 0'}}>{children}</ol>;
}
function ULV2({ children }) {
  return <ul style={{display:'grid', gap:8, paddingLeft:0, listStyle:'none', margin:'8px 0'}}>{children}</ul>;
}
function LiV2({ n, accent = 'var(--teal-deep)', children }) {
  return (
    <li style={{display:'grid', gridTemplateColumns:'20px 1fr', gap:10, fontSize:13, color:'var(--ink-2)', lineHeight:1.6}}>
      <span style={{fontFamily:'JetBrains Mono,monospace', fontSize:10, color:accent, paddingTop:3}}>{n}</span>
      <span>{children}</span>
    </li>
  );
}

function H3V2({ children }) {
  return <div style={{fontFamily:'JetBrains Mono,monospace', fontSize:12, color:'var(--ink)', letterSpacing:'0.04em', textTransform:'uppercase', margin:'24px 0 10px', paddingTop:20, borderTop:'1px dashed var(--line)'}}>{children}</div>;
}

function CodeV2({ children }) {
  return <code style={{fontFamily:'JetBrains Mono,monospace', fontSize:12, background:'var(--bg-2)', border:'1px solid var(--line-2)', padding:'1px 5px', borderRadius:2, color:'var(--teal-deep)'}}>{children}</code>;
}

function StepV2({ id, n, tag, tagColor = 'teal', bg, children }) {
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

function StepH2V2({ children }) {
  return <h2 style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontWeight:400, fontSize:'clamp(28px,3vw,40px)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:20, color:'var(--ink)'}}>{children}</h2>;
}

function TutorialV2({ setRoute }) {
  const isMobile = useWindowWidth() < 768;
  const toc = [
    ['Step 0: Sign In',                        '#v2-step0', 'teal'],
    ['Step 1: The Chat & The Dashboard',        '#v2-step1', 'teal'],
    ['Step 2: Your Researcher Profile',         '#v2-step2', 'teal'],
    ['Step 3: Find Grants',                     '#v2-step3', 'teal'],
    ['Step 4: Collaborators',                   '#v2-step4', 'teal'],
    ['Step 5: Projects',                        '#v2-step5', 'teal'],
    ['Step 6: The Project Assistant',           '#v2-step6', 'teal'],
    ['Step 7: Tell It What You Think',          '#v2-step7', 'teal'],
    ['⚡ Power User',                            '#v2-power-user', 'orange'],
  ];

  return (
    <>
      {/* Hero */}
      <section style={{padding: isMobile ? '48px 0 36px' : '80px 0 56px', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="bracket-label" style={{marginBottom:24}}>get started</div>
          <h1 style={{fontFamily:'Instrument Serif,Georgia,serif', fontSize: isMobile ? 'clamp(44px,12vw,72px)' : 'clamp(52px,7vw,110px)', lineHeight:0.95, letterSpacing:'-0.035em', fontStyle:'italic', fontWeight:400, marginBottom:28}}>
            One conversation,<br/><em style={{color:'var(--teal-deep)'}}>start to submission.</em>
          </h1>
          <p style={{fontSize:15, color:'var(--muted)', maxWidth:560, lineHeight:1.6, marginBottom:36}}>
            GrantOtter is chat-first now — describe your work and the assistant takes it from there: your profile, your grant matches, your team, your documents. Here's how it works, step by step.
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

      {/* Step 0: Sign in */}
      <StepV2 id="v2-step0" n="step 0" tag="Before You Begin" bg="var(--paper)">
        <StepH2V2>Sign In</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          GrantOtter is a web app — nothing to install. Open it at{' '}
          <a href="https://app.grantotter.com" target="_blank" rel="noopener" style={{color:'var(--orange-deep)', fontWeight:600}}>app.grantotter.com</a>{' '}
          in any browser. You'll land on a sign-in screen first.
        </p>
        <H3V2>Signing in</H3V2>
        <OLV2>
          <LiV2 n="1.">Go to <a href="https://app.grantotter.com" target="_blank" rel="noopener" style={{color:'var(--orange-deep)'}}>app.grantotter.com</a>.</LiV2>
          <LiV2 n="2.">Click <strong style={{color:'var(--teal-deep)'}}>Continue with Google</strong>, or enter your email and password.</LiV2>
          <LiV2 n="3.">New here? Click <strong style={{color:'var(--teal-deep)'}}>Sign up</strong> instead, type your email and a password, and you're in — the assistant takes it from there.</LiV2>
        </OLV2>
        <TipV2>Forgot your password? Click <strong style={{color:'var(--orange-deep)'}}>Forgot password?</strong> on the sign-in screen, type your email, and a reset link arrives in a few minutes.</TipV2>
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: your email and a password, then click "Sign up" — or just "Continue with Google."
        </p>
      </StepV2>

      {/* Step 1: The chat and the workspace */}
      <StepV2 id="v2-step1" n="step 1" tag="Chat + Dashboard">
        <StepH2V2>The Chat &amp; The Dashboard</StepH2V2>
        <BannerV2>
          <strong>Chat is the main screen.</strong>{' '} Everything you build — your profile, your matches, your projects — happens by talking to the assistant in the panel on the left.
        </BannerV2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>
          Next to the chat sits the <strong style={{color:'var(--teal-deep)'}}>Dashboard</strong> panel, with four tabs:
        </p>
        <ULV2>
          <LiV2 n="→"><strong>Projects</strong> — every application you've started, each with its own chat thread.</LiV2>
          <LiV2 n="→"><strong>Feed</strong> — your weekly grant recommendations, ranked by fit.</LiV2>
          <LiV2 n="→"><strong>Profile</strong> — your researcher card and your saved collaborators.</LiV2>
          <LiV2 n="→"><strong>Find Collaborators</strong> — browse the institution network directly.</LiV2>
          <LiV2 n="→">Your <strong>account menu</strong> (avatar, bottom left) holds Profile, Settings (email preferences), Appearance, Support, Terms &amp; Privacy, and Sign out.</LiV2>
        </ULV2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, margin:'16px 0 0'}}>
          On a phone, the Dashboard panel doesn't sit beside the chat — a <strong style={{color:'var(--teal-deep)'}}>Dashboard</strong> button opens it as a sheet over the chat instead.
        </p>
        <MediaV2 src="media/v2_chat_home.png" alt="GrantOtter v2 chat with the Dashboard panel open on the right" isVideo={false}
          caption="Chat on the left, Dashboard panel on the right — Projects, Feed, Profile, and Find Collaborators." />
        <TipV2>Not sure where to start? Type <em>"What can you help me with?"</em> and the assistant will explain, in context, based on what's already in your workspace.</TipV2>
      </StepV2>

      {/* Step 2: Your researcher profile */}
      <StepV2 id="v2-step2" n="step 2" tag="Profile tab" bg="var(--paper)">
        <StepH2V2>Your Researcher Profile</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          On your first visit, the assistant asks for one thing to build your profile from: a CV, a faculty or lab page URL, or a few sentences about your work. Give it any one of those and it builds the profile and saves it automatically — no form to fill out.
        </p>
        <ULV2>
          <LiV2 n="+"><strong>Drop a CV</strong> — attach the PDF or Word file straight into the chat.</LiV2>
          <LiV2 n="+"><strong>Paste a URL</strong> — your faculty page, lab site, or Google Scholar profile.</LiV2>
          <LiV2 n="+"><strong>Just describe it</strong> — a couple of sentences about your research is enough to start.</LiV2>
        </ULV2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, margin:'16px 0 0'}}>
          Once it's built, the <strong style={{color:'var(--teal-deep)'}}>Profile</strong> tab in the Dashboard panel shows a summary card of your expertise. Want a change? Just ask — <em>"add a line about my new NSF award"</em> works the same as any other message.
        </p>
        <MediaV2 src="media/v2_onboarding.png" alt="The assistant asking a first-time researcher for a CV, URL, or a short description to build their profile" isVideo={false}
          caption="First visit: the assistant asks for a CV, a lab page URL, or a few sentences — then builds the profile itself." />
        <MediaV2 src="media/v2_profile_card.png" alt="The Profile tab showing the generated researcher summary card" isVideo={false}
          caption="The Profile tab — your generated researcher card, with your saved collaborators underneath." />
        <TipV2>A CV gives the richest profile — the assistant treats it as the source of truth and fills any gaps itself. No CV handy? A URL or a short description is enough to get moving.</TipV2>
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: drop your CV into the chat, or paste your lab page URL, or describe your work in a sentence or two.
        </p>
      </StepV2>

      {/* Step 3: Find grants */}
      <StepV2 id="v2-step3" n="step 3" tag="Feed tab">
        <StepH2V2>Find Grants</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:20}}>
          Once your profile exists, ask the assistant to match you to grants — it compares your profile against federal and foundation funding opportunities and ranks the results for fit.
        </p>
        <H3V2>The Feed tab</H3V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>
          Every Monday, new recommendations land in the <strong style={{color:'var(--teal-deep)'}}>Feed</strong> tab, each with a fit score and a plain-language rationale.
        </p>
        <ULV2>
          <LiV2 n="→" accent="var(--teal-deep)"><strong style={{color:'var(--teal-deep)'}}>Recommended</strong> — the strongest matches, surfaced first.</LiV2>
          <LiV2 n="→" accent="var(--teal-deep)"><strong style={{color:'var(--teal-deep)'}}>All</strong> — every grant scored for you, including lower fits.</LiV2>
          <LiV2 n="→" accent="var(--teal-deep)"><strong style={{color:'var(--teal-deep)'}}>Saved</strong> — grants you've starred for later.</LiV2>
        </ULV2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, margin:'12px 0 0'}}>
          Filter by deadline, funder, or minimum fit, and click the star on any card to save it — starred grants collect in the Feed tab's <strong style={{color:'var(--teal-deep)'}}>Saved</strong> view.
        </p>
        <MediaV2 src="media/v2_feed.png" alt="The Feed tab showing fit-scored grant recommendations with Recommended, All, and Saved views" isVideo={false}
          caption="The Feed tab — Monday's recommendations, color-banded by fit, with Recommended · All · Saved and filters." />
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: "Match grants to my profile."
        </p>
      </StepV2>

      {/* Step 4: Collaborators */}
      <StepV2 id="v2-step4" n="step 4" tag="Find Collaborators" bg="var(--paper)">
        <StepH2V2>Collaborators</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          Build your team the same way you do everything else — by asking — or browse the institution network directly.
        </p>
        <BannerV2>
          <strong>Who's in the network today:</strong> the collaborator pool currently covers Emory University —
          over <strong>4,600 faculty</strong> across the School of Medicine, the Rollins School of Public Health,
          and the Nell Hodgson Woodruff School of Nursing — with roughly 1,000 more faculty from Emory's other
          schools coming soon. At another institution? Find Collaborators searches this pool only, so it becomes
          useful for your team once your institution has a network of its own —{' '}
          <a href="mailto:grantotter42@gmail.com" style={{color:'var(--teal-deep)', fontWeight:600}}>contact us</a>{' '}
          about institution onboarding. Everything else in GrantOtter works for researchers anywhere.
        </BannerV2>
        <H3V2>Ask the assistant</H3V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>
          Describe the expertise you need, in a grant thread or anywhere else in the chat, and the assistant searches the network and returns matched researchers with an explanation of the fit.
        </p>
        <H3V2>Browse Find Collaborators</H3V2>
        <OLV2>
          <LiV2 n="1.">Open the <strong style={{color:'var(--teal-deep)'}}>Find Collaborators</strong> tab in the Dashboard panel.</LiV2>
          <LiV2 n="2.">Filter by expertise tag, or search by name.</LiV2>
          <LiV2 n="3.">Click a profile to read their full summary, then save it.</LiV2>
        </OLV2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, margin:'12px 0 0'}}>
          Saved collaborators appear in the <strong style={{color:'var(--teal-deep)'}}>Profile</strong> tab, and you can add any of them to a project's team.
        </p>
        <TipV2>Saved collaborators are team-eligible right away — no separate "preferred" step. Save someone, then add them to a project whenever you're ready.</TipV2>
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: "Find me a collaborator with experience in [your topic]."
        </p>
      </StepV2>

      {/* Step 5: Projects */}
      <StepV2 id="v2-step5" n="step 5" tag="Projects tab">
        <StepH2V2>Projects</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          A project is one application, tracked end to end — its own chat thread, its own status, deadline, team, and documents.
        </p>
        <H3V2>Starting one</H3V2>
        <ULV2>
          <LiV2 n="→">Click <strong style={{color:'var(--teal-deep)'}}>Start application</strong> on a card in your Feed.</LiV2>
          <LiV2 n="→">Or click the link in your Monday grant-alert email — it opens the project directly.</LiV2>
        </ULV2>
        <H3V2>The project detail view</H3V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>Each project tracks:</p>
        <ULV2>
          <LiV2 n="+"><strong>Status</strong> and <strong>deadline</strong>, plus your own notes</LiV2>
          <LiV2 n="+"><strong>Team</strong> — the PI and any collaborators you've added</LiV2>
          <LiV2 n="+"><strong>Checklist</strong> — the submission components the assistant extracted for you</LiV2>
          <LiV2 n="+"><strong>Documents</strong> — everything the assistant drafts inside the thread</LiV2>
        </ULV2>
        <MediaV2 narrow={400} src="media/v2_project_detail.png" alt="A project's detail view showing status, deadline, team, checklist, and documents" isVideo={false}
          caption="Project detail — status, deadline, notes, team + PI, checklist, and documents in one place." />
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: click "Start application" on a feed card, or click the link in your Monday email.
        </p>
      </StepV2>

      {/* Step 6: The project assistant */}
      <StepV2 id="v2-step6" n="step 6" tag="Project thread" bg="var(--paper)">
        <StepH2V2>The Project Assistant</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          Open a project and you're in that project's own thread. The assistant already knows the grant, your team, and everything you've discussed — ask it to move the application forward.
        </p>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:12}}>From this one thread, ask it to:</p>
        <ULV2>
          <LiV2 n="→">Summarize the grant and its requirements</LiV2>
          <LiV2 n="→">Set the deadline and add team members</LiV2>
          <LiV2 n="→">Find collaborators for this application — matched to the grant's topic, saved with one word</LiV2>
          <LiV2 n="→">Brainstorm proposal concepts</LiV2>
          <LiV2 n="→">Generate the submission checklist</LiV2>
          <LiV2 n="→">Draft a biosketch — gaps are marked with <CodeV2>[PLACEHOLDER]</CodeV2> so you know exactly what to fill in yourself</LiV2>
          <LiV2 n="→">Draft a Data Management &amp; Sharing plan</LiV2>
          <LiV2 n="→">Draft a budget brief and justification</LiV2>
        </ULV2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, margin:'12px 0 0'}}>
          Every document it drafts lands in the project's <strong style={{color:'var(--teal-deep)'}}>Documents</strong> list, ready to open or download.
        </p>
        <MediaV2 narrow={480} src="media/v2_project_thread.png" alt="A project chat thread with the assistant drafting a document that appears as a chip in the conversation" isVideo={false}
          caption="One thread per project — ask for a checklist, a biosketch, a budget brief, and each lands in Documents." />
        <TipV2>Always review a <CodeV2>[PLACEHOLDER]</CodeV2> before you submit — it marks a gap the assistant couldn't fill from what you've given it, never a guess.</TipV2>
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: "Draft a biosketch for [collaborator]," or "Generate the submission checklist."
        </p>
      </StepV2>

      {/* Step 7: Tell it what you think */}
      <StepV2 id="v2-step7" n="step 7" tag="Every reply">
        <StepH2V2>Tell It What You Think</StepH2V2>
        <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.7, marginBottom:16}}>
          Every reply from the assistant has a thumbs-up and thumbs-down underneath it — in the main chat and inside a project thread alike.
        </p>
        <OLV2>
          <LiV2 n="1.">Click the thumb that matches your reaction.</LiV2>
          <LiV2 n="2.">On a thumbs-down, a small note field opens.</LiV2>
          <LiV2 n="3.">Type what went wrong — it goes straight to us, not into a queue no one reads.</LiV2>
        </OLV2>
        <MediaV2 narrow={480} src="media/v2_thumbs.png" alt="Thumbs-up and thumbs-down feedback controls under an assistant reply, with a note field open" isVideo={false}
          caption="Thumbs under every reply — a thumbs-down note goes straight to us." />
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type a quick note when you thumbs-down a reply — that's what tells us what to fix.
        </p>
      </StepV2>

      {/* Power User */}
      <StepV2 id="v2-power-user" n="⚡ power user" tag="Shortcuts" tagColor="orange" bg="var(--paper)">
        <StepH2V2>Move <em style={{color:'var(--orange-deep)'}}>Faster</em></StepH2V2>
        <ULV2>
          <LiV2 n="⌘" accent="var(--orange-deep)"><strong>Enter sends, Shift+Enter for a new line</strong> — on desktop. On a phone, the arrow button sends instead.</LiV2>
          <LiV2 n="⌘" accent="var(--orange-deep)"><strong>Drag and drop</strong> — drop a PDF straight onto the chat, no attach button required.</LiV2>
          <LiV2 n="⌘" accent="var(--orange-deep)"><strong>Email deep links</strong> — the <strong>Start application</strong> button in a grant-alert email jumps straight into that project's chat once you're signed in.</LiV2>
          <LiV2 n="⌘" accent="var(--orange-deep)"><strong>Getting-started card</strong> — while you still have steps left, a card at the top of the Projects tab tracks them; dismiss it any time, and it disappears on its own once you're done.</LiV2>
          <LiV2 n="⌘" accent="var(--orange-deep)"><strong>Dark / light theme</strong> — switch it from the account menu (Appearance). Dark is the default.</LiV2>
        </ULV2>
        <MediaV2 narrow={300} src="media/v2_phone.png" alt="GrantOtter on a phone, with the arrow-send button and the Dashboard opened as a sheet" isVideo={false}
          caption="On a phone: the arrow button sends, and Dashboard opens as a sheet over the chat." />
        <p style={{fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:16}}>
          Type: drag a PDF straight into the chat — the assistant reads it without a separate upload step.
        </p>
      </StepV2>

      {/* Closing CTA */}
      <section style={{padding: isMobile ? '64px 0' : '96px 0', background:'var(--ink)', color:'var(--bg)', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(#2B3634 1px,transparent 1px),linear-gradient(90deg,#2B3634 1px,transparent 1px)', backgroundSize:'48px 48px', opacity:0.3, maskImage:'radial-gradient(ellipse at 50% 50%,black 30%,transparent 75%)'}}/>
        <div className="container" style={{position:'relative'}}>
          <div className="bracket-label" style={{marginBottom:24, color:'#5C6664'}}>you're ready</div>
          <h2 style={{fontFamily:'Instrument Serif,Georgia,serif', fontStyle:'italic', fontWeight:400, fontSize:'clamp(40px,5vw,80px)', lineHeight:0.95, letterSpacing:'-0.03em', marginBottom:36}}>
            Just start<br/><em style={{color:'var(--teal)'}}>typing.</em>
          </h2>
          <div style={{display:'flex', gap:14, flexWrap:'wrap'}}>
            <a href="https://app.grantotter.com" target="_blank" rel="noopener" className="btn btn-signal">
              Launch app — currently free →
            </a>
            <button className="btn btn-ghost" onClick={() => setRoute('home')} style={{background:'var(--teal-deep)', color:'#fff', borderColor:'var(--teal-deep)'}}>
              Back to home
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

window.TutorialV2 = TutorialV2;
