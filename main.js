/* ============================================================
   Dynasty Wealth Partners — Site Styles
   Clean + trustworthy: navy, soft blue, generous whitespace
   ============================================================ */

:root {
  /* Color system */
  --navy-900: #0d2137;
  --navy-800: #12314f;
  --navy-700: #1a4066;
  --blue-600: #1f6fb2;
  --blue-500: #2e86d1;
  --blue-100: #e3eff9;
  --blue-50: #f1f7fc;
  --gold-500: #c9a227;
  --gold-100: #f7efd8;
  --neutral-0: #ffffff;
  --neutral-50: #f7f9fb;
  --neutral-100: #eef1f5;
  --neutral-300: #c9d3dd;
  --neutral-500: #64748b;
  --neutral-700: #334155;
  --neutral-900: #101828;

  /* Fluid typography */
  --fs-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --fs-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --fs-lg: clamp(1.15rem, 1.05rem + 0.5vw, 1.4rem);
  --fs-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --fs-2xl: clamp(2rem, 1.6rem + 2vw, 3.1rem);
  --fs-3xl: clamp(2.6rem, 2rem + 3vw, 4.2rem);

  --font-head: "Fraunces", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --radius: 14px;
  --radius-lg: 22px;
  --shadow-sm: 0 1px 3px rgba(13, 33, 55, 0.08);
  --shadow-md: 0 6px 24px rgba(13, 33, 55, 0.10);
  --shadow-lg: 0 18px 48px rgba(13, 33, 55, 0.16);
  --container: 1180px;
  --transition: 220ms cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  font-size: var(--fs-base);
  line-height: 1.65;
  color: var(--neutral-700);
  background: var(--neutral-0);
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }

h1, h2, h3, h4 { font-family: var(--font-head); color: var(--navy-900); line-height: 1.15; font-weight: 600; }

h1 { font-size: var(--fs-3xl); letter-spacing: -0.02em; }
h2 { font-size: var(--fs-2xl); letter-spacing: -0.015em; }
h3 { font-size: var(--fs-xl); }
h4 { font-size: var(--fs-lg); }

a { color: var(--blue-600); text-decoration: none; }
a:hover { text-decoration: underline; }

.container { max-width: var(--container); margin: 0 auto; padding: 0 clamp(1.25rem, 4vw, 2.5rem); }

section { padding: clamp(3.5rem, 8vw, 6.5rem) 0; }

.eyebrow {
  display: inline-block;
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue-600);
  margin-bottom: 1rem;
}

.section-intro { max-width: 720px; }
.section-intro p { margin-top: 1.1rem; font-size: var(--fs-lg); color: var(--neutral-500); }

