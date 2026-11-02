import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github size={20} aria-hidden="true" />, href: 'https://github.com/littlegoblinjr', label: 'GitHub' },
        { icon: <Linkedin size={20} aria-hidden="true" />, href: 'https://www.linkedin.com/in/sounak-saha-254259196/', label: 'LinkedIn' }
    ];

    return (
        <footer id="contact" className="contact" aria-labelledby="contact-title">
            <div className="container">
                <div className="section-head">
                    <h2 id="contact-title">Let’s connect</h2>
                    <p>I’m always open to discussing new AI projects, creative ideas, or opportunities to be part of your vision.</p>
                </div>

                <a href="mailto:sahasounak.jobs@gmail.com" className="contact__email">
                    sahasounak.jobs@gmail.com
                </a>

                <dl className="contact__grid">
                    <div>
                        <dt>Phone</dt>
                        <dd>
                            <a href="tel:+917386258850" className="text-link">+91 7386258850</a>
                        </dd>
                    </div>
                    {socialLinks.map((social) => (
                        <div key={social.label}>
                            <dt>{social.label}</dt>
                            <dd>
                                <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-link">
                                    {social.icon}
                                    {social.label === 'GitHub' ? 'littlegoblinjr' : 'Sounak Saha'}
                                </a>
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="footer__base">
                    <p>© {new Date().getFullYear()} Sounak Saha</p>
                    <p>AI Engineer Portfolio</p>
                    <a href="#">Back to top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
