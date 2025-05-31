import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className='container mt-2'>
      <img
        src='yogesh img.jpg'
        className='img-thumbnail'
        style={{ height: '120px', width: '100px' }}
      />
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate front-end developer with experience building
        responsive, user-friendly websites and applications. I specialize in
        technologies like React, JavaScript, HTML5, and CSS3, striving to create
        seamless digital experiences.
      </p>

      <h4 className='mt-4'>My Approach</h4>
      <p>
        I believe that great web applications combine clean, maintainable code
        with thoughtful design and usability. I focus on learning best practices
        and staying updated with the latest web technologies to deliver modern
        and performant solutions.
      </p>

      <h4 className='mt-4'>Skills & Tools</h4>
      <ul>
        <li>React, JavaScript (ES6+), TypeScript</li>
        <li>HTML5, CSS3, Bootstrap 5</li>
        <li>Version Control with Git & GitHub</li>
        <li>REST APIs and Asynchronous Programming</li>
        <li>Responsive & Mobile-first Design</li>
      </ul>

      <h4 className='mt-4'>Get In Touch</h4>
      <p>
        I’m always excited to collaborate on new projects or discuss ideas. Feel
        free to reach out via email or LinkedIn!
      </p>
    </div>
  );
}

export default About;
