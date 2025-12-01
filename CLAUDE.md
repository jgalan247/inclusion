# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdaptEd is a React web application that generates AI prompts to help teachers and SENCOs adapt educational resources for neurodivergent students. It creates specialized prompts for ChatGPT/Claude to produce inclusive educational materials.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to /dist (GitHub Pages base path: /adapted/)
npm run lint     # ESLint on .js/.jsx files
npm run preview  # Preview production build
```

## Architecture

### Core Data Flow
- `App.jsx` manages a centralized `profile` object: `{ conditions: [], subject: '', keyStage: '' }`
- Profile is passed down to all tab components
- Each tab uses the profile to generate context-aware prompts

### Tab Components (src/components/)
- **AdaptTab**: Wizard for adapting existing resources
- **CreateTab**: Wizard for creating new resources from scratch
- **QuizTab**: Wizard for generating assessments
- **ConvertTab**: Markdown-to-Word/PDF converter with accessibility styling

### Prompt Generation (src/utils/promptGenerator.js)
Core business logic file containing:
- `CONDITION_PROMPTS`: Rules for 9 conditions (Autism, ADHD, Dyslexia, etc.) with Bad/Good examples
- `SUBJECT_VOCABULARY`: Protected technical terms per subject
- `KEY_STAGE_DESCRIPTIONS`: Age-appropriate guidance (KS1-KS5)
- Export functions: `generateAdaptPrompt()`, `generateCreatePrompt()`, `generateQuizPrompt()`

### Component Patterns
- Step-based wizard UI with progress indicators
- Local useState hooks for wizard state per tab
- Markdown rendering via Marked.js with KaTeX for LaTeX math

## Key Technologies
- React 19 + Vite 7
- Marked (markdown) + KaTeX (math rendering)
- docx + html2pdf.js (document export)
- Pure CSS with custom properties (no UI framework)

## Extending the System
- **New conditions**: Add to `CONDITION_PROMPTS` object in promptGenerator.js
- **New subjects**: Add to `SUBJECT_VOCABULARY` object
- **New key stages**: Add to `KEY_STAGES` array and `KEY_STAGE_DESCRIPTIONS` object
