import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentRole from './components/CurrentRole';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useSmoothScroll } from './useSmoothScroll';

const REVEAL_SELECTOR = '.section-head, .now__meta, .now__card, .work__item, .exp__row, .tools__col, .contact__email, .contact__grid';

function useReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    targets.forEach((el) => {
      el.classList.add('reveal');
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL_SELECTOR)) : [];
      el.style.setProperty('--i', String(Math.max(0, siblings.indexOf(el))));
    });
    root.classList.add('js');

    // Anything at or above 90% of the viewport is shown, so a jump past a block never leaves it hidden.
    let pending = targets;
    let frame = 0;
    const flush = () => {
      frame = 0;
      const line = window.innerHeight * 0.9;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top > line) return true;
        el.classList.add('is-in');
        return false;
      });
      if (!pending.length) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(flush);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    flush();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      root.classList.remove('js');
    };
  }, []);
}

function App() {
  useReveal();
  useSmoothScroll();

  return (
    <div className="relative">
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <CurrentRole />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
