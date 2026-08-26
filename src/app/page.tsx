const projects = [
  {
    title: "Multi-Service Cloud Platform",
    category: "Platform Architecture",
    description:
      "A modular platform architecture built around a centralized API, structured data model, client applications, administration workflows and scalable infrastructure.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    flow:
      "Client Applications → API → Backend Services → Data Layer → Object Storage",
  },
  {
    title: "Catalog & Metadata Architecture",
    category: "Data Architecture",
    description:
      "A structured catalog model for complex relationships between works, recordings, contributors, identifiers, territories, ownership and rights information.",
    tags: ["Data Modeling", "PostgreSQL", "Metadata", "API"],
    flow:
      "Work ↔ Recording ↔ Contributor ↔ Rights Holder ↔ Territory",
  },
  {
    title: "Audio Processing Studio",
    category: "Web Application",
    description:
      "Browser-based audio processing prototype supporting WAV workflows, microphone input, waveform visualization, external API integration, playback and export.",
    tags: ["React", "TypeScript", "Web Audio", "MediaRecorder"],
    flow:
      "Upload → Decode → Process → Preview → Export",
  },
  {
    title: "Social Analytics Hub",
    category: "Analytics Architecture",
    description:
      "A unified architecture for connecting multiple social platforms, normalizing incoming data and presenting analytics through one central interface.",
    tags: ["API Integration", "Data Layer", "Analytics", "Dashboard"],
    flow:
      "External Platforms → Connectors → Unified Data → Analytics",
  },
  {
    title: "Digital Rights & Claims System",
    category: "Workflow Architecture",
    description:
      "A structured rights-management system for ownership records, supporting evidence, claims, review, conflict resolution and complete audit history.",
    tags: ["Workflow", "RBAC", "Audit", "Data Architecture"],
    flow:
      "Asset → Ownership → Evidence → Claim → Review → Resolution",
  },
  {
    title: "ATS Group Sensor & Monitoring Systems",
    category: "Earlier Development",
    description:
      "Earlier development work involving sensor, monitoring and data-processing structures. Archived technical diagrams and documentation will be added after review.",
    tags: ["Sensors", "Monitoring", "Data Processing"],
    flow:
      "Sensors → Collection → Processing → Monitoring",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "NestJS",
  "PHP",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Nginx",
  "Linux",
  "REST APIs",
  "Object Storage",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="shell navigation">
          <a href="#top" className="identity">
            <span className="identityMark">SZ</span>
            <span className="identityText">
              <strong>Sergiu Zaharia</strong>
              <small>Developer · Austria</small>
            </span>
          </a>

          <nav>
            <a href="#profile">Profile</a>
            <a href="#projects">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="shell heroGrid">
          <div className="heroContent">
            <p className="eyebrow">Full-Stack Development · Platform Architecture</p>

            <h1>
              Sergiu
              <span>Zaharia</span>
            </h1>

            <p className="position">
              Full-Stack Developer &amp; Platform Architect
            </p>

            <p className="heroText">
              I design and build modern web applications, backend systems,
              APIs and scalable digital platforms with a strong focus on
              architecture, structured data and operational workflows.
            </p>

            <div className="heroActions">
              <a href="#projects" className="button primary">
                View Selected Work
              </a>

              <a
                href="https://github.com/zaharias-dev"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="profileCard">
            <div className="status">
              <span className="statusDot" />
              Developer Portfolio
            </div>

            <div className="profileBlock">
              <span>Based in</span>
              <strong>Austria</strong>
            </div>

            <div className="profileBlock">
              <span>Focus</span>
              <strong>Web · API · Data · Cloud</strong>
            </div>

            <div className="profileBlock">
              <span>Development</span>
              <strong>Full Stack &amp; Platform Systems</strong>
            </div>

            <a className="profileLink" href="mailto:thebassarab@gmail.com">
              thebassarab@gmail.com
            </a>
          </aside>
        </div>
      </section>

      <section id="profile" className="section">
        <div className="shell profileSection">
          <div>
            <p className="sectionEyebrow">Professional Profile</p>
            <h2>Building complete systems, not isolated pages.</h2>
          </div>

          <div className="profileCopy">
            <p>
              My work covers frontend and backend development, API architecture,
              databases, authentication, structured metadata, workflow automation,
              file processing and infrastructure.
            </p>

            <p>
              I approach every project as a complete technical system:
              interface, application logic, data architecture, integrations,
              deployment and operational control.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projectsSection">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <p className="sectionEyebrow">Selected Work</p>
              <h2>Systems &amp; Architecture</h2>
            </div>

            <p>
              A selection of platform, data, workflow and application projects.
            </p>
          </div>

          <div className="projectsGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="projectTop">
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="projectFlow">{project.flow}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section expertiseSection">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <p className="sectionEyebrow">Technical Expertise</p>
              <h2>Technology stack</h2>
            </div>

            <p>
              Modern technologies for frontend, backend, data and infrastructure.
            </p>
          </div>

          <div className="technologyCloud">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="architecturePanel">
            <div>
              <p className="sectionEyebrow">Engineering Approach</p>
              <h3>Clear architecture. Controlled complexity.</h3>

              <p>
                Systems are structured around separation of concerns,
                centralized data management, security, maintainability,
                auditability and long-term scalability.
              </p>
            </div>

            <div className="architectureFlow">
              <span>Frontend</span>
              <i>→</i>
              <span>API</span>
              <i>→</i>
              <span>Services</span>
              <i>→</i>
              <span>Data</span>
              <i>→</i>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div className="shell contactGrid">
          <div>
            <p className="sectionEyebrow">Contact</p>
            <h2>Software, platform and web development.</h2>
          </div>

          <div className="contactDetails">
            <a href="mailto:thebassarab@gmail.com">
              thebassarab@gmail.com
            </a>

            <a
              href="https://github.com/zaharias-dev"
              target="_blank"
              rel="noreferrer"
            >
              github.com/zaharias-dev
            </a>

            <span>Austria</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <span>© 2026 Sergiu Zaharia</span>
          <span>Full-Stack Developer · Platform Architect</span>
        </div>
      </footer>
    </main>
  );
}
