import React, { useState } from "react";
import Project from "../Project";

function Portofolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: 'Portfolio',
      description: 'This site! - My professional portfolio to showcase my developer skills',
      technologies: ['Node', 'React', 'JSX', 'Tailwind CSS Framework'],
      repository: 'https://github.com/kalecodes/dev-portfolio'
    },
    {
      name: 'Bar Buddy',
      description: 'A search tool for cocktail lovers and bartenders to find and learn how to make new drink recipes.',
      technologies: ['HTML', 'Bulma CSS Framework', 'JavaScript', 'AJAX', 'JSON', 'Fetch API', 'Web Storage API', 'TheCocktailDB API', 'YouTube Data API'],
      repository: 'https://github.com/kalecodes/bar-buddy',
      deployment: 'https://kalecodes.github.io/bar-buddy/'
    },
    {
      name: 'Maker',
      description: "Social media application for artists and art enthusiests, built to consolidate artists online presense and activities to enhance the online-artist community.",
      technologies: ['Node', 'Express', 'MongoDB', 'Mongoose ORM', 'ApolloServer', 'GraphQL', 'React', 'JSONWebTokens', 'Semantic UI', 'AWS S3', 'Heroku'],
      repository: 'https://github.com/kalecodes/maker'
    },
    {
      name: 'Crypto Today',
      description: 'A cryptocurrency data dashboard aimed to help first time crypto investors gain more information before investing their money.',
      technologies: ['HTML', 'CSS', 'Materialize CSS Framework', 'JavaScript', 'CoinCap API', 'Newsdata.io API', 'LocalStorage API'],
      repository: 'https://github.com/kalecodes/markets-today',
      deployment: 'https://kalecodes.github.io/markets-today/'
    },
    {
      name: 'Weather Dashboard',
      description: 'Weather app that provides current and future weather forecasts in US cities.',
      technologies: ['HTML', 'Bootstrap CSS Framework', 'JavaScript', 'Open Weather One Call API', 'Open Weather Geocoding API', 'LocalStorage API'],
      repository: 'https://github.com/kalecodes/weather-dashboard',
      deployment: 'https://kalecodes.github.io/weather-dashboard/'
    },
    {
      name: 'Photo Portfolio',
      description: "(Prompted practice project) A photographer's portfolio website, built with React.",
      technologies: ['CSS', 'create-react-app', 'React', 'JavaScript', 'JSX'],
      repository: 'https://github.com/kalecodes/photo-port-2',
      deployment: 'https://kalecodes.github.io/photo-port-2/'
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
          <h3 className="text-2xl p-2">{project.name}</h3>
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