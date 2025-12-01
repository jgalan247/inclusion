import { useState, useEffect, useRef } from 'react'
import { marked } from 'marked'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Function to render LaTeX math in the content
function renderMath(html) {
  // Handle display math: $$...$$
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })
    } catch (e) {
      return match
    }
  })
  
  // Handle inline math: $...$
  html = html.replace(/\$([^\$\n]+?)\$/g, (match, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false })
    } catch (e) {
      return match
    }
  })
  
  return html
}

function ConvertTab({ profile }) {
  const [step, setStep] = useState(1)
  const [markdownInput, setMarkdownInput] = useState('')
  const [htmlContent, setHtmlContent] = useState('')
  const [accessibilityOptions, setAccessibilityOptions] = useState({
    dyslexicFont: false,
    creamBackground: false,
    largeText: false,
    extraSpacing: false,
  })
  const previewRef = useRef(null)

  const steps = [
    { num: 1, label: 'Paste Content' },
    { num: 2, label: 'Preview & Style' },
    { num: 3, label: 'Download' },
  ]

  // Convert markdown to HTML when input changes
  useEffect(() => {
    if (markdownInput) {
      let html = marked.parse(markdownInput)
      html = renderMath(html)
      setHtmlContent(html)
    }
  }, [markdownInput])

  // Auto-enable accessibility options based on conditions
  useEffect(() => {
    const newOptions = { ...accessibilityOptions }
    if (profile.conditions.includes('dyslexia')) {
      newOptions.dyslexicFont = true
      newOptions.creamBackground = true
      newOptions.extraSpacing = true
    }
    if (profile.conditions.includes('visual_processing')) {
      newOptions.creamBackground = true
      newOptions.extraSpacing = true
    }
    setAccessibilityOptions(newOptions)
  }, [profile.conditions])

  const toggleOption = (option) => {
    setAccessibilityOptions(prev => ({ ...prev, [option]: !prev[option] }))
  }

  const getPreviewStyles = () => {
    let styles = {}
    if (accessibilityOptions.dyslexicFont) {
      styles.fontFamily = "'OpenDyslexic', 'Comic Sans MS', sans-serif"
    }
    if (accessibilityOptions.creamBackground) {
      styles.background = '#fdf6e3'
    }
    if (accessibilityOptions.largeText) {
      styles.fontSize = '1.2rem'
    }
    if (accessibilityOptions.extraSpacing) {
      styles.lineHeight = '2'
      styles.letterSpacing = '0.05em'
    }
    return styles
  }

  const generateStyledHTML = () => {
    const styles = []
    
    if (accessibilityOptions.dyslexicFont) {
      styles.push("font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;")
    } else {
      styles.push("font-family: Arial, sans-serif;")
    }
    
    if (accessibilityOptions.creamBackground) {
      styles.push("background-color: #fdf6e3;")
    }
    
    if (accessibilityOptions.largeText) {
      styles.push("font-size: 14pt;")
    } else {
      styles.push("font-size: 12pt;")
    }
    
    if (accessibilityOptions.extraSpacing) {
      styles.push("line-height: 2;")
      styles.push("letter-spacing: 0.05em;")
    } else {
      styles.push("line-height: 1.6;")
    }

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Adapted Resource</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <style>
    @import url('https://fonts.cdnfonts.com/css/opendyslexic');
    
    body {
      ${styles.join('\n      ')}
      color: #2c3e50;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 { font-size: 1.8em; margin-bottom: 0.5em; color: #1e3d52; }
    h2 { font-size: 1.4em; margin-top: 1.5em; margin-bottom: 0.5em; color: #2d5a7b; }
    h3 { font-size: 1.2em; margin-top: 1.2em; margin-bottom: 0.4em; }
    
    p { margin-bottom: 1em; }
    
    ul, ol { margin-left: 1.5em; margin-bottom: 1em; }
    li { margin-bottom: 0.5em; }
    
    strong { font-weight: 600; }
    
    code {
      background: #f0f0f0;
      padding: 0.2em 0.4em;
      border-radius: 4px;
      font-family: monospace;
    }
    
    pre {
      background: #f0f0f0;
      padding: 1em;
      border-radius: 8px;
      overflow-x: auto;
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
    }
    
    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }
    
    th { background: #f5f5f5; }
    
    .katex { font-size: 1.1em; }
    
    @media print {
      body { padding: 20px; }
    }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>`
  }

  const downloadAsHTML = () => {
    const html = generateStyledHTML()
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'adapted-resource.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadAsWord = async () => {
    // Create a simple Word-compatible HTML
    const html = generateStyledHTML()
    
    // Word can open HTML files
    const blob = new Blob([html], { type: 'application/msword' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'adapted-resource.doc'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadAsPDF = () => {
    // Open print dialog - user can save as PDF
    const printWindow = window.open('', '_blank')
    printWindow.document.write(generateStyledHTML())
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  const sampleMarkdown = `# Macbeth: Act 1 Scene 1

## Learning Objective

By the end of this lesson, you will understand how Shakespeare creates a dark and supernatural atmosphere in the opening scene.

## Key Vocabulary

- **Atmosphere**: The mood or feeling created in a scene
- **Supernatural**: Things that cannot be explained by nature or science
- **Foreshadowing**: Hints about what will happen later in the play

## Task 1: Read the Extract (10 minutes)

Read the opening lines of Macbeth carefully.

> "When shall we three meet again?
> In thunder, lightning, or in rain?"

**Step 1:** Read the extract twice.

**Step 2:** Underline any words that create a dark mood.

**Step 3:** Circle any references to weather.

## Task 2: Answer These Questions (15 minutes)

1. Who are the three characters speaking? [1 mark]

2. What type of weather do they mention? [2 marks]

3. Why do you think Shakespeare chose to start the play this way? [3 marks]

---

**Remember:** A good answer will include a quote from the text.

## Maths Example

The quadratic formula is: $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$

For a right triangle, the Pythagorean theorem states:

$$a^2 + b^2 = c^2$$
`

  return (
    <div className="wizard">
      <div className="wizard-header">
        <h2 className="wizard-title">📄 Convert to Word / PDF</h2>
        <p className="wizard-subtitle">
          Convert the AI's Markdown output into a formatted document with accessibility options
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
            <div className="form-group">
              <label className="form-label">Paste the AI's Response</label>
              <textarea
                className="form-textarea"
                style={{ minHeight: '300px', fontFamily: 'monospace' }}
                placeholder="Paste the Markdown content from ChatGPT or Claude here..."
                value={markdownInput}
                onChange={(e) => setMarkdownInput(e.target.value)}
              />
              <p className="form-hint">
                The AI's response should be in Markdown format with headings (#), bold (**), and lists (-)
              </p>
            </div>

            <button 
              className="btn btn-secondary"
              onClick={() => setMarkdownInput(sampleMarkdown)}
              style={{ marginTop: '8px' }}
            >
              📝 Load Sample Content
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="accessibility-options">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={accessibilityOptions.dyslexicFont}
                  onChange={() => toggleOption('dyslexicFont')}
                />
                Dyslexia-friendly font
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={accessibilityOptions.creamBackground}
                  onChange={() => toggleOption('creamBackground')}
                />
                Cream background
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={accessibilityOptions.largeText}
                  onChange={() => toggleOption('largeText')}
                />
                Larger text (14pt)
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={accessibilityOptions.extraSpacing}
                  onChange={() => toggleOption('extraSpacing')}
                />
                Extra line spacing
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">Preview</label>
              <div 
                ref={previewRef}
                className="convert-preview"
                style={getPreviewStyles()}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div style={{ 
              background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f7f4 100%)',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
                ✅ Your document is ready!
              </h3>
              <p style={{ color: '#5a6c7d', marginBottom: '24px' }}>
                Choose a format to download. All accessibility options have been applied.
              </p>
              
              <div className="download-buttons" style={{ justifyContent: 'center' }}>
                <button className="btn btn-primary btn-large" onClick={downloadAsWord}>
                  📄 Download as Word (.doc)
                </button>
                <button className="btn btn-success btn-large" onClick={downloadAsPDF}>
                  📕 Save as PDF (Print)
                </button>
                <button className="btn btn-secondary btn-large" onClick={downloadAsHTML}>
                  🌐 Download as HTML
                </button>
              </div>
            </div>

            <div style={{ 
              background: '#fff9e6',
              border: '1px solid #f0e6cc',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <h4 style={{ marginBottom: '12px', color: '#8b6914' }}>💡 Tips</h4>
              <ul style={{ marginLeft: '20px', color: '#5a6c7d' }}>
                <li><strong>Word:</strong> Opens in Microsoft Word or Google Docs. You can edit further there.</li>
                <li><strong>PDF:</strong> Opens the print dialog. Select "Save as PDF" as the printer.</li>
                <li><strong>HTML:</strong> Opens in any web browser. Good for online sharing.</li>
              </ul>
            </div>

            <div className="form-group" style={{ marginTop: '24px' }}>
              <label className="form-label">Final Preview</label>
              <div 
                className="convert-preview"
                style={getPreviewStyles()}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="wizard-actions">
        <div>
          {step > 1 && (
            <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>
              ← Back
            </button>
          )}
        </div>
        <div>
          {step === 1 && (
            <button 
              className="btn btn-primary" 
              onClick={() => setStep(2)}
              disabled={!markdownInput.trim()}
            >
              Next: Preview →
            </button>
          )}
          {step === 2 && (
            <button className="btn btn-primary" onClick={() => setStep(3)}>
              Next: Download →
            </button>
          )}
          {step === 3 && (
            <button className="btn btn-secondary" onClick={() => setStep(1)}>
              Convert Another
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConvertTab
