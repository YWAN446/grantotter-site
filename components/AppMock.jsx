// A static copy of the production app's look (web/), plus AppClip: a scripted replay that
// plays inside it like a screen recording. Colours are the app's own tokens (styles-new.css,
// .appmock); structure and wording follow web/components/chat and web/components/workspace.
// Everything shown is illustrative and labelled "Example".

const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

/* ── Rich text: **bold**, [[GRANT-NUMBER]] chips, blank-line paragraphs, "- " lists ────── */

function amUnits(line) {
  const units = [];
  line.split(/(\[\[.+?\]\]|\*\*.+?\*\*)/).filter(Boolean).forEach(part => {
    if (part.startsWith('[[')) units.push({ k: 'g', s: part.slice(2, -2) });
    else if (part.startsWith('**')) (part.slice(2, -2).match(/\S+\s*/g) || []).forEach(s => units.push({ k: 'b', s }));
    else if (!/\S/.test(part)) { if (units.length) units[units.length - 1] = { ...units[units.length - 1], pad: true }; }
    else (part.match(/\s*\S+\s*/g) || []).forEach(s => units.push({ k: 't', s }));
  });
  return units;
}

function amCount(text) {
  return text.split('\n\n').reduce((n, block) => {
    const lines = block.split('\n');
    const list = lines.every(l => l.startsWith('- '));
    return n + lines.reduce((m, l) => m + amUnits(list ? l.slice(2) : l).length, 0);
  }, 0);
}

// Renders `text`, revealing at most `limit` units (words / chips). limit undefined = all.
function AmRich({ text, limit }) {
  let left = limit == null ? Infinity : limit;
  const inline = (line, key) => {
    const out = [];
    amUnits(line).forEach((u, i) => {
      if (left <= 0) return;
      left -= 1;
      if (u.k === 'g') out.push(<React.Fragment key={i}><span className="am-grant">{u.s}</span>{u.pad ? ' ' : ''}</React.Fragment>);
      else if (u.k === 'b') out.push(<strong key={i}>{u.s}{u.pad ? ' ' : ''}</strong>);
      else out.push(<React.Fragment key={i}>{u.s}</React.Fragment>);
    });
    return out;
  };
  const blocks = [];
  text.split('\n\n').forEach((block, bi) => {
    if (left <= 0) return;
    const lines = block.split('\n');
    if (lines.every(l => l.startsWith('- '))) {
      const items = [];
      lines.forEach((l, li) => { if (left > 0) items.push(<li key={li}>{inline(l.slice(2))}</li>); });
      blocks.push(<ul key={bi}>{items}</ul>);
    } else {
      const parts = [];
      lines.forEach((l, li) => {
        if (left <= 0) return;
        if (li > 0) parts.push(<br key={'br' + li} />);
        parts.push(<React.Fragment key={li}>{inline(l)}</React.Fragment>);
      });
      blocks.push(<p key={bi}>{parts}</p>);
    }
  });
  return <>{blocks}</>;
}

/* ── Small icons (lucide shapes the app uses) ────────────────────────────────────────── */

const AmIcon = {
  plus:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  up:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
  file:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>,
  folder: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/></svg>,
  star:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>,
  chev:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
  play:   <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>,
  pause:  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>,
  replay: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>,
};

/* ── Dashboard primitives ────────────────────────────────────────────────────────────── */

// tone 1..6 = the app's tag tones (teal, orange, sand, plum, sky, moss).
function AmPill({ children, tone, kind }) {
  return <span className={`am-pill ${tone ? 't' + tone : 'am-k-' + (kind || 'muted')}`}>{children}</span>;
}

function AmBtn({ children, kind, press }) {
  return <span className={`am-btn ${kind || ''} ${press ? 'press' : ''}`}>{children}</span>;
}

