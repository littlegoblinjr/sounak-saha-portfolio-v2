import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Docglasses.ai', href: '#docglasses' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main">
            <div className="container nav__inner">
                <a href="#about" className="wordmark" aria-label="Sounak Saha, back to top">
                    Sounak Saha
                </a>

                <div className="nav__menu">
                    <ul className="nav__links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav__link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__profiles">
                        <a href="https://github.com/littlegoblinjr" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub profile">
                            <Github size={20} aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/in/sounak-saha-254259196/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn profile">
                            <Linkedin size={20} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <button
                    type="button"
                    className="nav__toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="nav-sheet"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </div>

            {isOpen && (
                <div className="nav__sheet" id="nav-sheet">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
