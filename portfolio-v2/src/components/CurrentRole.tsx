import { MapPin } from 'lucide-react';

const CurrentRole = () => {
    const problems = [
        {
            title: 'Teaching it medicine',
            body: 'Fine-tuned LLMs on medical-domain data with parameter-efficient methods, so the model learns clinical language without retraining every weight.',
            tech: ['LoRA', 'PEFT'],
        },
        {
            title: 'Shrinking it without losing accuracy',
            body: 'Applied quantization-aware training, so the model keeps its accuracy after it is compressed to run on a phone.',
            tech: ['Quantization-aware training'],
        },
        {
            title: 'Fitting it in phone memory',
            body: 'Built KV caching strategies that cut memory use on constrained mobile hardware.',
            tech: ['KV caching'],
        },
        {
            title: 'Running it on the chip',
            body: 'Deployed and optimised the models on Qualcomm Snapdragon processors for edge inference.',
            tech: ['Qualcomm Snapdragon', 'GenieX SDK'],
        },
    ];

    return (
        <section id="docglasses" className="now" aria-labelledby="docglasses-title">
            <div className="container">
                <div className="section-head">
                    <div className="now__title">
                        <h2 id="docglasses-title">AI Engineer</h2>
                        <p className="now__company">Docglasses.ai</p>
                    </div>
                    <p>I own getting a medical LLM to run on the phone itself, not on a server, from domain fine-tuning and quantization to on-device deployment.</p>
                </div>

                <dl className="now__meta">
                    <div>
                        <dt>Since</dt>
                        <dd className="num">May ’26, full time</dd>
                    </div>
                    <div>
                        <dt>Where</dt>
                        <dd>
                            <MapPin size={16} aria-hidden="true" />
                            Noida, India
                        </dd>
                    </div>
                    <div>
                        <dt>What ships</dt>
                        <dd>LLM inference on smartphones, with a low memory footprint</dd>
                    </div>
                </dl>

                <ul className="now__grid">
                    {problems.map((problem) => (
                        <li key={problem.title} className="now__card">
                            <h3>{problem.title}</h3>
                            <p>{problem.body}</p>
                            <p className="now__tech">{problem.tech.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CurrentRole;
