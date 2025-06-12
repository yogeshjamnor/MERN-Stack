import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function About() {
  return (
    <section className='container py-5'>
      <div className='row align-items-center mb-5'>
        {/* Profile Image */}
        <div className='col-md-5 text-center mb-4 mb-md-0'>
          <img
            src='img/yogesh.jpg'
            alt='Yogesh Jamnor'
            className='img-fluid rounded-circle shadow'
            style={{ maxWidth: '280px' }}
          />
        </div>

        {/* About Info */}
        <div className='col-md-7'>
          <h2 className='mb-3'>About Me</h2>
          <p className='lead'>
            I'm <strong>Yogesh Jamnor</strong>, a passionate front-end developer
            with a focus on crafting clean, efficient, and responsive web
            applications using <strong>React</strong>, <strong>Firebase</strong>
            , and <strong>Bootstrap</strong>.
          </p>
          <p>
            I enjoy solving real-world problems, learning new technologies, and
            collaborating in fast-paced environments. I specialize in developing
            interfaces that are accessible, fast, and intuitive.
          </p>

          {/* Personal Info */}
          <div className='row mt-4'>
            <div className='col-sm-6 mb-3'>
              <i className='bi bi-person-fill text-primary me-2'></i>
              <strong>Name:</strong> Yogesh Jamnor
            </div>
            <div className='col-sm-6 mb-3'>
              <i className='bi bi-geo-alt-fill text-success me-2'></i>
              <strong>Location:</strong> Pune, India
            </div>
            <div className='col-sm-6 mb-3'>
              <i className='bi bi-envelope-fill text-danger me-2'></i>
              <strong>Email:</strong> yogeshjamnor@gmail.com
            </div>
            <div className='col-sm-6 mb-3'>
              <i className='bi bi-code-slash text-warning me-2'></i>
              <strong>Tech Stack:</strong> React, Firebase, Bootstrap,
              JavaScript
            </div>
            <div className='col-sm-6 mb-3'>
              <i className='bi bi-mortarboard-fill text-info me-2'></i>
              <strong>Education:</strong> B.Sc. in Computer Science
            </div>
            <div className='col-sm-6 mb-3'>
              <i className='bi bi-briefcase-fill text-secondary me-2'></i>
              <strong>Experience:</strong> 2+ years in Web Development
            </div>
          </div>

          {/* Buttons */}
          <div className='mt-4'>
            <NavLink to='/' className='btn btn-primary me-2'>
              <i className='bi bi-house-door-fill me-1'></i> Back to Home
            </NavLink>
            <a
              href='https://github.com/yogeshjamnor'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-dark me-2'
            >
              <i className='bi bi-github me-1'></i> GitHub
            </a>
            <a
              href='https://linkedin.com/in/jamnor-yogesh-ramesh-86969124b/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-info text-white'
            >
              <i className='bi bi-linkedin me-1'></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <h4 className='mb-3'>
            <i className='bi bi-lightbulb-fill text-warning me-2'></i>Skills
          </h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>React.js & JSX</li>
            <li className='list-group-item'>
              Firebase (Auth, Firestore, Hosting)
            </li>
            <li className='list-group-item'>Bootstrap & Responsive Design</li>
            <li className='list-group-item'>API Integration & REST</li>
            <li className='list-group-item'>Version Control (Git & GitHub)</li>
          </ul>
        </div>
        <div className='col-md-6 mb-4'>
          <h4 className='mb-3'>
            <i className='bi bi-clipboard-check-fill text-success me-2'></i>
            Projects
          </h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>AgroFriend</strong> - Smart farming dashboard with
              Firebase backend.
            </li>
            <li className='list-group-item'>
              <strong>Payroll Manager</strong> - Static admin dashboard built
              with React + Bootstrap.
            </li>
            <li className='list-group-item'>
              <strong>Portfolio Site</strong> - Responsive portfolio with
              contact, project, and blog sections.
            </li>
          </ul>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col'>
          <h4 className='mb-3'>
            <i className='bi bi-chat-square-dots-fill text-primary me-2'></i>
            Soft Skills
          </h4>
          <div className='d-flex flex-wrap gap-3'>
            <span className='badge bg-primary'>Teamwork</span>
            <span className='badge bg-secondary'>Problem Solving</span>
            <span className='badge bg-success'>Adaptability</span>
            <span className='badge bg-danger'>Time Management</span>
            <span className='badge bg-warning text-dark'>Communication</span>
          </div>
        </div>
      </div>
    </section>
  );
}
