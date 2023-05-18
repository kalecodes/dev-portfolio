import React, { useState } from "react";
import Project from "../Project";

function Portofolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: 'Bar Buddy',
      description: 'A search tool for cocktail lovers and bartenders to find and learn how to make new drink recipes.',
      technologies: ['HTML', 'Bulma CSS Framework', 'JavaScript', 'AJAX', 'JSON', 'Fetch API', 'Web Storage API', 'TheCocktailDB API', 'YouTube Data API'],
      repository: 'https://github.com/kalecodes/bar-buddy',
      deployment: 'https://kalecodes.github.io/bar-buddy/'
    },
    {
      name: 'Example Project',
      description: 'This is for testing purposes'
    },
    {
      name: 'Example Project 2',
      description: 'Another example project'
    },
    {
      name: 'Example Project 3',
      description: 'Yet another example project'
    }
  ]);
  
  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className="mb-16 md:flex flex-wrap">
      {isModalOpen && <Project currentProject={currentProject} onClose={toggleModal} />}
      {projects.map((project, i) => (
        <div key={project.name} className="mx-auto my-3 shadow-xl rounded-lg overflow-hidden w-10/12 md:w-5/12 lg:w-3/10">
          <h3>{project.name}</h3>
          <img 
            className="w-full "
            src={require(`../../assets/images/${i}.png`)}
            alt={`A screenshot of the project ${project.name}`}
            onClick={() => toggleModal(project, i)}
          />
        </div>
      ))}
    </section>
  );
}

export default Portofolio;