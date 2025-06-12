import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  const [summaryCards] = useState([
    { title: 'Employees', value: 154, icon: 'bi-people', color: 'primary' },
    { title: 'Departments', value: 12, icon: 'bi-building', color: 'success' },
    {
      title: 'Payroll (Monthly)',
      value: '₹ 9.2L',
      icon: 'bi-currency-rupee',
      color: 'warning',
    },
    {
      title: 'Pending Leaves',
      value: 21,
      icon: 'bi-calendar-x',
      color: 'danger',
    },
  ]);

  const [employees] = useState([
    ['EMP101', 'Amit Sharma', 'HR'],
    ['EMP102', 'Neha Patil', 'Finance'],
    ['EMP103', 'Ravi Kumar', 'IT'],
    ['EMP104', 'Pooja Iyer', 'Design'],
  ]);

  const [attendance] = useState([
    ['Amit Sharma', '9:05 AM', 'On Time'],
    ['Neha Patil', '9:20 AM', 'Late'],
    ['Ravi Kumar', '8:50 AM', 'On Time'],
    ['Pooja Iyer', '10:15 AM', 'Absent'],
  ]);

  const [leaveRequests] = useState([
    {
      name: 'Neha Patil',
      text: '2 days of sick leave (12–13 June)',
      status: 'Pending',
    },
    {
      name: 'Ravi Kumar',
      text: '5 days vacation (18–22 June)',
      status: 'Approved',
    },
  ]);

  const [performance] = useState([
    ['Amit Sharma', '4.5 / 5', 'Excellent leadership and punctuality.'],
    ['Neha Patil', '4.2 / 5', 'Great with team handling and reports.'],
    ['Ravi Kumar', '3.8 / 5', 'Good performance but needs consistency.'],
  ]);

  const [projects] = useState([
    ['HR Automation System', 'Completed'],
    ['Payroll Integration', 'In Progress'],
    ['Employee App', 'Stalled'],
  ]);

  const [announcements] = useState([
    {
      icon: 'bi-tools',
      title: 'Maintenance',
      desc: 'Server downtime on June 15, 10 PM to 2 AM.',
    },
    {
      icon: 'bi-file-earmark-text',
      title: 'Policy Update',
      desc: 'All departments must submit reports by June 25.',
    },
    {
      icon: 'bi-people-fill',
      title: 'Event',
      desc: 'Team-building workshop scheduled on June 28.',
    },
  ]);

  return (
    <div
      className='container-fluid p-4 bg-light'
      style={{ minHeight: '100vh' }}
    >
      <h2 className='mb-4'>Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className='row mb-4'>
        {summaryCards.map((card, i) => (
          <div className='col-md-3 mb-3' key={i}>
            <div className={`card text-white bg-${card.color} shadow`}>
              <div className='card-body'>
                <h5>{card.title}</h5>
                <h2>{card.value}</h2>
                <i className={`bi ${card.icon} fs-3 float-end`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Employee Table */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-dark text-white'>
          <h5>Employee Directory</h5>
        </div>
        <div className='card-body p-0'>
          <table className='table table-striped m-0'>
            <thead className='table-light'>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(([id, name, dept], i) => (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{dept}</td>
                  <td>{name.toLowerCase().replace(' ', '.')}@rego.com</td>
                  <td>
                    <span className='badge bg-success'>Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-info text-white'>
          <h5>Attendance Summary</h5>
        </div>
        <ul className='list-group list-group-flush'>
          {attendance.map(([name, time, status], i) => (
            <li
              className='list-group-item d-flex justify-content-between'
              key={i}
            >
              <span>{name}</span>
              <span>{time}</span>
              <span>
                <span
                  className={`badge bg-${
                    status === 'On Time'
                      ? 'success'
                      : status === 'Late'
                      ? 'warning'
                      : 'danger'
                  }`}
                >
                  {status}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Leave Requests */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-secondary text-white'>
          <h5>Leave Requests</h5>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            {leaveRequests.map((req, i) => (
              <li className='list-group-item' key={i}>
                <strong>{req.name}</strong> requested {req.text}
                <span
                  className={`badge float-end bg-${
                    req.status === 'Pending' ? 'warning' : 'success'
                  }`}
                >
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Performance Ratings */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-dark text-white'>
          <h5>Quarterly Performance</h5>
        </div>
        <div className='card-body'>
          <table className='table'>
            <thead className='table-light'>
              <tr>
                <th>Employee</th>
                <th>Rating</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {performance.map(([emp, rating, remark], i) => (
                <tr key={i}>
                  <td>{emp}</td>
                  <td>{rating}</td>
                  <td>{remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Status */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-success text-white'>
          <h5>Project Status</h5>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            {projects.map(([project, status], i) => (
              <li
                className='list-group-item d-flex justify-content-between'
                key={i}
              >
                <span>{project}</span>
                <span
                  className={`badge bg-${
                    status === 'Completed'
                      ? 'success'
                      : status === 'In Progress'
                      ? 'warning'
                      : 'danger'
                  }`}
                >
                  {status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Announcements */}
      <div className='card shadow mb-5'>
        <div className='card-header bg-warning text-dark'>
          <h5>Notices & Announcements</h5>
        </div>
        <div className='card-body'>
          {announcements.map((a, i) => (
            <p key={i}>
              <i className={`bi ${a.icon} me-2`}></i>
              <strong>{a.title}:</strong> {a.desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
