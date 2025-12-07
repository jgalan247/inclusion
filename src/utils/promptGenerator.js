// Task types for context-aware rules
const TASK_TYPES = {
  ADAPT: 'adapt',
  CREATE: 'create',
  QUIZ: 'quiz'
}

// Subject-specific scaffolding instructions
const SUBJECT_SCAFFOLDING = {
  maths: {
    worked: 'worked examples with step-by-step solutions',
    vocab: 'key formulas and definitions in a reference box',
    starter: 'sentence starters like "First I will...", "The answer is ___ because..."',
    visual: 'number lines, diagrams, or visual representations of the problem'
  },
  science: {
    worked: 'worked examples showing method and calculations',
    vocab: 'key scientific terms with definitions',
    starter: 'sentence starters like "I predict... because...", "The results show..."',
    visual: 'diagrams, labelled drawings, or flowcharts'
  },
  english: {
    worked: 'model answers or annotated examples',
    vocab: 'key literary terms with definitions and examples',
    starter: 'sentence starters like "The writer uses... to show...", "This suggests that..."',
    visual: 'graphic organisers, quote banks, or character maps'
  },
  history: {
    worked: 'model paragraphs showing PEE/PEEL structure',
    vocab: 'key historical terms and dates',
    starter: 'sentence starters like "This source suggests...", "One reason for... was..."',
    visual: 'timelines, source analysis frames, or comparison tables'
  },
  geography: {
    worked: 'case study examples with annotations',
    vocab: 'key geographical terms with definitions',
    starter: 'sentence starters like "The map shows...", "This happens because..."',
    visual: 'maps, diagrams, or annotated photos'
  },
  computing: {
    worked: 'code examples with line-by-line explanations',
    vocab: 'key programming terms and syntax',
    starter: 'code templates or pseudocode outlines',
    visual: 'flowcharts, trace tables, or diagrams'
  }
}

// Get scaffolding for subject (default to maths style)
function getScaffolding(subject) {
  return SUBJECT_SCAFFOLDING[subject] || SUBJECT_SCAFFOLDING.maths
}

// Neurologically-specific condition rules
// Each condition targets the actual cognitive/processing differences

