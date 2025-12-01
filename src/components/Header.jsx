import { useState } from 'react'

const CONDITIONS = [
  { value: 'autism', label: 'Autism' },
  { value: 'adhd', label: 'ADHD' },
  { value: 'dyslexia', label: 'Dyslexia' },
  { value: 'dyscalculia', label: 'Dyscalculia' },
  { value: 'anxiety', label: 'Anxiety' },
  { value: 'visual_processing', label: 'Visual Processing' },
  { value: 'working_memory', label: 'Working Memory' },
  { value: 'slow_processing', label: 'Slow Processing' },
  { value: 'eal', label: 'EAL' },
]

const SUBJECTS = [
  { value: 'english', label: 'English' },
  { value: 'maths', label: 'Maths' },
  { value: 'science', label: 'Science' },
  { value: 'history', label: 'History' },
  { value: 'geography', label: 'Geography' },
  { value: 'computing', label: 'Computing' },
  { value: 'art', label: 'Art' },
  { value: 'music', label: 'Music' },
  { value: 'pe', label: 'PE' },
  { value: 'mfl', label: 'MFL' },
  { value: 'other', label: 'Other' },
]

const KEY_STAGES = [
  { value: 'ks1', label: 'KS1 (5-7)' },
  { value: 'ks2', label: 'KS2 (7-11)' },
  { value: 'ks3', label: 'KS3 (11-14)' },
  { value: 'ks4', label: 'KS4 (14-16)' },
  { value: 'ks5', label: 'KS5 (16-18)' },
]

function Header({ profile, updateProfile, addCondition, removeCondition }) {
  const [showAddCondition, setShowAddCondition] = useState(false)

  const availableConditions = CONDITIONS.filter(
    c => !profile.conditions.includes(c.value)
  )

  const getConditionLabel = (value) => {
    return CONDITIONS.find(c => c.value === value)?.label || value
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <div className="logo-icon">📚</div>
          <div>
            <h1>AdaptEd</h1>
            <span className="logo-tagline">Prompt Generator for Inclusive Education</span>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-label">Student Profile</div>
        <div className="profile-controls">
          <div className="profile-group conditions-group">
            <label>Condition(s):</label>
            {profile.conditions.map(condition => (
              <span key={condition} className="condition-tag">
                {getConditionLabel(condition)}
                {profile.conditions.length > 1 && (
                  <button onClick={() => removeCondition(condition)}>×</button>
                )}
              </span>
            ))}
            {profile.conditions.length < 3 && (
              <div style={{ position: 'relative' }}>
                <button 
                  className="add-condition-btn"
                  onClick={() => setShowAddCondition(!showAddCondition)}
                >
                  + Add
                </button>
                {showAddCondition && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    padding: '8px',
                    zIndex: 100,
                    minWidth: '180px',
                    marginTop: '4px'
                  }}>
                    {availableConditions.map(c => (
                      <div
                        key={c.value}
                        onClick={() => {
                          addCondition(c.value)
                          setShowAddCondition(false)
                        }}
                        style={{
                          padding: '8px 12px',
                          cursor: 'pointer',
                          color: '#2c3e50',
                          borderRadius: '4px',
                          fontSize: '0.9rem'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                      >
                        {c.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="profile-group">
            <label>Subject</label>
            <select
              value={profile.subject}
              onChange={(e) => updateProfile('subject', e.target.value)}
            >
              {SUBJECTS.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div className="profile-group">
            <label>Key Stage</label>
            <select
              value={profile.keyStage}
              onChange={(e) => updateProfile('keyStage', e.target.value)}
            >
              {KEY_STAGES.map(ks => (
                <option key={ks.value} value={ks.value}>{ks.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
