<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Aurevio — independent web development for businesses, creators and people with something to say."
    />
    <meta name="theme-color" content="#10100f" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Aurevio — Web, but with a point of view." />
    <meta
      property="og:description"
      content="Independent web development for businesses, creators and people with something to say."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/favicon.svg" />
    <meta property="og:site_name" content="Aurevio" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Aurevio — Web, but with a point of view." />
    <meta
      name="twitter:description"
      content="Independent web development for businesses, creators and people with something to say."
    />
    <meta name="twitter:image" content="/favicon.svg" />
    <title>Aurevio — Web, but with a point of view.</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
      rel="stylesheet"
    />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Aurevio",
        "description": "Independent web development for businesses, creators and people with something to say.",
        "url": "https://github.com/WajahatAli2010/aurevio-v3",
        "areaServed": "Worldwide",
        "sameAs": [
          "https://github.com/WajahatAli2010/aurevio-v3"
        ],
        "offers": {
          "@type": "Offer",
          "category": "Web design and development"
        }
      }
    </script>
    <style>
      :root {
        --bg: #10100f;
        --panel: #171714;
        --panel-strong: #1e1d1a;
        --paper: #eee9df;
        --ink: #10100f;
        --line: rgba(238, 233, 223, 0.12);
        --muted: #a8a397;
        --soft: #c9c3b8;
        --accent: #d7ff3f;
        --accent-strong: #b9eb2d;
        --shadow: rgba(0, 0, 0, 0.28);
      }

      html[data-theme='light'] {
        --bg: #f5f0e8;
        --panel: #faf5ef;
        --panel-strong: #f1eadf;
        --paper: #111111;
        --ink: #10100f;
        --line: rgba(16, 16, 15, 0.14);
        --muted: #5d5b55;
        --soft: #5a564f;
        --accent: #3d5c00;
        --accent-strong: #567b00;
        --shadow: rgba(17, 17, 17, 0.08);
      }

      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        color: var(--paper);
        background: var(--bg);
        font-family: 'Manrope', sans-serif;
        line-height: 1.6;
      }
      a { color: inherit; text-decoration: none; }
      img { max-width: 100%; display: block; }
      button, input, textarea { font: inherit; }
      .container {
        width: min(1200px, calc(100% - 2rem));
        margin: 0 auto;
      }
      .skip-link {
        position: absolute;
        left: 1rem;
        top: -3rem;
        background: var(--accent);
        color: var(--ink);
        padding: 0.8rem 1rem;
        z-index: 1000;
        border-radius: 0.75rem;
        font-weight: 700;
      }
      .skip-link:focus { top: 1rem; }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .site-header {
        position: sticky;
        top: 0;
        z-index: 30;
        backdrop-filter: blur(16px);
        background: color-mix(in srgb, var(--bg) 80%, transparent);
        border-bottom: 1px solid var(--line);
      }
      .nav-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 74px;
        gap: 1rem;
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
        color: var(--paper);
        font-family: 'DM Mono', monospace;
        font-size: 0.8rem;
        letter-spacing: 0.26em;
        text-transform: uppercase;
      }
      .brand-mark {
        width: 2rem;
        height: 2rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--line);
        background: var(--panel);
        color: var(--accent);
        border-radius: 0.45rem;
        font-size: 0.9rem;
        font-weight: 700;
      }
      .site-nav {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      .site-nav a {
        color: var(--muted);
        transition: color 180ms ease;
      }
      .site-nav a:hover,
      .site-nav a:focus-visible {
        color: var(--paper);
      }
      .nav-actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .theme-toggle,
      .nav-toggle,
      .btn,
      .btn-secondary {
        transition: transform 200ms ease, border-color 200ms ease, background-color 200ms ease, color 200ms ease;
      }
      .theme-toggle {
        border: 1px solid var(--line);
        background: transparent;
        color: var(--paper);
        padding: 0.72rem 1rem;
        border-radius: 999px;
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        cursor: pointer;
      }
      .theme-toggle:hover,
      .nav-toggle:hover,
      .btn:hover,
      .btn-secondary:hover {
        transform: translateY(-1px);
      }
      .nav-toggle {
        display: none;
        border: 1px solid var(--line);
        background: transparent;
        color: var(--paper);
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 999px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
      .nav-toggle span,
      .nav-toggle span::before,
      .nav-toggle span::after {
        display: block;
        width: 1.2rem;
        height: 2px;
        content: "";
        background: currentColor;
        position: relative;
        transition: transform 180ms ease;
      }
      .nav-toggle span::before { position: absolute; top: -0.35rem; }
      .nav-toggle span::after { position: absolute; top: 0.35rem; }
      .site-nav.open + .nav-actions .nav-toggle span { background: transparent; }
      .site-nav.open + .nav-actions .nav-toggle span::before { transform: rotate(45deg); top: 0; }
      .site-nav.open + .nav-actions .nav-toggle span::after { transform: rotate(-45deg); top: 0; }
      .primary-btn,
      .btn,
      .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 3.2rem;
        padding: 0.85rem 1.2rem;
        border-radius: 999px;
        border: 1px solid transparent;
        font-family: 'DM Mono', monospace;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: pointer;
      }
      .btn, .primary-btn {
        background: var(--accent);
        color: var(--ink);
        box-shadow: 0 12px 25px rgba(199, 255, 54, 0.2);
      }
      .btn-secondary {
        background: transparent;
        color: var(--paper);
        border-color: var(--line);
      }
      .progress-wrap {
        position: fixed;
        inset: 0 0 auto 0;
        height: 2px;
        z-index: 50;
        background: transparent;
      }
      .progress-bar {
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, var(--accent), #c9ff70);
        box-shadow: 0 0 18px rgba(215, 255, 63, 0.65);
      }
      main {
        overflow: clip;
      }
      section {
        position: relative;
        padding: clamp(4rem, 9vw, 8rem) 0;
      }
      .section-intro {
        max-width: 48rem;
        margin-bottom: 2.5rem;
      }
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        color: var(--muted);
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
      .eyebrow::before {
        content: "";
        width: 3rem;
        height: 1px;
        background: var(--line);
      }
      h1, h2, h3 {
        margin: 0;
        line-height: 0.96;
        letter-spacing: -0.06em;
      }
      h1 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(3.2rem, 7vw, 7rem);
        font-weight: 700;
        max-width: 11ch;
      }
      h2 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(2.5rem, 5vw, 4.25rem);
      }
      h3 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(1.5rem, 2vw, 2.2rem);
      }
      p {
        margin: 0;
        color: var(--soft);
      }
      .hero {
        min-height: calc(100vh - 74px);
        display: flex;
        align-items: center;
        padding-top: 3rem;
        background:
          radial-gradient(circle at top left, rgba(215, 255, 63, 0.15), transparent 18%),
          linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.15));
      }
      .hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        align-items: center;
        gap: 2.5rem;
      }
      .hero-copy {
        display: grid;
        gap: 1.25rem;
      }
      .hero-copy p {
        max-width: 42rem;
        font-size: 1.15rem;
      }
      .cta-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        margin-top: 0.6rem;
      }
      .hero-stats {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }
      .hero-stats li {
        border: 1px solid var(--line);
        background: rgba(255,255,255,0.02);
        border-radius: 1.2rem;
        padding: 1.1rem 1rem;
      }
      .stat-value {
        display: block;
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(1.5rem, 2vw, 2.25rem);
        font-weight: 700;
        color: var(--paper);
      }
      .stat-label {
        display: block;
        color: var(--muted);
        font-family: 'DM Mono', monospace;
        font-size: 0.68rem;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        margin-top: 0.25rem;
      }
      .hero-panel {
        position: relative;
        min-height: 540px;
        border: 1px solid var(--line);
        border-radius: 2rem;
        background:
          linear-gradient(150deg, rgba(215,255,63,0.12), rgba(255,255,255,0.02)),
          var(--panel);
        box-shadow: 0 22px 54px var(--shadow);
        overflow: hidden;
      }
      .hero-panel::before {
        content: "";
        position: absolute;
        inset: 12% 12% auto auto;
        width: 18rem;
        height: 18rem;
        background: radial-gradient(circle, rgba(215,255,63,0.42), transparent 62%);
        filter: blur(22px);
      }
      .panel-window {
        position: absolute;
        inset: 1.1rem;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 1.5rem;
        background: rgba(10,10,9,0.42);
        overflow: hidden;
      }
      .window-header {
        display: flex;
        gap: 0.5rem;
        padding: 0.9rem 1rem;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .window-dot {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background: rgba(255,255,255,0.24);
      }
      .window-dot:nth-child(1) { background: #ff6f66; }
      .window-dot:nth-child(2) { background: #f6ca59; }
      .window-dot:nth-child(3) { background: #7de17b; }
      .window-body {
        padding: 1.2rem;
        display: grid;
        gap: 1rem;
      }
      .mini-card {
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 1rem;
        padding: 1rem;
        background: rgba(255,255,255,0.02);
      }
      .mini-card strong {
        display: block;
        font-family: 'DM Mono', monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
        font-size: 0.64rem;
      }
      .mini-card span {
        display: block;
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(1.1rem, 2vw, 1.8rem);
        margin-top: 0.4rem;
      }
      .mini-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.8rem;
      }
      .mini-list {
        display: grid;
        gap: 0.6rem;
      }
      .mini-list li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        padding-bottom: 0.3rem;
        font-family: 'DM Mono', monospace;
        font-size: 0.64rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--soft);
      }
      .mini-list li:last-child { border-bottom: 0; }
      .marquee {
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        background: rgba(215,255,63,0.05);
        overflow: hidden;
      }
      .marquee-track {
        display: flex;
        gap: 2rem;
        white-space: nowrap;
        width: max-content;
        padding: 1rem 0;
        animation: marquee 20s linear infinite;
      }
      .marquee-item {
        font-family: 'DM Mono', monospace;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--paper);
        font-size: 0.78rem;
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .work-grid,
      .service-grid,
      .process-grid,
      .contact-grid {
        display: grid;
        gap: 1.25rem;
      }
      .work-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .work-card,
      .service-card,
      .process-step,
      .contact-card,
      .about-card {
        border: 1px solid var(--line);
        background: var(--panel);
        border-radius: 1.5rem;
        padding: 1.25rem;
        box-shadow: 0 18px 36px rgba(0,0,0,0.08);
      }
      .project-visual {
        border-radius: 1rem;
        overflow: hidden;
        border: 1px solid var(--line);
        background: rgba(255,255,255,0.02);
        margin-bottom: 1rem;
      }
      .project-visual img {
        width: 100%;
        min-height: 210px;
        object-fit: cover;
        filter: saturate(1.05) contrast(1.04);
      }
      .work-card-header,
      .service-card-header,
      .contact-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.75rem;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        border: 1px solid var(--line);
        color: var(--muted);
        padding: 0.4rem 0.7rem;
        font-family: 'DM Mono', monospace;
        font-size: 0.62rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      .work-card h3,
      .service-card h3,
      .process-step h3,
      .contact-card h3,
      .about-card h3 {
        margin-bottom: 0.6rem;
      }
      .service-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .service-card p,
      .about-card p,
      .process-step p,
      .contact-card p {
        color: var(--soft);
      }
      .about-grid {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 1.25rem;
      }
      .about-media {
        display: grid;
        gap: 1rem;
      }
      .about-panel {
        min-height: 370px;
        border: 1px solid var(--line);
        border-radius: 1.5rem;
        background:
          linear-gradient(150deg, rgba(215,255,63,0.12), rgba(255,255,255,0.02)),
          var(--panel);
        position: relative;
        overflow: hidden;
      }
      .about-panel::before {
        content: "";
        position: absolute;
        inset: auto auto 10% 8%;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(215,255,63,0.36), transparent 64%);
        filter: blur(18px);
      }
      .about-stats {
        display: grid;
        gap: 1rem;
      }
      .process-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .process-step {
        position: relative;
      }
      .process-number {
        display: inline-flex;
        width: 2.2rem;
        height: 2.2rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(215,255,63,0.12);
        color: var(--accent);
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 0.8rem;
      }
      .contact-grid {
        grid-template-columns: 1.1fr 0.9fr;
        align-items: start;
      }
      .contact-card-list {
        display: grid;
        gap: 1rem;
      }
      .contact-card {
        display: grid;
        gap: 0.5rem;
      }
      .contact-card a {
        color: var(--paper);
      }
      form {
        display: grid;
        gap: 1rem;
      }
      .field {
        display: grid;
        gap: 0.45rem;
      }
      label {
        color: var(--paper);
        font-family: 'DM Mono', monospace;
        font-size: 0.68rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      input,
      textarea {
        width: 100%;
        border: 1px solid var(--line);
        background: rgba(255,255,255,0.02);
        border-radius: 0.9rem;
        padding: 0.9rem 1rem;
        color: var(--paper);
        resize: vertical;
      }
      input:focus,
      textarea:focus,
      button:focus-visible,
      a:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
      }
      .site-footer {
        border-top: 1px solid var(--line);
        padding: 1.5rem 0 2rem;
      }
      .footer-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .footer-meta,
      .footer-links {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--muted);
        font-family: 'DM Mono', monospace;
        font-size: 0.68rem;
        letter-spacing: 0.09em;
        text-transform: uppercase;
      }
      .footer-links a:hover,
      .footer-links a:focus-visible {
        color: var(--paper);
      }
      [data-reveal] {
        opacity: 0;
        transform: translateY(26px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      [data-reveal].is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      @media (max-width: 980px) {
        .hero-grid,
        .about-grid,
        .contact-grid,
        .work-grid,
        .service-grid,
        .process-grid {
          grid-template-columns: 1fr;
        }
        .hero-stats {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      @media (max-width: 760px) {
        .nav-toggle { display: inline-flex; }
        .site-nav {
          position: absolute;
          left: 1rem;
          right: 1rem;
          top: calc(100% + 0.4rem);
          background: rgba(16,16,15,0.94);
          border: 1px solid var(--line);
          border-radius: 1rem;
          padding: 1rem;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.9rem;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px);
          transition: opacity 180ms ease, transform 180ms ease;
        }
        html[data-theme='light'] .site-nav {
          background: rgba(245,240,232,0.96);
        }
        .site-nav.is-open {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .hero-panel { min-height: 420px; }
        .hero-stats { grid-template-columns: 1fr; }
        .footer-wrap { flex-direction: column; align-items: flex-start; }
      }
    </style>
  </head>
  <body>
    <div class="progress-wrap" aria-hidden="true">
      <div class="progress-bar" id="scroll-progress"></div>
    </div>
    <header class="site-header">
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="container nav-wrap">
        <a class="brand" href="#top" aria-label="Aurevio home">
          <span class="brand-mark">A</span>
          <span class="brand-name">Aurevio</span>
        </a>

        <nav class="site-nav" id="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="nav-actions">
          <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle color theme">
            Light mode
          </button>
          <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation menu">
            <span aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>

    <main id="main">
      <section class="hero" id="top">
        <div class="container hero-grid">
          <div class="hero-copy" data-reveal>
            <div class="eyebrow">01 / Aurevio</div>
            <h1>Web, but with a point of view.</h1>
            <p>
              Independent web development for businesses, creators and people with something to say.
              Strategy, design, code and launch — built to feel precise, modern and unforgettable.
            </p>
            <div class="cta-row">
              <a class="btn" href="#contact">Book a call</a>
              <a class="btn-secondary" href="#work">View work</a>
            </div>
            <ul class="hero-stats" aria-label="Highlights">
              <li>
                <span class="stat-value">6+</span>
                <span class="stat-label">Years of craft</span>
              </li>
              <li>
                <span class="stat-value">28</span>
                <span class="stat-label">Projects shipped</span>
              </li>
              <li>
                <span class="stat-value">100%</span>
                <span class="stat-label">Tailored build</span>
              </li>
            </ul>
          </div>

          <div class="hero-panel" data-reveal aria-label="Aurevio project overview panel">
            <div class="panel-window">
              <div class="window-header" aria-hidden="true">
                <span class="window-dot"></span>
                <span class="window-dot"></span>
                <span class="window-dot"></span>
              </div>
              <div class="window-body">
                <div class="mini-card">
                  <strong>Current focus</strong>
                  <span>Brand systems & high-converting digital experiences</span>
                </div>

                <div class="mini-grid">
                  <div class="mini-card">
                    <strong>Launch</strong>
                    <span>7 weeks</span>
                  </div>
                  <div class="mini-card">
                    <strong>Stack</strong>
                    <span>Vite + JS</span>
                  </div>
                </div>

                <div class="mini-card">
                  <strong>Engagement model</strong>
                  <ul class="mini-list">
                    <li><span>Discovery</span><span>01</span></li>
                    <li><span>Design</span><span>02</span></li>
                    <li><span>Build</span><span>03</span></li>
                    <li><span>Launch</span><span>04</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="marquee" aria-label="Scrolling services list">
        <div class="marquee-track">
          <span class="marquee-item">Strategy</span>
          <span class="marquee-item">Brand systems</span>
          <span class="marquee-item">Web design</span>
          <span class="marquee-item">UI engineering</span>
          <span class="marquee-item">Conversion-led experiences</span>
          <span class="marquee-item">Strategy</span>
          <span class="marquee-item">Brand systems</span>
          <span class="marquee-item">Web design</span>
          <span class="marquee-item">UI engineering</span>
          <span class="marquee-item">Conversion-led experiences</span>
        </div>
      </div>

      <section id="work">
        <div class="container">
          <div class="section-intro" data-reveal>
            <div class="eyebrow">02 / Work</div>
            <h2>Selected builds with a sharper point of view.</h2>
          </div>

          <div class="work-grid">
            <article class="work-card" data-reveal>
              <div class="project-visual">
                <img src="/work-1.svg" alt="Abstract project preview for a creative studio website" loading="lazy" decoding="async" />
              </div>
              <div class="work-card-header">
                <span class="pill">Brand / Web</span>
                <span class="pill">2024</span>
              </div>
              <h3>Northline Studio</h3>
              <p>Identity, storytelling and a conversion-led site for a contemporary creative consultancy.</p>
            </article>

            <article class="work-card" data-reveal>
              <div class="project-visual">
                <img src="/work-2.svg" alt="Abstract project preview for a fintech product landing page" loading="lazy" decoding="async" />
              </div>
              <div class="work-card-header">
                <span class="pill">SaaS</span>
                <span class="pill">2023</span>
              </div>
              <h3>Vanta Ledger</h3>
              <p>Product positioning and UI systems designed to turn complex software into clear value.</p>
            </article>

            <article class="work-card" data-reveal>
              <div class="project-visual">
                <img src="/work-3.svg" alt="Abstract project preview for an editorial portfolio website" loading="lazy" decoding="async" />
              </div>
              <div class="work-card-header">
                <span class="pill">Editorial</span>
                <span class="pill">2022</span>
              </div>
              <h3>Maison Form</h3>
              <p>Immersive storytelling for a design-led brand with a product and journal publishing flow.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <div class="section-intro" data-reveal>
            <div class="eyebrow">03 / Services</div>
            <h2>Design and development built for real momentum.</h2>
          </div>

          <div class="service-grid">
            <article class="service-card" data-reveal>
              <div class="service-card-header">
                <span class="pill">Strategy</span>
              </div>
              <h3>Brand direction</h3>
              <p>Positioning, messaging and creative direction so your business feels sharper before the first pixel ships.</p>
            </article>

            <article class="service-card" data-reveal>
              <div class="service-card-header">
                <span class="pill">Design</span>
              </div>
              <h3>Interface design</h3>
              <p>High-fidelity design systems, landing pages and product experiences built for clarity, trust and conversion.</p>
            </article>

            <article class="service-card" data-reveal>
              <div class="service-card-header">
                <span class="pill">Build</span>
              </div>
              <h3>Web development</h3>
              <p>Responsive, accessible front-end builds that ship fast, scale cleanly and feel considered across devices.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container about-grid">
          <div class="about-media" data-reveal>
            <div class="section-intro">
              <div class="eyebrow">04 / About</div>
              <h2>Independent thinking with design and delivery in one lane.</h2>
            </div>
            <div class="about-panel" aria-label="Profile card illustration"></div>
          </div>

          <div class="about-stats" data-reveal>
            <article class="about-card">
              <h3>Built for clarity.</h3>
              <p>I help businesses turn ideas into polished digital experiences with a strong editorial eye and a practical engineering mindset.</p>
            </article>
            <article class="about-card">
              <h3>Small teams, big thinking.</h3>
              <p>Direct collaboration, clear process and a bias toward useful experiences over aesthetic noise.</p>
            </article>
            <article class="about-card">
              <h3>Performance-first.</h3>
              <p>Fast builds, accessible interfaces and meaningful details that support the brand instead of distracting from it.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="process">
        <div class="container">
          <div class="section-intro" data-reveal>
            <div class="eyebrow">05 / Process</div>
            <h2>A simple path from idea to launch.</h2>
          </div>

          <div class="process-grid">
            <article class="process-step" data-reveal>
              <div class="process-number">01</div>
              <h3>Discover</h3>
              <p>We map the audience, business goals and opportunity so the work starts with direction, not guesswork.</p>
            </article>

            <article class="process-step" data-reveal>
              <div class="process-number">02</div>
              <h3>Shape</h3>
              <p>We define the narrative, visual system and key interactions that make the experience feel confident and intentional.</p>
            </article>

            <article class="process-step" data-reveal>
              <div class="process-number">03</div>
              <h3>Build</h3>
              <p>We turn the approved direction into responsive interfaces with clear code, accessible patterns and thoughtful motion.</p>
            </article>

            <article class="process-step" data-reveal>
              <div class="process-number">04</div>
              <h3>Launch</h3>
              <p>We refine, test and ship the experience with a watchful eye on polish, performance and measurable impact.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container contact-grid">
          <div class="contact-card-list" data-reveal>
            <div class="section-intro" style="margin-bottom:0;">
              <div class="eyebrow">06 / Contact</div>
              <h2>Let’s make the next thing feel sharper.</h2>
            </div>

            <article class="contact-card">
              <div class="contact-card-header">
                <span class="pill">Email</span>
              </div>
              <h3><a href="mailto:hello@aurevio.studio">hello@aurevio.studio</a></h3>
              <p>For product launches, websites, brand refreshes and digital experiences that need more point of view.</p>
            </article>

            <article class="contact-card">
              <div class="contact-card-header">
                <span class="pill">Based</span>
              </div>
              <h3>Remote, worldwide</h3>
              <p>Available for select projects, partnerships and retained creative work.</p>
            </article>
          </div>

          <div class="contact-card" data-reveal>
            <div class="contact-card-header">
              <span class="pill">Inquiry</span>
            </div>
            <h3>Send a brief</h3>
            <form aria-label="Contact form">
              <div class="field">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" aria-required="true" />
              </div>

              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" aria-required="true" />
              </div>

              <div class="field">
                <label for="project">Project</label>
                <textarea id="project" name="project" rows="5" placeholder="Tell me a little about the work..." aria-required="true"></textarea>
              </div>

              <button type="submit" class="primary-btn">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-wrap">
        <div class="footer-meta">
          <span>Aurevio</span>
          <span>© 2025</span>
        </div>
        <div class="footer-links" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>

    <noscript>
      <div class="container" style="padding:1rem 0 3rem;">
        <p>Please enable JavaScript to experience the full Aurevio interface.</p>
      </div>
    </noscript>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