const CONDITION_RULES = {
  autism: {
    name: 'Autism Spectrum Condition',
    // ASC: Difficulty with implicit meaning, need for predictability, literal interpretation
    getCore: (subject) => {
      const base = `- LITERAL LANGUAGE: No idioms, metaphors, or sarcasm—say exactly what you mean
- EXPLICIT SEQUENCE: Number every step; never assume they'll infer the next action
- CLEAR REFERENTS: Replace "it", "this", "they" with the specific noun
- PRECISE QUANTITIES: "Write 3 sentences" not "Write a few sentences"
- PREDICTABLE STRUCTURE: Same layout pattern throughout; signal any changes`
      // Subject-specific additions
      if (subject === 'english') {
        return base + `\n- Explain figurative language when analysing texts ("This metaphor means...")`
      }
      if (subject === 'maths' || subject === 'science') {
        return base + `\n- State exactly what format the answer should be in`
      }
      return base
    },
    quiz: `- Single, unambiguous instruction per question
- State exactly how many points/reasons required`
  },

  adhd: {
    name: 'ADHD',
    // ADHD: Executive function challenges, need for novelty, difficulty sustaining attention
    getCore: (subject) => {
      const base = `- CHUNKED CONTENT: Max 3-4 items per section; one concept per chunk
- TIME ANCHORS: Estimate for each task ("~5 mins") to aid time-blindness
- PROGRESS TRACKING: Checkboxes ☐ to show completion and maintain momentum
- VISUAL SIGNPOSTING: Bold key words; clear START/STOP markers
- VARIED ACTIVITIES: Mix question types to maintain engagement`
      if (subject === 'english' || subject === 'history') {
        return base + `\n- Break long texts into labelled sections with specific focus questions`
      }
      if (subject === 'maths') {
        return base + `\n- One problem type per section; clear transition between topics`
      }
      return base
    },
    quiz: `- Short question stems; avoid multi-part questions
- Visual breaks between questions (spacing/lines)`
  },

  dyslexia: {
    name: 'Dyslexia',
    // Dyslexia: Phonological processing, decoding difficulties, working memory load from reading
    getCore: (subject) => {
      const base = `- REDUCED READING LOAD: Short sentences (max 15-20 words); one idea per sentence
- DECODABLE VOCABULARY: Simple words for instructions; keep technical terms with definitions
- ACTIVE CONSTRUCTIONS: "Calculate the area" not "The area should be calculated"
- SCANNABLE FORMAT: Bullets, numbered lists; avoid dense paragraphs`
      if (subject === 'english') {
        return base + `\n- Provide key quotes rather than requiring students to find them
- Audio/visual alternatives where possible`
      }
      if (subject === 'maths' || subject === 'science') {
        return base + `\n- Minimise word problems; use diagrams and symbols where possible`
      }
      return base
    },
    quiz: `- Keep question stems short and direct
- Bold key instruction words (calculate, explain, describe)`
  },

  dyscalculia: {
    name: 'Dyscalculia',
    // Dyscalculia: Number sense difficulties, spatial aspects of maths, procedural memory for algorithms
    getCore: (subject) => {
      // Dyscalculia rules are primarily relevant for maths/science
      if (subject === 'maths') {
        return `- CONCRETE FIRST: Physical/visual representations before abstract (○○○, number lines, place value grids)
- PROCEDURAL SCAFFOLDING: Every calculation broken into numbered micro-steps
- FORMULA REFERENCE: Keep formulas visible; don't require memorisation
- ESTIMATION HABITS: "Will the answer be bigger/smaller than...?" before calculating
- SINGLE OPERATION: One operation type per section; explicit transition between types
- REAL CONTEXTS: Embed numbers in meaningful scenarios`
      }
      if (subject === 'science') {
        return `- CALCULATION SUPPORT: Step-by-step method boxes for any calculations
- FORMULA REFERENCE: Provide all formulas; focus on understanding not recall
- VISUAL DATA: Prefer diagrams/graphs over tables of numbers
- ESTIMATION: Encourage sense-checking ("Is this answer reasonable?")`
      }
      // For non-maths subjects, minimal rules
      return `- Provide any numerical information in multiple formats
- Don't assume comfort with dates, statistics, or data interpretation`
    },
    quiz: `- Provide formula sheet
- Include "estimate first" prompts
- Partial marks for correct method`
  },

  anxiety: {
    name: 'Anxiety',
    // Anxiety: Threat sensitivity, perfectionism, avoidance, physical symptoms under stress
    getCore: (subject) => {
      const base = `- LOW-THREAT LANGUAGE: "Try", "practice", "explore" not "must", "test", "exam"
- PERMISSION STATEMENTS: "It's okay to skip and return", "Ask for help anytime"
- REDUCE UNCERTAINTY: Clear expectations; "There are 5 questions. This should take about 15 minutes."
- NORMALISE STRUGGLE: "Many students find this challenging—take your time"
- GROWTH FRAMING: Focus on process/thinking, not just correct answers`
      if (subject === 'maths' || subject === 'science') {
        return base + `\n- Emphasise method marks; "Show your working—partial credit available"`
      }
      if (subject === 'english') {
        return base + `\n- "There's no single right answer—explain your interpretation"`
      }
      return base
    },
    quiz: `- Call it "practice activity" not "test"
- "Show your thinking" not "Get the right answer"
- Note partial credit is available`
  },

  visual_processing: {
    name: 'Visual Processing Difficulties',
    // Visual processing: Difficulty interpreting visual information, tracking, visual crowding
    getCore: (subject) => {
      const base = `- UNCLUTTERED LAYOUT: Maximum 1-2 elements per visual area; generous margins
- CONSISTENT VISUAL LANGUAGE: Same fonts, heading sizes, spacing throughout
- CLEAR HIERARCHY: Obvious distinction between headings, subheadings, body text
- DESCRIBED VISUALS: Text description of any image, graph, or diagram content`
      if (subject === 'maths' || subject === 'science') {
        return base + `\n- Large, well-spaced numbers and symbols
- Avoid crowded diagrams; label clearly`
      }
      if (subject === 'geography') {
        return base + `\n- Describe map features in text; use high-contrast colours`
      }
      return base
    },
    quiz: `- One question visible at a time where possible
- Clear spacing between answer options
- Avoid questions requiring detailed visual interpretation`
  },

  working_memory: {
    name: 'Working Memory Difficulties',
    // Working memory: Limited capacity for holding/manipulating information simultaneously
    getCore: (subject) => {
      const base = `- EXTERNAL MEMORY AIDS: Reference boxes with key facts visible throughout
- SINGLE-STEP INSTRUCTIONS: One action per instruction; sequence numbered separately
- INFORMATION AT POINT OF NEED: Repeat relevant facts where needed; don't assume recall
- REDUCED COGNITIVE LOAD: Remove non-essential information`
      if (subject === 'maths') {
        return base + `\n- Keep formulas visible; provide worked example alongside practice questions`
      }
      if (subject === 'english' || subject === 'history') {
        return base + `\n- Provide key quotes/facts alongside questions that need them`
      }
      if (subject === 'science') {
        return base + `\n- Method steps visible during experiments; key definitions in margin`
      }
      return base
    },
    quiz: `- Include all information needed within each question
- Don't require recall from a passage read earlier
- Keep instructions visible`
  },

  slow_processing: {
    name: 'Slow Processing Speed',
    // Slow processing: Needs more time to take in, process, and respond to information
    getCore: (subject) => {
      const base = `- REDUCED QUANTITY, SAME DEPTH: Fewer questions covering same learning objectives
- STREAMLINED LANGUAGE: Direct instructions; remove filler words and redundancy
- TIERED TASKS: Mark "Core" (must do) vs "Extension" (if time permits)
- TIME GUIDANCE: "Standard: 30 min | Extended: 45 min"`
      if (subject === 'english' || subject === 'history') {
        return base + `\n- Shorter source texts or provide summary alongside full text`
      }
      if (subject === 'maths') {
        return base + `\n- Fewer practice questions; focus on depth of understanding`
      }
      return base
    },
    quiz: `- Mark questions as Core/Extension
- Provide timing guidance (standard + extended time)
- Fewer questions testing same skills`
  },

  eal: {
    name: 'English as Additional Language',
    // EAL: Language barrier, cultural unfamiliarity, academic English vs conversational
    getCore: (subject) => {
      const base = `- SIMPLIFIED INSTRUCTION LANGUAGE: Short sentences; common vocabulary for non-technical words
- NO IDIOMS OR CULTURAL ASSUMPTIONS: "At a market" not "At a boot sale"; diverse names
- TECHNICAL VOCABULARY SUPPORT: **Bold** subject terms with brief definition in brackets
- GLOSSARY: Key terms box at start with simple definitions`
      if (subject === 'english') {
        return base + `\n- Explain historical/cultural context of texts
- Provide vocabulary lists for literary analysis`
      }
      if (subject === 'history') {
        return base + `\n- Explain UK-specific historical context that may be unfamiliar`
      }
      return base
    },
    quiz: `- Culturally neutral scenarios and names
- Define complex vocabulary within the question
- Avoid idiomatic question phrasing`
  }
}

