// Portfolio State
let currentPersona = 'dev'; // 'dev' or 'qa'
let terminalHistory = [
  { text: 'System initialized. Welcome to Sam Peeter\'s Command Console.', type: 'info' },
  { text: 'Type "help" to view a list of available commands.', type: 'muted' }
];

// Technical Skills Data
const skillsData = [
  {
    title: 'Programming Languages',
    type: 'dev',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Core Java', icon: '☕' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'SQL', icon: '🗄️' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    type: 'dev',
    skills: [
      { name: 'Django', icon: '🦄' },
      { name: 'FastAPI', icon: '🚀' },
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'Bootstrap', icon: '🥾' }
    ]
  },
  {
    title: 'Web Technologies',
    type: 'dev',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'REST API', icon: '🔗' }
    ]
  },
  {
    title: 'Databases',
    type: 'dev',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'Oracle', icon: '🔴' },
      { name: 'SQLite', icon: '🪶' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'JDBC', icon: '🔌' }
    ]
  },
  {
    title: 'Testing',
    type: 'qa',
    skills: [
      { name: 'Manual Testing', icon: '📝' },
      { name: 'Functional Testing', icon: '⚙️' },
      { name: 'Regression Testing', icon: '🔄' },
      { name: 'Smoke Testing', icon: '💨' },
      { name: 'API Testing', icon: '📡' },
      { name: 'Database Testing', icon: '🛡️' },
      { name: 'User Acceptance Testing (UAT)', icon: '🤝' }
    ]
  },
  {
    title: 'Test Management',
    type: 'qa',
    skills: [
      { name: 'Test Case Design', icon: '✏️' },
      { name: 'Test Scenarios', icon: '🗺️' },
      { name: 'Defect Life Cycle', icon: '🔄' },
      { name: 'Bug Reporting', icon: '🐞' },
      { name: 'Defect Tracking', icon: '🎯' },
      { name: 'JIRA', icon: '🌀' }
    ]
  },
  {
    title: 'ML / AI',
    type: 'all',
    skills: [
      { name: 'Machine Learning', icon: '🧠' },
      { name: 'Prompt Engineering', icon: '✍️' },
      { name: 'API Integration', icon: '🔗' }
    ]
  },
  {
    title: 'Tools & Platforms',
    type: 'all',
    skills: [
      { name: 'Selenium', icon: '🤖' },
      { name: 'Postman', icon: '📯' },
      { name: 'Git', icon: '🐙' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' }
    ]
  },
  {
    title: 'Methodologies',
    type: 'all',
    skills: [
      { name: 'SDLC', icon: '🔄' },
      { name: 'STLC', icon: '🧪' },
      { name: 'Agile', icon: '🏃' },
      { name: 'Scrum', icon: '👥' }
    ]
  }
];

// Project Data
const projectsData = [
  {
    id: 'healthcare',
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
      'Performed database verification testing, asserting Oracle database tables update operations and rollback checks.'
    ]
  },
  {
    id: 'nss',
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
    id: 'stockmarket',
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

// DOMContentLoaded Entrypoint
document.addEventListener('DOMContentLoaded', () => {
  // Update diagnostics panel
  try {
    const diagJs = document.getElementById('diag-js-status');
    if (diagJs) diagJs.innerText = 'portfolio.js loaded: Yes';
    
    const diagSkills = document.getElementById('diag-skills-count');
    if (diagSkills) diagSkills.innerText = `skillsData size: ${skillsData.length}`;
  } catch (diagErr) {
    console.error('Diagnostics setup error:', diagErr);
  }

  // Initialize Scroll Reveal Elements
  initScrollReveal();

  // Initialize Persona System
  initPersonaToggle();

  // Initialize Terminal Console
  initTerminal();

  // Render Skills
  renderSkills('all', '');

  // Initialize Skills Filters
  initSkillsFilters();

  // Render Projects
  renderProjects();

  // Initialize Contact Form
  initContactForm();
});

// 1. SCROLL REVEAL OBSERVER
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => observer.observe(el));
}

