import { useState, useEffect } from 'react'
import profileData from './data/master_profile.json'
import './index.css'

function App() {
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

  const [activeTab, setActiveTab] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = `${personal_info.full_name} | MSc Plant Sciences & Horticulture Portfolio`;
  }, [personal_info]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copied to clipboard!`);
      }).catch(() => {
        showToast(`Copied: ${text}`);
      });
    } else {
      showToast(`Copied: ${text}`);
    }
  };

  const filterCategories = ['All', 'Field Research & Sustainability', 'Academic Teaching & Lab Leadership', 'International Fellowship'];

  const filteredResearch = activeTab === 'All'
    ? research_experience
    : research_experience.filter(item => item.category === activeTab);

  return (
    <>
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
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#research" className="nav-link">Research</a></li>
          <li><a href="#publications" className="nav-link">Publications</a></li>
          <li><a href="#grants" className="nav-link">Grants</a></li>
          <li><a href="#skills" className="nav-link">Expertise</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg-container">
          <img
            src="/botanical-hero.jpg"
            alt="Botanical Plant Sciences Background"
            className="hero-bg-img"
            onError={(e) => {
              // fallback if image takes time to load
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-pulse"></span>
            <span>Plant Physiology & Sustainable Horticulture Researcher</span>
          </div>

          <h1 className="hero-title">{personal_info.full_name}</h1>
          <h2 className="hero-subtitle">{personal_info.headline}</h2>
          
          <p className="hero-bio">{personal_info.bio}</p>

          <div className="hero-affiliations">
            {personal_info.current_institutions.map((inst, idx) => (
              <div className="affiliation-badge" key={idx}>
                <span>🌱</span>
                <span><strong>{inst.name}</strong> • {inst.role}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#publications" className="btn-primary">
              <span>View Publications</span>
              <span>↓</span>
            </a>
            <a href="#research" className="btn-secondary">
              <span>Explore Research</span>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="hero-contact-strip">
            <span
              className="contact-pill"
              onClick={() => copyToClipboard(personal_info.email, "Email")}
              title="Click to copy email"
            >
              ✉ {personal_info.email}
            </span>
            <span
              className="contact-pill"
              onClick={() => copyToClipboard(personal_info.phone_japan, "Phone (Japan)")}
              title="Click to copy Japan phone"
            >
              🇯🇵 {personal_info.phone_japan}
            </span>
            <span
              className="contact-pill"
              onClick={() => copyToClipboard(personal_info.phone_india, "Phone (India)")}
              title="Click to copy India phone"
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
          <span className="section-tag">Scientific Background</span>
          <h2 className="section-title">Research Philosophy & Focus</h2>
          <p className="section-desc">
            Bridging fundamental plant photobiology with practical seed enhancement protocols to foster resilient crop production facing global climate challenges.
          </p>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="edu-degree">🔬 Plant Physiology & Photoreceptors</div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              Investigating the role of <strong>cryptochrome blue light photoreceptors</strong> in plant development, seed vigor, and morphology in <em>Arabidopsis thaliana</em> at Wageningen University & Research.
            </p>
          </div>
          <div className="education-card">
            <div className="edu-degree">🌾 Seed Priming & Direct Sowing</div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              Co-authored peer-reviewed research on restoring root vitality in tomato crops under salt stress and optimizing iron-coated rice seed performance for sustainable direct sowing.
            </p>
          </div>
          <div className="education-card">
            <div className="edu-degree">🌍 Global Collaborative Fieldwork</div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              Experienced across international research environments spanning <strong>Japan, India, Taiwan, and the Netherlands</strong>, combining rigorous laboratory analysis with practical agronomy.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="section-header">
          <span className="section-tag">Academic Trajectory</span>
          <h2 className="section-title">Education & Academic Training</h2>
          <p className="section-desc">
            Specialized training in international horticultural sciences, seed technology, and environmental plant biology across premier agricultural institutions.
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">{edu.institution}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.location}</div>
                </div>
                <span className="edu-period">{edu.start_date} – {edu.end_date}</span>
              </div>

              {edu.gpa && (
                <div>
                  <span className="edu-score-badge">★ Distinction: {edu.gpa}</span>
                </div>
              )}

              {edu.thesis && (
                <div className="edu-thesis-box">
                  <div className="edu-thesis-title">Master's Thesis: "{edu.thesis.title}"</div>
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
          <span className="section-tag">Hands-on Experience</span>
          <h2 className="section-title">Research Projects & Academic Leadership</h2>
          <p className="section-desc">
            Applied agronomic investigations, precision crop modeling, laboratory teaching, and international agricultural leadership.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
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
              <div className="research-org">📍 {item.organization} • {item.location}</div>
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
          <span className="section-tag">Scientific Output</span>
          <h2 className="section-title">Peer-Reviewed Publications & Articles</h2>
          <p className="section-desc">
            Original research contributions in seed priming, abiotic stress resilience, and sustainable agricultural technologies.
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
                    <span>View Article (DOI)</span>
                    <span>↗</span>
                  </a>
                )}
                <button
                  type="button"
                  className="btn-copy-cite"
                  onClick={() => copyToClipboard(pub.citation, "Citation")}
                >
                  <span>📋 Copy Citation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Achievements & Research Grants */}
      <section className="section section-alt" id="grants">
        <div className="section-header">
          <span className="section-tag">Recognition & Merit</span>
          <h2 className="section-title">Research Grants & Academic Scholarships</h2>
          <p className="section-desc">
            Competitive research funding and academic excellence awards honoring contributions to horticultural sciences.
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
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Laboratory, Agronomic & Analytical Expertise</h2>
          <p className="section-desc">
            Hands-on technical competencies in physiological instrumentation, digital microscopy, experimental design, and data modeling.
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
            🌐 Multilingual Proficiencies & Certifications
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Strong multilingual capability enabling seamless cross-border research collaborations and international communication.
          </p>

          <div className="languages-grid">
            {languages.map((lang, lIdx) => (
              <div className="lang-item" key={lIdx}>
                <div className="lang-name">{lang.name}</div>
                <div className="lang-level">{lang.level}</div>
                <div className="lang-badges">
                  {lang.badges.map((b, bIdx) => (
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
          <span className="section-tag">Professional Adaptability</span>
          <h2 className="section-title">Community Extension & Work Experience</h2>
          <p className="section-desc">
            Agricultural extension demonstrations with farmers, bilingual Tokyo retail management, and international promotional collaboration.
          </p>
        </div>

        <div className="other-exp-grid">
          {other_experience.map((exp, idx) => (
            <div className="other-exp-card" key={idx}>
              <div style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', fontWeight: 600, marginBottom: '0.4rem' }}>
                {exp.period} • {exp.location}
              </div>
              <h3 className="other-exp-role">{exp.role}</h3>
              <div className="other-exp-org">{exp.organization}</div>
              <p className="other-exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Contact & Scientific Inquiries</h2>
          <p className="section-desc">
            Interested in discussing research collaborations, seed physiology inquiries, or agricultural innovation? Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-card-group">
            {/* Primary Email */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">✉</div>
                <div>
                  <div className="contact-label">Primary Email</div>
                  <div className="contact-val">{personal_info.email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`mailto:${personal_info.email}`} className="btn-icon-action">
                  Email
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.email, "Primary Email")}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* University Email */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">🏛</div>
                <div>
                  <div className="contact-label">University Email (Tokyo NODAI)</div>
                  <div className="contact-val">{personal_info.university_email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`mailto:${personal_info.university_email}`} className="btn-icon-action">
                  Email
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.university_email, "University Email")}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Japan Phone */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">🇯🇵</div>
                <div>
                  <div className="contact-label">Phone (Japan)</div>
                  <div className="contact-val">{personal_info.phone_japan}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`tel:${personal_info.phone_japan}`} className="btn-icon-action">
                  Call
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.phone_japan, "Japan Phone")}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* India Phone */}
            <div className="contact-interactive-card">
              <div className="contact-info-left">
                <div className="contact-icon-bubble">🇮🇳</div>
                <div>
                  <div className="contact-label">Phone (India)</div>
                  <div className="contact-val">{personal_info.phone_india}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={`tel:${personal_info.phone_india}`} className="btn-icon-action">
                  Call
                </a>
                <button
                  type="button"
                  className="btn-icon-action"
                  onClick={() => copyToClipboard(personal_info.phone_india, "India Phone")}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '2.5rem', backdropFilter: 'blur(12px)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem' }}>
              Current Base of Research
            </h3>
            <p style={{ color: 'var(--text-sub)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
              Currently conducting graduate studies and research across <strong>Tokyo University of Agriculture (Setagaya, Tokyo, Japan)</strong> and <strong>Wageningen University & Research (Netherlands)</strong>. Open to academic exchange, seed industry research collaborations, and conference speaking engagements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                📍 <strong>Location:</strong> {personal_info.location}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                🎓 <strong>Degrees:</strong> BSc (Tokyo NODAI), MSc Candidate (Tokyo NODAI & WUR Exchange)
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                💼 <strong>LinkedIn:</strong>{' '}
                <a
                  href={personal_info.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--emerald-400)', textDecoration: 'underline' }}
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#grants">Grants</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {personal_info.full_name} • MSc Plant Sciences (Horticulture)
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Tokyo University of Agriculture & Wageningen University & Research
        </p>
      </footer>
    </>
  )
}

export default App