// Build condition rules based on task type and subject
function getConditionRules(conditionKey, subject, taskType = TASK_TYPES.CREATE) {
  const condition = CONDITION_RULES[conditionKey]
  if (!condition) return ''

  // Get subject-specific core rules
  const coreRules = condition.getCore ? condition.getCore(subject) : (condition.core || '')
  let rules = `${condition.name.toUpperCase()}:\n${coreRules}`

  // Add quiz-specific rules if applicable
  if (taskType === TASK_TYPES.QUIZ && condition.quiz) {
    rules += `\n${condition.quiz}`
  }

  return rules
}

// Legacy support - get full CONDITION_PROMPTS object
const CONDITION_PROMPTS = Object.fromEntries(
  Object.entries(CONDITION_RULES).map(([key, value]) => [
    key,
    { name: value.name, getRules: (subject) => getConditionRules(key, subject) }
  ])
)

// Subject-specific protected vocabulary
const SUBJECT_VOCABULARY = {
  english: 'metaphor, simile, personification, alliteration, protagonist, antagonist, soliloquy, monologue, dramatic irony, foreshadowing, pathetic fallacy, iambic pentameter, sonnet, stanza, rhyme scheme, narrator, first person, third person, omniscient, setting, plot, theme, motif, symbolism, imagery, tone, mood, genre, tragedy, comedy, prose, verse',
  maths: 'integer, fraction, decimal, percentage, ratio, proportion, algebra, equation, expression, variable, coefficient, quadratic, linear, gradient, intercept, coordinate, axis, graph, function, domain, range, sequence, term, formula, theorem, proof, angle, polygon, circle, radius, diameter, circumference, area, perimeter, volume, surface area, probability, statistics, mean, median, mode, range',
  science: 'hypothesis, variable, independent variable, dependent variable, control variable, method, results, conclusion, evaluation, accuracy, precision, reliability, validity, atom, molecule, element, compound, mixture, reaction, product, reactant, catalyst, enzyme, cell, nucleus, chromosome, gene, DNA, photosynthesis, respiration, ecosystem, food chain, force, energy, power, voltage, current, resistance',
  history: 'primary source, secondary source, chronology, cause, consequence, significance, interpretation, evidence, bias, propaganda, treaty, revolution, reform, empire, colony, democracy, dictatorship, monarchy, parliament, constitution, civil rights, industrialisation, urbanisation, nationalism, imperialism',
  geography: 'physical geography, human geography, climate, weather, erosion, deposition, transportation, tectonic plates, earthquake, volcano, river, coast, ecosystem, biome, population, migration, urbanisation, development, sustainability, renewable, non-renewable, globalisation, trade, GDP',
  computing: 'algorithm, variable, constant, data type, integer, string, boolean, array, loop, iteration, selection, sequence, function, procedure, parameter, argument, input, output, syntax, debugging, decomposition, abstraction, binary, hexadecimal, CPU, RAM, storage, network, protocol, encryption',
}

