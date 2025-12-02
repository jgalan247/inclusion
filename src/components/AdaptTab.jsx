import { useState } from 'react'
import { generateAdaptPrompt } from '../utils/promptGenerator'

const OUTPUT_FORMATS = [
  { value: 'worksheet', label: 'Worksheet', description: '1-2 pages with questions and activities' },
  { value: 'full_lesson', label: 'Full Lesson Plan', description: '3-5 pages with starter, main, plenary' },
  { value: 'presentation', label: 'Presentation', description: '5-10 slides with speaker notes' },
  { value: 'handout', label: 'Handout (PDF)', description: '3-4 pages of theory, examples, and exercises' },
  { value: 'revision_guide', label: 'Revision Guide', description: '2-3 pages summarising key concepts' },
  { value: 'same_as_original', label: 'Same as Original', description: 'Match the original format and length' },
]

function AdaptTab({ profile }) {
  const [step, setStep] = useState(1)
  const [resourceContent, setResourceContent] = useState('')
  const [outputFormat, setOutputFormat] = useState('same_as_original')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [copied, setCopied] = useState(false)

  const steps = [
    { num: 1, label: 'Paste Resource' },
    { num: 2, label: 'Output Format' },
    { num: 3, label: 'Generate Prompt' },
  ]

  const handleGenerate = () => {
    const prompt = generateAdaptPrompt(profile, resourceContent, outputFormat)
    setGeneratedPrompt(prompt)
    setStep(3)
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
    const timestamp = new Date().toISOString().slice(0, 10)
    a.download = `adapt-${outputFormat}-${profile.conditions.join('-')}-${profile.subject}-${profile.keyStage}-${timestamp}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const canProceedToStep2 = resourceContent.trim().length > 0

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
              <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>How to Get Your Resource Text</h3>
              <p style={{ marginBottom: '16px', color: 'var(--color-text-light)' }}>
                Copy the text from your existing resource and paste it below:
              </p>
              <ul style={{ marginLeft: '20px', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                <li><strong>Word document:</strong> Open in Word → Select All (Ctrl+A / Cmd+A) → Copy (Ctrl+C / Cmd+C)</li>
                <li><strong>PDF:</strong> Open in browser or Adobe → Select text → Copy</li>
                <li><strong>PowerPoint:</strong> Open slides → Copy text from each slide</li>
                <li><strong>Google Docs/Slides:</strong> Select All → Copy</li>
              </ul>
            </div>

            <div className="form-group">
              <label className="form-label">Paste Your Resource Content</label>
              <textarea
                className="form-textarea"
                placeholder="Paste your worksheet, lesson plan, or educational content here...

Example:
# Worksheet: Fractions
Learning Objective: To understand equivalent fractions

Question 1: What fraction is shaded?
[Image of circle with 2/4 shaded]

Question 2: Write three fractions equivalent to 1/2
..."
                value={resourceContent}
                onChange={(e) => setResourceContent(e.target.value)}
                style={{ minHeight: '300px' }}
              />
              <p className="form-hint">
                Include headings, questions, and instructions exactly as they appear. The more detail you include, the better the adaptation will be.
              </p>
            </div>

            <button
              className="btn btn-primary btn-large"
              onClick={() => setStep(2)}
              disabled={!canProceedToStep2}
            >
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f7f4 100%)',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '24px'
            }}>
              <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Choose Output Format</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Select the format you want for your adapted resource.
              </p>
            </div>

            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label">Output Format</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {OUTPUT_FORMATS.map(format => (
                  <label
                    key={format.value}
                    className={`radio-item ${outputFormat === format.value ? 'selected' : ''}`}
                    style={{
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '4px'
                    }}
                    onClick={() => setOutputFormat(format.value)}
                  >
                    <input
                      type="radio"
                      name="outputFormat"
                      checked={outputFormat === format.value}
                      onChange={() => setOutputFormat(format.value)}
                      style={{ display: 'none' }}
                    />
                    <span style={{ fontWeight: '600' }}>{format.label}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{format.description}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{
              background: '#fff9e6',
              border: '1px solid #f0e6cc',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h4 style={{ marginBottom: '12px', color: '#8b6914' }}>📋 Current Settings</h4>
              <p><strong>Condition(s):</strong> {profile.conditions.map(c => c.charAt(0).toUpperCase() + c.slice(1).replace('_', ' ')).join(', ')}</p>
              <p><strong>Subject:</strong> {profile.subject.charAt(0).toUpperCase() + profile.subject.slice(1)}</p>
              <p><strong>Key Stage:</strong> {profile.keyStage.toUpperCase()}</p>
              <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Change these in the header above if needed.
              </p>
            </div>

            <div style={{
              background: 'var(--color-bg-warm)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h4 style={{ marginBottom: '12px' }}>📝 Your Resource ({resourceContent.length} characters)</h4>
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '16px',
                maxHeight: '150px',
                overflow: 'auto',
                fontSize: '0.9rem',
                whiteSpace: 'pre-wrap',
                border: '1px solid var(--color-border)'
              }}>
                {resourceContent.substring(0, 300)}{resourceContent.length > 300 ? '...' : ''}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button className="btn btn-primary btn-large" onClick={handleGenerate}>
                Generate Prompt →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
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
                <li><strong>Copy</strong> the prompt above (it includes your resource)</li>
                <li>Open <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a> or <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a></li>
                <li><strong>Paste</strong> the prompt and press Enter</li>
                <li>Wait for the AI to return your adapted resource</li>
                <li>Copy the AI's response and use the <strong>Convert</strong> tab to create Word/PDF</li>
              </ol>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" onClick={() => setStep(2)}>
                ← Back
              </button>
              <button className="btn btn-secondary" onClick={() => {
                setStep(1)
                setResourceContent('')
                setOutputFormat('same_as_original')
                setGeneratedPrompt('')
              }}>
                Start New Adaptation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdaptTab
