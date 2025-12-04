# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdaptEd is a React web application that generates AI prompts to help teachers and SENCOs adapt educational resources for neurodivergent students. It creates specialized prompts for ChatGPT/Claude to produce inclusive educational materials.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to /dist (DigitalOcean App Platform, base path: /)
npm run lint     # ESLint on .js/.jsx files
npm run preview  # Preview production build
```

## Architecture

### Core Data Flow
- `App.jsx` manages a centralized `profile` object: `{ conditions: [], subject: '', keyStage: '' }`
- Profile persists to localStorage (`adaptedProfile` key) and reloads on refresh
- Profile is passed down to all tab components
- Maximum 3 conditions can be selected at once

### Tab Components (src/components/)
- **AdaptTab**: Single-page form for adapting existing resources with output format selection
- **CreateTab**: Wizard for creating new resources from scratch
- **QuizTab**: Wizard for generating assessments with question type selection
- **ConvertTab**: Markdown-to-Word/PDF converter with accessibility styling (dyslexic font, cream background, large text, extra spacing)

### Prompt Generation (src/utils/promptGenerator.js)
Core business logic file (~770 lines) containing:
- `CONDITION_PROMPTS`: Rules for 9 conditions (Autism, ADHD, Dyslexia, Dyscalculia, Anxiety, Visual Processing, Working Memory, Slow Processing, EAL) with ✗ Bad / ✓ Good examples
- `SUBJECT_VOCABULARY`: Protected technical terms per subject (english, maths, science, history, geography, computing)
- `KEY_STAGE_DESCRIPTIONS`: UK age-appropriate guidance (KS1-KS5)
- `OUTPUT_FORMAT_SPECS`: Templates for worksheet, full_lesson, presentation, handout, revision_guide
- Export functions: `generateAdaptPrompt()`, `generateCreatePrompt()`, `generateQuizPrompt()`

### Math Rendering
ConvertTab uses custom `renderMath()` function to parse LaTeX:
- Display math: `$$...$$` (centered, own line)
- Inline math: `$...$`
- Prompts instruct AI to use LaTeX notation (e.g., `$\frac{1}{2}$`, `$x^2$`, `$\sqrt{16}$`)

## Key Technologies
- React 19 + Vite 7
- Marked (markdown) + KaTeX (math rendering)
- file-saver + docx (Word export via HTML)
- Pure CSS with custom properties (no UI framework)

## Extending the System
- **New conditions**: Add to `CONDITION_PROMPTS` object in promptGenerator.js with `name` and `rules` (use ✗/✓ format for examples)
- **New subjects**: Add to `SUBJECT_VOCABULARY` object with comma-separated technical terms
- **New key stages**: Add to `KEY_STAGE_DESCRIPTIONS` object
- **New output formats**: Add to `OUTPUT_FORMAT_SPECS` object with `name` and `instructions`
