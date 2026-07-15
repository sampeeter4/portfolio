import React, { useState, useRef, useEffect } from 'react';

const Terminal = ({ activeTab, setActiveTab }) => {
  const [history, setHistory] = useState([
    { text: 'System initialized. Welcome to Sam Peeter\'s Command Console.', type: 'info' },
    { text: 'Type "help" to view a list of available commands.', type: 'muted' },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

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

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { text: `sam-peeter-pc:~$ ${cmdStr}`, type: 'input' }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (trimmed) {
      case 'help':
        newHistory.push({ text: 'Available commands:', type: 'success' });
        Object.entries(commands).forEach(([cmd, desc]) => {
          newHistory.push({ text: `  ${cmd.padEnd(12)} - ${desc}`, type: 'text' });
        });
        break;

      case 'summary':
        newHistory.push({ 
          text: 'Detail-oriented Python Full Stack Developer & Software Test Engineer. Experienced in building scalable web apps with Django, FastAPI, React, and testing with Manual & Automation (Selenium, Postman, JIRA). Passionate about combining software development and quality assurance.',
          type: 'text' 
        });
        break;

      case 'skills':
        newHistory.push({ text: '🚀 Core Technical Skills:', type: 'success' });
        newHistory.push({ text: '  Languages     : Python, JavaScript, Core Java, SQL', type: 'text' });
        newHistory.push({ text: '  Frameworks    : Django, FastAPI, React, Angular, Bootstrap', type: 'text' });
        newHistory.push({ text: '  Testing       : Manual, Functional, Regression, API Testing, Database Testing', type: 'text' });
        newHistory.push({ text: '  Tools         : Selenium, Postman, Git, GitHub, JIRA, VS Code', type: 'text' });
        break;

      case 'experience':
        newHistory.push({ text: '💼 Professional Milestones:', type: 'success' });
        newHistory.push({ text: '  * Software Testing Trainee at QSpiders (2026-Present) | QA, Manual, API & DB Testing', type: 'text' });
        newHistory.push({ text: '  * Python & Machine Learning Intern at Camerin Innovative Solutions (2026) | Healthcare AI integrations', type: 'text' });
        newHistory.push({ text: '  * Python Full Stack Intern at upGrad (2023-2024) | Django, MySQL & APIs', type: 'text' });
        break;

      case 'projects':
        newHistory.push({ text: '🛠️ Highlighted Projects:', type: 'success' });
        newHistory.push({ text: '  1. AI Healthcare System | FastAPI, Machine Learning, Oracle', type: 'text' });
        newHistory.push({ text: '  2. NSS Volunteer Management Portal | Django, MySQL, Bootstrap', type: 'text' });
        newHistory.push({ text: '  3. Stock Market AI Assistant | Python, REST APIs, ML Indicators', type: 'text' });
        newHistory.push({ text: 'Tip: Scroll down to the Projects section to toggle between build specs and QA testing details!', type: 'muted' });
        break;

      case 'contact':
        newHistory.push({ text: '📞 Let\'s Connect:', type: 'success' });
        newHistory.push({ text: '  Email    : sampeter9977@gmail.com', type: 'text' });
        newHistory.push({ text: '  Phone    : +1 702-558-4735', type: 'text' });
        newHistory.push({ text: '  Location : Pathanamthitta, Kerala', type: 'text' });
        newHistory.push({ text: '  GitHub   : https://github.com/sampeeter4', type: 'text' });
        newHistory.push({ text: '  LinkedIn : https://www.linkedin.com/in/sam-peeter-b133b0292', type: 'text' });
        break;

      case 'run-tests':
        simulateTests(newHistory);
        setInput('');
        return; // handle async updates inside simulateTests

      default:
        newHistory.push({ text: `bash: command not found: ${trimmed}. Type "help" to see available options.`, type: 'error' });
    }

    setHistory(newHistory);
    setInput('');
  };

  const simulateTests = (startHistory) => {
    let currentHistory = [...startHistory];
    currentHistory.push({ text: 'Initializing testing lifecycle (STLC)...', type: 'info' });
    currentHistory.push({ text: 'Loading test configurations and test suites...', type: 'text' });
    setHistory(currentHistory);

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
      { text: '🟢 All system checks are stable. Build is READY for deployment!', type: 'success' },
    ];

    stages.forEach((stage) => {
      setTimeout(() => {
        setHistory((prev) => [...prev, { text: stage.text, type: stage.type }]);
      }, stage.time);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };
  return (
    <div className="terminal-window glass-card">
      <div className="terminal-scanline"></div>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-dot-red"></div>
          <div className="terminal-dot-yellow"></div>
          <div className="terminal-dot-green"></div>
        </div>
        <span className="terminal-title">sam_peeter_test_runner.sh</span>
        <div style={{ width: 33 }}></div>
      </div>
      
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, idx) => {
          let styleClass = 'terminal-text';
          if (line.type === 'input') styleClass = 'terminal-prompt';
          else if (line.type === 'error') styleClass = 'text-red-500';
          else if (line.type === 'success') styleClass = 'text-emerald-400';
          else if (line.type === 'info') styleClass = 'text-cyan-400';
          else if (line.type === 'muted') styleClass = 'text-slate-500';
          
          // Apply custom colors for terminal lines
          const colorStyles = {
            'text-red-500': { color: '#ef4444' },
            'text-emerald-400': { color: '#34d399' },
            'text-cyan-400': { color: '#22d3ee' },
            'text-slate-500': { color: '#64748b' },
            'terminal-prompt': { color: '#ec4899', fontWeight: 'bold' },
            'terminal-text': { color: 'inherit' }
          };

          return (
            <div key={idx} style={colorStyles[styleClass] || {}}>
              {line.text}
            </div>
          );
        })}
        <div className="terminal-input-row">
          <span className="terminal-prompt" style={{ color: '#ec4899', fontWeight: 'bold' }}>sam-peeter-pc:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'run-tests' or 'help'..."
            autoComplete="off"
            spellCheck="false"
          />
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
