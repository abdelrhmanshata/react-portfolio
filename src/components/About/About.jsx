import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* Image */}
        <img
          src={getImageUrl('about/about.png')}
          alt='Me sitting with a laptop'
          className={styles.aboutImage}
        />
        {/* About me */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.icon}
              src={getImageUrl('about/front.png')}
              alt='Cursor icon'
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.icon}
              src={getImageUrl('about/backend.png')}
              alt='Server icon'
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.icon}
              src={getImageUrl('about/mobile.png')}
              alt='UI icon'
            />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                I have experience in creating high-performance Android
                applications with a focus on user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