/* ---------- Buttons ---------- */
.btn {
  display: inline-block;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: var(--fs-sm);
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition), color var(--transition);
  text-decoration: none !important;
}
.btn:active { transform: scale(0.97); }
.btn-primary { background: var(--blue-600); color: #fff; }
.btn-primary:hover { background: var(--navy-800); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-outline { border-color: var(--navy-900); color: var(--navy-900); background: transparent; }
.btn-outline:hover { background: var(--navy-900); color: #fff; transform: translateY(-2px); }
.btn-light { background: #fff; color: var(--navy-900); }
.btn-light:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-ghost-light { border-color: rgba(255,255,255,0.6); color: #fff; background: transparent; }
.btn-ghost-light:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }

/* ---------- Header ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--neutral-100);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.8rem clamp(1.25rem, 4vw, 2.5rem);
  max-width: var(--container);
  margin: 0 auto;
}
.logo img { height: 52px; width: auto; }
.main-nav { display: flex; align-items: center; gap: 1.9rem; }
.main-nav a {
  color: var(--navy-900);
  font-weight: 500;
  font-size: var(--fs-sm);
  position: relative;
  text-decoration: none;
}
.main-nav a::after {
  content: "";
  position: absolute;
  left: 0; bottom: -6px;
  width: 0; height: 2px;
  background: var(--blue-600);
  transition: width var(--transition);
}
.main-nav a:hover::after, .main-nav a.active::after { width: 100%; }
.nav-cta { display: flex; align-items: center; gap: 0.8rem; }
.nav-login { font-size: var(--fs-sm); color: var(--neutral-500) !important; }
.nav-toggle {
  display: none;
  background: none; border: none; cursor: pointer;
  width: 44px; height: 44px;
  flex-direction: column; justify-content: center; align-items: center; gap: 5px;
}
.nav-toggle span { display: block; width: 24px; height: 2px; background: var(--navy-900); transition: var(--transition); }

@media (max-width: 900px) {
  .nav-toggle { display: flex; }
  .main-nav {
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.4rem clamp(1.25rem, 4vw, 2.5rem) 1.8rem;
    gap: 1.2rem;
    border-bottom: 1px solid var(--neutral-100);
    box-shadow: var(--shadow-md);
    display: none;
  }
  .main-nav.open { display: flex; }
  .nav-cta .btn { padding: 0.55rem 1rem; font-size: 0.8rem; }
}

/* ---------- Hero ---------- */
.hero {
  background: linear-gradient(160deg, var(--navy-900) 0%, var(--navy-700) 70%, var(--blue-600) 130%);
  color: #fff;
  padding: clamp(4.5rem, 10vw, 8rem) 0;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  right: -220px; top: -220px;
  width: 640px; height: 640px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(46, 134, 209, 0.35), transparent 65%);
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg video { width: 100%; height: 100%; object-fit: cover; }
.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(13, 33, 55, 0.94) 0%, rgba(18, 49, 79, 0.88) 55%, rgba(31, 111, 178, 0.72) 130%);
}
.hero .container { position: relative; z-index: 1; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
.hero h1 { color: #fff; margin-bottom: 1.3rem; }
.hero p.lede { font-size: var(--fs-lg); color: #cfe0ef; max-width: 34rem; margin-bottom: 2.2rem; }
.hero p.lede strong { color: #fff; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.form-embed {
  background: rgba(255, 255, 255, 0.97);
  border-radius: var(--radius-lg);
  padding: clamp(1.6rem, 3vw, 2.4rem);
  box-shadow: var(--shadow-lg);
}
.form-embed h3 { margin-bottom: 0.4rem; }
.form-embed > p { font-size: var(--fs-sm); color: var(--neutral-500); margin-bottom: 1.4rem; }
.form-placeholder {
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius);
  padding: 3rem 1.5rem;
  text-align: center;
  color: var(--neutral-500);
  font-size: var(--fs-sm);
  background: var(--neutral-50);
}
.form-placeholder strong { display: block; color: var(--navy-800); margin-bottom: 0.4rem; }
@media (max-width: 900px) { .hero .container { grid-template-columns: 1fr; } }

/* Page hero (interior pages) — set per-page image via inline background-image on .page-hero-bg */
.page-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, var(--navy-900), var(--navy-700));
  color: #fff;
  padding: clamp(3.5rem, 8vw, 5.5rem) 0;
}
.page-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
.page-hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(13, 33, 55, 0.94) 0%, rgba(18, 49, 79, 0.88) 55%, rgba(26, 64, 102, 0.82) 100%);
}
.page-hero .container { position: relative; z-index: 1; }
.page-hero h1 { color: #fff; max-width: 800px; }
.page-hero p { color: #cfe0ef; font-size: var(--fs-lg); max-width: 680px; margin-top: 1.2rem; }

/* ---------- Process (timeline) ---------- */
.process { background: var(--neutral-50); }
.process-grid { display: grid; gap: 1.4rem; margin-top: 3rem; }
.process-step {
  background: #fff;
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius);
  padding: 1.8rem 2rem;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 1.4rem;
  align-items: start;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
}
.process-step:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.step-num {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--blue-100);
  color: var(--blue-600);
  font-family: var(--font-head);
  font-size: 1.4rem;
  font-weight: 600;
  display: grid;
  place-items: center;
}
.process-step h3 { font-size: var(--fs-lg); margin-bottom: 0.35rem; }
.process-step p { color: var(--neutral-500); font-size: var(--fs-sm); }
.step-gist { font-weight: 600; color: var(--navy-800) !important; font-size: var(--fs-base) !important; margin-bottom: 0.7rem; }
.step-points { list-style: none; display: grid; gap: 0.45rem; }
.step-points li {
  position: relative;
  padding-left: 1.4rem;
  color: var(--neutral-500);
  font-size: var(--fs-sm);
  line-height: 1.5;
}
.step-points li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.52em;
  width: 8px; height: 8px;
  border-radius: 2px;
  background: var(--gold-500);
}
@media (min-width: 700px) { .step-points { grid-template-columns: 1fr 1fr; column-gap: 1.6rem; } }

