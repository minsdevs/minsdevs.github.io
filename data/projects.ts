export type Project = {
  slug: 'code-intelligence' | 'todayskin' | 'seatlock' | 'hookrelay';
  index: string;
  title: string;
  label: string;
  problem: string;
  role: string;
  status: string;
  summary: string;
  evidence: string[];
  technologies: string[];
  repository: string;
};

export const projects: Project[] = [
  {
    slug: 'code-intelligence',
    index: '01',
    title: 'Code Intelligence',
    label: 'Repository intelligence workspace',
    problem:
      'Large repositories are difficult to understand without losing the evidence behind an explanation.',
    role: 'Independent builder',
    status: 'Release candidate · internal testing',
    summary:
      'Analyzes repository structure, dependencies, call flows, and history, then grounds AI explanations in source evidence.',
    evidence: [
      'Static analysis spans Java, TypeScript, Python, Go, and infrastructure configuration.',
      'AI claims are checked against source references, assigned confidence, and passed through secret masking.',
      'Automated gates cover the Spring backend, React frontend, analyzer sidecars, and a fixture-based quality corpus.',
      'Release limits are explicit: browser E2E and an approved accuracy oracle remain blockers.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'React',
      'PostgreSQL + pgvector',
      'Redis',
      'tree-sitter',
    ],
    repository: 'https://github.com/Min0504/code-intelligence',
  },
  {
    slug: 'todayskin',
    index: '02',
    title: 'Todayskin',
    label: 'Weather-aware AI skincare app',
    problem:
      'Skin measurements are more useful when image analysis, daily conditions, and recommendations share one workflow.',
    role: 'Team Lead · LIKELION University',
    status: 'Demo completed · infrastructure archived',
    summary:
      'A mobile skincare product combining image-based analysis, weather and air-quality context, care recommendations, and personal history.',
    evidence: [
      'Led product and technical direction, development priorities, team coordination, deployment, and demo preparation.',
      'Ran a real demo deployment on AWS ECS Fargate with RDS, ElastiCache/Valkey, S3, and OIDC-based delivery.',
      'Separated the NestJS business API from a FastAPI inference service and used queues and caching for longer-running work.',
      'Made image retention consent-dependent; the demo infrastructure and operating data were intentionally removed afterward.',
    ],
    technologies: [
      'React Native',
      'Expo',
      'NestJS',
      'FastAPI',
      'PostgreSQL',
      'AWS ECS Fargate',
    ],
    repository: 'https://github.com/jae-ho93/Todayskin',
  },
  {
    slug: 'seatlock',
    index: '03',
    title: 'SeatLock',
    label: 'High-contention reservation backend',
    problem:
      'A ticketing API must preserve seat ownership and payment integrity when requests arrive at the same instant.',
    role: 'Independent systems study',
    status: 'Local system · reproducible benchmarks',
    summary:
      'A reservation system designed around explicit concurrency experiments, overselling prevention, cache failure, and idempotent payment handling.',
    evidence: [
      'A forced 100-client race for one seat produces exactly one successful hold and zero overselling.',
      'A recorded 1,000-VU run against 10 seats produced 10 holds, 990 conflicts, and no 5xx responses.',
      'Implemented four locking strategies and selected an atomic conditional UPDATE after measuring the tradeoffs.',
      'Testcontainers integration tests exercise PostgreSQL, Redis behavior, expiry, reservation, auth rotation, and payments.',
    ],
    technologies: [
      'Java 17',
      'Spring Boot',
      'PostgreSQL',
      'Redis',
      'Testcontainers',
      'k6',
    ],
    repository: 'https://github.com/Min0504/seatlock',
  },
  {
    slug: 'hookrelay',
    index: '04',
    title: 'HookRelay',
    label: 'Webhook delivery infrastructure',
    problem:
      'Webhook delivery must survive queue outages and hostile endpoints without losing committed events or blocking other tenants.',
    role: 'Independent builder',
    status: 'Local demo · CI validated',
    summary:
      'A multi-tenant delivery pipeline where PostgreSQL is the source of truth and Redis schedules recoverable at-least-once delivery.',
    evidence: [
      'Transactional outbox keeps accepted events recoverable when the queue is unavailable.',
      'Retries use exponential backoff with full jitter, endpoint circuits, and tenant-scoped concurrency limits.',
      'HMAC delivery, idempotent receiver examples, SSRF checks, and DNS-rebinding revalidation define the trust boundary.',
      'Prometheus metrics, a committed Grafana dashboard, k6 scenarios, and Redis chaos documentation make behavior observable.',
    ],
    technologies: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'BullMQ',
      'Redis',
      'Prometheus',
    ],
    repository: 'https://github.com/Min0504/hookrelay',
  },
];

export const moreProjects = [
  {
    title: 'PointLedger',
    status: 'Local system',
    description:
      'Append-only point ledger with pessimistic locking, idempotency, restartable Spring Batch jobs, and reconciliation.',
    technologies: ['Spring Boot', 'Spring Batch', 'PostgreSQL'],
    repository: 'https://github.com/Min0504/pointledger',
  },
  {
    title: 'Dev Cockpit',
    status: 'RC · unsigned',
    description:
      'A macOS menu-bar cockpit for grouping local services, ports, Docker, Git state, health, logs, and guarded process control.',
    technologies: ['Tauri', 'Rust', 'React'],
    repository: 'https://github.com/Min0504/dev-cockpit',
  },
  {
    title: 'Axis',
    status: 'Public beta',
    description:
      'A purchase-decision tool that combines verified product specifications, AI-assisted comparison, and price tracking.',
    technologies: ['Next.js', 'Supabase', 'Vercel'],
    repository: 'https://github.com/Min0504/Axis',
    live: 'https://axis-app-beta.vercel.app',
  },
  {
    title: 'AutoHub AI',
    status: 'Frontend deployed',
    description:
      'A Korean directory for comparing automation tools, paired with an independently built Express and SQLite API.',
    technologies: ['React', 'Express', 'SQLite'],
    repository: 'https://github.com/Min0504/AutoAiHub',
    live: 'https://autohub-ai.vercel.app',
  },
] as const;
