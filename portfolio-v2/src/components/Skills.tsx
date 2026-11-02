const Skills = () => {
    const skillCategories = [
        {
            title: 'AI & Machine Learning',
            skills: ['NLP', 'Computer Vision', 'Deep Learning', 'Transformers', 'PyTorch']
        },
        {
            title: 'Core Development',
            skills: ['Python', 'TypeScript', 'JavaScript', 'React', 'Node.js']
        },
        {
            title: 'Data & Tools',
            skills: ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS']
        }
    ];

    return (
        <section id="skills" className="tools" aria-labelledby="skills-title">
            <div className="container">
                <div className="section-head">
                    <h2 id="skills-title">What I build with</h2>
                    <p>Blending advanced AI research with modern software engineering to build scalable intelligent applications.</p>
                </div>

                <div className="tools__grid">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="tools__col">
                            <h3>{category.title}</h3>
                            <ul>
                                {category.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
