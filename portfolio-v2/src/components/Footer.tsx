import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'sahasounak.jobs@gmail.com',
            href: 'mailto:sahasounak.jobs@gmail.com'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: 'Phone',
            value: '+91 7386258850',
            href: 'tel:+917386258850'
        }
    ];

    const socialLinks = [
        { icon: <Github />, href: 'https://github.com/littlegoblinjr', label: 'GitHub' },
        { icon: <Linkedin />, href: 'https://www.linkedin.com/in/sounak-saha-254259196/', label: 'LinkedIn' }
    ];

    return (
        <footer id="contact" className="py-24 relative overflow-hidden bg-surface/20">
            <div className="absolute inset-0 bg-primary/5 -z-10 blur-3xl opacity-30" />

            <div className="container mx-auto px-6">
                <div className="glass p-12 md:p-20 rounded-[4rem] border-white/10 relative overflow-hidden text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                            I'm always open to discussing new AI projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
                            {contactInfo.map((info, i) => (
                                <motion.a
                                    key={i}
                                    href={info.href}
                                    whileHover={{ scale: 1.02, translateY: -5 }}
                                    className="glass p-8 rounded-3xl border-white/5 hover:border-primary/50 transition-all flex flex-col items-center group"
                                >
                                    <div className="p-4 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                                        {info.icon}
                                    </div>
                                    <span className="text-sm text-gray-500 mb-1 uppercase tracking-widest font-bold">{info.label}</span>
                                    <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">{info.value}</span>
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, color: '#8b5cf6' }}
                                    className="p-4 glass rounded-2xl text-gray-400 transition-all flex items-center space-x-2"
                                >
                                    {social.icon}
                                    <span className="text-sm font-medium">{social.label}</span>
                                    <ExternalLink className="w-3 h-3 opacity-50" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-4">
                    <p>© {new Date().getFullYear()} Sounak Saha.</p>
                    <span className="hidden md:inline">•</span>
                    <p>AI Engineer Portfolio</p>
                    <span className="hidden md:inline">•</span>
                    <a href="#" className="hover:text-primary transition-colors">Back to Top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
