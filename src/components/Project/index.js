import React from 'react';

function Project({ onClose, currentProject }) {
  const { name, description, technologies, repository, deployment, index } = currentProject

  return(
    <div className="inset-0 z-10 fixed overflow-auto bg-black/75">
      <div className="w-4/5 mx-auto my-16 p-10 bg-white rounded-xl">
        <h3 className="text-3xl">{name}</h3>
        <p>{description}</p>
        <img src={require(`../../assets/images/${index}.png`)} alt={`A screenshot of the ${name} application`} className="my-5"/>
        <div className="flex justify-evenly">
          <button className="p-3 bg-gray-900 rounded-lg text-white">View Repository</button>
          <button className="p-3 bg-sky-600 rounded-lg text-white">Visit Application</button>
        </div>
        {technologies && 
          <div className="my-5">
            <h4 className="text-xl">Technologies:</h4>
            <div className="flex flex-wrap justify-center">
              {technologies.map((technology) => (
                <p 
                  key={technology}
                  className="p-2 m-1 rounded-lg bg-sky-300"
                >{technology}</p>
              ))}
            </div>
          </div>
        }
        <button
          type="button"
          onClick={onClose}
          className="mt-5 p-4 bg-gray-600 rounded-xl text-white text-xl"
        >Close Modal</button>
      </div>
    </div>
  )
}

export default Project;