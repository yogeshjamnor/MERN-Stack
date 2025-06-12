import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Luke Short',
      handle: '@Short',
      icon: 'bi-person-circle',
      score: 80,
      department: 'Marketing',
      designation: 'Marketing Strategist',
      email: 'luke@company.com',
      location: 'Mumbai, India',
      joined: 'March 2022',
      status: 'Active',
    },
    {
      name: 'John Hard',
      handle: '@rdacre',
      icon: 'bi-person-fill',
      score: 70,
      department: 'Finance',
      designation: 'Account Manager',
      email: 'john@company.com',
      location: 'Delhi, India',
      joined: 'Jan 2021',
      status: 'On Leave',
    },
    {
      name: 'Paul Rees',
      handle: '@Rees',
      icon: 'bi-person-circle',
      score: 77,
      department: 'HR',
      designation: 'HR Specialist',
      email: 'paul@company.com',
      location: 'Pune, India',
      joined: 'Nov 2020',
      status: 'Active',
    },
    {
      name: 'Rachel Parr',
      handle: '@Parr',
      icon: 'bi-person-fill',
      score: 85,
      department: 'Design',
      designation: 'UI/UX Designer',
      email: 'rachel@company.com',
      location: 'Bangalore, India',
      joined: 'May 2021',
      status: 'Active',
    },
    {
      name: 'Eric Reid',
      handle: '@Eric',
      icon: 'bi-person-circle',
      score: 95,
      department: 'Tech',
      designation: 'Full Stack Developer',
      email: 'eric@company.com',
      location: 'Hyderabad, India',
      joined: 'July 2019',
      status: 'Active',
    },
    {
      name: 'Jan Ince',
      handle: '@Ince',
      icon: 'bi-person-fill',
      score: 97,
      department: 'Support',
      designation: 'Support Manager',
      email: 'jan@company.com',
      location: 'Chennai, India',
      joined: 'Feb 2020',
      status: 'Active',
    },
  ];

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <section className='container py-5'>
      <div className='bg-light p-4 rounded text-center mb-4 shadow-sm'>
        <h4 className='mb-2'>Team Overview</h4>
        <p className='mb-3'>
          <i className='bi bi-people-fill me-2'></i>
          <strong>140 influencers</strong> in your company
        </p>
        <div className='d-flex justify-content-center gap-5'>
          <div>
            <h3 className='mb-0'>350</h3>
            <small className='text-muted'>New Tasks</small>
          </div>
          <div>
            <h3 className='mb-0'>130</h3>
            <small className='text-muted'>Completed Tasks</small>
          </div>
        </div>
      </div>

      <div className='row'>
        {teamMembers.map((member, index) => (
          <div className='col-md-4 mb-4' key={index}>
            <div
              className='card text-center shadow-sm h-100 border-0'
              role='button'
              onClick={() => openModal(member)}
            >
              <div className='card-body'>
                <i
                  className={`bi ${member.icon} display-4 text-primary mb-3`}
                ></i>
                <h5 className='card-title mb-1'>{member.name}</h5>
                <p className='text-muted small mb-1'>{member.designation}</p>
                <p className='text-muted'>{member.department}</p>
                <h6 className='fw-bold text-success'>{member.score}%</h6>
              </div>
              <div className='card-footer text-muted small'>
                Status:{' '}
                <span
                  className={`badge ${
                    member.status === 'Active'
                      ? 'bg-success'
                      : 'bg-warning text-dark'
                  }`}
                >
                  {member.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className='modal show fade'
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div
            className='modal-dialog modal-dialog-centered'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{selectedMember.name}</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={closeModal}
                ></button>
              </div>
              <div className='modal-body'>
                <div className='text-center'>
                  <i
                    className={`bi ${selectedMember.icon} display-4 text-primary mb-3`}
                  ></i>
                  <p>
                    <strong>Handle:</strong> {selectedMember.handle}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedMember.email}
                  </p>
                  <p>
                    <strong>Department:</strong> {selectedMember.department}
                  </p>
                  <p>
                    <strong>Designation:</strong> {selectedMember.designation}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedMember.location}
                  </p>
                  <p>
                    <strong>Joined:</strong> {selectedMember.joined}
                  </p>
                  <p>
                    <strong>Performance Score:</strong> {selectedMember.score}%
                  </p>
                  <p>
                    <strong>Status:</strong>{' '}
                    <span
                      className={`badge ${
                        selectedMember.status === 'Active'
                          ? 'bg-success'
                          : 'bg-warning text-dark'
                      }`}
                    >
                      {selectedMember.status}
                    </span>
                  </p>
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
