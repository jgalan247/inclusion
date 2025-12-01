// Condition-specific adaptation rules
const CONDITION_PROMPTS = {
  autism: {
    name: 'Autism Spectrum Condition',
    rules: `
AUTISM-SPECIFIC ADAPTATIONS:

1. LITERAL LANGUAGE: Replace ALL idioms, metaphors, and figurative expressions with literal equivalents.
   ✗ "Shakespeare hit the nail on the head"
   ✓ "Shakespeare expressed this idea exactly right"
   ✗ "The character is over the moon"
   ✓ "The character is extremely happy"
   ✗ "It's raining cats and dogs"
   ✓ "It is raining very heavily"

2. EXPLICIT INSTRUCTIONS: Convert implied instructions to explicit, numbered steps.
   ✗ "Answer the questions below"
   ✓ "Step 1: Read question 1 carefully.
      Step 2: Write your answer on the line provided.
      Step 3: Check your answer makes sense.
      Step 4: Move to question 2."

3. UNAMBIGUOUS PRONOUNS: Replace pronouns with the noun they refer to when there is any possibility of confusion.
   ✗ "Macbeth sees Banquo's ghost. He is terrified by it."
   ✓ "Macbeth sees Banquo's ghost. Macbeth is terrified by the ghost."

4. CONCRETE QUANTITIES: Replace vague quantities with specific numbers.
   ✗ "Write a few sentences"
   ✓ "Write 3-4 sentences"
   ✗ "Spend some time on this"
   ✓ "Spend 5 minutes on this"

5. PREDICTABLE STRUCTURE: Use consistent, numbered sections throughout.
   - Number all questions (1, 2, 3...)
   - Use clear headings for each section
   - Keep the same layout pattern throughout

6. CLEAR TRANSITIONS: Signal when moving between activities.
   "You have finished Section 1. Now move to Section 2."

7. REMOVE AMBIGUITY: If a question could be interpreted multiple ways, clarify exactly what is being asked.

8. EXPLICIT SUCCESS CRITERIA: Tell the student exactly what a good answer looks like.
   "A good answer will: (1) state your opinion, (2) give one reason, (3) use a quote from the text."
`
  },

  adhd: {
    name: 'ADHD',
    rules: `
ADHD-SPECIFIC ADAPTATIONS:

1. CHUNK CONTENT: Break long sections into smaller, numbered chunks.
   - Maximum 3-4 bullet points per section
   - One concept per paragraph
   - Clear visual separation between chunks

2. ADD TIME ESTIMATES: Include realistic time for each task.
   "This task should take about 5 minutes."
   "Section 1 (10 minutes) | Section 2 (15 minutes)"

3. PROGRESS INDICATORS: Add checkboxes or progress markers.
   ☐ Task 1: Read the extract
   ☐ Task 2: Answer questions 1-3
   ☐ Task 3: Complete the table

4. REDUCE TEXT DENSITY: Use more white space and shorter paragraphs.
   - Maximum 3 sentences per paragraph
   - Generous spacing between sections

5. HIGHLIGHT KEY INFORMATION: Use bold for critical words and instructions.
   "Read the text **carefully** and **underline** the key points."

6. INCLUDE BRAIN BREAKS: For longer resources, suggest short breaks.
   "BRAIN BREAK: Stand up, stretch, take 3 deep breaths, then continue."

7. ENGAGING HOOKS: Start sections with interesting facts or questions.
   "Did you know...?" or "What would you do if...?"

8. CLEAR START AND END POINTS: Make it obvious where to begin and when finished.
   "START HERE →" and "✓ You have completed this section!"

9. MINIMIZE DISTRACTIONS: Remove unnecessary decorative elements.
   - Only include images that serve educational purpose
   - Avoid cluttered layouts
`
  },

  dyslexia: {
    name: 'Dyslexia',
    rules: `
DYSLEXIA-SPECIFIC ADAPTATIONS:

1. SIMPLIFY SENTENCE STRUCTURE: Use shorter sentences with clear structure.
   ✗ "The character, who had been living in the castle for many years, decided that it was time to leave."
   ✓ "The character lived in the castle for many years. He decided to leave."

2. AVOID COMPLEX VOCABULARY: Use simpler alternatives for non-technical words.
   ✗ "approximately" → ✓ "about"
   ✗ "subsequently" → ✓ "then" or "after"
   ✗ "utilise" → ✓ "use"
   (Keep technical/subject vocabulary but add definitions)

3. ADD DEFINITIONS: Define difficult words in brackets on first use.
   "The protagonist (main character) faces a difficult choice."

4. USE ACTIVE VOICE: Convert passive sentences to active.
   ✗ "The ball was kicked by the boy"
   ✓ "The boy kicked the ball"

5. AVOID DOUBLE NEGATIVES: Rewrite to be clearer.
   ✗ "It is not uncommon"
   ✓ "It is common"

6. BULLET KEY INFORMATION: Present important facts as short bullet points.

7. VISUAL SUPPORTS: Suggest adding images, diagrams, or graphic organisers.
   [Add diagram here showing...]

8. LINE SPACING NOTE: Add instruction for teacher:
   "FORMATTING NOTE: Print with 1.5 or double line spacing. Consider cream/pastel paper."
`
  },

  dyscalculia: {
    name: 'Dyscalculia',
    rules: `
DYSCALCULIA-SPECIFIC ADAPTATIONS:

1. VISUAL NUMBER REPRESENTATIONS: Accompany numbers with visual aids.
   "3 items" → "3 items ○○○"
   Include number lines where helpful

2. STEP-BY-STEP CALCULATIONS: Break mathematical processes into clear steps.
   Step 1: Write down what you know
   Step 2: Identify the operation needed
   Step 3: Perform the calculation
   Step 4: Check your answer makes sense

3. CONCRETE EXAMPLES: Use real-world, tangible examples for mathematical concepts.
   ✗ "Calculate 3 × 4"
   ✓ "You have 3 bags. Each bag has 4 apples. How many apples in total?"

4. FORMULA BOXES: Provide formula reference boxes.
   ┌─────────────────────────┐
   │ Area = length × width   │
   └─────────────────────────┘

5. GRAPH PAPER SUGGESTION: Note when graph paper would help.
   "TEACHER NOTE: Provide graph paper for calculations."

6. ESTIMATION BEFORE CALCULATION: Ask students to estimate first.
   "Before calculating, estimate: Will the answer be more or less than 100?"

7. REDUCE COGNITIVE LOAD: Only one calculation type per section.
`
  },

  anxiety: {
    name: 'Anxiety',
    rules: `
ANXIETY-SPECIFIC ADAPTATIONS:

1. REASSURING LANGUAGE: Use calm, supportive tone throughout.
   ✗ "You must complete all questions"
   ✓ "Complete as many questions as you can"
   ✗ "This is a test"
   ✓ "This is a practice activity"

2. REMOVE PRESSURE WORDS: Avoid words that create stress.
   Avoid: must, have to, test, exam, fail, wrong, hurry
   Use: try, practice, activity, check, take your time

3. EXPLICIT PERMISSION STATEMENTS: Include reassuring permissions.
   "It is okay to:"
   - Re-read the text as many times as you need
   - Skip a question and come back to it
   - Ask for help if you're stuck
   - Take a short break if you need one

4. NORMALISE DIFFICULTY: Acknowledge that some parts may be challenging.
   "Some students find this question tricky. Take your time."

5. GROWTH MINDSET FRAMING: Focus on learning, not performance.
   ✗ "Get the right answer"
   ✓ "Show your thinking"

6. CLEAR EXPECTATIONS: Remove uncertainty about what's expected.
   "There are 10 questions. You have 30 minutes. This is not timed strictly."

7. OPTIONAL TIMERS: Make timing flexible.
   "Suggested time: 20 minutes (but take longer if you need)"
`
  },

  visual_processing: {
    name: 'Visual Processing Difficulties',
    rules: `
VISUAL PROCESSING ADAPTATIONS:

1. CLEAN LAYOUTS: Remove visual clutter.
   - One task per page where possible
   - Clear borders around text boxes
   - Generous margins

2. CONSISTENT FORMATTING: Use the same layout throughout.
   - Same font throughout
   - Same heading styles
   - Predictable structure

3. HIGH CONTRAST: Ensure text stands out from background.
   "FORMATTING NOTE: Use black text on cream/pale yellow background."

4. AVOID DENSE TEXT: Break up large text blocks.
   - Short paragraphs
   - Bullet points
   - White space between sections

5. CLEAR VISUAL HIERARCHY: Make headings obviously different from body text.
   - Larger headings
   - Bold section titles
   - Numbered sections

6. IMAGE DESCRIPTIONS: Describe any images in text.
   "[Image shows: A diagram of the water cycle with arrows showing evaporation, condensation, and precipitation]"
`
  },

  working_memory: {
    name: 'Working Memory Difficulties',
    rules: `
WORKING MEMORY ADAPTATIONS:

1. REPEAT KEY INFORMATION: Restate important facts where needed.
   Don't assume student remembers information from earlier in the document.

2. REFERENCE BOXES: Provide information boxes that stay visible.
   ┌─────────────────────────────────┐
   │ KEY INFORMATION                 │
   │ • Character: Macbeth            │
   │ • Setting: Scotland, 1040       │
   │ • Theme: Ambition and guilt     │
   └─────────────────────────────────┘

3. ONE INSTRUCTION AT A TIME: Break multi-step instructions into single steps.
   ✗ "Read the text, underline key words, and answer questions 1-5"
   ✓ "Step 1: Read the text
      Step 2: Underline key words
      Step 3: Answer questions 1-5"

4. REDUCE INFORMATION LOAD: Only include essential information.
   Remove tangential details that aren't necessary.

5. EXPLICIT CONNECTIONS: Link new information to what came before.
   "Remember from the previous section that Macbeth met the witches. Now..."
`
  },

  slow_processing: {
    name: 'Slow Processing Speed',
    rules: `
SLOW PROCESSING ADAPTATIONS:

1. REDUCE QUANTITY: Include fewer questions/tasks but maintain depth.
   "TEACHER NOTE: Student may complete questions 1, 3, 5 only."

2. DIRECT LANGUAGE: Get to the point quickly.
   ✗ "In order to successfully complete this task, you will need to..."
   ✓ "To complete this task:"

3. REMOVE REDUNDANCY: Say things once, clearly.
   Don't repeat information in multiple ways.

4. EXTENDED TIME NOTES: Include time accommodation guidance.
   "Standard time: 30 minutes. Extended time (×1.5): 45 minutes."

5. PRE-TEACHING VOCABULARY: List key words at the start.
   "Key words in this activity: [word 1], [word 2], [word 3]"

6. REDUCED READING LOAD: Shorten passages where possible.
   Provide text summaries alongside full texts.
`
  },

  eal: {
    name: 'English as Additional Language',
    rules: `
EAL ADAPTATIONS:

1. SIMPLIFIED NON-TECHNICAL LANGUAGE: Use simple English for instructions.
   ✗ "Approximately calculate the perimeter"
   ✓ "Find the perimeter" (keep "perimeter" as technical term)

2. REMOVE IDIOMS AND CULTURAL REFERENCES:
   ✗ "At a boot sale, John buys..."
   ✓ "At a market, John buys..."
   ✗ British slang or colloquialisms

3. CLEAR SENTENCE STRUCTURES:
   - Subject-verb-object order
   - Avoid complex subordinate clauses
   - One idea per sentence

4. VOCABULARY SUPPORT: Bold technical terms and provide definitions.
   "the **perimeter** (the distance around the outside)"

5. CULTURAL NEUTRALITY:
   - Explain any cultural references
   - Use internationally understood contexts
   - Use diverse names in examples

6. GLOSSARY: Include a key terms glossary at the start.
   ┌────────────────────────────────┐
   │ KEY TERMS                      │
   │ perimeter = distance around    │
   │ calculate = work out           │
   │ approximately = about          │
   └────────────────────────────────┘
`
  }
}

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