// FeedCard: title, number · agency · due, pills, Details + Start application.
function AmFeedCard({ title, meta, fit, due, topPick = true, yourMatch, started, hl }) {
  const tone = fit >= 8 ? 6 : fit >= 6 ? 5 : 3;
  return (
    <div className={`am-card ${hl ? 'hl' : ''}`}>
      <div style={{display:'flex', justifyContent:'space-between', gap:8}}>
        <div style={{minWidth:0}}>
          <h4>{title}</h4>
          <div className="am-sub">{meta}</div>
        </div>
        <span style={{color:'var(--am-muted-foreground)', flex:'none', paddingTop:2}}>{AmIcon.star}</span>
      </div>
      <div className="am-pills">
        {topPick && <AmPill kind="sec">Top pick</AmPill>}
        <AmPill tone={tone}>fit {fit}/10</AmPill>
        <AmPill>{due}</AmPill>
        {started && <AmPill tone={1}>Started</AmPill>}
        {yourMatch && <AmPill kind="out">Your match</AmPill>}
      </div>
      <div className="am-btns">
        <AmBtn kind="out">Details</AmBtn>
        <AmBtn>{started ? 'Open project →' : 'Start application'}</AmBtn>
      </div>
    </div>
  );
}

// CollaboratorCardView: name, title · department · school, one-liner, tags, actions.
function AmPersonCard({ name, sub, line, tags = [], actions = ['View profile', 'Save'], self, hl }) {
  return (
    <div className={`am-card ${hl ? 'hl' : ''}`}>
      <h4 style={{WebkitLineClamp:1}}>{name}</h4>
      <div className="am-sub">{sub}</div>
      {line && <div style={{marginTop:8, fontSize:13}}>{line}</div>}
      {tags.length > 0 && (
        <div className="am-pills">{tags.map(([t, tone]) => <AmPill key={t} tone={tone}>{t}</AmPill>)}</div>
      )}
      {!self && (
        <div className="am-btns">
          {actions.map((a, i) => <AmBtn key={a} kind={i === actions.length - 1 && a !== 'View profile' && a !== 'Remove' ? '' : 'ghost'}>{a}</AmBtn>)}
        </div>
      )}
    </div>
  );
}

function AmMeter({ share }) {
  return <div className="am-meter"><i style={{width: `${Math.round(share * 100)}%`}} /></div>;
}

/* ── Chat primitives ─────────────────────────────────────────────────────────────────── */

function AmMessage({ msg, streaming }) {
  if (msg.role === 'user') {
    return (
      <div className="am-row user">
        <div className="am-bubble">
          {msg.attach && <div style={{marginBottom:6}}><span className="am-attach" style={{color:'inherit', background:'transparent', borderColor:'currentColor', opacity:.85}}>{AmIcon.file} {msg.attach}</span></div>}
          <AmRich text={msg.text} />
        </div>
      </div>
    );
  }
  return (
    <div className="am-row">
      <div className="am-bubble">
        {msg.parts.map((p, i) => {
          if (p.k === 'text') {
            const partial = p.shown != null;
            return (
              <div key={i}>
                <AmRich text={p.text} limit={partial ? p.shown : undefined} />
              </div>
            );
          }
          if (p.k === 'tool') {
            return (
              <span key={i} className="am-toolwrap">
                <span className="am-tool">
                  {!p.done && <span className="am-spin" />}
                  <span className="t">{p.done ? (p.summary || p.label) : p.label}</span>
                </span>
              </span>
            );
          }
          if (p.k === 'artifact') {
            return (
              <span key={i} className="am-toolwrap">
                <span className="am-artifact">
                  {AmIcon.file}
                  <span className="ttl">{p.title}</span>
                  <AmPill tone={p.tone}>{p.type}</AmPill>
                  {p.file && <span className="am-sub">· file</span>}
                </span>
              </span>
            );
          }
          if (p.k === 'link') return <div key={i} className="am-link">{p.text}</div>;
          return null;
        })}
        {streaming && <span className="am-caret" aria-hidden="true" />}
      </div>
    </div>
  );
}

