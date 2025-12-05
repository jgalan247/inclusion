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

// Generate the complete prompt
export function generateAdaptPrompt(profile, resourceContent = '', outputFormat = 'same_as_original') {
  const conditions = profile.conditions.map(c => CONDITION_PROMPTS[c]).filter(Boolean)
  const subjectVocab = SUBJECT_VOCABULARY[profile.subject] || ''
  const ksDescription = KEY_STAGE_DESCRIPTIONS[profile.keyStage] || ''
  const formatSpec = OUTPUT_FORMAT_SPECS[outputFormat] || OUTPUT_FORMAT_SPECS.same_as_original

  let prompt = `You are an expert SENCO and ${profile.subject} teacher specialising in adapting educational resources for students with ${conditions.map(c => c.name).join(' and ')}.

YOUR TASK:
Adapt the ${profile.keyStage.toUpperCase()} ${profile.subject} resource below to make it genuinely accessible while maintaining academic rigour. This is NOT a simple rewrite — you must:
- Add scaffolding (sentence starters, worked examples, hint boxes)
- Improve clarity without dumbing down content
- Add structure that supports the specific learning needs
- Include teacher guidance for further differentiation

KEY STAGE: ${profile.keyStage.toUpperCase()} - ${ksDescription}

ADAPTATION RULES:
`

  // Add condition-specific rules
  conditions.forEach(condition => {
    prompt += condition.rules + '\n'
  })

  const needsMaths = ['maths', 'science', 'computing'].includes(profile.subject)

  // Add protected vocabulary and output requirements
  prompt += `
PROTECTED (DO NOT SIMPLIFY): ${subjectVocab}, direct quotes, formulas, exam command words, proper nouns, dates.

OUTPUT FORMAT:
${formatSpec.instructions}

QUALITY REQUIREMENTS:
1. ENHANCE, DON'T JUST REWRITE: Add scaffolding that wasn't in the original:
   - Sentence starters for written responses ("I think... because...")
   - Worked examples before independent questions
   - Hint boxes for challenging sections
   - Key vocabulary boxes with definitions
   - Success criteria showing what a good answer looks like

2. MAINTAIN ACADEMIC CHALLENGE: The adapted version must teach the same content at the same depth. Accessibility ≠ easier.

3. PRESERVE ALL CONTENT: Include every question, activity, and instruction from the original.

4. USE MARKDOWN: # headings, **bold**, numbered lists, tables for structured information.${needsMaths ? `

5. MATHS: Use LaTeX notation ($\\frac{1}{2}$, $x^2$, $\\sqrt{16}$, $\\times$, $\\div$).` : ''}

${needsMaths ? '6' : '5'}. VISUALS: Insert 📷 **ADD IMAGE:** [description] where a visual would aid understanding.

${needsMaths ? '7' : '6'}. END WITH "## ADAPTATIONS MADE":
   - List specific changes made for each condition
   - Explain WHY each adaptation helps
   - Include TEACHER TIPS for delivery (e.g., "pre-teach vocabulary", "allow extra processing time")
   - Suggest EXTENSION activities for students who finish early

RESOURCE TO ADAPT:
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
Create a high-quality, fully-developed ${resourceType} for ${profile.keyStage.toUpperCase()} ${profile.subject}. This must be:
- Ready to use immediately (not a template or outline)
- Pedagogically sound with clear progression
- Accessible by design, not retrofitted
- Engaging with varied activities

TOPIC: ${topic || '[Not specified]'}

LEARNING OBJECTIVES:
${learningObjectives || '[Not specified]'}

RESOURCE TYPE: ${resourceType}
DURATION: ${duration || '40'} minutes
KEY STAGE: ${profile.keyStage.toUpperCase()} - ${ksDescription}

STRUCTURE: ${structure.length > 0 ? structure.map((s, i) => `${i + 1}. ${s}`).join(', ') : 'Single activity/worksheet'}

DESIGN FOR ACCESSIBILITY FROM THE START:
`

  conditions.forEach(condition => {
    prompt += condition.rules + '\n'
  })

  const needsMaths = ['maths', 'science', 'computing'].includes(profile.subject)

  prompt += `
SUBJECT VOCABULARY TO USE: ${subjectVocab}

QUALITY REQUIREMENTS:
1. CREATE SUBSTANTIAL CONTENT: 500+ words for worksheet, 800+ for full lesson. Include actual questions, activities, and explanations — not placeholders.

2. BUILD IN SCAFFOLDING:
   - Key vocabulary box at the start with definitions
   - Worked examples before independent practice
   - Sentence starters for written responses
   - Hint boxes for challenging questions
   - Success criteria ("A good answer will...")

3. ENSURE PROGRESSION: Start with recall/understanding, build to application/analysis. Include extension for early finishers.

4. USE MARKDOWN: # headings, **bold**, numbered lists, tables for structured data.${needsMaths ? `

5. MATHS: Use LaTeX notation ($\\frac{1}{2}$, $x^2$, $\\sqrt{16}$, $\\times$, $\\div$).` : ''}

${needsMaths ? '6' : '5'}. INCLUDE THROUGHOUT:
   - Learning objective at the top
   - Time estimates per section
   - [TEACHER NOTE: ...] for delivery tips
   - 📷 **ADD IMAGE:** [description] where visuals help
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
Create a well-designed assessment that accurately tests understanding while being accessible. The assessment should:
- Test genuine understanding, not just recall
- Use clear, unambiguous question wording
- Provide appropriate scaffolding without giving away answers
- Progress from easier to more challenging questions

${sourceType === 'topic' ? `TOPIC: ${sourceTopic}` : ''}
${sourceType === 'text' ? `SOURCE TEXT:\n${sourceText}\n` : ''}

NUMBER OF QUESTIONS: ${questionCount || 10}
DIFFICULTY: ${difficulty || 'medium'} (but include 2-3 easier questions at the start to build confidence)
KEY STAGE: ${profile.keyStage.toUpperCase()} - ${ksDescription}
${examBoard && ['ks4', 'ks5'].includes(profile.keyStage) ? `EXAM BOARD STYLE: ${examBoard}` : ''}

QUESTION TYPES: ${selectedTypes.replace(/\n   - /g, ', ')}

ACCESSIBILITY REQUIREMENTS:
`

  conditions.forEach(condition => {
    prompt += condition.rules + '\n'
  })

  const needsMaths = ['maths', 'science', 'computing'].includes(profile.subject)

  prompt += `
OUTPUT REQUIREMENTS:
1. Create EXACTLY ${questionCount || 10} questions with clear mark allocations.

2. QUESTION QUALITY:
   - Each question tests ONE clear skill or concept
   - Avoid double-barrelled questions
   - Multiple choice distractors should be plausible, not obviously wrong
   - Extended questions include bullet points showing what to include

3. FORMAT:
   - **Question N** [X marks] as header
   - Separate questions with --- horizontal rules
   - Multiple choice: each option on its own line with ☐
   - Answer space shown with underscores
   - Use tables for matching questions${needsMaths ? `

4. MATHS: Use LaTeX ($\\frac{1}{2}$, $x^2$, $\\sqrt{16}$, $\\times$, $\\div$).` : ''}

${needsMaths ? '5' : '4'}. VISUALS: Insert 📷 **ADD IMAGE:** [description] where a diagram/image would help.

${includeAnswers ? `${needsMaths ? '6' : '5'}. INCLUDE "## ANSWERS" SECTION:
   - Correct answer for each question
   - Mark scheme points for extended questions
   - Common misconceptions to watch for` : `${needsMaths ? '6' : '5'}. Do NOT include answers — this is the student version.`}

${needsMaths ? '7' : '6'}. END WITH: Total marks, suggested timing (standard + extended time), equipment needed.
`

  return prompt
}

export { CONDITION_PROMPTS, SUBJECT_VOCABULARY, KEY_STAGE_DESCRIPTIONS }
