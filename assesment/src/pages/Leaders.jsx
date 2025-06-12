import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Leaders() {
  const projects = [
    {
      title: 'Box of Crayons',
      date: '23-02-2021',
      deadline: '1 Month',
      leader: 'Peter',
      icon: 'bi-person-circle',
      completion: 85,
      stage: 'MEDIUM',
      badge: 'warning',
    },
    {
      title: 'Fast Cad',
      date: '14-04-2021',
      deadline: '2 Month',
      leader: 'Benjamin',
      icon: 'bi-person-fill',
      completion: 76,
      stage: 'MEDIUM',
      badge: 'danger',
    },
    {
      title: 'Gob Geeklords',
      date: '16-03-2021',
      deadline: '10 Month',
      leader: 'Evan',
      icon: 'bi-person-square',
      completion: 65,
      stage: 'LOW',
      badge: 'success',
    },
    {
      title: 'Java Dalia',
      date: '17-03-2021',
      deadline: '8 Month',
      leader: 'Connor',
      icon: 'bi-person-lines-fill',
      completion: 48,
      stage: 'MEDIUM',
      badge: 'danger',
    },
    {
      title: 'Practice to Perfect',
      date: '12-02-2021',
      deadline: '1 Month',
      leader: 'Colin',
      icon: 'bi-person-vcard',
      completion: 80,
      stage: 'LOW',
      badge: 'success',
    },
    {
      title: 'Rhinestone',
      date: '18-02-2021',
      deadline: '2 Month',
      leader: 'Adam',
      icon: 'bi-person-fill-up',
      completion: 90,
      stage: 'HIGH',
      badge: 'danger',
    },
    {
      title: 'Social Geek Made',
      date: '10-01-2021',
      deadline: '4 Month',
      leader: 'Keith',
      icon: 'bi-person-gear',
      completion: 78,
      stage: 'MEDIUM',
      badge: 'warning',
    },
  ];

  return (
    <div className='container py-5'>
      <h3 className='mb-4'>Project Information</h3>
      <div className='table-responsive'>
        <table className='table table-striped table-bordered align-middle'>
          <thead className='table-light'>
            <tr>
              <th className='text-start'>Title</th>
              <th className='text-start'>Start Date</th>
              <th className='text-start'>Deadline</th>
              <th className='text-start'>Leader</th>
              <th className='text-start'>Completion</th>
              <th className='text-start'>Stage</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={index}>
                <td className='text-start'>{proj.title}</td>
                <td className='text-start'>{proj.date}</td>
                <td className='text-start'>{proj.deadline}</td>
                <td className='text-start'>
                  <div className='d-flex align-items-center gap-2'>
                    <i className={`bi ${proj.icon} fs-5 text-primary`}></i>
                    <span>{proj.leader}</span>
                  </div>
                </td>
                <td className='text-start'>
                  <div className='progress' style={{ height: '20px' }}>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: `${proj.completion}%` }}
                    >
                      {proj.completion}%
                    </div>
                  </div>
                </td>
                <td className='text-start'>
                  <span className={`badge bg-${proj.badge}`}>{proj.stage}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