// Generate the complete prompt
export function generateAdaptPrompt(profile, resourceContent = '') {
  const conditions = profile.conditions.map(c => CONDITION_PROMPTS[c]).filter(Boolean)
  const subjectVocab = SUBJECT_VOCABULARY[profile.subject] || ''
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''

  let prompt = `You are an expert SENCO and ${profile.subject} teacher specialising in adapting educational resources for students with ${conditions.map(c => c.name).join(' and ')}.

YOUR TASK:
Adapt the ${profile.keyStage.toUpperCase()} ${profile.subject} resource provided below. Preserve all educational content and learning objectives while making it accessible for a student with ${conditions.map(c => c.name).join(' and ')}.

KEY STAGE: ${profile.keyStage.toUpperCase()} - ${ksDescription}

═══════════════════════════════════════════════════════════════════════════════
ADAPTATION RULES — APPLY ALL OF THESE:
═══════════════════════════════════════════════════════════════════════════════
`

  // Add condition-specific rules
  conditions.forEach(condition => {
    prompt += condition.rules + '\n'
  })

  // Add protected vocabulary
  prompt += `
───────────────────────────────────────────────────────────────────────────────

PROTECTED CONTENT — DO NOT CHANGE:
- Subject-specific technical vocabulary: ${subjectVocab}
- Direct quotations from source texts (keep exactly as written)
- Mathematical notation and formulas
- Code syntax and programming terms
- Exam command words: Analyse, Evaluate, Compare, Contrast, Explain, Describe, Assess, Justify
- Proper nouns, names, and titles
- Dates and specific numerical data

═══════════════════════════════════════════════════════════════════════════════
OUTPUT REQUIREMENTS — CRITICAL:
═══════════════════════════════════════════════════════════════════════════════

1. OUTPUT FULL PROSE, NOT BULLET POINTS: Write complete sentences and paragraphs. Do NOT convert the content into a summarised list of bullet points. The output should read like a proper educational resource, not notes.

2. MAINTAIN OR INCREASE LENGTH: Your adapted version MUST be at least as long as the original, often longer due to added scaffolding, explanations, and support. Do NOT summarise, shorten, or condense.

3. PRESERVE FULL CONTENT: Include ALL questions, activities, instructions, and content from the original. Do not skip or merge items.

4. STRUCTURE: Keep the same sections and order as the original. Use headings to organise.

5. FORMAT AS MARKDOWN:
   - Headings using # and ##
   - Bullet points using - (only where appropriate, not for main content)
   - Numbered lists using 1. 2. 3. (for questions and steps)
   - Bold text using **bold**
   - For maths use LaTeX: $x^2$ for inline, $$x^2$$ for display

6. At the end, include a "CHANGES SUMMARY" section listing the main adaptations you made.

═══════════════════════════════════════════════════════════════════════════════
THE RESOURCE TO ADAPT:
═══════════════════════════════════════════════════════════════════════════════

${resourceContent || '[PASTE YOUR RESOURCE HERE]'}
`

  return prompt
}

