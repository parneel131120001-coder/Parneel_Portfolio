import { useState, useEffect } from 'react'
import profileDataEn from './data/master_profile.json'
import profileDataJa from './data/master_profile_ja.json'
import { uiTranslations } from './data/translations'
import './index.css'

function App() {
  const [lang, setLang] = useState<'en' | 'ja'>(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'en' || saved === 'ja') return saved;
      if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ja')) {
        return 'ja';
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const profileData = lang === 'ja' ? profileDataJa : profileDataEn;
  const ui = uiTranslations[lang];

  const {
    personal_info,
    education,
    publications,
    research_experience,
    academic_achievements,
    skills,
    languages,
    other_experience
  } = profileData;

  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ja') {
      document.title = `${personal_info.display_name}（Parneel Saharan）| 東京農業大学大学院 植物科学・農学研究ポートフォリオ`;
    } else {
      document.title = `${personal_info.full_name} | MSc Plant Sciences & Horticulture Portfolio`;
    }
  }, [lang, personal_info]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const switchLanguage = (newLang: 'en' | 'ja') => {
    if (newLang === lang) return;
    setLang(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch {
      // ignore
    }
    showToast(uiTranslations[newLang].toasts.langSwitched);
  };

  const copyToClipboard = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} ${ui.toasts.copiedSuccess}`);
      }).catch(() => {
        showToast(`Copied: ${text}`);
      });
    } else {
      showToast(`Copied: ${text}`);
    }
  };

  const filterCategories = [
    { key: 'all', label: ui.research.allTab },
    { key: 'field', label: ui.research.categoryMap['Field Research & Sustainability'] },
    { key: 'teaching', label: ui.research.categoryMap['Academic Teaching & Lab Leadership'] },
    { key: 'fellowship', label: ui.research.categoryMap['International Fellowship'] }
  ];

  const filteredResearch = activeCategoryKey === 'all'
    ? research_experience
    : research_experience.filter(item => item.category_key === activeCategoryKey);

  return (
    <>
      {/* Global Ambient Botanical Background - Persists Across All Sections */}
      <div className="global-bg-container" aria-hidden="true">
        <img
          src="/botanical-hero.jpg"
          alt=""
          className="global-bg-img"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="global-bg-overlay"></div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-msg">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home" className="nav-brand">
          <span className="brand-dot"></span>
          <span>{personal_info.display_name}</span>
        </a>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">{ui.nav.about}</a></li>
            <li><a href="#education" className="nav-link">{ui.nav.education}</a></li>
            <li><a href="#research" className="nav-link">{ui.nav.research}</a></li>
            <li><a href="#publications" className="nav-link">{ui.nav.publications}</a></li>
            <li><a href="#grants" className="nav-link">{ui.nav.grants}</a></li>
            <li><a href="#skills" className="nav-link">{ui.nav.skills}</a></li>
            <li><a href="#contact" className="nav-cta">{ui.nav.contact}</a></li>
          </ul>

          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => switchLanguage('en')}
              title="Switch to English"
            >
              <span className="lang-flag">🇬🇧</span> EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'ja' ? 'active' : ''}`}
              onClick={() => switchLanguage('ja')}
              title="日本語に切り替え"
            >
              <span className="lang-flag">🇯🇵</span> 日本語
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-pulse"></span>
            <span>{ui.hero.rolePill}</span>
          </div>

          <h1 className="hero-title">{personal_info.full_name}</h1>
          <h2 className="hero-subtitle">{personal_info.headline}</h2>
          
          <p className="hero-bio">{personal_info.bio}</p>

          <div className="hero-affiliations">
            {personal_info.current_institutions.map((inst, idx) => (
              <div className="affiliation-badge" key={idx}>
                {inst.logo ? (
                  <span className="inst-logo-badge">
                    <img src={inst.logo} alt={inst.name} className="inst-logo-img" />
                  </span>
                ) : (
                  <span>🌱</span>
                )}
                <span><strong>{inst.name}</strong> • {inst.role}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#publications" className="btn-primary">
              <span>{ui.hero.btnPublications}</span>
              <span>↓</span>
            </a>
            <a href="#research" className="btn-secondary">
              <span>{ui.hero.btnResearch}</span>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>{ui.hero.btnContact}</span>
            </a>
          </div>

          <div className="hero-contact-strip">
            <span
              className="contact-pill"
              onClick={() => copyToClipboard(personal_info.email, ui.contact.primaryEmail)}
              title={ui.hero.copyEmailTitle}
            >
              ✉ {personal_info.email}
            </span>
            <span
              className="contact-pill"
              onClick={() => copyToClipboard(personal_info.phone_japan, ui.contact.phoneJapan)}
              title={ui.hero.copyJapanPhoneTitle}
            >
              🇯🇵 {personal_info.phone_japan}
            </span>
            <span
              className="contact-pill"
              onClick={() => copyToClipboard(personal_info.phone_india, ui.contact.phoneIndia)}
              title={ui.hero.copyIndiaPhoneTitle}
            >
              🇮🇳 {personal_info.phone_india}
            </span>
            <span className="contact-pill">
              📍 {personal_info.location}
            </span>
          </div>
        </div>
      </section>

      {/* About Summary Highlight */}
      <section className="section section-alt" id="about">
        <div className="section-header">
          <span className="section-tag">{ui.about.sectionTag}</span>
          <h2 className="section-title">{ui.about.sectionTitle}</h2>
          <p className="section-desc">
            {ui.about.sectionDesc}
          </p>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="edu-degree">{ui.about.card1Title}</div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              {ui.about.card1Desc}
            </p>
          </div>
          <div className="education-card">
            <div className="edu-degree">{ui.about.card2Title}</div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              {ui.about.card2Desc}
            </p>
          </div>
          <div className="education-card">
            <div className="edu-degree">{ui.about.card3Title}</div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              {ui.about.card3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="section-header">
          <span className="section-tag">{ui.education.sectionTag}</span>
          <h2 className="section-title">{ui.education.sectionTitle}</h2>
          <p className="section-desc">
            {ui.education.sectionDesc}
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-inst-row">
                    {edu.logo && (
                      <span className="inst-logo-badge edu-logo-badge">
                        <img src={edu.logo} alt={edu.institution} className="inst-logo-img" />
                      </span>
                    )}
                    <span className="edu-institution">{edu.institution}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{edu.location}</div>
                </div>
                <span className="edu-period">{edu.start_date} – {edu.end_date}</span>
              </div>

              {edu.gpa && (
                <div>
                  <span className="edu-score-badge">{ui.education.distinctionLabel} {edu.gpa}</span>
                </div>
              )}

              {edu.thesis && (
                <div className="edu-thesis-box">
                  <div className="edu-thesis-title">{ui.education.thesisPrefix} "{edu.thesis.title}"</div>
                  <div className="edu-thesis-desc">
                    <strong>{edu.thesis.lab}</strong> ({edu.thesis.period})<br />
                    {edu.thesis.description}
                  </div>
                </div>
              )}

              {edu.courses && edu.courses.length > 0 && (
                <div className="edu-tags">
                  {edu.courses.map((course, i) => (
                    <span className="edu-tag" key={i}>{course}</span>
                  ))}
                </div>
              )}

              {edu.highlights && (
                <ul style={{ listStyle: 'none', marginTop: '1rem', paddingLeft: '0' }}>
                  {edu.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-sub)', marginBottom: '0.35rem', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--emerald-400)' }}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Research & Academic Experience */}
      <section className="section section-alt" id="research">
        <div className="section-header">
          <span className="section-tag">{ui.research.sectionTag}</span>
          <h2 className="section-title">{ui.research.sectionTitle}</h2>
          <p className="section-desc">
            {ui.research.sectionDesc}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-tab ${activeCategoryKey === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategoryKey(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="research-grid">
          {filteredResearch.map((item, index) => (
            <div className="research-card" key={index}>
              <div className="research-meta">
                <span className="research-category">{item.category}</span>
                <span className="research-period">{item.period}</span>
              </div>
              <h3 className="research-title">{item.title}</h3>
              <div className="research-org-line">
                {item.logo && (
                  <span className="inst-logo-badge research-logo-badge">
                    <img src={item.logo} alt={item.organization} className="inst-logo-img" />
                  </span>
                )}
                <span>📍 {item.organization} • {item.location}</span>
              </div>
              <p className="research-desc">{item.description}</p>
              
              <div className="skills-pill-group">
                {item.skills_used.map((skill, sIdx) => (
                  <span className="skill-pill" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="section" id="publications">
        <div className="section-header">
          <span className="section-tag">{ui.publications.sectionTag}</span>
          <h2 className="section-title">{ui.publications.sectionTitle}</h2>
          <p className="section-desc">
            {ui.publications.sectionDesc}
          </p>
        </div>

        <div className="publications-list">
          {publications.map((pub, idx) => (
            <div className="pub-card" key={idx}>
              <div className="pub-top">
                <span className="pub-type-badge">{pub.type}</span>
                <span className="pub-year">{pub.year}</span>
              </div>

              <h3 className="pub-title">{pub.title}</h3>

              <div className="pub-authors">
                {pub.authors.split('Parneel').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong>Parneel</strong>}
                  </span>
                ))}
              </div>

              <div className="pub-journal">
                {pub.journal} {pub.volume && `(${pub.volume})`} {pub.issue && `, ${pub.issue}`} {pub.pages && `, ${pub.pages}`}
              </div>

              <p className="pub-desc">{pub.description}</p>

              <div className="skills-pill-group" style={{ marginBottom: '1.2rem' }}>
                {pub.tags.map((tag, tIdx) => (
                  <span className="skill-pill" key={tIdx}>{tag}</span>
                ))}
              </div>

              <div className="pub-actions">
                {pub.doi && (
                  <a href={pub.doi} target="_blank" rel="noreferrer" className="btn-doi">
                    <span>{ui.publications.btnDoi}</span>
                    <span>↗</span>
                  </a>
                )}
                <button
                  type="button"
                  className="btn-copy-cite"
                  onClick={() => copyToClipboard(pub.citation, "Citation")}
                >
                  <span>{ui.publications.btnCopyCite}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Achievements & Research Grants */}
      <section className="section section-alt" id="grants">
        <div className="section-header">
          <span className="section-tag">{ui.grants.sectionTag}</span>
          <h2 className="section-title">{ui.grants.sectionTitle}</h2>
          <p className="section-desc">
            {ui.grants.sectionDesc}
          </p>
        </div>

        <div className="grants-grid">
          {academic_achievements.map((grant, idx) => (
            <div className={`grant-card ${idx === 0 ? 'featured' : ''}`} key={idx}>
              <div className="grant-amount">{grant.amount}</div>
              <h3 className="grant-title">{grant.title}</h3>
              <div className="grant-issuer">
                🏛 {grant.issuer} • <span style={{ color: 'var(--emerald-400)' }}>{grant.period}</span>
              </div>
              <p className="grant-desc">{grant.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical & Scientific Skills */}
      <section className="section" id="skills">
        <div className="section-header">
          <span className="section-tag">{ui.skills.sectionTag}</span>
          <h2 className="section-title">{ui.skills.sectionTitle}</h2>
          <p className="section-desc">
            {ui.skills.sectionDesc}
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div className="skill-category-card" key={idx}>
              <h3 className="skill-cat-title">
                <span className="skill-cat-icon">🌱</span>
                <span>{skillGroup.category}</span>
              </h3>
              <div className="skill-items-list">
                {skillGroup.items.map((item, i) => (
                  <span className="skill-badge" key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Breakdown */}
        <div className="languages-box">
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
            {ui.skills.langTitle}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {ui.skills.langDesc}
          </p>

          <div className="languages-grid">
            {languages.map((langItem, lIdx) => (
              <div className="lang-item" key={lIdx}>
                <div className="lang-name">{langItem.name}</div>
                <div className="lang-level">{langItem.level}</div>
                <div className="lang-badges">
                  {langItem.badges.map((b, bIdx) => (
                    <span className="lang-badge-tag" key={bIdx}>• {b}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Experience & Leadership */}
      <section className="section section-alt" id="leadership">
        <div className="section-header">
          <span className="section-tag">{ui.leadership.sectionTag}</span>
          <h2 className="section-title">{ui.leadership.sectionTitle}</h2>
          <p className="section-desc">
            {ui.leadership.sectionDesc}
          </p>
        </div>

        <div className="other-exp-grid">
          {other_experience.map((exp, idx) => (
            <div className="other-exp-card" key={idx}>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 600, marginBottom: '0.4rem' }}>
                {exp.period} • {exp.location}
              </div>
              <h3 className="other-exp-role">{exp.role}</h3>
              <div className="other-exp-org">
                {exp.logo && (
                  <span className="inst-logo-badge other-exp-logo-badge">
                    <img src={exp.logo} alt={exp.organization} className="inst-logo-img" />
                  </span>
                )}
                <span>{exp.organization}</span>
              </div>
              <p className="other-exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <span className="section-tag">{ui.contact.sectionTag}</span>
          <h2 className="section-title">{ui.contact.sectionTitle}</h2>
          <p className="section-desc">
            {ui.contact.sectionDesc}
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-card-group">
            {/* Primary Email */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">✉</div>
                <div>
                  <div className="contact-label">{ui.contact.primaryEmail}</div>
                  <div className="contact-val">{personal_info.email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`mailto:${personal_info.email}`} className="btn-icon-action">
                  {ui.contact.btnEmail}
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.email, ui.contact.primaryEmail)}
                >
                  {ui.contact.btnCopy}
                </button>
              </div>
            </div>

            {/* University Email */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">🏛</div>
                <div>
                  <div className="contact-label">{ui.contact.univEmail}</div>
                  <div className="contact-val">{personal_info.university_email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`mailto:${personal_info.university_email}`} className="btn-icon-action">
                  {ui.contact.btnEmail}
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.university_email, ui.contact.univEmail)}
                >
                  {ui.contact.btnCopy}
                </button>
              </div>
            </div>

            {/* Japan Phone */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">🇯🇵</div>
                <div>
                  <div className="contact-label">{ui.contact.phoneJapan}</div>
                  <div className="contact-val">{personal_info.phone_japan}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`tel:${personal_info.phone_japan}`} className="btn-icon-action">
                  {ui.contact.btnCall}
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.phone_japan, ui.contact.phoneJapan)}
                >
                  {ui.contact.btnCopy}
                </button>
              </div>
            </div>

            {/* India Phone */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">🇮🇳</div>
                <div>
                  <div className="contact-label">{ui.contact.phoneIndia}</div>
                  <div className="contact-val">{personal_info.phone_india}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`tel:${personal_info.phone_india}`} className="btn-icon-action">
                  {ui.contact.btnCall}
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.phone_india, ui.contact.phoneIndia)}
                >
                  {ui.contact.btnCopy}
                </button>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '2.5rem', backdropFilter: 'blur(12px)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem' }}>
              {ui.contact.baseTitle}
            </h3>
            <p style={{ color: 'var(--text-sub)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {ui.contact.baseDesc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                📍 <strong>{ui.contact.locationLabel}</strong> {personal_info.location}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                🎓 <strong>{ui.contact.degreesLabel}</strong> {ui.contact.degreesVal}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                💼{' '}
                <a
                  href={personal_info.linkedin.startsWith('http') ? personal_info.linkedin : `https://${personal_info.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--emerald-400)', textDecoration: 'underline', fontWeight: 600 }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-nav">
          <a href="#home">{ui.nav.home}</a>
          <a href="#about">{ui.nav.about}</a>
          <a href="#education">{ui.nav.education}</a>
          <a href="#research">{ui.nav.research}</a>
          <a href="#publications">{ui.nav.publications}</a>
          <a href="#grants">{ui.nav.grants}</a>
          <a href="#skills">{ui.nav.skills}</a>
          <a href="#contact">{ui.nav.contact}</a>
        </div>
        <div className="footer-affiliations">
          <span className="inst-logo-badge footer-logo">
            <img src="/tokyo-nodai-logo.svg" alt="Tokyo University of Agriculture" className="inst-logo-img" />
          </span>
          <span className="inst-logo-badge footer-logo">
            <img src="/wur-logo.svg" alt="Wageningen University & Research" className="inst-logo-img" />
          </span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {personal_info.full_name} • {ui.footer.copySuffix}
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {ui.footer.subText}
        </p>
      </footer>
    </>
  )
}

export default App
