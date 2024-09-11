import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  function filterByTag(tag) {
    return skills.filter((skill) => skill.tag === tag);
  }

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Technical Skills</h2>

      {/* Programming Languages */}
      <h4 className={styles.subtitle}>
        <li>Programming Languages</li>
      </h4>
      <div className={styles.skills}>
        {filterByTag("programming_languages").map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>

      {/* Data Base */}
      <h4 className={styles.subtitle}>
        <li>Data Base</li>
      </h4>
      <div className={styles.skills}>
        {filterByTag("database").map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
      <br />

      {/* Front End */}
      <h4 className={styles.subtitle}>
        <li>Front End</li>
      </h4>
      <div className={styles.skills}>
        {filterByTag("front_end").map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>

      {/* Back End */}
      <h4 className={styles.subtitle}>
        <li>Back End</li>
      </h4>
      <div className={styles.skills}>
        {filterByTag("back_end").map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>

      {/* Technologies */}
      <h4 className={styles.subtitle}>
        <li>Technologies</li>
      </h4>
      <div className={styles.skills}>
        {filterByTag("technologies").map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