export function generateCreatePrompt(profile, options = {}) {
  const { topic, learningObjectives, resourceType, duration, includeStarter, includeMain, includePlenary } = options
  const conditions = profile.conditions.map(c => CONDITION_PROMPTS[c]).filter(Boolean)
  const subjectVocab = SUBJECT_VOCABULARY[profile.subject] || ''
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''

  let structure = []
  if (includeStarter) structure.push('Starter activity (5-10 minutes)')
  if (includeMain) structure.push('Main activity/activities (20-30 minutes)')
  if (includePlenary) structure.push('Plenary/review (5-10 minutes)')

  let prompt = `You are an expert SENCO and ${profile.subject} teacher specialising in creating educational resources for students with ${conditions.map(c => c.name).join(' and ')}.

YOUR TASK:
Create a new ${resourceType} for a ${profile.keyStage.toUpperCase()} ${profile.subject} lesson.

TOPIC: ${topic || '[Not specified]'}

LEARNING OBJECTIVES:
${learningObjectives || '[Not specified]'}

RESOURCE TYPE: ${resourceType}
DURATION: ${duration || '40'} minutes
KEY STAGE: ${profile.keyStage.toUpperCase()} - ${ksDescription}

STRUCTURE TO INCLUDE:
${structure.map((s, i) => `${i + 1}. ${s}`).join('\n')}

═══════════════════════════════════════════════════════════════════════════════
DESIGN REQUIREMENTS — BUILD THESE IN FROM THE START:
═══════════════════════════════════════════════════════════════════════════════
`

  conditions.forEach(condition => {
    prompt += condition.rules + '\n'
  })

  prompt += `
───────────────────────────────────────────────────────────────────────────────

SUBJECT VOCABULARY TO USE CORRECTLY:
${subjectVocab}

═══════════════════════════════════════════════════════════════════════════════
OUTPUT REQUIREMENTS:
═══════════════════════════════════════════════════════════════════════════════

1. Create a COMPLETE resource, not just an outline. Include actual content, questions, and activities.

2. Length: At least 500 words for a worksheet, 800+ words for a full lesson.

3. Format your output as MARKDOWN with:
   - Clear headings using # and ##
   - Bullet points using -
   - Numbered lists using 1. 2. 3.
   - Bold text using **bold**
   - For maths use LaTeX: $x^2$ for inline, $$x^2$$ for display
   - Tables using | column | format |

4. Include:
   - Clear learning objective at the top
   - Time estimates for each section
   - Success criteria or "What a good answer looks like"
   - Any teacher notes in [TEACHER NOTE: ...]

═══════════════════════════════════════════════════════════════════════════════
`

  return prompt
}

