import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { WebProjects } from "./components/Projects/WebProjects";
import { MobileProjects } from "./components/Projects/MobileProjects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <WebProjects />
      <MobileProjects />
      <Contact />
    </div>
  );
}

export default App;
