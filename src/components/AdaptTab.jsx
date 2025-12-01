import { useState } from 'react'
import { generateAdaptPrompt } from '../utils/promptGenerator'

function AdaptTab({ profile }) {
  const [step, setStep] = useState(1)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [copied, setCopied] = useState(false)

  const steps = [
    { num: 1, label: 'Instructions' },
    { num: 2, label: 'Generate Prompt' },
  ]

  const handleGenerate = () => {
    const prompt = generateAdaptPrompt(profile)
    setGeneratedPrompt(prompt)
    setStep(2)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadPrompt = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `adapt-prompt-${profile.conditions.join('-')}-${profile.subject}-${profile.keyStage}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="wizard">
      <div className="wizard-header">
        <h2 className="wizard-title">🔄 Adapt Existing Resource</h2>
        <p className="wizard-subtitle">
          Generate a prompt to adapt your existing resources for students with {profile.conditions.join(', ')}
        </p>
      </div>

      <div className="progress-steps">
        {steps.map((s, i) => (
          <div key={s.num} style={{ display: 'contents' }}>
            <div className={`progress-step ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}>
              <div className="step-number">{step > s.num ? '✓' : s.num}</div>
              <span className="step-label">{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className={`step-connector ${step > s.num ? 'completed' : ''}`} />}
          </div>
        ))}
      </div>

      <div className="wizard-content">
        {step === 1 && (
          <div>
            <div style={{ 
              background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f7f4 100%)',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '24px'
            }}>
              <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>How This Works</h3>
              <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                <li>Click <strong>"Generate Prompt"</strong> below</li>
                <li>Copy the generated prompt</li>
                <li>Paste it into <strong>ChatGPT</strong> or <strong>Claude</strong></li>
                <li>Replace <code>[PASTE YOUR RESOURCE HERE]</code> with your actual content</li>
                <li>The AI will return an adapted version</li>
                <li>Use the <strong>Convert</strong> tab to turn the output into Word/PDF</li>
              </ol>
            </div>

            <div style={{ 
              background: '#fff9e6',
              border: '1px solid #f0e6cc',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h4 style={{ marginBottom: '12px', color: '#8b6914' }}>📋 Current Settings</h4>
              <p><strong>Condition(s):</strong> {profile.conditions.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}</p>
              <p><strong>Subject:</strong> {profile.subject.charAt(0).toUpperCase() + profile.subject.slice(1)}</p>
              <p><strong>Key Stage:</strong> {profile.keyStage.toUpperCase()}</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
                Change these in the header above if needed.
              </p>
            </div>

            <button className="btn btn-primary btn-large" onClick={handleGenerate}>
              Generate Prompt →
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="prompt-output">
              <div className="prompt-header">
                <h3>Your Generated Prompt</h3>
                <div className="prompt-actions">
                  <button 
                    className={`btn btn-secondary ${copied ? 'copy-success' : ''}`}
                    onClick={copyToClipboard}
                  >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                  <button className="btn btn-secondary" onClick={downloadPrompt}>
                    📥 Download
                  </button>
                </div>
              </div>
              <pre className="prompt-content">{generatedPrompt}</pre>
            </div>

            <div className="next-steps">
              <h4>📝 What To Do Next</h4>
              <ol>
                <li><strong>Copy</strong> the prompt above</li>
                <li>Open <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a> or <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a></li>
                <li><strong>Paste</strong> the prompt</li>
                <li>Replace <code>[PASTE YOUR RESOURCE HERE]</code> with your actual resource content</li>
                <li>Press Enter and wait for the adapted version</li>
                <li>Copy the AI's response and use the <strong>Convert</strong> tab to create Word/PDF</li>
              </ol>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>
                ← Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdaptTab
