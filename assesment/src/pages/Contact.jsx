import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact() {
  return (
    <section className='container py-5'>
      <div className='text-center mb-4'>
        <div className='d-flex justify-content-center gap-2 flex-wrap'>
          <NavLink to='/' className='btn btn-outline-primary'>
            Go to Home
          </NavLink>
          <a
            href='https://api.whatsapp.com/send?phone=9112279190'
            className='btn btn-success'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className='row'>
        {/* Contact Form */}
        <div className='col-lg-6 mb-4'>
          <div className='p-4 border rounded bg-light h-100'>
            <form action='contact.php' method='post'>
              <h5 className='mb-3'>Need Support!</h5>
              <p>Contact us for a quote, help, or to join the team.</p>
              <input
                type='text'
                name='name'
                className='form-control mb-3'
                placeholder='Your name'
              />
              <input
                type='text'
                name='email'
                className='form-control mb-3'
                placeholder='Your email'
              />
              <input
                type='text'
                name='subject'
                className='form-control mb-3'
                placeholder='Your subject'
              />
              <textarea
                name='description'
                className='form-control mb-3'
                rows='5'
                placeholder='Your message'
              ></textarea>
              <button type='submit' className='btn btn-primary w-100'>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className='col-lg-6 mb-4'>
          <div className='h-100 border rounded overflow-hidden'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27741.536361814535!2d73.85506576022799!3d18.59455542836018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8634815e185%3A0x61b2a188e0c07e9d!2sASM&#39;s%20IBMR%20Pune%20-%20Institute%20of%20Business%20Management%20and%20Research!5e0!3m2!1sen!2sin!4v1699760286301!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Google Map'
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className='row text-center mt-5'>
        <div className='col-md-4 mb-4'>
          <i className='bi bi-geo-alt-fill display-5 text-primary'></i>
          <h5 className='mt-2'>Location</h5>
          <p>Sawardari, Chakan-II </p>
        </div>
        <div className='col-md-4 mb-4'>
          <i className='bi bi-envelope-fill display-5 text-danger'></i>
          <h5 className='mt-2'>Email</h5>
          <p>yogeshjamnor@gmail.com</p>
        </div>
        <div className='col-md-4 mb-4'>
          <i className='bi bi-telephone-fill display-5 text-success'></i>
          <h5 className='mt-2'>Phone</h5>
          <p>9112279190</p>
        </div>
      </div>
    </section>
  );
}
