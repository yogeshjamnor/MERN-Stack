import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact() {
  return (
    <section className='container py-5' id='contact'>
      {/* Navigation Buttons */}
      <div className='text-center mb-4'>
        <div className='d-flex justify-content-center gap-2 flex-wrap'>
          <NavLink to='/' className='btn btn-outline-primary'>
            <i className='bi bi-house-door-fill me-1'></i> Home
          </NavLink>
          <a
            href='https://api.whatsapp.com/send?phone=9112279190'
            className='btn btn-success'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bi bi-whatsapp me-1'></i> WhatsApp
          </a>
          <a
            href='mailto:yogeshjamnor@gmail.com'
            className='btn btn-danger'
          >
            <i className='bi bi-envelope-fill me-1'></i> Gmail
          </a>
          <a
            href='https://linkedin.com/in/jamnor-yogesh-ramesh-86969124b'
            className='btn btn-info text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bi bi-linkedin me-1'></i> LinkedIn
          </a>
          <a
            href='https://github.com/yogeshjamnor'
            className='btn btn-dark'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bi bi-github me-1'></i> GitHub
          </a>
        </div>
      </div>

      <div className='row'>
        {/* Contact Form */}
        <div className='col-lg-6 mb-4'>
          <div className='p-4 border rounded bg-light h-100 shadow-sm'>
            <form action='contact.php' method='post'>
              <h5 className='mb-3'>📬 Need Support?</h5>
              <p>Contact for queries, collaboration, or hiring!</p>
              <input
                type='text'
                name='name'
                className='form-control mb-3'
                placeholder='Your name'
                required
              />
              <input
                type='email'
                name='email'
                className='form-control mb-3'
                placeholder='Your email'
                required
              />
              <input
                type='text'
                name='subject'
                className='form-control mb-3'
                placeholder='Subject'
              />
              <textarea
                name='description'
                className='form-control mb-3'
                rows='5'
                placeholder='Your message'
              ></textarea>
              <button type='submit' className='btn btn-primary w-100'>
                <i className='bi bi-send-fill me-2'></i>Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className='col-lg-6 mb-4'>
          <div className='h-100 border rounded overflow-hidden shadow-sm'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30221.187895909734!2d73.7590322806046!3d18.769231901014592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b424d1182be3%3A0x7d482170f1e4fddf!2sSawardari%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1751032163181!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Sawardari, Pune Location'
            ></iframe>
          </div>
        </div>
      </div>

      {/* Personal Contact Info */}
      <div className='row text-center mt-5'>
        <div className='col-md-4 mb-4'>
          <i className='bi bi-geo-alt-fill display-5 text-primary'></i>
          <h5 className='mt-2'>Location</h5>
          <p>Sawardari, Chakan-II, Pune</p>
        </div>
        <div className='col-md-4 mb-4'>
          <i className='bi bi-envelope-fill display-5 text-danger'></i>
          <h5 className='mt-2'>Email</h5>
          <p>yogeshjamnor@gmail.com</p>
        </div>
        <div className='col-md-4 mb-4'>
          <i className='bi bi-phone-fill display-5 text-success'></i>
          <h5 className='mt-2'>Phone</h5>
          <p>+91 9112279190</p>
        </div>
      </div>
    </section>
  );
}
z