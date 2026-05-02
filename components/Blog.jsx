const POSTS = [
  {
    slug: 'power-of-a-grantotter-profile',
    title: 'Your Research, Reimagined: The Power of a GrantOtter Profile',
    date: 'May 2026',
    tag: 'PROFILE',
    readTime: '5 min read',
    excerpt: 'The journey from grant discovery to a successful submission is a complex, multi-stage process. GrantOtter transforms the traditional, fragmented approach into a cohesive, AI-powered grant workflow. The engine behind it all is your research profile.',
    content: () => <PostContent_001 />,
  },
];

function MediaPlaceholder({ label, caption }) {
  return (
    <div style={{ margin: '32px 0' }}>
      <div style={{
        border: '1px dashed var(--line-2)',
        background: 'var(--bg-2)',
        padding: '40px 24px',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        <div style={{ fontSize: 28, color: 'var(--line)', marginBottom: 10 }}>⬚</div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>{label}</div>
        <div style={{ fontSize: 11, color: 'var(--line-2)', marginTop: 4 }}>[ image coming soon ]</div>
      </div>
      {caption && (
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "{caption}"
        </p>
      )}
    </div>
  );
}

function PostContent_001() {
  const listItemStyle = {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--ink-2)',
  };

  return (
    <>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 24px' }}>
        The journey from grant discovery to a successful submission is a complex, multi-stage process. GrantOtter was designed to support every phase of this journey—from initial grant discovery and assembling the right team, to the development of concept notes and essential non-science documents like Biosketches. GrantOtter transforms the traditional, fragmented approach into a cohesive, AI-powered grant workflow.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        The engine behind this entire ecosystem is your research profile. Before you can leverage our grant recommendation and notes drafting features, you must first establish your digital research identity. This profile serves as the foundation for the entire platform, ensuring that every recommendation and document generated is perfectly aligned with your unique academic history and future goals.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Step 1: Building Your Digital Research Twin
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        Most academic tools ask you for a few dry keywords. GrantOtter is different. Our profiling engine is designed to be comprehensive, capturing the full nuance of your academic identity.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        To get started, you simply provide your basic academic information or upload your recent CV. GrantOtter's AI then synthesizes a multi-dimensional profile that captures:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>Profile dimensions</div>
        {[
          ['Research Expertise & Trajectory', "Your primary and emerging research areas, scored and substantiated with evidence from your publications, projects, and stated interests—including the methodological strengths that make your work distinctive."],
          ['Publication & Impact Record', 'Your peer-reviewed output, authorship roles, citation metrics, and the arc of how your contributions have evolved over time.'],
          ['Collaborator Network', 'Your frequent co-authors, institutional partnerships, and international collaborations—the relational map that signals which team configurations you can credibly lead or join.'],
          ['Grant & Funding History', "Your active and prior awards, roles (PI, Co-I, biostatistician, core lead), funders, and budget scale—the track record that shapes which mechanisms you're competitive for next."],
          ['Grant Suitability Profile', "Your readiness as PI vs. Co-I, available effort capacity, institutional cost rates, and the funding mechanisms (R01, R21, K-awards, foundation grants) where you're best positioned right now."],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog1_generate_profile_screenshot.png"
          alt='Screenshot of the GrantOtter "Create Profile" interface'
          style={{ width: '100%', display: 'block', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "Input your details and watch GrantOtter synthesize your research trajectory in minutes."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Beyond Keywords: Why Comprehensive Matters
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 32px' }}>
        A "comprehensive" profile doesn't just mean more words; it means better matching and smarter drafting. Because GrantOtter understands the context of your work, it can identify opportunities you might have missed and eventually help you draft ideas that reflect your true expertise. It ensures that when you move to the "assemble a team" or "draft a concept note" phase, the AI is already briefed on your specific research trajectory. The same funding history, collaborator network, and suitability signals that power your recommendations also feed directly into team assembly and biosketch drafting downstream—so the work you put in once compounds across every stage of the workflow.
      </p>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '0 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Set It and Forget It: The "My Profile" Advantage
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        The real magic happens once your profile is generated. By saving your research profile as "My Profile" in your personal workspace, you turn GrantOtter into your funding scout.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
        Once saved, GrantOtter shifts into autopilot:
      </p>

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', padding: '20px 24px', margin: '0 0 28px' }}>
        {[
          ['Weekly Recommendations', 'Every week, our system scans federal, foundation, and internal funding databases against your specific profile.'],
          ['Direct to Your Inbox', "You'll receive a curated list of new opportunities that actually fit your career stage and research goals."],
          ['Ready for the Workflow', "These matches don't just sit in a list; they are immediately ready to be moved into your workspace to start the drafting and assembly process."],
        ].map(([title, desc]) => (
          <div key={title} style={listItemStyle}>
            <span style={{ color: 'var(--teal-deep)', flexShrink: 0 }}>→</span>
            <span><strong style={{ color: 'var(--ink)' }}>{title}</strong>: {desc}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '32px 0' }}>
        <img
          src="media/blog1_weekly_recommendation.png"
          alt='Screenshot of GrantOtter weekly grant recommendation email'
          style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto', border: '1px solid var(--line-2)' }}
        />
        <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', margin: '8px 0 0' }}>
          "One click today ensures you never miss a deadline tomorrow."
        </p>
      </div>

      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 24, lineHeight: 1.2, color: 'var(--ink)', margin: '32px 0 16px', borderLeft: '3px solid var(--orange-deep)', paddingLeft: 16 }}>
        Ready to get started?
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 28px' }}>
        The first step toward a more efficient grant workflow is just a few clicks away. Head over to your workspace, generate your profile, and let the grants come to you.
      </p>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, textAlign: 'center' }}>
        <a href="https://grantotter.streamlit.app" target="_blank" rel="noopener" className="btn btn-signal" style={{ display: 'inline-block' }}>
          Create My Research Profile →
        </a>
      </div>
    </>
  );
}

function BlogList({ setRoute, setPost }) {
  const isMobile = useWindowWidth() < 768;
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  function openPost(post) {
    setPost(post);
    setRoute('blog-post');
  }

  return (
    <section style={{ padding: isMobile ? '48px 0 64px' : '80px 0 120px' }}>
      <div className="container">
        <div style={{ marginBottom: isMobile ? 32 : 48 }}>
          <div className="bracket-label" style={{ marginBottom: isMobile ? 16 : 24 }}>blog</div>
          <h1 style={{
            fontFamily: 'Instrument Serif, Georgia, serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: isMobile ? 'clamp(44px, 12vw, 72px)' : 'clamp(52px, 7vw, 110px)',
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: 'var(--ink)',
            maxWidth: 1200,
            margin: '0 0 16px',
          }}>
            Thinking about grants,<br />
            <em style={{ color: 'var(--orange-deep)' }}>research, and funding.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480, margin: 0 }}>
            Insights on the grant process, researcher profiles, team assembly, and how AI is changing academic funding.
          </p>
        </div>

        <div style={{ height: 1, background: 'var(--line)', marginBottom: isMobile ? 28 : 36 }} />

        {/* Featured post — full width */}
        <div
          onClick={() => openPost(featured)}
          style={{ borderLeft: '3px solid var(--orange-deep)', paddingLeft: 20, marginBottom: rest.length > 0 ? 40 : 28, cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', fontFamily: 'JetBrains Mono, monospace' }}>
            <span style={{ color: 'var(--muted)', fontSize: 11 }}>{featured.date}</span>
            <span className="tag orange" style={{ fontSize: 10, padding: '2px 7px' }}>{featured.tag}</span>
            <span style={{ color: 'var(--muted)', fontSize: 11 }}>{featured.readTime}</span>
          </div>
          <h2 style={{
            fontFamily: 'Instrument Serif, Georgia, serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: isMobile ? 20 : 28,
            lineHeight: 1.2,
            color: 'var(--ink)',
            margin: '0 0 12px',
          }}>
            {featured.title}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 16px' }}>
            {featured.excerpt}
          </p>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--teal-deep)' }}>
            Read post →
          </span>
        </div>

        {/* 2-column card grid for additional posts */}
        {rest.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : rest.length === 1 ? '1fr' : 'repeat(2, 1fr)',
            border: '1px solid var(--line-2)',
            borderRight: 0,
            borderBottom: 0,
          }}>
            {rest.map(post => (
              <div
                key={post.slug}
                onClick={() => openPost(post)}
                style={{
                  borderRight: '1px solid var(--line-2)',
                  borderBottom: '1px solid var(--line-2)',
                  padding: isMobile ? '20px 16px' : '24px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)' }}>
                  {post.date} · {post.tag}
                </div>
                <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.2, color: 'var(--ink)', flex: 1 }}>
                  {post.title}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--teal-deep)' }}>
                  Read post →
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Coming soon when only 1 post */}
        {rest.length === 0 && (
          <div style={{ borderTop: '1px dashed var(--line)', paddingTop: 16, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--line-2)', textAlign: 'center', letterSpacing: '0.06em' }}>
            · more posts coming ·
          </div>
        )}
      </div>
    </section>
  );
}

function BlogPost({ post, setRoute }) {
  const isMobile = useWindowWidth() < 768;

  if (!post) {
    setRoute('blog');
    return null;
  }

  const Content = post.content;

  return (
    <section style={{ padding: isMobile ? '40px 0 80px' : '64px 0 120px' }}>
      <div className="container">
        <div>
          <button
            onClick={() => setRoute('blog')}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--muted)', marginBottom: isMobile ? 24 : 32, display: 'block', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            ← Back to Blog
          </button>

          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="tag orange" style={{ fontSize: 10, padding: '2px 7px' }}>{post.tag}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11 }}>{post.date}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11 }}>{post.readTime}</span>
            </div>
            <h1 style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: isMobile ? 'clamp(26px, 6vw, 36px)' : 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 20px',
            }}>
              {post.title}
            </h1>
            <div style={{ height: 1, background: 'var(--line)' }} />
          </div>

          <Content />
        </div>
      </div>
    </section>
  );
}

window.POSTS    = POSTS;
window.BlogList = BlogList;
window.BlogPost = BlogPost;