// Key stage descriptors
const KEY_STAGE_DESCRIPTIONS = {
  ks1: 'Year 1-2 students (ages 5-7). Use very simple vocabulary, short sentences, and lots of visual support.',
  ks2: 'Year 3-6 students (ages 7-11). Use clear, accessible language with some subject-specific vocabulary introduced with support.',
  ks3: 'Year 7-9 students (ages 11-14). Use age-appropriate academic language. Students are developing subject expertise.',
  ks4: 'Year 10-11 students (ages 14-16). GCSE level. Use full academic and technical vocabulary appropriate to the subject.',
  ks5: 'Year 12-13 students (ages 16-18). A-Level. Use sophisticated academic language and expect higher-order thinking.',
}

// Output format specifications
const OUTPUT_FORMAT_SPECS = {
  worksheet: {
    name: 'Worksheet',
    instructions: `OUTPUT FORMAT: WORKSHEET (1-2 pages)
- Create a structured worksheet with clear sections
- Include 5-10 questions or activities
- Add space indicators for student responses: [Write your answer here - 3 lines]
- Include a learning objective at the top
- Add success criteria or "I can..." statements`
  },
  full_lesson: {
    name: 'Full Lesson Plan',
    instructions: `OUTPUT FORMAT: FULL LESSON PLAN (3-5 pages)
- Include a STARTER activity (5-10 minutes) with hook/engagement
- Include MAIN ACTIVITIES (20-30 minutes) with differentiated tasks
- Include a PLENARY (5-10 minutes) with review/assessment
- Add timing for each section
- Include teacher notes in [TEACHER NOTE: ...]
- Add suggested resources and equipment needed
- Include differentiation notes for different ability levels`
  },
  presentation: {
    name: 'Presentation',
    instructions: `OUTPUT FORMAT: PRESENTATION (5-10 slides)
- Structure as individual slides using "## Slide 1: Title" format
- Each slide should have a clear heading and 3-5 bullet points maximum
- Include SPEAKER NOTES after each slide in [SPEAKER NOTES: ...]
- Slide 1: Title slide with learning objective
- Slides 2-3: Introduction/recap
- Slides 4-7: Main content (one concept per slide)
- Slides 8-9: Activities/practice
- Slide 10: Plenary/summary
- Keep text large and readable - minimal text per slide`
  },
  handout: {
    name: 'Handout (PDF)',
    instructions: `OUTPUT FORMAT: HANDOUT / PDF (3-4 pages)

Structure the handout with these sections:

## 1. TITLE & INTRODUCTION
- Clear title at the top
- Learning objectives (2-3 bullet points)
- Brief introduction explaining what students will learn (2-3 sentences)

## 2. KEY CONCEPTS & THEORY
- Explain the main concepts in detail with full paragraphs
- Use clear headings for each concept
- Include definitions in **bold** or in boxes
- Add image placeholders: 📷 **ADD IMAGE HERE:** [description]

## 3. WORKED EXAMPLES
- Provide 2-3 fully worked examples with step-by-step explanations
- Show the thinking process, not just the answer
- Use numbered steps: Step 1, Step 2, Step 3...
- Include image placeholders where visuals help: 📷 **ADD IMAGE HERE:** [description]

## 4. GUIDED PRACTICE
- 3-4 questions with hints or scaffolding
- Partial solutions or sentence starters provided
- Space for student answers: [Write your answer here - 3 lines]

## 5. INDEPENDENT PRACTICE
- 4-6 questions for students to try alone
- Increasing difficulty
- Include answer lines

## 6. SUMMARY BOX
- Key points to remember (bullet list)
- Common mistakes to avoid
- Extension challenge for early finishers

Make this a comprehensive learning resource with substantial text content explaining the theory.`
  },
  revision_guide: {
    name: 'Revision Guide',
    instructions: `OUTPUT FORMAT: REVISION GUIDE (2-3 pages)
- Summarise KEY CONCEPTS clearly with definitions
- Include WORKED EXAMPLES for each concept
- Add REMEMBER boxes with key facts
- Include COMMON MISTAKES to avoid
- Add PRACTICE QUESTIONS at the end with answers
- Use visual aids: diagrams, tables, flowcharts where helpful
- Make it scannable with clear headings and bullet points`
  },
  same_as_original: {
    name: 'Same as Original',
    instructions: `OUTPUT FORMAT: MATCH ORIGINAL
- Keep the same structure and format as the input resource
- Maintain similar length (or longer with added scaffolding)
- Preserve all sections in the same order`
  }
}