// 2. DUAL PERSONA SYSTEM
function initPersonaToggle() {
  const toggleBtn = document.getElementById('persona-toggle-btn');
  const devProfileBtn = document.getElementById('dev-profile-btn');
  const qaProfileBtn = document.getElementById('qa-profile-btn');
  
  // Apply persona class to body and refresh dashboard texts
  const applyPersona = (persona) => {
    currentPersona = persona;
    const body = document.body;
    
    if (persona === 'dev') {
      body.classList.remove('theme-qa');
      body.classList.add('theme-dev');
      
      // Update toggle button text
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="8"></rect>
          <path d="M12 2v9"></path>
          <path d="M8 5a4 4 0 0 1 8 0"></path>
        </svg>
        Switch to QA Mode
      `;
      
      // Update Selector buttons state
      devProfileBtn.classList.add('active', 'dev');
      qaProfileBtn.classList.remove('active', 'qa');
      
      // Update Dashboard Content
      document.getElementById('about-dashboard-content').innerHTML = `
        <div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--dev-color)">Building Robust, Scalable Backend Architectures</h3>
          <p style="margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-secondary)">
            As a Python Developer, I focus on building stable and highly performant backend architectures using modern frameworks like <strong>FastAPI</strong> and <strong>Django</strong>. I structure secure REST APIs, model relational database tables using <strong>MySQL</strong> and <strong>Oracle</strong>, and build responsive frontend user interfaces in <strong>React</strong>.
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem">
            <div style="padding: 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--card-border); border-radius: 10px">
              <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--dev-color); font-family: var(--font-mono)">FastAPI & Django</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary)">Creating clean, testable, and optimized API endpoints and database logic.</p>
            </div>
            <div style="padding: 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--card-border); border-radius: 10px">
              <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--dev-color); font-family: var(--font-mono)">Database & ORM</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary)">Configuring secure SQL queries, schema tables, joins, and migration histories.</p>
            </div>
          </div>
        </div>
        <div style="background: rgba(0, 242, 254, 0.02); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 12px; padding: 2rem">
          <h4 style="font-family: var(--font-mono); color: var(--dev-color); font-size: 0.9rem; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em">Dev Competencies</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.9rem">
            <li style="display: flex; align-items: center; gap: 0.5rem">⚡ REST API Design</li>
            <li style="display: flex; align-items: center; gap: 0.5rem">🛡️ Authentication & Middleware</li>
            <li style="display: flex; align-items: center; gap: 0.5rem">🤖 ML Model Implementations</li>
            <li style="display: flex; align-items: center; gap: 0.5rem">📦 Git & Agile Workflows</li>
          </ul>
        </div>
      `;
      
      // Update Hero badge and subtitle
      document.getElementById('hero-badge-text').innerText = '🔧 Developer Mode Active';
      document.getElementById('hero-role-text').innerText = 'Python Full Stack Developer';
      
    } else {
      body.classList.remove('theme-dev');
      body.classList.add('theme-qa');
      
      // Update toggle button text
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        Switch to Dev Mode
      `;
      
      // Update Selector buttons state
      devProfileBtn.classList.remove('active', 'dev');
      qaProfileBtn.classList.add('active', 'qa');
      
      // Update Dashboard Content
      document.getElementById('about-dashboard-content').innerHTML = `
        <div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--qa-color)">Ensuring Exceptional Software Quality & Stability</h3>
          <p style="margin-bottom: 1.5rem; line-height: 1.7; color: var(--text-secondary)">
            As a Software QA Enthusiast, I am committed to delivering high-quality, bug-free applications. I formulate rigorous test case parameters, design test scenarios, monitor defects across their lifecycle, and conduct thorough functional, regression, integration, and performance checks.
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem">
            <div style="padding: 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--card-border); border-radius: 10px">
              <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--qa-color); font-family: var(--font-mono)">Manual & Automation</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary)">Building robust web-based test suites using Selenium and Postman.</p>
            </div>
            <div style="padding: 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--card-border); border-radius: 10px">
              <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--qa-color); font-family: var(--font-mono)">SDLC / STLC Process</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary)">Incorporating testing practices from the initial specifications through deployment.</p>
            </div>
          </div>
        </div>
        <div style="background: rgba(16, 185, 129, 0.02); border: 1px solid rgba(16, 185, 129, 0.1); border-radius: 12px; padding: 2rem">
          <h4 style="font-family: var(--font-mono); color: var(--qa-color); font-size: 0.9rem; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em">Testing Competencies</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.9rem">
            <li style="display: flex; align-items: center; gap: 0.5rem">🐞 Bug Lifecycle Tracking</li>
            <li style="display: flex; align-items: center; gap: 0.5rem">📡 REST API Validation</li>
            <li style="display: flex; align-items: center; gap: 0.5rem">🗄️ SQL Schema Assertions</li>
            <li style="display: flex; align-items: center; gap: 0.5rem">🌀 JIRA & Defect Management</li>
          </ul>
        </div>
      `;
      
      // Update Hero badge and subtitle
      document.getElementById('hero-badge-text').innerText = '🧪 Tester Mode Active';
      document.getElementById('hero-role-text').innerText = 'Software Quality Assurance & Tester';
    }
  };

  // Nav Switcher Action
  toggleBtn.addEventListener('click', () => {
    applyPersona(currentPersona === 'dev' ? 'qa' : 'dev');
  });

  // Selector Tab Actions
  devProfileBtn.addEventListener('click', () => applyPersona('dev'));
  qaProfileBtn.addEventListener('click', () => applyPersona('qa'));

  // Default setup
  applyPersona('dev');
}

