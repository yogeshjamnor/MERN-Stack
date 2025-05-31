import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Skill() {
  const skill_data = [
    {
      id: 1,
      name: 'HTML5',
      description:
        'The standard markup language for creating web pages and web applications. Essential for structuring content on the web.',
      btn1: 'Learn More',
      btn2: 'Documentation',
    },
    {
      id: 2,
      name: 'CSS3',
      description:
        'Used to style and layout web pages — for example, to alter fonts, colors, spacing, and responsive design.',
      btn1: 'Learn More',
      btn2: 'Documentation',
    },
    {
      id: 3,
      name: 'JavaScript',
      description:
        'A programming language that enables interactive web pages and is an essential part of web applications.',
      btn1: 'Learn More',
      btn2: 'Documentation',
    },
    {
      id: 4,
      name: 'React',
      description:
        'A JavaScript library for building user interfaces, especially single-page applications with reusable components.',
      btn1: 'Learn More',
      btn2: 'Documentation',
    },
    {
      id: 5,
      name: 'Bootstrap',
      description:
        'A popular CSS framework for developing responsive and mobile-first websites quickly and easily.',
      btn1: 'Learn More',
      btn2: 'Documentation',
    },
    {
      id: 6,
      name: 'TypeScript',
      description:
        'A strongly typed programming language that builds on JavaScript, helping catch errors early and improving developer productivity.',
      btn1: 'Learn More',
      btn2: 'Documentation',
    },
  ];

  return (
    <div className='container mt-4'>
      <div className='row'>
        {skill_data.map((skill) => (
          <div className='col-md-4 mb-4' key={skill.id}>
            <div className='card h-100'>
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{skill.name}</h5>
                <p className='card-text'>{skill.description}</p>
                <div className='mt-auto d-flex justify-content-between'>
                  <button className='btn btn-outline-primary btn-sm'>
                    {skill.btn1}
                  </button>
                  <button className='btn btn-primary btn-sm'>
                    {skill.btn2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
