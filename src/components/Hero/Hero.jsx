import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm AbdElrhman.</h1>
        <p className={styles.description}>
          Software Developer with a strong background in front-end and back-end
          development, committed to delivering reliable, easy-to-use solutions
          and fostering teamwork. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:abdelrhmanmohamedshata@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