export function generateQuizPrompt(profile, options = {}) {
  const { sourceType, sourceTopic, sourceText, questionTypes, questionCount, difficulty, includeAnswers, examBoard } = options
  const conditions = profile.conditions.map(c => CONDITION_PROMPTS[c]).filter(Boolean)
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''

  const questionTypeDescriptions = {
    multiple_choice: 'Multiple choice (4 options, 1 correct)',
    short_answer: 'Short answer (1-2 sentences)',
    true_false: 'True or False',
    matching: 'Matching pairs',
    fill_blank: 'Fill in the blank',
    extended: 'Extended response (paragraph answer)'
  }

  const selectedTypes = (questionTypes || ['multiple_choice', 'short_answer'])
    .map(t => questionTypeDescriptions[t])
    .join('\n   - ')

  let prompt = `You are an expert SENCO and ${profile.subject} teacher specialising in creating assessments for students with ${conditions.map(c => c.name).join(' and ')}.

YOUR TASK:
Create a quiz/assessment on the topic below, accessible for a student with ${conditions.map(c => c.name).join(' and ')}.

${sourceType === 'topic' ? `TOPIC: ${sourceTopic}` : ''}
${sourceType === 'text' ? `SOURCE TEXT:\n${sourceText}\n` : ''}

NUMBER OF QUESTIONS: ${questionCount || 10}
DIFFICULTY: ${difficulty || 'medium'}
KEY STAGE: ${profile.keyStage.toUpperCase()} - ${ksDescription}
${examBoard && ['ks4', 'ks5'].includes(profile.keyStage) ? `EXAM BOARD STYLE: ${examBoard}` : ''}

QUESTION TYPES TO INCLUDE:
   - ${selectedTypes}

═══════════════════════════════════════════════════════════════════════════════
ACCESSIBILITY REQUIREMENTS — APPLY TO ALL QUESTIONS:
═══════════════════════════════════════════════════════════════════════════════
`

  conditions.forEach(condition => {
    prompt += condition.rules + '\n'
  })

  prompt += `
═══════════════════════════════════════════════════════════════════════════════
OUTPUT REQUIREMENTS:
═══════════════════════════════════════════════════════════════════════════════

1. Create EXACTLY ${questionCount || 10} questions.

2. Number all questions clearly (1, 2, 3...).

3. For multiple choice: List options as A, B, C, D on separate lines.

4. Include mark allocations: [1 mark], [2 marks], etc.

5. Format as MARKDOWN with clear structure.

${includeAnswers ? `
6. INCLUDE ANSWERS at the end in a separate "ANSWERS" section:
   - Show the correct answer for each question
   - For extended responses, include a model answer or mark scheme points
` : '6. Do NOT include answers — this is for the student version.'}

7. At the end, include:
   - Total marks available
   - Suggested timing
   - Any equipment needed

═══════════════════════════════════════════════════════════════════════════════
`

  return prompt
}

export { CONDITION_PROMPTS, SUBJECT_VOCABULARY, KEY_STAGE_DESCRIPTIONS }
