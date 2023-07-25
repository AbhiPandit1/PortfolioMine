import { Button, Typography } from '@mui/material';
import React from 'react';
import './Projects.css';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from 'react-icons/fa';

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  return (
    <div>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: 'rgba(40,40,40,0.7)' }}>
          <Delete />
        </Button>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://github.com/AbhiPandit1"
            projectImage="https://www.shutterstock.com/shutterstock/photos/2003114099/display_1500/stock-photo--d-illustration-icon-broken-link-for-digital-marketing-2003114099.jpg"
            projectTitle="This is my sample project"
            description="This project is mad by me for sample"
            technologies="The tech user her are manys"
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono" }}>
        All The project Shown above are made by me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
