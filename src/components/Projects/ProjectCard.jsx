import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export default function ProjectCard({project}) {
  return (
    <Card sx={{ maxWidth: 345, height: 550 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={getImageUrl(`${project.imageSrc}`)}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{ fontWeight: "bold" }}
            component="div"
          >
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {project.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <ul className={styles.skills}>
              {project.skills.map((skill, id) => {
                return (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div className={styles.links}>
              <a href={project.source} className={styles.link}>
                Source Code
              </a>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
