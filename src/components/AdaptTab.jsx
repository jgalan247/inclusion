import { useState, useRef } from 'react'
import { generateAdaptPrompt } from '../utils/promptGenerator'

function AdaptTab({ profile }) {
  const [step, setStep] = useState(1)
  const [resourceContent, setResourceContent] = useState('')
  const [inputMethod, setInputMethod] = useState('text') // 'text' or 'file'
  const [fileName, setFileName] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef(null)

  const steps = [
    { num: 1, label: 'Input Resource' },
    { num: 2, label: 'Review Settings' },
    { num: 3, label: 'Generate Prompt' },
  ]

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setFileName(file.name)
    const extension = file.name.split('.').pop().toLowerCase()

    if (extension === 'txt') {
      const text = await file.text()
      setResourceContent(text)
    } else if (extension === 'pdf' || extension === 'docx' || extension === 'pptx') {
      // For PDF, DOCX, PPTX - we'll show a message that content needs to be extracted
      setResourceContent(`[Content from ${file.name} - Please copy and paste the text content from your ${extension.toUpperCase()} file, or use a tool to extract the text first]`)
    } else {
      setResourceContent(`[Unsupported file type: ${extension}. Please paste your content as plain text instead]`)
    }
  }

  const handleGenerate = () => {
    const prompt = generateAdaptPrompt(profile, resourceContent)
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
    a.download = `adapt-prompt-${profile.conditions.join('-')}-${profile.subject}-${profile.keyStage}.txt`
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
            <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Enter Your Resource
            </h3>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '24px' }}>
              Provide the educational resource you want to adapt. You can either paste the text directly or upload a file.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <div className="radio-group" style={{ marginBottom: '16px' }}>
                <label
                  className={`radio-item ${inputMethod === 'text' ? 'selected' : ''}`}
                  onClick={() => setInputMethod('text')}
                >
                  <input
                    type="radio"
                    name="inputMethod"
                    checked={inputMethod === 'text'}
                    onChange={() => setInputMethod('text')}
                  />
                  ✏️ Paste Text
                </label>
                <label
                  className={`radio-item ${inputMethod === 'file' ? 'selected' : ''}`}
                  onClick={() => setInputMethod('file')}
                >
                  <input
                    type="radio"
                    name="inputMethod"
                    checked={inputMethod === 'file'}
                    onChange={() => setInputMethod('file')}
                  />
                  📁 Upload File
                </label>
              </div>

              {inputMethod === 'text' && (
                <div className="form-group">
                  <label className="form-label">Resource Content</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Paste your worksheet, lesson plan, or educational content here..."
                    value={resourceContent}
                    onChange={(e) => setResourceContent(e.target.value)}
                    style={{ minHeight: '250px' }}
                  />
                  <p className="form-hint">
                    Tip: Include headings, questions, and instructions exactly as they appear in your resource.
                  </p>
                </div>
              )}

              {inputMethod === 'file' && (
                <div className="form-group">
                  <label className="form-label">Upload Document</label>
                  <div style={{
                    border: '2px dashed var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '40px',
                    textAlign: 'center',
                    background: 'var(--color-bg-warm)',
                    cursor: 'pointer'
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".txt,.pdf,.docx,.pptx"
                      onChange={handleFileUpload}
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📄</div>
                    <p style={{ fontWeight: '500', marginBottom: '8px' }}>
                      {fileName || 'Click to upload or drag and drop'}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      Supported: TXT, PDF, DOCX, PPTX
                    </p>
                  </div>

                  {fileName && (
                    <div style={{
                      marginTop: '16px',
                      padding: '12px',
                      background: '#e8f5e9',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>✅</span>
                      <span>File selected: <strong>{fileName}</strong></span>
                    </div>
                  )}

                  <div style={{
                    marginTop: '16px',
                    padding: '16px',
                    background: '#fff9e6',
                    borderRadius: '8px',
                    border: '1px solid #f0e6cc'
                  }}>
                    <p style={{ fontSize: '0.9rem', color: '#8b6914' }}>
                      <strong>Note:</strong> For PDF, DOCX, and PPTX files, please copy and paste the text content into the text area after uploading, or extract the text using your document viewer. Browser-based file reading has limitations with these formats.
                    </p>
                  </div>
                </div>
              )}

              {resourceContent && inputMethod === 'file' && (
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label className="form-label">Extracted/Pasted Content</label>
                  <textarea
                    className="form-textarea"
                    value={resourceContent}
                    onChange={(e) => setResourceContent(e.target.value)}
                    style={{ minHeight: '200px' }}
                  />
                </div>
              )}
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
              <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Review Your Settings</h3>
              <p style={{ marginBottom: '16px', color: 'var(--color-text-light)' }}>
                The prompt will be generated with these settings. Change them in the header if needed.
              </p>
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
            </div>

            <div style={{
              background: 'var(--color-bg-warm)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h4 style={{ marginBottom: '12px' }}>📝 Resource Preview</h4>
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '16px',
                maxHeight: '200px',
                overflow: 'auto',
                fontSize: '0.9rem',
                whiteSpace: 'pre-wrap',
                border: '1px solid var(--color-border)'
              }}>
                {resourceContent.substring(0, 500)}{resourceContent.length > 500 ? '...' : ''}
              </div>
              <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {resourceContent.length} characters
              </p>
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
                <li><strong>Copy</strong> the prompt above</li>
                <li>Open <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a> or <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a></li>
                <li><strong>Paste</strong> the prompt and press Enter</li>
                <li>Wait for the adapted version</li>
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
                setFileName('')
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