// 3. TERMINAL SHELL SIMULATOR
function initTerminal() {
  const inputEl = document.getElementById('terminal-input-box');
  const bodyEl = document.getElementById('terminal-logs-body');

  const commands = {
    help: 'List all available console commands',
    summary: 'Display Sam\'s professional background summary',
    skills: 'Display Sam\'s primary tech skills & tools matrix',
    experience: 'Summarize work experience history',
    projects: 'List built projects and associated tech stacks',
    contact: 'Print direct contact information (Email, GitHub, LinkedIn)',
    'run-tests': 'Execute automated unit & API test simulation suites',
    clear: 'Reset console output log history'
  };

  const writeLine = (text, type = 'text') => {
    let colorHex = 'inherit';
    let isBold = false;
    
    if (type === 'input') { colorHex = '#ec4899'; isBold = true; }
    else if (type === 'error') colorHex = '#ef4444';
    else if (type === 'success') colorHex = '#34d399';
    else if (type === 'info') colorHex = '#22d3ee';
    else if (type === 'muted') colorHex = '#64748b';

    const lineDiv = document.createElement('div');
    lineDiv.style.color = colorHex;
    if (isBold) lineDiv.style.fontWeight = 'bold';
    lineDiv.innerText = text;
    bodyEl.appendChild(lineDiv);
    
    // Auto-scroll
    bodyEl.scrollTop = bodyEl.scrollHeight;
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    writeLine(`sam-peeter-pc:~$ ${cmdStr}`, 'input');

    if (trimmed === 'clear') {
      bodyEl.innerHTML = '';
      inputEl.value = '';
      return;
    }

    if (trimmed === '') {
      inputEl.value = '';
      return;
    }

    switch (trimmed) {
      case 'help':
        writeLine('Available commands:', 'success');
        Object.entries(commands).forEach(([cmd, desc]) => {
          writeLine(`  ${cmd.padEnd(12)} - ${desc}`, 'text');
        });
        break;

      case 'summary':
        writeLine('Detail-oriented Python Full Stack Developer & Software Test Engineer. Experienced in building scalable web apps with Django, FastAPI, React, and testing with Manual & Automation (Selenium, Postman, JIRA). Passionate about combining software development and quality assurance.', 'text');
        break;

      case 'skills':
        writeLine('🚀 Core Technical Skills:', 'success');
        writeLine('  Languages     : Python, JavaScript, Core Java, SQL', 'text');
        writeLine('  Frameworks    : Django, FastAPI, React, Angular, Bootstrap', 'text');
        writeLine('  Testing       : Manual, Functional, Regression, API Testing, Database Testing', 'text');
        writeLine('  Tools         : Selenium, Postman, Git, GitHub, JIRA, VS Code', 'text');
        break;

      case 'experience':
        writeLine('💼 Professional Milestones:', 'success');
        writeLine('  * Software Testing Trainee at QSpiders (2026-Present) | QA, Manual, API & DB Testing', 'text');
        writeLine('  * Python & Machine Learning Intern at Camerin Innovative Solutions (2026) | Healthcare AI integrations', 'text');
        writeLine('  * Python Full Stack Intern at upGrad (2023-2024) | Django, MySQL & APIs', 'text');
        break;

      case 'projects':
        writeLine('🛠️ Highlighted Projects:', 'success');
        writeLine('  1. AI Healthcare System | FastAPI, Machine Learning, Oracle', 'text');
        writeLine('  2. NSS Volunteer Management Portal | Django, MySQL, Bootstrap', 'text');
        writeLine('  3. Stock Market AI Assistant | Python, REST APIs, ML Indicators', 'text');
        writeLine('Tip: Scroll down to the Projects section to toggle between build specs and QA testing details!', 'muted');
        break;

      case 'contact':
        writeLine('📞 Let\'s Connect:', 'success');
        writeLine('  Email    : sampeter9977@gmail.com', 'text');
        writeLine('  Phone    : +1 702-558-4735', 'text');
        writeLine('  Location : Pathanamthitta, Kerala', 'text');
        writeLine('  GitHub   : https://github.com/sampeeter4', 'text');
        writeLine('  LinkedIn : https://www.linkedin.com/in/sam-peeter-b133b0292', 'text');
        break;

      case 'run-tests':
        runMockTests();
        break;

      default:
        writeLine(`bash: command not found: ${trimmed}. Type "help" to see available options.`, 'error');
    }

    inputEl.value = '';
  };

  const runMockTests = () => {
    inputEl.disabled = true;
    writeLine('Initializing testing lifecycle (STLC)...', 'info');
    writeLine('Loading test configurations and test suites...', 'text');

    const stages = [
      { text: '🔍 Executing sanity and smoke checks... SUCCESS', time: 600, type: 'text' },
      { text: '⚙️ Running API Endpoint Validation Tests (FastAPI / Django)...', time: 1300, type: 'text' },
      { text: '   -> GET /api/v1/healthcheck [200 OK] - 12ms', time: 1600, type: 'success' },
      { text: '   -> POST /api/v1/recommendations [200 OK] - 110ms', time: 2000, type: 'success' },
      { text: '   -> GET /api/v1/volunteers/nss [200 OK] - 45ms', time: 2400, type: 'success' },
      { text: '🗄️ Performing database integrity & schema tests (MySQL / Oracle)... SUCCESS', time: 3000, type: 'text' },
      { text: '🧪 Executing regression test runner (Selenium web components)...', time: 3600, type: 'text' },
      { text: '   -> LoginPage Form Validation - PASSED', time: 4000, type: 'success' },
      { text: '   -> EventRegister RoleAccessControl - PASSED', time: 4400, type: 'success' },
      { text: '📊 TEST RESULTS SUMMARY:', time: 4900, type: 'info' },
      { text: '   Tests Executed: 135 | Passed: 135 | Failed: 0 | Incomplete: 0', time: 5100, type: 'success' },
      { text: '🟢 All system checks are stable. Build is READY for deployment!', time: 5300, type: 'success' },
    ];

    stages.forEach((stage) => {
      setTimeout(() => {
        writeLine(stage.text, stage.type);
        if (stage.time === 5300) {
          inputEl.disabled = false;
          inputEl.focus();
        }
      }, stage.time);
    });
  };

  // Input Listeners
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputEl.value);
    }
  });

  // Default Console history printing
  terminalHistory.forEach(line => writeLine(line.text, line.type));
}

// 4. DYNAMIC SKILLS MATRIX RENDERING
function renderSkills(filterType, searchVal) {
  const container = document.getElementById('skills-matrix-grid');
  const diagErr = document.getElementById('diag-last-error');
  const diagGrid = document.getElementById('diag-grid-children');

  if (!container) {
    if (diagErr) diagErr.innerText = 'Error: #skills-matrix-grid element is missing!';
    return;
  }
  container.innerHTML = ''; // reset

  try {
    const filteredCategories = skillsData
      .map((category) => {
        if (filterType === 'dev' && category.type === 'qa') return null;
        if (filterType === 'qa' && category.type === 'dev') return null;

        const matchingSkills = category.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchVal.toLowerCase())
        );

        if (matchingSkills.length === 0) return null;

        return {
          ...category,
          skills: matchingSkills,
        };
      })
      .filter(Boolean);

    if (filteredCategories.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted)">
          No skills matching "${searchVal}" found under current filter criteria.
        </div>
      `;
      if (diagGrid) diagGrid.innerText = 'Grid child elements: 0 (No matches)';
      return;
    }

    filteredCategories.forEach((category, idx) => {
      const cardColorBorder = category.type === 'dev' 
        ? 'var(--dev-color)' 
        : category.type === 'qa' 
          ? 'var(--qa-color)' 
          : 'var(--accent-color)';

      const card = document.createElement('div');
      card.className = 'glass-card skill-card';
      card.style.padding = '1.5rem';
      card.style.animation = 'skillCardFade 0.4s ease forwards';
      card.style.animationDelay = `${idx * 0.05}s`;
      card.style.borderLeft = `4px solid ${cardColorBorder}`;

      let skillsHTML = '';
      category.skills.forEach((skill, sIdx) => {
        skillsHTML += `
          <div class="badge skill-badge" style="animation-delay: ${sIdx * 0.04}s">
            <span style="margin-right: 4px">${skill.icon}</span>
            ${skill.name}
          </div>
        `;
      });

      card.innerHTML = `
        <h3 style="font-size: 1rem; font-family: var(--font-mono); margin-bottom: 1.25rem; color: var(--text-primary)">
          ${category.title}
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem">
          ${skillsHTML}
        </div>
      `;

      container.appendChild(card);
    });

    if (diagGrid) diagGrid.innerText = `Grid child elements: ${container.children.length}`;
  } catch (err) {
    console.error('Skills rendering failed:', err);
    if (diagErr) diagErr.innerText = `Render Error: ${err.message}`;
  }
}

function initSkillsFilters() {
  const searchInput = document.getElementById('skills-search-box');
  const tabAll = document.getElementById('filter-tab-all');
  const tabDev = document.getElementById('filter-tab-dev');
  const tabQa = document.getElementById('filter-tab-qa');
  
  let activeTab = 'all';

  const updateFilters = () => {
    renderSkills(activeTab, searchInput.value);
  };

  const setTabActive = (tab) => {
    // Reset states
    [tabAll, tabDev, tabQa].forEach(btn => {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-secondary)';
    });

    if (tab === 'all') {
      tabAll.style.background = 'var(--accent-gradient)';
      tabAll.style.color = '#05070f';
      activeTab = 'all';
    } else if (tab === 'dev') {
      tabDev.style.background = 'var(--dev-gradient)';
      tabDev.style.color = '#05070f';
      activeTab = 'dev';
    } else if (tab === 'qa') {
      tabQa.style.background = 'var(--qa-gradient)';
      tabQa.style.color = '#05070f';
      activeTab = 'qa';
    }
    updateFilters();
  };

  // Add click listeners
  tabAll.addEventListener('click', () => setTabActive('all'));
  tabDev.addEventListener('click', () => setTabActive('dev'));
  tabQa.addEventListener('click', () => setTabActive('qa'));

  // Search query input listener
  searchInput.addEventListener('input', updateFilters);

  // Set default active tab
  setTabActive('all');

  // Connect Navbar Dropdown Items to change filters automatically
  const navItemDev = document.getElementById('nav-item-dev-skills');
  const navItemQa = document.getElementById('nav-item-qa-skills');

  if (navItemDev) {
    navItemDev.addEventListener('click', () => {
      setTabActive('dev');
    });
  }

  if (navItemQa) {
    navItemQa.addEventListener('click', () => {
      setTabActive('qa');
    });
  }
}

// 5. RENDER PROJECTS
function renderProjects() {
  const container = document.getElementById('projects-grid-container');
  container.innerHTML = ''; // reset

  projectsData.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.id = `project-card-${project.id}`;

    // Staging tags badges
    let tagsHTML = '';
    project.tags.forEach(tag => {
      tagsHTML += `<span class="badge">${tag}</span>`;
    });

    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-card-header-top">
          <h3 style="fontSize: 1.25rem; fontWeight: 800">${project.title}</h3>
        </div>
        <div style="display: flex; flexWrap: wrap; gap: 0.5rem; marginTop: 0.25rem">
          ${tagsHTML}
        </div>
      </div>
      
      <div class="project-card-body">
        <!-- Toggle Controls -->
        <div class="project-toggle">
          <button class="project-toggle-btn active" id="btn-dev-${project.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="marginRight: 4px">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Developer Spec
          </button>
          
          <button class="project-toggle-btn" id="btn-qa-${project.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="marginRight: 4px">
              <rect x="3" y="11" width="18" height="11" rx="8"></rect>
              <path d="M12 2v9"></path>
              <path d="M8 5a4 4 0 0 1 8 0"></path>
              <path d="M3 13h2"></path>
              <path d="M19 13h2"></path>
              <path d="M2 17h3"></path>
              <path d="M19 17h3"></path>
            </svg>
            QA Test Report
          </button>
        </div>

        <!-- Dynamic Container -->
        <div id="project-details-view-${project.id}" class="project-view-content"></div>
      </div>
    `;

    container.appendChild(card);

    // Get child nodes for toggling
    const btnDev = card.querySelector(`#btn-dev-${project.id}`);
    const btnQa = card.querySelector(`#btn-qa-${project.id}`);
    const detailsView = card.querySelector(`#project-details-view-${project.id}`);

    const showDetails = (mode) => {
      if (mode === 'dev') {
        btnDev.classList.add('active');
        btnQa.classList.remove('active');
        
        let hlHTML = '';
        project.devHighlights.forEach(hl => {
          hlHTML += `<li style="margin-bottom: 0.5rem">${hl}</li>`;
        });

        detailsView.innerHTML = `
          <p style="margin-bottom: 1rem; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary)">
            ${project.devOverview}
          </p>
          <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-color); margin-bottom: 0.5rem; font-family: var(--font-mono)">
            Engineering Accomplishments:
          </h4>
          <ul style="padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-secondary)">
            ${hlHTML}
          </ul>
        `;
      } else {
        btnDev.classList.remove('active');
        btnQa.classList.add('active');

        let qaHlHTML = '';
        project.qaHighlights.forEach(hl => {
          qaHlHTML += `<li style="margin-bottom: 0.5rem">${hl}</li>`;
        });

        detailsView.innerHTML = `
          <p style="margin-bottom: 1rem; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary)">
            ${project.qaOverview}
          </p>
          
          <div style="display: flex; gap: 1rem; margin-bottom: 1rem">
            <div style="flex: 1; padding: 0.5rem 0.75rem; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.15); border-radius: 6px; text-align: center">
              <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono)">Cases Run</div>
              <div style="font-size: 1.25rem; font-weight: bold; color: #10B981; font-family: var(--font-mono)">${project.testCasesCount}</div>
            </div>
            <div style="flex: 1; padding: 0.5rem 0.75rem; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.15); border-radius: 6px; text-align: center">
              <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono)">Bugs Filed</div>
              <div style="font-size: 1.25rem; font-weight: bold; color: #EF4444; font-family: var(--font-mono)">${project.bugsFiledCount}</div>
            </div>
          </div>

          <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-color); margin-bottom: 0.5rem; font-family: var(--font-mono)">
            Testing & QA Execution Details:
          </h4>
          <ul style="padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-secondary)">
            ${qaHlHTML}
          </ul>
        `;
      }
    };

    // Click Bindings
    btnDev.addEventListener('click', () => showDetails('dev'));
    btnQa.addEventListener('click', () => showDetails('qa'));

    // Default to dev details
    showDetails('dev');
  });
}

// 6. CONTACT FORM SUBMIT HANDLER
function initContactForm() {
  const form = document.getElementById('contact-email-form');
  const container = document.getElementById('contact-form-container');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name-input').value;
    const email = document.getElementById('contact-email-input').value;
    const message = document.getElementById('contact-msg-textarea').value;

    if (name && email && message) {
      // Transition to success screen
      container.innerHTML = `
        <div class="glass-card" style="padding: 2.5rem; textAlign: center; border: 1px solid #10B981; background: rgba(16, 185, 129, 0.02); display: flex; flexDirection: column; alignItems: center; gap: 1rem; animation: contentSlideIn 0.5s ease">
          <div style="width: 48px; height: 48px; borderRadius: 50%; background: rgba(16, 185, 129, 0.1); display: flex; alignItems: center; justifyContent: center; color: #10B981; fontSize: 1.5rem">
            ✓
          </div>
          <h3 style="fontSize: 1.25rem">Message Transmitted!</h3>
          <p style="fontSize: 0.9rem; color: var(--text-secondary)">
            Thank you for reaching out, ${name}. The data packets have been successfully routed. I will get back to you shortly.
          </p>
        </div>
      `;
    }
  });
}
