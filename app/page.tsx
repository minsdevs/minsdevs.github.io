import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ProjectCard } from '@/components/project/project-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { engineeringProfile, leadership } from '@/data/experience';
import { moreProjects, projects } from '@/data/projects';

const github = 'https://github.com/Min0504';
const email = 'mailto:mins.devs@gmail.com';

const aiMethod = [
  [
    'Context',
    'Establish the project context, constraints, and release boundary before asking for implementation.',
  ],
  [
    'Challenge',
    'Use AI to pressure-test architecture and surface alternatives before the design becomes expensive to change.',
  ],
  [
    'Perspectives',
    'Split planning, implementation, security, and review into explicit responsibilities or checkpoints.',
  ],
  [
    'Evidence',
    'Require tests, reproducible commands, source references, or measurable acceptance criteria.',
  ],
  [
    'Verify',
    'Check generated conclusions against the repository, runtime behavior, and external primary sources.',
  ],
  [
    'Decide',
    'Use AI to extend judgment—not to outsource ownership of the final engineering decision.',
  ],
] as const;

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://minseokchae.dev';
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Minseok Chae',
    email: 'mailto:mins.devs@gmail.com',
    url: siteUrl,
    sameAs: [github],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Gyeongsang National University',
    },
    knowsAbout: [
      'Backend engineering',
      'Product engineering',
      'AI-assisted software development',
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="eyebrow">
            <span>Gyeongsang National University</span>
            <span>South Korea · Open to internships</span>
          </div>
          <h1 id="hero-title">
            <span>Minseok</span>
            <span className="hero-shift">Chae.</span>
          </h1>
          <div className="hero-bottom">
            <div>
              <p>
                Computer science student building backend systems, AI-assisted
                developer tools, and products that move from idea to deployment.
              </p>
              <ul className="hero-roles" aria-label="Professional focus">
                <li>Backend systems</li>
                <li>Product engineering</li>
                <li>Practical AI</li>
              </ul>
            </div>
            <div>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#work">
                  View projects <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href={`${email}?subject=Resume%20request`}
                >
                  Résumé <Mail size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="resume-note">
                Résumé PDF is available by email; no placeholder document is
                published.
              </p>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="section-block shell"
          aria-labelledby="work-heading"
        >
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Evidence over adjectives."
            note="Four projects selected for distinct engineering decisions, validation depth, and honest release boundaries."
          />
          <div className="projects-stack">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </section>

        <section
          className="section-block shell"
          aria-labelledby="more-work-heading"
        >
          <SectionHeading
            index="02"
            eyebrow="More projects"
            title="Smaller scope. Clear intent."
            note="Additional work that demonstrates operational tooling, data integrity, and shipping judgment."
          />
          <div className="more-grid">
            {moreProjects.map((project) => (
              <article className="more-card" key={project.title}>
                <div className="more-card-top">
                  <span>{project.status}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="more-links">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} repository`}
                  >
                    Repository
                  </a>
                  {'live' in project ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live site`}
                    >
                      Live site
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="leadership-section"
          aria-labelledby="leadership-heading"
        >
          <div className="shell">
            <SectionHeading
              index="03"
              eyebrow="Leadership & community"
              title="Build the team around the work."
              note="Student leadership experience presented as it happened—not inflated into a company title."
            />
            <div className="leadership-list">
              {leadership.map((item, index) => (
                <article key={item.organization}>
                  <span className="leadership-number">0{index + 1}</span>
                  <p>{item.period}</p>
                  <div>
                    <h3>{item.organization}</h3>
                    <strong>{item.role}</strong>
                  </div>
                  <p className="leadership-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="method"
          className="ai-section shell"
          aria-labelledby="ai-heading"
        >
          <div className="ai-intro">
            <p className="section-index">04 / Engineering with AI</p>
            <h2 id="ai-heading">
              AI as a collaborator,
              <br />
              not an autocomplete.
            </h2>
            <blockquote>
              “I used to think the best AI workflow was maximum autonomy. Larger
              projects changed my mind: autonomy without constraints can produce
              convincing but fragile work.”
            </blockquote>
            <p>
              Code Intelligence was built extensively with Claude Fable 5 as a
              structured engineering collaborator. The project remains my
              responsibility; Claude helped widen the review surface and shorten
              feedback loops.
            </p>
          </div>
          <ol className="method-grid">
            {aiMethod.map(([title, detail], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="profile"
          className="profile-section shell"
          aria-labelledby="profile-heading"
        >
          <SectionHeading
            index="05"
            eyebrow="Engineering profile"
            title="A product view of systems work."
            note="Technologies are listed only where they appear in the work above."
          />
          <div className="profile-grid">
            <div className="skills-list">
              {engineeringProfile.map((group) => (
                <article key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.items.join(' · ')}</p>
                </article>
              ))}
            </div>
            <aside className="about-card" aria-labelledby="about-heading">
              <p className="section-index">About</p>
              <h3 id="about-heading">
                I care about the distance between “it works” and “it is ready.”
              </h3>
              <p>
                I study Computer Science and Computer Engineering at Gyeongsang
                National University. My work centers on backend systems, product
                engineering, and practical AI. I like shipping usable software,
                but I am equally interested in the tradeoffs, tests, failure
                modes, and documentation that make a result credible.
              </p>
            </aside>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="shell">
            <p className="section-index">06 / Contact</p>
            <h2 id="contact-heading">
              Let’s build something
              <br />
              that survives the demo.
            </h2>
            <div className="contact-links">
              <a href={email}>
                <Mail size={18} aria-hidden="true" /> mins.devs@gmail.com
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <ArrowUpRight size={18} aria-hidden="true" /> github.com/Min0504
              </a>
              <a href={`${email}?subject=Resume%20request`}>
                <ArrowUpRight size={18} aria-hidden="true" /> Request résumé
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