function AmThreadHead({ thread }) {
  if (!thread || thread.kind === 'global') {
    return (
      <div className="am-thread-head">
        <span className="logo"><img src="logo-mark.png?v=2" alt="" /> GrantOtter</span>
      </div>
    );
  }
  return (
    <div className="am-thread-head">
      <span className="lbl" style={{display:'inline-flex'}}>{AmIcon.folder}</span>
      <span className="lbl" style={{fontWeight:500}}>Project</span>
      <span className="ttl">{thread.title}</span>
    </div>
  );
}

function AmComposer({ text, attach, pressing, placeholder }) {
  return (
    <div className="am-composer">
      <div className={`txt ${text ? '' : 'ph'}`}>{text || placeholder || 'Ask GrantOtter… (drop a PDF or Word file to attach it)'}</div>
      <div className="bar">
        <div className="left">
          {AmIcon.plus}
          {attach && <span className="am-attach">{AmIcon.file} {attach}</span>}
        </div>
        <span className={`am-send ${text ? 'on' : ''} ${pressing ? 'press' : ''}`}>{AmIcon.up}</span>
      </div>
    </div>
  );
}

function AmChrome({ url }) {
  return (
    <div className="am-chrome">
      <div className="am-dots" aria-hidden="true"><span/><span/><span/></div>
      <div className="am-url">{url || 'app.grantotter.com'}</div>
      <span className="am-example">Example</span>
    </div>
  );
}

function AmDash({ tabs, tab, children, viewKey }) {
  const ref = useRefA(null);
  // A new tab starts at the top; a view that grew within the same tab scrolls to its end.
  const prev = useRefA(null);
  useEffectA(() => {
    const el = ref.current;
    if (!el) return;
    const grew = prev.current !== null && prev.current.tab === tab && prev.current.viewKey !== viewKey;
    const sameTab = grew;
    prev.current = { tab, viewKey };
    const top = grew ? el.scrollHeight : 0;
    if (el.scrollTo) el.scrollTo({ top, behavior: sameTab ? 'smooth' : 'auto' }); else el.scrollTop = top;
  }, [tab, viewKey]);
  return (
    <div className="am-dash">
      <div className="am-tabs">
        {tabs.map((t, i) => <span key={t} className={`am-tab ${i === tab ? 'on' : ''}`}>{t}</span>)}
      </div>
      <div className="am-panel" ref={ref}>
        <div className="am-view" key={tab}>{children}</div>
      </div>
    </div>
  );
}

// A Dashboard column on its own (Features page).
function AppPanel({ tabs, tab = 0, children, url }) {
  return (
    <div className="appmock solo" role="img" aria-label={`Example of the GrantOtter ${tabs[tab]} tab`}>
      <AmChrome url={url} />
      <div className="am-body">
        <AmDash tabs={tabs} tab={tab}>{children}</AmDash>
      </div>
    </div>
  );
}

// A chat column on its own (Features page). `messages` = the same shape the clip builds.
function AppChat({ thread, messages, url }) {
  return (
    <div className="appmock solo" role="img" aria-label="Example of a GrantOtter chat">
      <AmChrome url={url} />
      <div className="am-body">
        <div className="am-chat">
          <AmThreadHead thread={thread} />
          <div className="am-msgs">
            {messages.map((m, i) => <AmMessage key={i} msg={m} />)}
          </div>
          <AmComposer />
        </div>
      </div>
    </div>
  );
}

/* ── Clip engine ─────────────────────────────────────────────────────────────────────── */

function amInit(script) {
  return { thread: script.thread, msgs: [], composer: '', attach: null, tab: script.tab || 0, view: script.view, caption: '', capIdx: 0, pressing: false, streaming: false };
}

function amWithBot(state, fn) {
  const msgs = state.msgs.slice();
  let last = msgs[msgs.length - 1];
  if (!last || last.role !== 'bot') { last = { role: 'bot', parts: [] }; msgs.push(last); }
  else { last = { ...last, parts: last.parts.slice() }; msgs[msgs.length - 1] = last; }
  fn(last.parts);
  return { ...state, msgs };
}

