export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Databases'],
  },

  // AI & LLM
  {
    title: 'AI Agents',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'MCP Protocol',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'LLM APIs',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'RAG',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Prompt Engineering',
    competency: 4,
    category: ['ML Engineering'],
  },

  // Web Development
  {
    title: 'Node.js',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development'],
  },
  // Lean Manufacturing
  {
    title: 'Six Sigma Green Belt',
    competency: 4,
    category: ['Lean Manufacturing'],
  },
  {
    title: 'Theory of Constraints',
    competency: 4,
    category: ['Lean Manufacturing'],
  },
  {
    title: 'DMAIC',
    competency: 4,
    category: ['Lean Manufacturing'],
  },
  {
    title: 'Quality Assurance',
    competency: 4,
    category: ['Lean Manufacturing'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