/* ---------- Services ---------- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
  margin-top: 3rem;
}
.service-card {
  background: var(--blue-50);
  border-radius: var(--radius);
  padding: 2rem;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
}
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); background: #fff; }
.service-card .icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: var(--navy-900);
  color: #fff;
  display: grid; place-items: center;
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
}
.service-card h3 { font-size: var(--fs-lg); margin-bottom: 0.6rem; }
.service-card p { font-size: var(--fs-sm); color: var(--neutral-500); }

/* Alternating service rows (What We Do) */
.service-rows { display: grid; gap: 0.5rem; }
.service-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
  padding: clamp(2.2rem, 5vw, 3.5rem) 0;
}
.service-row.flip .service-row-media { order: 2; }
.service-row-media img { border-radius: var(--radius-lg); box-shadow: var(--shadow-md); aspect-ratio: 4/3; object-fit: cover; width: 100%; }
.service-row h3 { margin-bottom: 0.9rem; }
.service-row p { color: var(--neutral-500); }
@media (max-width: 800px) {
  .service-row { grid-template-columns: 1fr; }
  .service-row.flip .service-row-media { order: 0; }
}

/* ---------- Awards ---------- */
.awards { background: var(--navy-900); color: #fff; }
.awards h2, .awards h3 { color: #fff; }
.awards .eyebrow { color: var(--gold-500); }
.awards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; margin-top: 3rem; }
.award-card {
  background: var(--navy-800);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
  padding: 2.2rem;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.6rem;
  align-items: center;
}
.award-card img { border-radius: 10px; background: #fff; padding: 6px; }
.award-card h3 { font-size: var(--fs-lg); margin-bottom: 0.6rem; }
.award-card p { color: #b9cbdc; font-size: var(--fs-sm); }
@media (max-width: 800px) { .awards-grid { grid-template-columns: 1fr; } .award-card { grid-template-columns: 1fr; } }

/* ---------- Testimonial ---------- */
.testimonial { background: var(--neutral-50); }
.testimonial-card {
  max-width: 860px;
  margin: 0 auto;
  background: #fff;
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 5vw, 3.5rem);
  box-shadow: var(--shadow-md);
  position: relative;
}
.testimonial-card::before {
  content: "\201C";
  font-family: var(--font-head);
  font-size: 6rem;
  color: var(--blue-100);
  position: absolute;
  top: 0.5rem; left: 1.8rem;
  line-height: 1;
}
.testimonial-card blockquote { font-size: var(--fs-lg); color: var(--navy-800); font-family: var(--font-head); font-weight: 400; margin-bottom: 1.5rem; }
.testimonial-card cite { font-style: normal; font-weight: 600; color: var(--navy-900); }
.testimonial-more { max-height: 0; overflow: hidden; transition: max-height 400ms ease; }
.testimonial-more.open { max-height: 1600px; }
.testimonial-more p { margin-bottom: 1rem; color: var(--neutral-700); }
.testimonial-toggle { background: none; border: none; color: var(--blue-600); font-weight: 600; cursor: pointer; font-size: var(--fs-sm); padding: 0; margin-bottom: 1.2rem; font-family: inherit; }
.disclosure { font-size: var(--fs-xs); color: var(--neutral-500); margin-top: 1.4rem; border-top: 1px solid var(--neutral-100); padding-top: 1rem; }

/* ---------- Founder ---------- */
.founder .container { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
.founder-photo img { border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }
.founder h2 { margin: 0.4rem 0 1.4rem; }
.founder p { margin-bottom: 1.1rem; color: var(--neutral-500); }
@media (max-width: 800px) { .founder .container { grid-template-columns: 1fr; } }

/* ---------- Team ---------- */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.8rem;
  margin-top: 3rem;
}
.team-card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--neutral-100);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition);
  text-align: left;
  font-family: inherit;
  padding: 0;
}
.team-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.team-card img { aspect-ratio: 1/1.05; object-fit: cover; object-position: top center; width: 100%; }
.team-card-body { padding: 1.3rem 1.4rem 1.5rem; }
.team-card h3 { font-size: var(--fs-lg); }
.team-card .role { color: var(--blue-600); font-size: var(--fs-sm); font-weight: 500; margin-top: 0.2rem; }
.team-card .more { display: inline-block; margin-top: 0.8rem; font-size: var(--fs-xs); font-weight: 600; color: var(--neutral-500); letter-spacing: 0.08em; text-transform: uppercase; }