// Generate the ADAPT prompt - for adapting existing resources
export function generateAdaptPrompt(profile, resourceContent = '', outputFormat = 'same_as_original') {
  const conditionNames = profile.conditions.map(c => CONDITION_RULES[c]?.name).filter(Boolean)
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''
  const formatSpec = OUTPUT_FORMAT_SPECS[outputFormat] || OUTPUT_FORMAT_SPECS.same_as_original
  const scaffolding = getScaffolding(profile.subject)
  const needsMaths = ['maths', 'science', 'computing'].includes(profile.subject)

  let prompt = `Adapt this ${profile.keyStage.toUpperCase()} ${profile.subject} resource for students with ${conditionNames.join(' and ')}.

KEY STAGE: ${ksDescription}

ADAPTATIONS REQUIRED:
`

  // Add condition-specific rules
  profile.conditions.forEach(c => {
    const rules = getConditionRules(c, profile.subject, TASK_TYPES.ADAPT)
    if (rules) prompt += rules + '\n\n'
  })

  prompt += `ADD SCAFFOLDING:
- ${scaffolding.worked}
- ${scaffolding.vocab}
- ${scaffolding.starter}
- ${scaffolding.visual}

${formatSpec.instructions}

FORMAT: Markdown${needsMaths ? ', LaTeX for maths ($\\frac{1}{2}$, $x^2$)' : ''}. End with "## Adaptations Made" summary.

RESOURCE:
${resourceContent || '[PASTE RESOURCE HERE]'}
`

  return prompt
}

