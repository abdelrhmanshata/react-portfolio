import { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/web_projects.json";
import ProjectCard from "./ProjectCard";
import { Pagination, Stack } from "@mui/material";

export const WebProjects = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Adjust this value based on how many projects you want to display per page
  const count = Math.ceil(projects.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <h2 className={styles.subtitle}>Web Projects</h2>
      <div className={styles.projects}>
        {selectedProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      <Stack spacing={1} alignItems="center" className={styles.pagination}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // Make the pagination item text white
            },
          }}
        />
      </Stack>
    </section>
  );
};
