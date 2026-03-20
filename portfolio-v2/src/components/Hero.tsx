import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full z-0" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-3/5 text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-primary/20 text-accent mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Available for AI/ML Opportunities</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-gradient">Sounak Saha</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl">
                        AI Engineer specializing in building intelligent systems, NLP, and Computer Vision.
                        Turning complex data into autonomous reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary rounded-xl font-bold glow flex items-center space-x-2"
                        >
                            <span>View My Work</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass rounded-xl font-bold border-white/10"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="md:w-2/5 relative"
                >
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative z-10 animate-float">
                        <img
                            src="/profile.jpg"
                            alt="Sounak Saha"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative frames */}
                    <div className="absolute top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-3xl z-0" />
                    <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent/30 rounded-3xl z-0" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
