import { MapPin } from 'lucide-react';

const Experience = () => {
    const experiences: {
        role: string;
        company: string;
        location: string;
        period: string;
        description: string;
        achievements: string[];
        figure?: { value: string; label: string };
    }[] = [
        {
            role: 'AI Intern',
            company: 'ThinkZone',
            location: 'Remote',
            period: 'Sep ’25 to Dec ’25',
            description: 'Built and deployed image-processing pipelines using Gemini 2.5 Pro for automated data extraction from complex documents.',
            achievements: [
                'Implemented Gemini 2.5 Pro for structured data extraction',
                'Developed Flask-based backend APIs for AI integration',
                'Designed MongoDB logging workflows for system diagnostics'
            ]
        },
        {
            role: 'ML Intern',
            company: 'ERIC Robotics',
            location: 'Pune, India',
            period: 'Jan ’25 to Sep ’25',
            description: 'Focused on object detection and optimization for constrained robotic environments.',
            achievements: [
                'Trained and optimized YOLOv11 object detection models',
                'Deployed models using Flask on robotic platforms',
                'Enhanced computational efficiency of the detection pipeline'
            ]
        },
        {
            role: 'ML Research Intern',
            company: 'Jawaharlal Nehru University (JNU)',
            location: 'Delhi, India',
            period: 'Jul ’24 to Aug ’24',
            description: 'Research focus on computer vision and facial emotion recognition.',
            figure: { value: '0.97+', label: 'accuracy, achieved using data augmentation' },
            achievements: [
                'Built CNN-based facial emotion recognition model',
                'Implemented preprocessing pipelines with OpenCV'
            ]
        }
    ];

    return (
        <section id="experience" className="exp" aria-labelledby="experience-title">
            <div className="container">
                <div className="section-head">
                    <h2 id="experience-title">Three internships, 2024 to 2025</h2>
                    <p>Internships and research positions contributing to the AI field.</p>
                </div>

                <ol className="exp__list">
                    {experiences.map((exp) => (
                        <li key={exp.company} className="exp__row">
                            <div className="exp__when">
                                <span className="exp__period">{exp.period}</span>
                                <span className="exp__place">
                                    <MapPin size={16} aria-hidden="true" />
                                    {exp.location}
                                </span>
                            </div>

                            <div className="exp__what">
                                <h3>{exp.role}</h3>
                                <p className="exp__company">{exp.company}</p>
                                <p className="exp__desc">{exp.description}</p>
                            </div>

                            {exp.figure ? (
                                <div className="exp__figure">
                                    <p>
                                        <b>{exp.figure.value}</b>
                                        <span>{exp.figure.label}</span>
                                    </p>
                                    <ul>
                                        {exp.achievements.map((a) => (
                                            <li key={a}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <ul className="exp__did">
                                    {exp.achievements.map((a) => (
                                        <li key={a}>{a}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
