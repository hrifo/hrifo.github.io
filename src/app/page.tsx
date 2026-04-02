import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} Héctor Alexander Rifo Solís.{' '}
          <span>All rights reserved.</span>
        </p>
      </footer>
    </>
  );
}