/* Modal */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(13, 33, 55, 0.55);
  backdrop-filter: blur(4px);
  display: none;
  align-items: center; justify-content: center;
  z-index: 200;
  padding: 1.5rem;
}
.modal-overlay.open { display: flex; }
.modal {
  background: #fff;
  border-radius: var(--radius-lg);
  max-width: 760px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  padding: clamp(1.8rem, 4vw, 3rem);
  position: relative;
  box-shadow: var(--shadow-lg);
}
.modal-close {
  position: absolute; top: 1rem; right: 1rem;
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1px solid var(--neutral-100);
  background: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--navy-900);
}
.modal-close:hover { background: var(--neutral-50); }
.modal-header { display: flex; gap: 1.4rem; align-items: center; margin-bottom: 1.4rem; }
.modal-header img { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; object-position: top center; }
.modal-header .role { color: var(--blue-600); font-weight: 500; }
.modal p { margin-bottom: 1rem; color: var(--neutral-700); }
.modal .footnote { font-size: var(--fs-xs); color: var(--neutral-500); word-break: break-all; }

/* ---------- Licensing ---------- */
.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
  gap: 0.7rem;
  margin-top: 2.2rem;
}
.state-chip {
  background: var(--blue-50);
  border: 1px solid var(--blue-100);
  color: var(--navy-800);
  border-radius: 10px;
  text-align: center;
  padding: 0.65rem 0;
  font-weight: 600;
  font-size: var(--fs-sm);
}
.license-note { margin-top: 2rem; font-size: var(--fs-sm); color: var(--neutral-500); }

