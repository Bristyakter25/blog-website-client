import React from 'react';

const TrendingTechnology = () => {
  const technologies = [
    { name: 'React.js', description: 'A JavaScript library for building user interfaces.' },
    { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
    { name: 'Tailwind CSS', description: 'A utility-first CSS framework for creating custom designs.' },
    { name: 'Next.js', description: 'A React framework for building static and server-rendered applications.' },
    { name: 'GraphQL', description: 'A query language for APIs and a runtime for executing those queries.' },
  ];

  return (
    <div className='max-h-screen my-10'>
      <div className="bg-gray-100 dark:bg-purple-700 p-5  rounded-lg mt-48 mb-8">
      <h3 className="text-2xl font-bold text-center">Trending Technologies in Web Development</h3>
      <ul className="mt-4">
        {technologies.map((tech, index) => (
          <li key={index} className="mt-4">
            <h4 className="font-semibold text-xl dark:text-sky-300 text-blue-600">{tech.name}</h4>
            <p className="text-gray-600 dark:text-white">{tech.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TrendingTechnology;