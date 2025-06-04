import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Project() {
  const project_data = [
    {
      id: 1,
      name: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing my resume, projects, and contact form using React and Bootstrap.',
      btn1: 'View Code',
      btn2: 'Live Demo',
    },
    {
      id: 2,
      name: 'Weather Forecast App',
      description:
        'A weather application that fetches real-time weather data from an open API and displays forecasts by city.',
      btn1: 'View Code',
      btn2: 'Live Demo',
    },
    {
      id: 3,
      name: 'E-commerce Product Page',
      description:
        'A mock e-commerce single product page with cart functionality and responsive layout using React.',
      btn1: 'View Code',
      btn2: 'Live Demo',
    },
    {
      id: 4,
      name: 'Blog CMS Dashboard',
      description:
        'An admin dashboard for managing blog posts, users, and comments using React and fake JSON APIs.',
      btn1: 'View Code',
      btn2: 'Live Demo',
    },
    {
      id: 5,
      name: 'Chat Application',
      description:
        'A real-time chat application using Socket.io, Node.js backend, and React frontend.',
      btn1: 'View Code',
      btn2: 'Live Demo',
    },
    {
      id: 6,
      name: 'ToDo App with Firebase',
      description:
        'A ToDo list app with Firebase Authentication and Firestore database integration.',
      btn1: 'View Code',
      btn2: 'Live Demo',
    },
  ];

  return (
    <div className='container mt-0'>
      <h1>Projects</h1>
      <div className='row'>
        {project_data.map((project) => (
          <div className='col-md-4 mb-4' key={project.id}>
            <div className='card h-100'>
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{project.name}</h5>
                <p className='card-text'>{project.description}</p>
                <div className='mt-auto d-flex justify-content-between'>
                  <button
                    className='btn btn-outline-primary btn-sm'
                    onClick={() => alert(project.name)}
                  >
                    {project.btn1}
                  </button>
                  <button className='btn btn-primary btn-sm'>
                    {project.btn2}
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

export default Project;
