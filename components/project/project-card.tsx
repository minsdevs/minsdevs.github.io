import { ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

function CodeIntelligenceVisual() {
  return (
    <div
      className="system-visual"
      aria-label="Simplified Code Intelligence system flow"
    >
      <div className="system-label">Repository input</div>
      <div className="system-line" />
      <div className="system-nodes">
        <span>AST</span>
        <span>Git</span>
        <span>Config</span>
      </div>
      <div className="system-line system-line-short" />
      <div className="system-core">
        <span>Evidence graph</span>
        <small>structure · history · relationships</small>
      </div>
      <div className="system-line system-line-short" />
      <div className="system-output">Grounded explanation ↗</div>
    </div>
  );
}

function TodayskinVisual() {
  const shots = [
    {
      src: '/projects/todayskin-home.png',
      alt: 'Todayskin home screen showing weather and skin score',
    },
    {
      src: '/projects/todayskin-result.png',
      alt: 'Todayskin analysis result with facial region scores',
    },
    {
      src: '/projects/todayskin-history.png',
      alt: 'Todayskin history screen with calendar and trend graph',
    },
  ];

  return (
    <div className="phone-stage">
      {shots.map((shot, index) => (
        <div className={`phone-shot phone-shot-${index + 1}`} key={shot.src}>
          <Image
            src={shot.src}
            alt={shot.alt}
            width={600}
            height={1280}
            sizes="(max-width: 760px) 38vw, 190px"
            unoptimized
          />
        </div>
      ))}
      <span className="archive-stamp">Demo archive · 2026</span>
    </div>
  );
}

function SeatLockVisual() {
  return (
    <div
      className="benchmark-visual"
      aria-label="SeatLock concurrency evidence summary"
    >
      <div className="benchmark-hero">
        <strong>1</strong>
        <span>winner</span>
        <small>100 clients · one seat · zero overselling</small>
      </div>
      <table
        className="benchmark-table"
        aria-label="Lock strategy p95 comparison"
      >
        <thead>
          <tr className="benchmark-row benchmark-head">
            <th>Strategy</th>
            <th>p95</th>
          </tr>
        </thead>
        <tbody>
          <tr className="benchmark-row selected">
            <td>
              <Check size={13} /> Conditional update
            </td>
            <td>34ms</td>
          </tr>
          <tr className="benchmark-row">
            <td>Pessimistic lock</td>
            <td>52ms</td>
          </tr>
          <tr className="benchmark-row">
            <td>Optimistic lock</td>
            <td>34ms</td>
          </tr>
          <tr className="benchmark-row">
            <td>Redis lock</td>
            <td>38ms</td>
          </tr>
        </tbody>
      </table>
      <p>
        Recorded local spread-contention benchmark; single application instance.
      </p>
    </div>
  );
}

function HookRelayVisual() {
  return (
    <div className="relay-visual" aria-label="HookRelay delivery architecture">
      <div className="relay-node relay-publish">
        <small>01</small>
        <span>Publish</span>
        <b>202 accepted</b>
      </div>
      <div className="relay-arrow" aria-hidden="true">
        →
      </div>
      <div className="relay-node relay-source">
        <small>02</small>
        <span>PostgreSQL</span>
        <b>Source of truth</b>
      </div>
      <div className="relay-arrow" aria-hidden="true">
        →
      </div>
      <div className="relay-node">
        <small>03</small>
        <span>Relay + queue</span>
        <b>Recoverable schedule</b>
      </div>
      <div className="relay-arrow" aria-hidden="true">
        →
      </div>
      <div className="relay-node">
        <small>04</small>
        <span>Worker</span>
        <b>HMAC delivery</b>
      </div>
      <div className="relay-safety">
        <span>SSRF checked</span>
        <span>Full jitter</span>
        <span>Circuit isolated</span>
      </div>
    </div>
  );
}

const visuals = {
  'code-intelligence': <CodeIntelligenceVisual />,
  todayskin: <TodayskinVisual />,
  seatlock: <SeatLockVisual />,
  hookrelay: <HookRelayVisual />,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-feature project-${project.slug}`}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="project-meta">
        <span>{project.index}</span>
        <span>{project.role}</span>
        <span>{project.status}</span>
      </div>
      <div className="project-grid">
        <div className="project-copy">
          <p className="project-kicker">{project.label}</p>
          <h3 id={`${project.slug}-title`}>{project.title}</h3>
          <p className="project-problem">{project.problem}</p>
          <p className="project-lede">{project.summary}</p>
          <ul className="evidence-list">
            {project.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.slug === 'code-intelligence' ? (
            <p className="collab-note">
              <span>Claude collaboration</span> Built with Claude Fable 5 as a
              structured engineering collaborator across planning,
              implementation, debugging, review, and validation.
            </p>
          ) : null}
          <a
            className="text-link"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            View repository <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        {visuals[project.slug]}
      </div>
      <footer className="project-footer">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </footer>
    </article>
  );
}
