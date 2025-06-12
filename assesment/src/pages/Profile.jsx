import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MyProfile() {
  const profile = {
    name: 'Yogesh Jamnor',
    dob: '19 February 2002',
    email: 'yogeshjamnor@gmail.com',
    phone: '+91 9112279190',
    address: '123, Shivaji Nagar, Pune, Maharashtra, India',
    education: [
      {
        degree: 'B.Sc in Computer Science',
        institute: 'MIT Pune',
        year: '2018 - 2022',
        grade: '8.5 CGPA',
      },
      {
        degree: 'HSC (Science)',
        institute: 'Maharashtra State Board',
        year: '2016 - 2018',
        grade: '82%',
      },
    ],
    skills: [
      'React',
      'Firebase',
      'Bootstrap',
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
      'REST APIs',
    ],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'Rego Digital',
        duration: 'Aug 2022 - Present',
        description:
          'Developed dynamic web applications using React and Bootstrap. Worked with Firebase for authentication and real-time database. Created responsive UI designs and reusable components.',
      },
    ],
    certifications: [
      {
        name: 'React Developer Certification',
        issuedBy: 'Coursera',
        year: '2023',
      },
      {
        name: 'Frontend Web Development',
        issuedBy: 'Udemy',
        year: '2022',
      },
    ],
    projects: [
      {
        title: 'Admin Dashboard',
        tech: 'React, Bootstrap',
        summary:
          'Created a responsive admin dashboard with dynamic UI components and Firebase integration.',
      },
      {
        title: 'Portfolio Website',
        tech: 'HTML, CSS, JS',
        summary:
          'Personal website showcasing profile, projects, and contact form.',
      },
    ],
    languages: ['English', 'Hindi', 'Marathi'],
  };

  return (
    <div className='container py-5'>
      <h1 className='mb-4'>Profile</h1>

      <div className='border p-4 shadow rounded bg-white'>
        {/* Profile Header */}
        <div className='row mb-4'>
          <div className='col-md-4 text-center'>
            <img
              src='/img/yogesh.jpg'
              alt='Yogesh Jamnor'
              className='img-fluid rounded-circle border'
              style={{ maxHeight: '200px', width: 'auto' }}
            />
          </div>
          <div className='col-md-8'>
            <h3>{profile.name}</h3>
            <p>
              <i className='bi bi-envelope'></i> {profile.email}
            </p>
            <p>
              <i className='bi bi-telephone'></i> {profile.phone}
            </p>
            <p>
              <i className='bi bi-geo-alt'></i> {profile.address}
            </p>
            <p>
              <i className='bi bi-cake'></i> DOB: {profile.dob}
            </p>
          </div>
        </div>

        <hr />

        {/* Education */}
        <h4 className='mb-3'>Education</h4>
        <ul className='list-group mb-4'>
          {profile.education.map((edu, i) => (
            <li className='list-group-item' key={i}>
              <strong>{edu.degree}</strong> at {edu.institute}
              <br />
              <small className='text-muted'>
                {edu.year} • Grade: {edu.grade}
              </small>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <h4 className='mb-3'>Skills</h4>
        <div className='mb-4'>
          {profile.skills.map((skill, i) => (
            <span className='badge bg-primary me-2 mb-2' key={i}>
              {skill}
            </span>
          ))}
        </div>

        {/* Experience */}
        <h4 className='mb-3'>Experience</h4>
        {profile.experience.map((exp, i) => (
          <div key={i} className='mb-4'>
            <h5>
              {exp.title} <small className='text-muted'>@ {exp.company}</small>
            </h5>
            <p className='text-muted'>
              <i className='bi bi-calendar'></i> {exp.duration}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}

        {/* Certifications */}
        <h4 className='mb-3'>Certifications</h4>
        <ul className='list-group mb-4'>
          {profile.certifications.map((cert, i) => (
            <li className='list-group-item' key={i}>
              <strong>{cert.name}</strong> - {cert.issuedBy} ({cert.year})
            </li>
          ))}
        </ul>

        {/* Projects */}
        <h4 className='mb-3'>Projects</h4>
        {profile.projects.map((proj, i) => (
          <div key={i} className='mb-3'>
            <h6>
              {proj.title}{' '}
              <span className='badge bg-secondary ms-2'>{proj.tech}</span>
            </h6>
            <p>{proj.summary}</p>
          </div>
        ))}

        {/* Languages */}
        <h4 className='mb-3'>Languages</h4>
        <ul className='list-unstyled'>
          {profile.languages.map((lang, i) => (
            <li key={i}>
              <i className='bi bi-check-circle-fill text-success me-2'></i>
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
