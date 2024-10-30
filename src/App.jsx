import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { WebProjects } from './components/Projects/WebProjects';
import { MobileProjects } from './components/Projects/MobileProjects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <WebProjects />
      <MobileProjects />
      <Contact />
    </div>
  );
}

export default App;
