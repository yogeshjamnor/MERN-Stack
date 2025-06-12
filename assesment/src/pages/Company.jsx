import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Company() {
  return (
    <section className='container py-5'>
      {/* Header / Hero Section */}
      <div className='text-center mb-5'>
        <h1 className='display-5 fw-bold'>Welcome to Rego Digital</h1>
        <p className='lead text-muted'>
          A full-service digital agency empowering your brand through strategy,
          design, and technology.
        </p>
      </div>

      {/* About */}
      <div className='row align-items-center mb-5'>
        <div className='col-md-6'>
          <img
            src='/img/rego.jpg'
            className='img-fluid'
            style={{ maxHeight: '250px' }}
          />
        </div>
        <div className='col-md-6'>
          <h3>About Us</h3>
          <p>
            Rego Digital is a leading digital transformation partner that
            delivers performance-driven marketing, branding, and web solutions.
            From startups to enterprises, we help companies grow digitally and
            reach their full potential.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className='row text-center mb-5'>
        <div className='col-md-6'>
          <div className='p-4 border rounded shadow-sm'>
            <i className='bi bi-bullseye display-4 text-primary'></i>
            <h4 className='mt-3'>Our Mission</h4>
            <p>
              To empower businesses by crafting result-oriented strategies that
              drive digital success.
            </p>
          </div>
        </div>
        <div className='col-md-6 mt-4 mt-md-0'>
          <div className='p-4 border rounded shadow-sm'>
            <i className='bi bi-eye-fill display-4 text-success'></i>
            <h4 className='mt-3'>Our Vision</h4>
            <p>
              To be the most trusted digital partner for innovative businesses
              across the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='mb-5'>
        <h3 className='text-center mb-4'>Our Services</h3>
        <div className='row g-4'>
          <div className='col-md-4'>
            <div className='p-4 bg-light rounded shadow-sm text-center'>
              <i className='bi bi-graph-up-arrow display-5 text-warning'></i>
              <h5 className='mt-3'>Performance Marketing</h5>
              <p>
                We run result-driven campaigns to maximize ROI across all
                platforms.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-4 bg-light rounded shadow-sm text-center'>
              <i className='bi bi-brush display-5 text-danger'></i>
              <h5 className='mt-3'>UI/UX & Web Design</h5>
              <p>
                We design clean, modern interfaces and powerful digital
                experiences.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-4 bg-light rounded shadow-sm text-center'>
              <i className='bi bi-code-slash display-5 text-info'></i>
              <h5 className='mt-3'>Web Development</h5>
              <p>
                Robust and scalable websites, apps, and platforms to match your
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center bg-primary text-white p-4 rounded'>
        <h4 className='mb-3'>Let's Build Something Great Together</h4>
        <a href='/contact' className='btn btn-outline-light'>
          Contact Us
        </a>
      </div>
    </section>
  );
}