// Generate the CREATE prompt - for creating new resources from scratch
export function generateCreatePrompt(profile, options = {}) {
  const { topic, learningObjectives, resourceType, duration, includeStarter, includeMain, includePlenary } = options
  const conditionNames = profile.conditions.map(c => CONDITION_RULES[c]?.name).filter(Boolean)
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''
  const scaffolding = getScaffolding(profile.subject)
  const needsMaths = ['maths', 'science', 'computing'].includes(profile.subject)

  let structure = []
  if (includeStarter) structure.push('Starter (5-10 min)')
  if (includeMain) structure.push('Main (20-30 min)')
  if (includePlenary) structure.push('Plenary (5-10 min)')

  let prompt = `Create a ${profile.keyStage.toUpperCase()} ${profile.subject} ${resourceType} on "${topic || '[Topic]'}" for students with ${conditionNames.join(' and ')}.

LEARNING OBJECTIVES: ${learningObjectives || '[Not specified]'}
DURATION: ${duration || '40'} min | KEY STAGE: ${ksDescription}
${structure.length > 0 ? `STRUCTURE: ${structure.join(' → ')}` : ''}

ACCESSIBILITY:
`

  // Add condition-specific rules
  profile.conditions.forEach(c => {
    const rules = getConditionRules(c, profile.subject, TASK_TYPES.CREATE)
    if (rules) prompt += rules + '\n\n'
  })

  prompt += `INCLUDE:
- Learning objective at top
- ${scaffolding.vocab}
- ${scaffolding.worked}
- ${scaffolding.starter}
- ${scaffolding.visual}
- Time per section, progression (recall → apply), extension task

FORMAT: Markdown${needsMaths ? ', LaTeX for maths ($\\frac{1}{2}$, $x^2$)' : ''}.
`

  return prompt
}

// Generate the QUIZ prompt - for creating assessments
export function generateQuizPrompt(profile, options = {}) {
  const { sourceType, sourceTopic, sourceText, questionTypes, questionCount, difficulty, includeAnswers, examBoard } = options
  const conditionNames = profile.conditions.map(c => CONDITION_RULES[c]?.name).filter(Boolean)
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''
  const needsMaths = ['maths', 'science', 'computing'].includes(profile.subject)

  const typeMap = {
    multiple_choice: 'MCQ',
    short_answer: 'Short answer',
    true_false: 'True/False',
    matching: 'Matching',
    fill_blank: 'Fill blank',
    extended: 'Extended'
  }

  const selectedTypes = (questionTypes || ['multiple_choice', 'short_answer'])
    .map(t => typeMap[t])
    .join(', ')

  const topicLine = sourceType === 'topic' ? `TOPIC: ${sourceTopic}` : ''
  const textBlock = sourceType === 'text' ? `SOURCE TEXT:\n${sourceText}\n` : ''

  let prompt = `Create a ${questionCount || 10}-question ${profile.subject} assessment for ${profile.keyStage.toUpperCase()} students with ${conditionNames.join(' and ')}.

${topicLine}${textBlock}
QUESTIONS: ${questionCount || 10} (${selectedTypes}) | DIFFICULTY: ${difficulty || 'medium'}
KEY STAGE: ${ksDescription}
${examBoard && ['ks4', 'ks5'].includes(profile.keyStage) ? `EXAM BOARD STYLE: ${examBoard}` : ''}

ACCESSIBILITY:
`

  // Add condition-specific rules (including quiz-specific additions)
  profile.conditions.forEach(c => {
    const rules = getConditionRules(c, profile.subject, TASK_TYPES.QUIZ)
    if (rules) prompt += rules + '\n\n'
  })

  prompt += `FORMAT:
- **Q1** [X marks], separate with ---
- One concept per question, clear wording
- MCQ: ☐ options, plausible distractors
- Answer lines: _____________${needsMaths ? `
- LaTeX for maths ($\\frac{1}{2}$, $x^2$)` : ''}

${includeAnswers ? `Include "## Answers" with mark scheme.` : `No answers (student version).`}

End: Total marks, timing (standard + extended).
`

  return prompt
}

export { CONDITION_PROMPTS, SUBJECT_VOCABULARY, KEY_STAGE_DESCRIPTIONS }
