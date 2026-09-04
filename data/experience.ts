export const leadership = [
  {
    period: 'Current',
    organization: 'LIKELION University',
    role: 'Student developer · Gyeongsang National University',
    detail:
      'Participating in software development and student project activities with a focus on turning scoped ideas into demonstrable products.',
  },
  {
    period: 'Project',
    organization: 'Todayskin',
    role: 'Team Lead · LIKELION University',
    detail:
      'Coordinated product direction, engineering priorities, collaboration, the AWS deployment process, and demo preparation.',
  },
  {
    period: 'First year',
    organization: 'UMC · University MakeUs Challenge',
    role: 'Project Manager',
    detail:
      'Worked on project planning, coordination, communication, and keeping a student team moving toward execution.',
  },
] as const;

export const engineeringProfile = [
  {
    label: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
    ],
  },
  { label: 'Product', items: ['React', 'Next.js', 'React Native', 'Expo'] },
  {
    label: 'Infrastructure',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Testcontainers'],
  },
  {
    label: 'AI & analysis',
    items: ['Claude', 'OpenAI', 'Gemini', 'pgvector', 'Static analysis'],
  },
] as const;
