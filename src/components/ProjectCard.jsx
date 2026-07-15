import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [viewMode, setViewMode] = useState('dev'); // 'dev' or 'qa'

  return (
    <div className="glass-card">
      <div className="project-card-header">
        <div className="project-card-header-top">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{project.title}</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-card-body">
        {/* Toggle Controls */}
        <div className="project-toggle">
          <button
            className={`project-toggle-btn ${viewMode === 'dev' ? 'active' : ''}`}
            onClick={() => setViewMode('dev')}
          >
            {/* SVG Code Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Developer Spec
          </button>
          
          <button
            className={`project-toggle-btn ${viewMode === 'qa' ? 'active' : ''}`}
            onClick={() => setViewMode('qa')}
          >
            {/* SVG Bug Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
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

        {/* Dynamic Display Details */}
        {viewMode === 'dev' ? (
          <div className="project-view-content" style={{ animation: 'fadeIn 0.4s ease' }}>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {project.devOverview}
            </p>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              Engineering Accomplishments:
            </h4>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {project.devHighlights.map((hl, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{hl}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="project-view-content" style={{ animation: 'fadeIn 0.4s ease' }}>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {project.qaOverview}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ flex: 1, padding: '0.5rem 0.75rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Cases Run</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10B981', fontFamily: 'var(--font-mono)' }}>{project.testCasesCount}</div>
              </div>
              <div style={{ flex: 1, padding: '0.5rem 0.75rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)', borderRadius: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Bugs Filed</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#EF4444', fontFamily: 'var(--font-mono)' }}>{project.bugsFiledCount}</div>
              </div>
            </div>

            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              Testing & QA Execution Details:
            </h4>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {project.qaHighlights.map((hl, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{hl}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
