import React, { useState } from "react";

function Skills() {
  const [skills] = useState([
    {
      file: 'icons8-html5-100.png',
      alt: 'HTML icon',
      label: 'HTML'
    },
    {
      file: 'icons8-css3-100.png',
      alt: 'CSS icon',
      label: 'CSS'
    },
    {
      file: 'icons8-javascript-100.png',
      alt: 'JavaScript icon',
      label: 'JavaScript'
    },
    {
      file: 'icons8-json-100.png',
      alt: 'JSON icon',
      label: 'JSON'
    },
    {
      file: 'icons8-git-100.png',
      alt: 'Git icon',
      label: 'Git'
    },
    {
      file: 'icons8-jquery-100.png',
      alt: 'jQuery icon',
      label: 'jQuery'
    },
    {
      file: 'icons8-express-js-100.png',
      alt: 'Express.js icon',
      label: 'Express.js'
    },
    {
      file: 'icons8-react-96.png',
      alt: 'React icon',
      label: 'React'
    }
  ])
  const [skills2] = useState([
    {
      file: 'icons8-node-js-96.png',
      alt: 'Node.js icon',
      label: 'Node.js'
    },
    {
      file: 'icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png',
      alt: 'MongoDB icon',
      label: 'MongoDB'
    },
    {
      file: 'icons8-mongoose-96.png',
      alt: 'Mongoose.js icon',
      label: 'Mongoose.js'
    },
    {
      file: 'icons8-graphql-96.png',
      alt: 'GraphQL icon',
      label: 'GraphQL'
    },
    {
      file: 'icons8-apollo-96.png',
      alt: 'Apollo Server icon',
      label: 'ApolloServer'
    },
    {
      file: 'icons8-bootstrap-96.png',
      alt: 'Bootstrap icon',
      label: 'Bootstrap'
    },
    {
      file: 'icons8-tailwind-css-100.png',
      alt: 'Tailwind CSS icon',
      label: 'TailwindCSS'
    }
  ])



  return (
    <section id="skills" className="mx-auto flex-col w-4/5 mb-10">
      <div className="text-5xl lg:text-left lg:pl-10 py-10">
        Skills
      </div>
      <div className="flex md:flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-evenly mb-5">
          {skills.map(skill => (
            <div key={skill.alt} className="m-3 w-20 h-20 flex-shrink-0">
              <img 
                src={require(`../../assets/icons/${skill.file}`)}
                alt={skill.alt}
                className=""
              />
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-evenly mb-5">
          {skills2.map(skill => (
            <div key={skill.alt} className="m-3 w-20 h-20 flex-shrink-0">
              <img 
                src={require(`../../assets/icons/${skill.file}`)}
                alt={skill.alt}
                className=""
              />
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;