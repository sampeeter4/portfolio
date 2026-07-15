import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';

function App() {
  const [persona, setPersona] = useState('dev'); // 'dev' or 'qa'
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Update theme class on HTML body element when persona changes
  useEffect(() => {
    const body = document.body;
    if (persona === 'dev') {
      body.classList.remove('theme-qa');
      body.classList.add('theme-dev');
    } else {
      body.classList.remove('theme-dev');
      body.classList.add('theme-qa');
    }
  }, [persona]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target); // Animate once
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projectsData = [
    {
      title: 'AI Healthcare System - Personalized Treatment Plan Generator',
      tags: ['Python', 'FastAPI', 'Oracle', 'Machine Learning'],
      devOverview: 'An AI-powered healthcare web application built to generate data-driven treatment plans. Features clean architecture with FastAPI and robust relational mapping for medical history.',
      devHighlights: [
        'Designed and developed 15+ RESTful API endpoints for patient data intake and dynamic prescription modeling.',
        'Created optimized relational databases with 5+ tables in Oracle database containing indexes, joins, and secure stored procedures.',
        'Integrated Machine Learning recommendations with customized prompt engineering for healthcare prediction accuracy.',
        'Engineered responsive API request-response pipelines with fast sub-100ms response latencies.'
      ],
      qaOverview: 'A comprehensive quality assurance cycle designed to test healthcare data validity and REST API safety thresholds.',
      testCasesCount: 40,
      bugsFiledCount: 15,
      qaHighlights: [
        'Validated 50+ REST API requests and responses using Postman for JSON schemas, status codes, and security tokens.',
        'Authored and executed 40+ manual functional and sanity test cases mapping out the patient registration workflow.',
        'Logged and tracked 15+ critical defect reports in JIRA related to patient record validation and database connection timeouts.',
        'Performed backend database verification testing, asserting Oracle database tables update operations and rollback checks.'
      ]
    },
    {
      title: 'NSS Management System - Volunteer & Event Management Portal',
      tags: ['Django', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      devOverview: 'A full-stack event management system facilitating registration, hours tracking, and volunteering metrics for the National Service Scheme (NSS).',
      devHighlights: [
        'Built dynamic server-side render templates with Django and Bootstrap integration.',
        'Implemented secure user session authentication and role-based permissions (Volunteers vs. Administrators).',
        'Designed relational MySQL database with 6+ core tables, utilizing Django ORM for optimal data integrity.',
        'Integrated dynamic attendance-marking sheets and event logs exporting tools.'
      ],
      qaOverview: 'End-to-end functionality verification testing of volunteer database integrity and state-based page access constraints.',
      testCasesCount: 60,
      bugsFiledCount: 10,
      qaHighlights: [
        'Created and executed 60+ detailed functional test cases covering volunteer signups and event status transitions.',
        'Asserted SQL database states to verify that role permissions successfully blocked standard volunteers from admin endpoints.',
        'Documented 10+ defects related to form input validation, session timeout issues, and UI responsiveness bugs.',
        'Executed smoke and sanity testing suites on new code integrations to ensure system stability.'
      ]
    },
    {
      title: 'Stock Market AI Assistant - Trading Recommendation Tool',
      tags: ['Python', 'SQL', 'REST API', 'Machine Learning'],
      devOverview: 'An intelligent market scanner calculating technical stock metrics and producing trading signals based on live market conditions.',
      devHighlights: [
        'Integrated real-time market REST APIs to dynamically fetch prices of 80+ listed NSE stocks.',
        'Developed algorithms for technical analysis indicators including EMA, VWAP, RSI, MACD, and ATR stop-loss levels.',
        'Built an automated market scanner emitting real-time trading signals and notifications.',
        'Structured database pipelines storing historic stock bars for trend analysis.'
      ],
      qaOverview: 'Focused API performance metrics testing and pipeline telemetry validations to check stock calculation accuracy.',
      testCasesCount: 30,
      bugsFiledCount: 8,
      qaHighlights: [
        'Validated 30+ market API responses to ensure structural integrity and correct datatype payloads.',
        'Identified and cataloged 8+ data inconsistencies, including API null value exceptions during market pre-open hours.',
        'Tested SQL database write speed pipelines to verify calculation algorithms receive data feeds with minimal latency.',
        'Designed negative testing scenarios simulating market API downtime and verified proper graceful error handling.'
      ]
    }
  ];

  const experienceData = [
    {
      role: 'Software Testing Trainee',
      company: 'QSpiders, Kochi',
      period: 'Apr 2026 -- Present',
      details: [
        'Gained hands-on experience in manual testing and software quality assurance processes.',
        'Drafted comprehensive test case designs, bug reporting documentation, and database assertions.',
        'Executed manual, functional, regression, smoke, API, and database testing suites.',
        'Practiced Agile/Scrum methodologies, tracking defects and sprint goals closely.'
      ]
    },
    {
      role: 'Python and Machine Learning Intern',
      company: 'Camerin Innovative Solutions',
      period: 'Jan 2026 -- Mar 2026',
      details: [
        'Developed Python-based healthcare software modules using ML models.',
        'Assisted in engineering automated recommendation modules and API routing.',
        'Performed backend endpoint integrations, Postman API testing, debugging, and validation checks.',
        'Collaborated directly with the QA and Dev teams to maintain clean code and release readiness.'
      ]
    },
    {
      role: 'Python Full Stack Development Intern',
      company: 'upGrad',
      period: 'Oct 2023 -- Mar 2024',
      details: [
        'Created responsive full-stack web sites utilizing Python, Django, MySQL, HTML, CSS, JavaScript, and Bootstrap.',
        'Built and documented clean RESTful API structures connecting web frontends to backend logic.',
        'Designed database schemas, executing CRUD operations and indexing queries.',
        'Utilized Git/GitHub for cooperative development within Agile sprints.'
      ]
    }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div>
      {/* Decorative ambient blobs */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#hero" className="logo">
            ⚡SAM<span>PEETER</span>
          </a>
          
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button 
            className="theme-switch-btn"
            onClick={() => setPersona(persona === 'dev' ? 'qa' : 'dev')}
          >
            {persona === 'dev' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="8"></rect>
                  <path d="M12 2v9"></path>
                  <path d="M8 5a4 4 0 0 1 8 0"></path>
                </svg>
                Switch to QA Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Switch to Dev Mode
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-wrapper section">
        <div className="container hero-grid">
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ textTransform: 'uppercase' }}>
                {persona === 'dev' ? '🔧 Developer Mode Active' : '🧪 Tester Mode Active'}
              </span>
            </div>
            
            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="gradient-text">Sam Peeter</span>
            </h1>
            
            <div className="hero-subtitle">
              {persona === 'dev' ? (
                <span>Python Full Stack Developer</span>
              ) : (
                <span>Software Quality Assurance & Tester</span>
              )}
            </div>

            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', color: 'var(--text-secondary)' }}>
              I build robust, scale-ready backend web structures in Python and validate software layers using modern manual and automation testing protocols.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-terminal-container">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Dual Persona Switcher Dashboard */}
      <section id="about" className="section reveal" style={{ background: 'rgba(3, 5, 10, 0.4)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Professional Summary</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Toggle the core filter below to explore either side of my development and testing expertise.
            </p>
          </div>

          <div className="persona-hero-selector">
            <div className="persona-selector-container">
              <button 
                className={`persona-option ${persona === 'dev' ? 'active dev' : ''}`}
                onClick={() => setPersona('dev')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Developer Profile
              </button>
              <button 
                className={`persona-option ${persona === 'qa' ? 'active qa' : ''}`}
                onClick={() => setPersona('qa')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                  <rect x="3" y="11" width="18" height="11" rx="8"></rect>
                  <path d="M12 2v9"></path>
                  <path d="M8 5a4 4 0 0 1 8 0"></path>
                </svg>
                QA Specialist Profile
              </button>
            </div>
          </div>

          {persona === 'dev' ? (
            <div className="glass-card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dev-color)' }}>Building Robust, Scalable Backend Architectures</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  As a Python Developer, I focus on building stable and highly performant backend architectures using modern frameworks like <strong>FastAPI</strong> and <strong>Django</strong>. I structure secure REST APIs, model relational database tables using <strong>MySQL</strong> and <strong>Oracle</strong>, and build responsive frontend user interfaces in <strong>React</strong>.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--dev-color)', fontFamily: 'var(--font-mono)' }}>FastAPI & Django</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Creating clean, testable, and optimized API endpoints and database logic.</p>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--dev-color)', fontFamily: 'var(--font-mono)' }}>Database & ORM</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Configuring secure SQL queries, schema tables, joins, and migration histories.</p>
                  </div>
                </div>
              </div>
              <div style={{ background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)', borderRadius: '12px', padding: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', color: 'var(--dev-color)', fontSize: '0.9rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dev Competencies</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚡ REST API Design</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🛡️ Authentication & Middleware</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🤖 ML Model Implementations</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📦 Git & Agile Workflows</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--qa-color)' }}>Ensuring Exceptional Software Quality & Stability</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  As a Software QA Enthusiast, I am committed to delivering high-quality, bug-free applications. I formulate rigorous test case parameters, design test scenarios, monitor defects across their lifecycle, and conduct thorough functional, regression, integration, and performance checks.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--qa-color)', fontFamily: 'var(--font-mono)' }}>Manual & Automation</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Building robust web-based test suites using Selenium and Postman.</p>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--qa-color)', fontFamily: 'var(--font-mono)' }}>SDLC / STLC Process</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Incorporating testing practices from the initial specifications through deployment.</p>
                  </div>
                </div>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.02)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '12px', padding: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', color: 'var(--qa-color)', fontSize: '0.9rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Testing Competencies</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🐞 Bug Lifecycle Tracking</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📡 REST API Validation</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🗄️ SQL Schema Assertions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🌀 JIRA & Defect Management</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="section reveal">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Skills Matrix</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              My technical expertise across developer and tester stacks.
            </p>
          </div>
          <SkillsSection />
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="section reveal" style={{ background: 'rgba(3, 5, 10, 0.4)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Featured Projects</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Click on each project to toggle between developer implementation specifics and QA/testing results.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            {projectsData.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section reveal">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Work & Education</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              A chronology of my professional experience, academic background, and technical training.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '4rem' }}>
            {/* Work Timeline */}
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Professional Experience
              </h3>
              
              <div className="timeline">
                {experienceData.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{item.period}</div>
                    <div className="glass-card" style={{ padding: '1.75rem' }}>
                      <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{item.role}</h4>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', fontWeight: 700 }}>
                        {item.company}
                      </div>
                      <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div>
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                  Education
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-color)' }}>
                    <div className="timeline-date">Aug 2024 -- Present</div>
                    <h4 style={{ fontSize: '1rem' }}>Master of Computer Applications (MCA)</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>MACFAST College, Tiruvalla (MG University)</p>
                  </div>
                  
                  <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-color)' }}>
                    <div className="timeline-date">Jun 2023 -- Dec 2023</div>
                    <h4 style={{ fontSize: '1rem' }}>Python Full Stack Developer Training</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>UpGrad Golden Gate University</p>
                  </div>

                  <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-color)' }}>
                    <div className="timeline-date">Aug 2020 -- Mar 2023</div>
                    <h4 style={{ fontSize: '1rem' }}>Bachelor of Computer Applications (BCA)</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mar Chrysostom College, Adoor (Kerala University)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  Certifications
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="glass-card" style={{ padding: '1.15rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem' }}>Python Full Stack Development</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>UpGrad Golden Gate University</p>
                    </div>
                    <span className="badge">2023</span>
                  </div>
                  
                  <div className="glass-card" style={{ padding: '1.15rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem' }}>Full Stack Development (MERN)</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Capital Infotech, Thiruvalla</p>
                    </div>
                    <span className="badge">2024</span>
                  </div>

                  <div className="glass-card" style={{ padding: '1.15rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem' }}>Manual & Basic Automation Testing</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>QSpiders, Kochi</p>
                    </div>
                    <span className="badge">Active</span>
                  </div>

                  <div className="glass-card" style={{ padding: '1.15rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem' }}>Python and Machine Learning</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Camerin Innovative Solutions</p>
                    </div>
                    <span className="badge">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section reveal" style={{ background: 'rgba(3, 5, 10, 0.4)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Get in Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Have an opening, a project idea, or just want to chat? Send me a message below.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Details</h3>
              
              <div className="contact-method">
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Email</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>sampeter9977@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Phone</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>+1 702-558-4735</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Location</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>Pathanamthitta, Kerala, India</p>
                </div>
              </div>
            </div>

            <div>
              {formSubmitted ? (
                <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', border: '1px solid #10B981', background: 'rgba(16, 185, 129, 0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', fontSize: '1.5rem' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>Message Transmitted!</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. The data packets have been successfully routed. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="glass-card" style={{ padding: '2rem' }} onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      className="form-textarea"
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Your message details..."
                    ></textarea>
                  </div>

                  <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message Packet
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-socials">
            <a href="https://github.com/sampeeter4" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sam-peeter-b133b0292" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Designed & Engineered by Sam Peeter © {new Date().getFullYear()}. Powered by React + Vite.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
