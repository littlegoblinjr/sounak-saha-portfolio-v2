import { motion } from 'framer-motion';
import { Github, Brain, Cpu, MessageSquare, Briefcase, Zap } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI Companion',
            description: 'A TypeScript-based intelligent personal assistant with context-aware memory and multi-modal capabilities.',
            tech: ['TypeScript', 'OpenAI', 'Next.js'],
            link: 'https://github.com/littlegoblinjr/ai-companion',
            icon: <Brain className="w-5 h-5" />,
            color: 'from-purple-500 to-indigo-500'
        },
        {
            title: 'AI Research Assistant',
            description: 'Automating high-level research workflows, paper summarization, and trend analysis using LLMs.',
            tech: ['JavaScript', 'LangChain', 'Python'],
            link: 'https://github.com/littlegoblinjr/AI-Research-Assistant',
            icon: <Cpu className="w-5 h-5" />,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Agentic Startup Simulator',
            description: 'A multi-agent system simulating the dynamics of a startup environment with autonomous roles.',
            tech: ['Python', 'AutoGPT', 'CrewAI'],
            link: 'https://github.com/littlegoblinjr/agentic-startup-simulator',
            icon: <Zap className="w-5 h-5" />,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'GPT Text Generation',
            description: 'Implementation of a Transformer-based language model from scratch for text generation tasks.',
            tech: ['Python', 'PyTorch', 'NLP'],
            link: 'https://github.com/littlegoblinjr/GPT-Text-generation-from-scratch',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'from-teal-500 to-emerald-500'
        },
        {
            title: 'Emotion Detection',
            description: 'Real-time facial expression analysis and emotion classification using computer vision.',
            tech: ['Python', 'OpenCV', 'TensorFlow'],
            link: 'https://github.com/littlegoblinjr/AI-Facial-Emotion-Detection',
            icon: <Zap className="w-5 h-5" />,
            color: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Loan Approval App',
            description: 'Machine learning model predicting loan eligibility based on historical data and risk factors.',
            tech: ['Python', 'Scikit-Learn', 'Flask'],
            link: 'https://github.com/littlegoblinjr/loan-approval-app',
            icon: <Briefcase className="w-5 h-5" />,
            color: 'from-amber-500 to-orange-500'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">A selection of my recent work in AI engineering and autonomous systems.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-3xl overflow-hidden group border-white/5"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex space-x-2">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:bg-white/10">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-primary font-medium uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
