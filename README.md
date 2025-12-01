# AdaptEd - Prompt Generator for Inclusive Education

A web-based tool that generates detailed, condition-specific prompts to help teachers adapt educational resources for neurodivergent students.

## Features

### 🔄 Adapt Tab
Generate prompts to adapt existing resources for students with specific learning needs.

### ✨ Create Tab  
Generate prompts to create new resources from scratch with built-in accessibility features.

### ❓ Quiz Tab
Generate prompts to create accessible assessments and quizzes.

### 📄 Convert Tab
Convert AI-generated Markdown output to Word/PDF with accessibility formatting options:
- Dyslexia-friendly font
- Cream background
- Larger text
- Extra line spacing
- LaTeX math rendering

## Supported Conditions

- Autism Spectrum Condition (ASC)
- ADHD
- Dyslexia
- Dyscalculia
- Anxiety
- Visual Processing Difficulties
- Working Memory Difficulties
- Slow Processing Speed
- English as Additional Language (EAL)

## How It Works

1. **Select** the student's condition(s), subject, and key stage
2. **Choose** a tab (Adapt, Create, or Quiz)
3. **Follow** the step-by-step wizard
4. **Copy** the generated prompt
5. **Paste** into ChatGPT or Claude
6. **Convert** the AI's response to Word/PDF using the Convert tab

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

1. Fork or clone this repository
2. Update `vite.config.js` with your repository name:
   ```js
   base: '/your-repo-name/',
   ```
3. Push to GitHub
4. Go to Settings → Pages → Source → GitHub Actions
5. The site will deploy automatically on push to `main`

## Tech Stack

- **React** (Vite)
- **Marked** - Markdown parsing
- **KaTeX** - LaTeX math rendering
- **Pure CSS** - No UI framework dependencies

## Customisation

### Adding New Conditions

Edit `src/utils/promptGenerator.js` and add to the `CONDITION_PROMPTS` object:

```js
new_condition: {
  name: 'Condition Display Name',
  rules: `
    CONDITION-SPECIFIC ADAPTATIONS:
    
    1. RULE ONE: Description
       ✗ Bad example
       ✓ Good example
    
    2. RULE TWO: Description
       ...
  `
}
```

### Adding New Subjects

Edit the `SUBJECT_VOCABULARY` object in the same file.

## License

MIT License - feel free to use and adapt for your school or organisation.

## Created By

Built for SENCOs and teachers who want to create accessible resources without spending hours on manual adaptation.

---

**Note:** This tool generates prompts only. You need access to ChatGPT, Claude, or another AI assistant to generate the actual adapted content.
