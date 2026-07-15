import React, { useState } from 'react';

const SkillsSection = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'dev', 'qa'
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      title: 'Programming Languages',
      type: 'dev',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Core Java', icon: '☕' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'SQL', icon: '🗄️' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      type: 'dev',
      skills: [
        { name: 'Django', icon: '🦄' },
        { name: 'FastAPI', icon: '🚀' },
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'Bootstrap', icon: '🥾' },
      ],
    },
    {
      title: 'Web Technologies & Databases',
      type: 'dev',
      skills: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'REST API', icon: '🔗' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Oracle', icon: '🔴' },
        { name: 'SQLite', icon: '🪶' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'JDBC', icon: '🔌' },
      ],
    },
    {
      title: 'Quality Assurance & Testing',
      type: 'qa',
      skills: [
        { name: 'Manual Testing', icon: '📝' },
        { name: 'Functional Testing', icon: '⚙️' },
        { name: 'Regression Testing', icon: '🔄' },
        { name: 'Smoke Testing', icon: '💨' },
        { name: 'API Testing', icon: '📡' },
        { name: 'Database Testing', icon: '🛡️' },
        { name: 'User Acceptance Testing (UAT)', icon: '🤝' },
      ],
    },
    {
      title: 'Test Management & Tracking',
      type: 'qa',
      skills: [
        { name: 'Test Case Design', icon: '✏️' },
        { name: 'Test Scenarios', icon: '🗺️' },
        { name: 'Defect Life Cycle', icon: '🔄' },
        { name: 'Bug Reporting', icon: '🐞' },
        { name: 'Defect Tracking', icon: '🎯' },
        { name: 'JIRA', icon: '🌀' },
      ],
    },
    {
      title: 'ML / AI & Tools',
      type: 'all', // Shared category
      skills: [
        { name: 'Machine Learning', icon: '🧠' },
        { name: 'Prompt Engineering', icon: '✍️' },
        { name: 'API Integration', icon: '🔗' },
        { name: 'Selenium', icon: '🤖' },
        { name: 'Postman', icon: '📯' },
        { name: 'Git & GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
      ],
    },
    {
      title: 'Methodologies',
      type: 'all', // Shared category
      skills: [
        { name: 'SDLC', icon: '🔄' },
        { name: 'STLC', icon: '🧪' },
        { name: 'Agile', icon: '🏃' },
        { name: 'Scrum', icon: '👥' },
      ],
    },
  ];

  // Filter skills based on chosen persona and search query
  const filteredCategories = skillCategories
    .map((category) => {
      // If categories belong to other types and we have a specific persona filter
      if (filter === 'dev' && category.type === 'qa') return null;
      if (filter === 'qa' && category.type === 'dev') return null;

      // Filter skills by query
      const matchingSkills = category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingSkills.length === 0) return null;

      return {
        ...category,
        skills: matchingSkills,
      };
    })
    .filter(Boolean);

  return (
    <div>
      {/* Controls Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        {/* Toggle Filters */}
        <div style={{ display: 'flex', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--card-border)', borderRadius: '9999px', padding: '0.3rem', gap: '0.25rem' }}>
          <button
            className={`badge`}
            style={{ 
              background: filter === 'all' ? 'var(--accent-gradient)' : 'transparent',
              color: filter === 'all' ? '#060913' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.8rem'
            }}
            onClick={() => setFilter('all')}
          >
            All Areas
          </button>
          
          <button
            className={`badge`}
            style={{ 
              background: filter === 'dev' ? 'var(--dev-gradient)' : 'transparent',
              color: filter === 'dev' ? '#060913' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.8rem'
            }}
            onClick={() => setFilter('dev')}
          >
            Dev Stack
          </button>
          
          <button
            className={`badge`}
            style={{ 
              background: filter === 'qa' ? 'var(--qa-gradient)' : 'transparent',
              color: filter === 'qa' ? '#060913' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.8rem'
            }}
            onClick={() => setFilter('qa')}
          >
            QA & Testing
          </button>
        </div>

        {/* Search Box */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ 
              paddingTop: '0.5rem', 
              paddingBottom: '0.5rem', 
              paddingLeft: '2.5rem',
              fontSize: '0.875rem',
              borderRadius: '9999px',
              border: '1px solid rgba(var(--accent-color-rgb), 0.2)'
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* Grid of Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="glass-card" 
            style={{ 
              padding: '1.5rem', 
              animation: 'skillCardFade 0.4s ease forwards',
              opacity: 0,
              animationDelay: `${idx * 0.05}s`,
              borderLeft: `4px solid ${
                category.type === 'dev' 
                  ? 'var(--dev-color)' 
                  : category.type === 'qa' 
                    ? 'var(--qa-color)' 
                    : 'var(--accent-color)'
              }`
            }}
          >
            <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="badge" 
                  style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.4rem 0.8rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <span style={{ marginRight: '4px' }}>{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          No skills matching "{searchQuery}" found under current filter criteria.
        </div>
      )}

      <style>{`
        @keyframes skillCardFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
