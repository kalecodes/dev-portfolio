import React, { useState } from "react";

function Portofolio() {
  const [projects] = useState([
    {
      name: 'Portfolio',
      description: 'This site! - My professional portfolio to showcase my skills',
      technologies: ['Node.js', 'React', 'JSX', 'Tailwind CSS Framework'],
      repository: 'https://github.com/kalecodes/dev-portfolio'
    },
    {
      name: 'Bar Buddy',
      description: 'A search tool for cocktail lovers and bartenders, to find and learn new drink recipes.',
      technologies: ['HTML', 'Bulma CSS Framework', 'JavaScript', 'AJAX', 'JSON', 'Fetch API', 'Web Storage API', 'TheCocktailDB API', 'YouTube Data API'],
      repository: 'https://github.com/kalecodes/bar-buddy',
      deployment: 'https://kalecodes.github.io/bar-buddy/'
    },
    {
      name: 'Maker',
      description: "Social media application for artists and art enthusiests, built to consolidate artists' online presence and activities to enhance the online art community.",
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose ORM', 'ApolloServer', 'GraphQL', 'React', 'JSONWebTokens', 'Semantic UI', 'AWS S3', 'Heroku'],
      repository: 'https://github.com/kalecodes/maker'
    },
    {
      name: 'Crypto Today',
      description: 'A cryptocurrency data dashboard aimed to help first-time crypto investors gain more information before investing.',
      technologies: ['HTML', 'CSS', 'Materialize CSS Framework', 'JavaScript', 'CoinCap API', 'Newsdata.io API', 'LocalStorage API'],
      repository: 'https://github.com/kalecodes/markets-today',
      deployment: 'https://kalecodes.github.io/markets-today/'
    },
    {
      name: 'Weather Dashboard',
      description: 'Weather dashboard that provides current and future weather forecasts in US cities.',
      technologies: ['HTML', 'Bootstrap CSS Framework', 'JavaScript', 'Open Weather OneCall API', 'Open Weather Geocoding API', 'LocalStorage API'],
      repository: 'https://github.com/kalecodes/weather-dashboard',
      deployment: 'https://kalecodes.github.io/weather-dashboard/'
    },
    {
      name: 'Photo Portfolio',
      description: "(Prompted practice project) A photographer's portfolio website, built with React.",
      technologies: ['CSS', 'Node.js', 'create-react-app', 'React', 'JavaScript', 'JSX'],
      repository: 'https://github.com/kalecodes/photo-port-2',
      deployment: 'https://kalecodes.github.io/photo-port-2/'
    }
  ]);

  return (
    <section className="">
      
    </section>
  );
}

export default Portofolio;