// The state after a step has fully finished. Pure: reduced motion folds the whole script.
function amApply(state, step) {
  switch (step.t) {
    case 'caption': return { ...state, caption: step.text, capIdx: state.capIdx + 1 };
    case 'type':    return { ...state, composer: step.text };
    case 'attach':  return { ...state, attach: step.name };
    case 'send':    return { ...state, msgs: state.msgs.concat([{ role: 'user', text: state.composer, attach: state.attach }]), composer: '', attach: null };
    case 'tool':    return amWithBot(state, parts => parts.push({ k: 'tool', label: step.label, summary: step.summary, done: true }));
    case 'say':     return amWithBot(state, parts => parts.push({ k: 'text', text: step.text }));
    case 'artifact':return amWithBot(state, parts => parts.push({ k: 'artifact', title: step.title, type: step.type, tone: step.tone, file: step.file }));
    case 'link':    return amWithBot(state, parts => parts.push({ k: 'link', text: step.text }));
    case 'panel':   return { ...state, tab: step.tab != null ? step.tab : state.tab, view: step.view };
    case 'thread':  return { ...state, thread: step.thread, msgs: [], composer: '', attach: null };
    default:        return state;
  }
}

const AM_CANCEL = { cancelled: true };

function amSleep(ms, ctl) {
  return new Promise((resolve, reject) => {
    let left = ms;
    let last = performance.now();
    const tick = () => {
      if (ctl.cancel) { reject(AM_CANCEL); return; }
      const now = performance.now();
      if (!ctl.paused) left -= (now - last);
      last = now;
      if (left <= 0) resolve(); else ctl.timer = setTimeout(tick, Math.min(40, Math.max(left, 8)));
    };
    ctl.timer = setTimeout(tick, Math.min(40, ms));
  });
}

async function amPlay(script, set, ctl) {
  for (;;) {
    set(() => amInit(script));
    await amSleep(600, ctl);
    for (const step of script.steps) {
      if (step.t === 'type') {
        const n = step.text.length;
        const per = Math.min(28, 1300 / n);
        for (let i = 1; i <= n; i += 1) {
          const slice = step.text.slice(0, i);
          set(s => ({ ...s, composer: slice }));
          await amSleep(per, ctl);
        }
        await amSleep(260, ctl);
      } else if (step.t === 'send') {
        set(s => ({ ...s, pressing: true }));
        await amSleep(140, ctl);
        set(s => ({ ...amApply(s, step), pressing: false }));
        await amSleep(420, ctl);
      } else if (step.t === 'tool') {
        set(s => amWithBot(s, parts => parts.push({ k: 'tool', label: step.label, done: false })));
        await amSleep(step.ms || 1100, ctl);
        set(s => amWithBot(s, parts => { parts[parts.length - 1] = { k: 'tool', label: step.label, summary: step.summary, done: true }; }));
        await amSleep(240, ctl);
      } else if (step.t === 'say') {
        const total = amCount(step.text);
        const per = Math.min(48, 1900 / total);
        set(s => ({ ...amWithBot(s, parts => parts.push({ k: 'text', text: step.text, shown: 0 })), streaming: true }));
        for (let i = 1; i <= total; i += 1) {
          set(s => amWithBot(s, parts => { parts[parts.length - 1] = { k: 'text', text: step.text, shown: i }; }));
          await amSleep(per, ctl);
        }
        set(s => ({ ...amWithBot(s, parts => { parts[parts.length - 1] = { k: 'text', text: step.text }; }), streaming: false }));
        await amSleep(step.ms != null ? step.ms : 600, ctl);
      } else if (step.t === 'wait') {
        await amSleep(step.ms, ctl);
      } else {
        set(s => amApply(s, step));
        await amSleep(step.ms != null ? step.ms : ({ caption: 250, panel: 1100, thread: 500, attach: 350 }[step.t] || 450), ctl);
      }
    }
    await amSleep(script.hold || 4500, ctl);
  }
}

function useReducedMotion() {
  const q = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useStateA(() => !!(window.matchMedia && window.matchMedia(q).matches));
  useEffectA(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia(q);
    const on = () => setReduced(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', on); else mq.addListener(on);
    return () => { if (mq.removeEventListener) mq.removeEventListener('change', on); else mq.removeListener(on); };
  }, []);
  return reduced;
}

