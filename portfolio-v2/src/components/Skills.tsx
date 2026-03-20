import { motion } from 'framer-motion';
import { Code2, Brain, Database } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'AI & Machine Learning',
            icon: <Brain className="w-6 h-6 text-primary" />,
            skills: ['NLP', 'Computer Vision', 'Deep Learning', 'Transformers', 'PyTorch']
        },
        {
            title: 'Core Development',
            icon: <Code2 className="w-6 h-6 text-accent" />,
            skills: ['Python', 'TypeScript', 'JavaScript', 'React', 'Node.js']
        },
        {
            title: 'Data & Tools',
            icon: <Database className="w-6 h-6 text-blue-400" />,
            skills: ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS']
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Versatility</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Blending advanced AI research with modern software engineering to build scalable intelligent applications.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl hover:border-primary/40 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