/* ---------- CTA band ---------- */
.cta-band {
  background: linear-gradient(140deg, var(--navy-800), var(--blue-600));
  color: #fff;
  border-radius: var(--radius-lg);
  padding: clamp(2.5rem, 6vw, 4.5rem);
  text-align: center;
}
.cta-band h2 { color: #fff; margin-bottom: 1rem; }
.cta-band p { color: #d6e6f4; max-width: 620px; margin: 0 auto 2rem; }

/* ---------- Consult CTA (full-width band) ---------- */
.consult-cta {
  background: var(--navy-900);
  border-top: 3px solid var(--gold-500);
  text-align: center;
  padding: clamp(3.5rem, 8vw, 5.5rem) 0;
}
.consult-cta .eyebrow { color: var(--gold-500); }
.consult-cta h2 { color: #fff; max-width: 800px; margin: 0 auto 1rem; }
.consult-cta .consult-sub { color: #cfe0ef; font-size: var(--fs-lg); max-width: 560px; margin: 0 auto 2.2rem; }
.consult-actions { display: flex; align-items: center; justify-content: center; gap: 1.2rem; flex-wrap: wrap; }
.consult-phone { font-size: var(--fs-sm); color: #cfe0ef; }
.consult-phone a { color: #fff; font-weight: 600; white-space: nowrap; }
@media (max-width: 600px) {
  .consult-actions { flex-direction: column; gap: 0.9rem; }
  .consult-actions .btn { width: 100%; max-width: 320px; }
}

/* ---------- Contact ---------- */
.contact-layout { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
@media (max-width: 860px) { .contact-layout { grid-template-columns: 1fr; } }
.contact-form {
  background: #fff;
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-lg);
  padding: clamp(1.8rem, 4vw, 2.6rem);
  box-shadow: var(--shadow-md);
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
.form-group { margin-bottom: 1.1rem; }
.form-group label { display: block; font-size: var(--fs-sm); font-weight: 600; color: var(--navy-900); margin-bottom: 0.4rem; }
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1.5px solid var(--neutral-300);
  border-radius: 10px;
  font-family: inherit;
  font-size: var(--fs-sm);
  transition: border-color var(--transition), box-shadow var(--transition);
}
.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--blue-500);
  box-shadow: 0 0 0 3px rgba(46, 134, 209, 0.15);
}
.consent { font-size: var(--fs-xs); color: var(--neutral-500); margin: 1rem 0 1.4rem; }
.office-card { background: var(--neutral-50); border-radius: var(--radius-lg); padding: 2rem; margin-top: 1.6rem; }
.office-card h3 { margin-bottom: 0.8rem; }
.office-card address { font-style: normal; color: var(--neutral-500); line-height: 1.8; }

/* ---------- Footer ---------- */
.site-footer { background: var(--navy-900); color: #b9cbdc; padding: 3.5rem 0 2rem; font-size: var(--fs-xs); }
.footer-top { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
.footer-top h4 { color: #fff; font-family: var(--font-body); font-size: var(--fs-sm); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; }
.footer-top a { color: #b9cbdc; display: block; margin-bottom: 0.5rem; }
.footer-top a:hover { color: #fff; }
.footer-logo img { height: 60px; width: auto; margin-bottom: 1rem; filter: brightness(0) invert(1); }
.footer-compliance { padding-top: 2rem; line-height: 1.8; }
.footer-compliance p { margin-bottom: 0.8rem; }
.footer-compliance a { color: #d6e6f4; text-decoration: underline; }
.footer-badge { height: 44px; width: auto; margin: 1rem 0; }
.copyright { margin-top: 1.5rem; color: #7d93a8; }
@media (max-width: 800px) { .footer-top { grid-template-columns: 1fr; } }

/* ---------- Reveal animations ---------- */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 600ms ease, transform 600ms ease; }
.reveal.visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
}

/* ---------- Hero booking form ---------- */
.form-embed .form-group select {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1.5px solid var(--neutral-300);
  border-radius: 10px;
  font-family: inherit;
  font-size: var(--fs-sm);
  background: #fff;
  color: var(--neutral-700);
}
.form-embed .consent { margin: 0.8rem 0 1.1rem; }
.form-embed .btn { width: 100%; text-align: center; }
.form-status { display: none; margin-top: 1rem; color: var(--blue-600); font-weight: 600; font-size: var(--fs-sm); }

/* ---------- About the company ---------- */
.about-company { background: var(--neutral-50); }
.about-company .container { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
.about-company img { border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
.about-company p { margin-bottom: 1.1rem; color: var(--neutral-500); font-size: var(--fs-lg); }
@media (max-width: 800px) { .about-company .container { grid-template-columns: 1fr; } }

/* ---------- Full-width map ---------- */
.map-section { padding: 0; line-height: 0; }
.map-section iframe { width: 100%; height: 420px; border: 0; display: block; filter: saturate(0.85); }
.map-caption {
  background: var(--navy-900);
  color: #cfe0ef;
  text-align: center;
  padding: 1rem;
  font-size: var(--fs-sm);
  line-height: 1.6;
}

/* ---------- DWP Process 3D scroll effects ---------- */
.process-grid { perspective: 1100px; }
.process-step { transform-style: preserve-3d; will-change: transform, opacity; transition: border-color var(--transition), box-shadow var(--transition); }
.process-step.is-active {
  border-color: var(--blue-500);
  box-shadow: var(--shadow-lg);
}
.process-step.is-active .step-num { background: var(--blue-600); color: #fff; }

/* ---------- Mobile optimization ---------- */
iframe { max-width: 100%; }
@media (max-width: 600px) {
  .logo img { height: 40px; }
  .header-inner { gap: 0.8rem; padding: 0.7rem 1rem; }
  .nav-cta { gap: 0.5rem; }
  .nav-cta .btn { padding: 0.5rem 0.85rem; font-size: 0.75rem; }
  section { padding: 3rem 0; }
  .hero { padding: 3.5rem 0 3rem; }
  .container { padding: 0 1.1rem; }
  .process-step { grid-template-columns: 1fr; padding: 1.5rem 1.3rem; }
  .step-num { width: 44px; height: 44px; font-size: 1.15rem; }
  .form-embed { padding: 1.4rem 1.2rem; }
  .cta-band { padding: 2.2rem 1.4rem; }
  .map-section iframe { height: 300px; }
  .testimonial-card::before { display: none; }
  .modal { padding: 1.5rem 1.2rem; }
  .modal-header { flex-direction: column; align-items: flex-start; }
  .hero-actions .btn { flex: 1 1 auto; text-align: center; }
}

/* ---------- FAQ ---------- */
.faq { background: var(--neutral-50); }
.faq-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.faq-intro { position: sticky; top: 110px; }
.faq-intro p { margin-top: 1rem; color: var(--neutral-500); }
.faq-intro .btn { margin-top: 1.6rem; }
.faq-list details {
  background: #fff;
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius);
  margin-bottom: 0.9rem;
  overflow: hidden;
  transition: box-shadow var(--transition), border-color var(--transition);
}
.faq-list details:hover { box-shadow: var(--shadow-sm); }
.faq-list details[open] { box-shadow: var(--shadow-md); border-color: var(--blue-100); }
.faq-list summary {
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.1rem;
  align-items: center;
  padding: 1.25rem 1.4rem;
  cursor: pointer;
  font-family: var(--font-head);
  font-size: var(--fs-lg);
  font-weight: 600;
  color: var(--navy-900);
}
.faq-list summary::-webkit-details-marker { display: none; }
.faq-num { font-family: var(--font-head); font-size: var(--fs-sm); color: var(--gold-500); font-weight: 600; }
.faq-x {
  width: 30px; height: 30px;
  border-radius: 50%;
  background: var(--blue-50);
  color: var(--blue-600);
  display: grid; place-items: center;
  font-family: var(--font-body);
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1;
  transition: transform var(--transition), background var(--transition), color var(--transition);
}
.faq-list details[open] .faq-x { transform: rotate(45deg); background: var(--blue-600); color: #fff; }
.faq-a { padding: 0 1.4rem 1.4rem 3.4rem; }
.faq-a p { color: var(--neutral-500); font-size: var(--fs-base); }
.faq-a p + p { margin-top: 0.8rem; }
@media (max-width: 860px) {
  .faq-layout { grid-template-columns: 1fr; }
  .faq-intro { position: static; }
  .faq-a { padding-left: 1.4rem; }
}

/* ---------- Contact page photo ---------- */
.contact-photo { margin-top: 1.6rem; }
.contact-photo img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* ---------- Intro with side image ---------- */
.intro-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(2rem, 5vw, 4rem); align-items: center; }
.intro-img img {
  width: 100%;
  aspect-ratio: 4 / 3.4;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}
@media (max-width: 800px) { .intro-grid { grid-template-columns: 1fr; } }

/* ---------- CTA band with a familiar face ---------- */
.cta-band.has-face {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
  text-align: left;
}
.cta-band.has-face p { margin: 0 0 2rem; }
.cta-band-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.cta-face { text-align: center; margin: 0; }
.cta-face img {
  width: min(300px, 100%);
  margin: 0 auto;
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: top center;
}
.cta-face figcaption { margin-top: 0.9rem; color: #d6e6f4; font-size: var(--fs-sm); font-weight: 500; }
@media (max-width: 800px) { .cta-band.has-face { grid-template-columns: 1fr; text-align: center; } .cta-band-actions { justify-content: center; } }

/* ---------- Image bounce (site-wide) ---------- */
main img { transition: transform 450ms cubic-bezier(0.34, 1.56, 0.64, 1); }
main img:hover { transform: translateY(-6px) scale(1.02); }
main .team-card img:hover, main .modal-header img:hover { transform: scale(1.05); }
.page-hero-bg, .hero-bg { transition: none; }
@media (prefers-reduced-motion: reduce) {
  main img, main img:hover { transition: none; transform: none; }
}

/* ---------- Utility ---------- */
.text-center { text-align: center; }
.mt-2 { margin-top: 2rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
