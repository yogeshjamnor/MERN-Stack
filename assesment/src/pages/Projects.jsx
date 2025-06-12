import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AgroFriend',
      image: 'img/agrofriend.png',
      description:
        'AgroFriend is a comprehensive farming assistant app developed with React and Firebase. It helps farmers track crop health, monitor fertilizer usage, and receive agricultural alerts in real-time.',
      features: [
        'Real-time crop monitoring',
        'Farmer-friendly UI/UX',
        'Fertilizer and resource logs',
        'Admin dashboard integration',
      ],
      techStack: ['React', 'Firebase', 'Bootstrap', 'Firestore'],
    },
    {
      id: 2,
      title: 'Payroll Dashboard',
      image: 'img/payroll.png',
      description:
        'A professional admin dashboard for managing employee attendance, payroll, leaves, and task status. Fully responsive and designed for HR teams.',
      features: [
        'Employee listing and attendance tracking',
        'Real-time payroll overview',
        'Department-wise segmentation',
        'Responsive layout with Bootstrap',
      ],
      techStack: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
    },
    {
      id: 3,
      title: 'Quiz App',
      image: 'img/quiz.png',
      description:
        'An interactive quiz application that supports multiple categories and stores user scores. Built using React and Firebase Realtime Database.',
      features: [
        'Dynamic category selection',
        'Real-time score tracking',
        'Mobile-first design',
        'Firebase integration for data sync',
      ],
      techStack: ['React', 'Firebase Realtime DB', 'HTML', 'CSS'],
    },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-4'>My Projects</h2>

      <div className='row'>
        {projects.map((project) => (
          <div className='col-md-4 mb-4' key={project.id}>
            <div
              className='card shadow-sm h-100'
              role='button'
              onClick={() => openModal(project)}
            >
              <div className='overflow-hidden' style={{ height: '200px' }}>
                <img
                  src={project.image}
                  className='card-img-top w-100'
                  alt={project.title}
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{project.title}</h5>
                <p className='card-text flex-grow-1'>
                  {project.description.substring(0, 100)}...
                </p>
                <button className='btn btn-primary mt-auto'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className='modal show fade'
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div
            className='modal-dialog modal-lg modal-dialog-centered'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{selectedProject.title}</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={closeModal}
                ></button>
              </div>
              <div className='modal-body'>
                <img
                  src={selectedProject.image}
                  className='img-fluid rounded mb-4'
                  alt={selectedProject.title}
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
                <p>{selectedProject.description}</p>

                <h6 className='mt-3'>Key Features:</h6>
                <ul>
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <h6 className='mt-3'>Tech Stack:</h6>
                <div>
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className='badge bg-secondary me-2 mb-2'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-secondary' onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
