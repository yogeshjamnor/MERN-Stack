import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Task() {
  const tasks = [
    {
      id: 1,
      title: 'Design Homepage',
      desc: 'Create a modern responsive homepage UI.',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Setup Firebase',
      desc: 'Configure Firebase Auth & Realtime DB.',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Implement Login',
      desc: 'Build login with validation and routing.',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Add Admin Panel',
      desc: 'Create dashboard for admins.',
      status: 'Pending',
    },
    {
      id: 5,
      title: 'Optimize SEO',
      desc: 'Add meta tags, Open Graph, and alt attributes.',
      status: 'In Progress',
    },
    {
      id: 6,
      title: 'Fix Bugs',
      desc: 'Resolve reported issues in issue tracker.',
      status: 'Pending',
    },
    {
      id: 7,
      title: 'Write Docs',
      desc: 'Document APIs and components clearly.',
      status: 'In Review',
    },
    {
      id: 8,
      title: 'Test Deployment',
      desc: 'Test final build on staging environment.',
      status: 'Completed',
    },
    {
      id: 9,
      title: 'Create About Page',
      desc: 'Design and implement the About Us page.',
      status: 'In Progress',
    },
  ];

  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4'>Task List</h2>
      <div className='row g-4'>
        {tasks.map((task) => (
          <div className='col-md-4' key={task.id}>
            <div className='card h-100 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>
                  <i className='bi bi-check2-circle me-2 text-primary'></i>
                  {task.title}
                </h5>
                <p className='card-text'>{task.desc}</p>
                <span
                  className={`badge ${
                    task.status === 'Completed'
                      ? 'bg-success'
                      : task.status === 'In Progress'
                      ? 'bg-warning text-dark'
                      : task.status === 'In Review'
                      ? 'bg-info text-dark'
                      : 'bg-secondary'
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
