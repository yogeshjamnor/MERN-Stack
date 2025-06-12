import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Setting() {
  const [formData] = useState({
    fullName: 'Admin User',
    email: 'admin@company.com',
    language: 'English',
    timezone: 'Asia/Kolkata',
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  });

  return (
    <div
      className='container-fluid p-4 bg-white'
      style={{ minHeight: '100vh' }}
    >
      <h2 className='mb-4'>Settings</h2>

      {/* Profile Settings */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-dark text-white'>
          <h5>Profile Information</h5>
        </div>
        <div className='card-body'>
          <div className='mb-3'>
            <label className='form-label'>Full Name</label>
            <input
              type='text'
              className='form-control'
              defaultValue={formData.fullName}
              disabled
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email Address</label>
            <input
              type='email'
              className='form-control'
              defaultValue={formData.email}
              disabled
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-primary text-white'>
          <h5>Notification Preferences</h5>
        </div>
        <div className='card-body'>
          {[
            ['Email Notifications', formData.notifications.email],
            ['SMS Alerts', formData.notifications.sms],
            ['Push Notifications', formData.notifications.push],
          ].map(([label, enabled], index) => (
            <div className='form-check form-switch mb-2' key={index}>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                checked={enabled}
                disabled
              />
              <label className='form-check-label'>{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Change Password */}
      <div className='card mb-4 shadow'>
        <div className='card-header bg-warning text-dark'>
          <h5>Change Password</h5>
        </div>
        <div className='card-body'>
          <div className='mb-3'>
            <label className='form-label'>Current Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter current password'
              disabled
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>New Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter new password'
              disabled
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Confirm New Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Re-enter new password'
              disabled
            />
          </div>
          <button className='btn btn-secondary' disabled>
            Update Password
          </button>
        </div>
      </div>

      {/* General Preferences */}
      <div className='card mb-5 shadow'>
        <div className='card-header bg-secondary text-white'>
          <h5>General Preferences</h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <label className='form-label'>Preferred Language</label>
              <select
                className='form-select'
                defaultValue={formData.language}
                disabled
              >
                <option>English</option>
                <option>Hindi</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div className='col-md-6 mb-3'>
              <label className='form-label'>Timezone</label>
              <select
                className='form-select'
                defaultValue={formData.timezone}
                disabled
              >
                <option>Asia/Kolkata</option>
                <option>UTC</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