// script: { label, url, tabs, tab, view, thread, views: {key: node}, steps: [...], hold }
function AppClip({ script }) {
  // ?still=1 shows the end state, ?still=N the state after N steps (for checking the layout).
  const stillMatch = /[?&]still=(\d+)/.exec(window.location.search);
  const stillN = stillMatch ? Number(stillMatch[1]) : null;
  const reduced = useReducedMotion() || stillN != null;
  const [state, setState] = useStateA(() => amInit(script));
  const [userPaused, setUserPaused] = useStateA(false);
  const [inView, setInView] = useStateA(false);
  const [started, setStarted] = useStateA(false);
  const [runId, setRunId] = useStateA(0);
  const rootRef = useRefA(null);
  const msgsRef = useRefA(null);
  const ctlRef = useRefA({ cancel: false, paused: true, timer: null });

  // Start (and keep running) only while on screen.
  useEffectA(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) { setInView(true); setStarted(true); return undefined; }
    const io = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
      if (e.isIntersecting) setStarted(true);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffectA(() => { ctlRef.current.paused = userPaused || !inView; }, [userPaused, inView]);

  useEffectA(() => {
    if (reduced) { setState((stillN > 1 ? script.steps.slice(0, stillN) : script.steps).reduce(amApply, amInit(script))); return undefined; }
    if (!started) { setState(amInit(script)); return undefined; }
    const ctl = { cancel: false, paused: userPaused || !inView, timer: null };
    ctlRef.current = ctl;
    amPlay(script, setState, ctl).catch(e => { if (e !== AM_CANCEL) throw e; });
    return () => { ctl.cancel = true; clearTimeout(ctl.timer); };
    // eslint-disable-next-line
  }, [script, started, runId, reduced]);

  // Keep the newest message in view, as the app does.
  useEffectA(() => {
    const el = msgsRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [state.msgs, state.composer]);

  const captions = script.steps.filter(s => s.t === 'caption');
  const view = script.views[state.view];

  return (
    <div ref={rootRef} style={{position:'relative'}}>
      <div className="appmock" role="group" aria-label={`Example: ${script.label}`}>
        <AmChrome url={script.url} />
        <div className="am-body" aria-hidden="true">
          <div className="am-chat">
            <AmThreadHead thread={state.thread} />
            <div className="am-msgs" ref={msgsRef}>
              {state.msgs.map((m, i) => (
                <AmMessage key={i} msg={m} streaming={state.streaming && i === state.msgs.length - 1} />
              ))}
            </div>
            <AmComposer text={state.composer} attach={state.attach} pressing={state.pressing} placeholder={script.placeholder} />
          </div>
          <AmDash tabs={script.tabs} tab={state.tab} viewKey={state.view}>{view}</AmDash>
        </div>
        {reduced ? (
          <ol className="am-caplist">
            {captions.map((c, i) => <li key={i}>{c.text}</li>)}
          </ol>
        ) : (
          <div className="am-cap">
            <div className="text" aria-live="off">{state.caption || script.label}</div>
            <span className="prog">{Math.max(state.capIdx, 1)} / {captions.length}</span>
            <button className="am-ctl" onClick={() => setUserPaused(p => !p)} aria-label={userPaused ? 'Play example' : 'Pause example'}>
              {userPaused ? AmIcon.play : AmIcon.pause}
            </button>
            <button className="am-ctl" onClick={() => { setUserPaused(false); setRunId(n => n + 1); }} aria-label="Replay example">
              {AmIcon.replay}
            </button>
          </div>
        )}
      </div>
      {/* The same story as text, for screen readers. */}
      {!reduced && <ol style={{position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)'}}>
        {captions.map((c, i) => <li key={i}>{c.text}</li>)}
      </ol>}
    </div>
  );
}

Object.assign(window, { AppClip, AppPanel, AppChat, AmRich, AmPill, AmBtn, AmFeedCard, AmPersonCard, AmMeter, AmIcon, amApply, amInit });
