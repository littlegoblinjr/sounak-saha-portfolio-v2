import { Github } from 'lucide-react';

type Step = { role: string; name: string };

const Projects = () => {
    const projects: { title: string; description: string; tech: string[]; link: string; pipeline: Step[] }[] = [
        {
            title: 'CuraLink',
            description: 'A medical research assistant that answers only from the papers it finds, and reports a search gap rather than guess.',
            tech: ['Python', 'FastAPI', 'LangChain', 'Ragas', 'MongoDB Atlas', 'React'],
            link: 'https://github.com/littlegoblinjr/curalink',
            pipeline: [
                { role: 'Router', name: 'Follow-up from the archive, or a new search' },
                { role: 'Retrieval', name: 'PubMed, OpenAlex and ClinicalTrials.gov, 300+ results ranked to 8' },
                { role: 'RAG', name: 'Full-text passages ranked with Nomic embeddings' },
                { role: 'Output', name: 'Briefing checked by Ragas for faithfulness' },
            ],
        },
        {
            title: 'AI Startup Simulator',
            description: 'Eight specialised agents stress-test a startup idea and return market, tech and finance research in minutes.',
            tech: ['Python', 'FastAPI', 'OpenAI', 'Tavily', 'Neon Postgres', 'React'],
            link: 'https://github.com/littlegoblinjr/agentic-startup-simulator',
            pipeline: [
                { role: 'Guardrail', name: 'Screens the idea' },
                { role: 'Planner', name: 'Builds a task graph' },
                { role: 'Agents', name: 'Market, tech, finance and pitch research' },
                { role: 'Output', name: 'One briefing, scored 1 to 100 by a VC critic agent' },
            ],
        },
    ];

    return (
        <section id="projects" className="work" aria-labelledby="projects-title">
            <div className="container">
                <div className="section-head">
                    <h2 id="projects-title">Two projects on GitHub</h2>
                    <p>A selection of my recent work in AI engineering and autonomous systems.</p>
                </div>

                <ol className="work__list">
                    {projects.map((project) => (
                        <li key={project.title} className="work__item">
                            <div className="work__meta">
                                <h3>{project.title}</h3>
                                <p className="work__stack">{project.tech.join(', ')}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
                                    <Github size={20} aria-hidden="true" />
                                    Code on GitHub
                                </a>
                            </div>

                            <div className="work__body">
                                <p className="work__desc">{project.description}</p>
                                <ol className="pipe" aria-label={`${project.title} pipeline diagram`}>
                                    {project.pipeline.map((step, i) => (
                                        <li key={i}>
                                            <span className="pipe__role">{step.role}</span>
                                            <span className="pipe__name">{step.name}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Projects;
