import React, { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      name: 'Portfolio',
      description: 'This site! - My professional portfolio to showcase my skills. Designed with Figma.',
      technologies: ['Figma', 'Node.js', 'React', 'JSX', 'Tailwind CSS Framework'],
      repository: 'https://github.com/kalecodes/dev-portfolio',
      image: 'portfolio'
    },
    {
      name: 'Portfolio - v1',
      description: 'This site, prior to it getting a full overhaul.',
      technologies: ['Node.js', 'React', 'JSX', 'React-Router', 'Tailwind CSS Framework'],
      repository: 'https://github.com/kalecodes/dev-portfolio/tree/backup/v1',
      image: 'portfolio-v1'
    },
    {
      name: 'Bar Buddy',
      description: 'A search tool for cocktail lovers and bartenders, to find and learn new drink recipes.',
      technologies: ['HTML', 'Bulma CSS Framework', 'JavaScript', 'AJAX', 'JSON', 'Fetch API', 'Web Storage API', 'TheCocktailDB API', 'YouTube Data API'],
      repository: 'https://github.com/kalecodes/bar-buddy',
      deployment: 'https://kalecodes.github.io/bar-buddy/',
      image: 'bar-buddy'
    },
    {
      name: 'Maker',
      description: "Social media application for artists and art enthusiests, built to consolidate artists' online presence and activities to enhance the online art community.",
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose ORM', 'ApolloServer', 'GraphQL', 'React', 'JSONWebTokens', 'Semantic UI', 'AWS S3', 'Heroku'],
      repository: 'https://github.com/kalecodes/maker',
      image: 'maker'
    },
    {
      name: 'Crypto Today',
      description: 'A cryptocurrency data dashboard aimed to help first-time crypto investors gain more information before investing.',
      technologies: ['HTML', 'CSS', 'Materialize CSS Framework', 'JavaScript', 'CoinCap API', 'Newsdata.io API', 'LocalStorage API'],
      repository: 'https://github.com/kalecodes/markets-today',
      deployment: 'https://kalecodes.github.io/markets-today/',
      image: 'crypto'
    },
    {
      name: 'Weather Dashboard',
      description: 'Weather dashboard that provides current and future weather forecasts in US cities.',
      technologies: ['HTML', 'Bootstrap CSS Framework', 'JavaScript', 'Open Weather OneCall API', 'Open Weather Geocoding API', 'LocalStorage API'],
      repository: 'https://github.com/kalecodes/weather-dashboard',
      deployment: 'https://kalecodes.github.io/weather-dashboard/',
      image: 'weather'
    },
    {
      name: 'Photo Portfolio',
      description: "(Prompted practice project) A photographer's portfolio website, built with React.",
      technologies: ['CSS', 'Node.js', 'create-react-app', 'React', 'JavaScript', 'JSX'],
      repository: 'https://github.com/kalecodes/photo-port-2',
      deployment: 'https://kalecodes.github.io/photo-port-2/',
      image: 'photo-port'
    }
  ]);

  return (
    <section id="projects" className="flex justify-center bg-sky-950">
      <div className="w-11/12 md:w-4/5 mb-10">
        <div className="text-5xl lg:text-left lg:pl-10 py-10 text-white">
          Projects
        </div>
        <div className="flex flex-col">
          {projects.map((project)=> (
            <div key={project.name} className="flex flex-col lg:flex-row my-3">
              <div className="flex flex-col p-2 bg-slate-400 lg:w-3/5 rounded-b-lg lg:rounded-b-none lg:rounded-l-lg  order-2 lg:order-1">
                <div className="text-3xl text-left">{project.name}</div>
                <div className="text-left">{project.description}</div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="flex flex-wrap justify-center">
                    {project.technologies.map(technologie => (
                      <li key={technologie} className="p-1 m-1 bg-slate-300 rounded">{technologie}</li>
                    ))}
                  </ul>
                </div>
                <div className="my-2 flex justify-evenly">
                  <a href={project.repository} target="_blank" rel="noreferrer"><button className="p-3 rounded-lg bg-sky-950 text-white">Repository</button></a>
                  {project.deployment && 
                    <a href={project.deployment} target="_blank" rel="noreferrer"><button className="p-3 rounded-lg bg-sky-950 text-white">Visit App</button></a>
                  }
                </div>
              </div>
              <div className="lg:w-2/5 h-auto rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg bg-slate-400 order-1 lg:order-2">
                <img 
                  src={require(`../../assets/images/${project.image}.png`)}
                  alt={project.name}
                  className="rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;