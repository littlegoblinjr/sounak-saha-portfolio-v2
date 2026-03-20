import { motion } from 'framer-motion';
import { Award, Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'AI Intern',
            company: 'ThinkZone',
            location: 'Remote',
            period: "Sep '25 — Dec '25",
            description: 'Built and deployed image-processing pipelines using Gemini 2.5 Pro for automated data extraction from complex documents.',
            achievements: [
                'Implemented Gemini 2.5 Pro for structured data extraction',
                'Developed Flask-based backend APIs for AI integration',
                'Designed MongoDB logging workflows for system diagnostics'
            ],
            icon: <Award className="w-5 h-5 text-primary" />
        },
        {
            role: 'ML Intern',
            company: 'ERIC Robotics',
            location: 'Pune, India',
            period: "Jan '25 — Sep '25",
            description: 'Focused on object detection and optimization for constrained robotic environments.',
            achievements: [
                'Trained and optimized YOLOv11 object detection models',
                'Deployed models using Flask on robotic platforms',
                'Enhanced computational efficiency of the detection pipeline'
            ],
            icon: <Briefcase className="w-5 h-5 text-accent" />
        },
        {
            role: 'ML Research Intern',
            company: 'Jawaharlal Nehru University (JNU)',
            location: 'Delhi, India',
            period: "Jul '24 — Aug '24",
            description: 'Research focus on computer vision and facial emotion recognition.',
            achievements: [
                'Built CNN-based facial emotion recognition model',
                'Achieved 0.97+ accuracy using data augmentation',
                'Implemented preprocessing pipelines with OpenCV'
            ],
            icon: <Award className="w-5 h-5 text-blue-400" />
        }
    ];

    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
                    <p className="text-gray-400">Internships and research positions contributing to the AI field.</p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 glow hidden md:block" />

                            <div className="md:w-1/2 md:px-12">
                                <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-colors">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-primary font-bold tracking-wider">{exp.period}</span>
                                        {exp.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                    <div className="flex items-center text-gray-400 mb-4 space-x-2 text-sm italic">
                                        <span>{exp.company}</span>
                                        <span>•</span>
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="w-3 h-3" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-6">{exp.description}</p>
                                    <div className="space-y-2">
                                        {exp.achievements.map((a, i) => (
                                            <div key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                <span>{a}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
