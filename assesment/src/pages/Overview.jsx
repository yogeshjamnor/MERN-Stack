import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Overview() {
  const [stats] = useState([
    {
      title: 'Total Employees',
      value: 154,
      icon: 'bi-people-fill',
      color: 'info',
    },
    {
      title: 'Avg. Salary',
      value: '₹58,000',
      icon: 'bi-graph-up',
      color: 'warning',
    },
    { title: 'Active Projects', value: 8, icon: 'bi-kanban', color: 'success' },
    {
      title: 'Open Positions',
      value: 5,
      icon: 'bi-briefcase',
      color: 'primary',
    },
  ]);

  const [departments] = useState([
    ['HR', 'Shalini Mehta', 20, '₹8L'],
    ['IT', 'Ravi Kumar', 45, '₹22L'],
    ['Finance', 'Neha Patil', 30, '₹18L'],
    ['Design', 'Pooja Iyer', 15, '₹10L'],
  ]);

  const [salaryDistribution] = useState([
    ['Below ₹30K', 20],
    ['₹30K - ₹50K', 60],
    ['₹50K - ₹80K', 40],
    ['Above ₹80K', 10],
  ]);

  const [topPerformers] = useState([
    ['Amit Sharma', 'HR', '4.9 / 5', 'Star Performer'],
    ['Ravi Kumar', 'IT', '4.8 / 5', 'Innovator Award'],
    ['Pooja Iyer', 'Design', '4.7 / 5', 'Creative Lead'],
  ]);

  const [hrMetrics] = useState([
    ['Avg. Joining Time', '18 Days', 'bi-hourglass-split'],
    ['Attrition Rate', '8.2%', 'bi-bar-chart-line'],
    ['Female Ratio', '42%', 'bi-gender-female'],
    ['Internal Promotions', '12', 'bi-arrow-up-circle'],
  ]);

  return (
    <div
      className='container-fluid p-4 bg-white'
      style={{ minHeight: '100vh' }}
    >
      <h2 className='mb-4'>Company Overview</h2>

      {/* Company Stats */}
      <div className='row mb-4'>
        {stats.map((item, i) => (
          <div className='col-md-3 mb-3' key={i}>
            <div className={`card text-white bg-${item.color} shadow`}>
              <div className='card-body'>
                <h5>{item.title}</h5>
                <h2>{item.value}</h2>
                <i className={`bi ${item.icon} fs-3 float-end`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Department Breakdown */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-dark text-white'>
          <h5>Department Breakdown</h5>
        </div>
        <table className='table table-bordered m-0'>
          <thead className='table-light'>
            <tr>
              <th>Department</th>
              <th>Head</th>
              <th>Employees</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {departments.map(([dept, head, count, budget], i) => (
              <tr key={i}>
                <td>{dept}</td>
                <td>{head}</td>
                <td>{count}</td>
                <td>{budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Salary Distribution */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-primary text-white'>
          <h5>Salary Distribution (Monthly)</h5>
        </div>
        <ul className='list-group list-group-flush'>
          {salaryDistribution.map(([range, count], i) => (
            <li
              className='list-group-item d-flex justify-content-between'
              key={i}
            >
              <span>{range}</span>
              <span className='badge bg-secondary'>{count} Employees</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Performers */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-success text-white'>
          <h5>Top Performers (Q2)</h5>
        </div>
        <table className='table m-0'>
          <thead className='table-light'>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Rating</th>
              <th>Awards</th>
            </tr>
          </thead>
          <tbody>
            {topPerformers.map(([name, dept, rating, award], i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{dept}</td>
                <td>{rating}</td>
                <td>{award}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* HR Metrics */}
      <div className='card mb-5 shadow'>
        <div className='card-header bg-secondary text-white'>
          <h5>HR Metrics</h5>
        </div>
        <div className='card-body'>
          <div className='row text-center'>
            {hrMetrics.map(([label, value, icon], i) => (
              <div className='col-md-3 mb-3' key={i}>
                <div className='border rounded p-3'>
                  <i className={`bi ${icon} fs-2 mb-2 text-primary`}></i>
                  <h6>{label}</h6>
                  <h4>{value}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
