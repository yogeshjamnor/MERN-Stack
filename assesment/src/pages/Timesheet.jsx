import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // IMPORTANT

export default function Timesheet() {
  const [entries, setEntries] = useState([
    { date: 'Apr 03, 2025', empNo: '2020-9838', name: 'Srushti Maral', time: '11:21 PM', period: 'PM' },
    { date: 'Apr 03, 2025', empNo: '2022-8211', name: 'Gaurav Kharde', time: '11:21 AM', period: 'AM' },
    { date: 'Apr 02, 2025', empNo: '2021-5678', name: 'Rahul Desai', time: '10:15 AM', period: 'AM' },
    { date: 'Apr 01, 2025', empNo: '2023-4444', name: 'Priya Mehra', time: '04:45 PM', period: 'PM' },
    { date: 'Mar 30, 2025', empNo: '2024-2211', name: 'Aman Kapoor', time: '09:00 AM', period: 'AM' },
    { date: 'Mar 29, 2025', empNo: '2025-9999', name: 'Neha Singh', time: '01:30 PM', period: 'PM' },
    { date: 'Mar 28, 2025', empNo: '2020-8888', name: 'Ankit Sharma', time: '02:20 AM', period: 'AM' },
    { date: 'Mar 27, 2025', empNo: '2023-6666', name: 'Tina Roy', time: '06:00 PM', period: 'PM' },
  ]);

  const [newEntry, setNewEntry] = useState({
    date: '',
    empNo: '',
    name: '',
    time: '',
    period: 'AM',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  const addEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry({ date: '', empNo: '', name: '', time: '', period: 'AM' });

    // Close modal manually using Bootstrap Modal instance
    const modal = window.bootstrap.Modal.getInstance(document.getElementById('addModal'));
    modal.hide();
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className='container py-5'>
      <div className='card shadow'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h5 className='mb-0'>Attendance List</h5>
          <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#addModal'>
            <i className='bi bi-plus-circle me-1'></i> Add Attendance
          </button>
        </div>
        <div className='card-body p-0'>
          <table className='table table-bordered m-0'>
            <thead className='table-light'>
              <tr>
                <th>Date</th>
                <th>Employee No</th>
                <th>Name</th>
                <th>Time Record</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.empNo}</td>
                  <td>{entry.name}</td>
                  <td>
                    <span className='text-danger fw-bold'>
                      Time-in {entry.period}
                    </span><br />
                    <small>{entry.time}</small>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => deleteEntry(index)}>
                      <i className='bi bi-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='card-footer'>
          Showing 1 to {entries.length} of {entries.length} entries
        </div>
      </div>

      {/* Modal */}
      <div className='modal fade' id='addModal' tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Add Attendance</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <div className='mb-3'>
                <label>Date</label>
                <input type='text' className='form-control' name='date' value={newEntry.date} onChange={handleChange} placeholder='Apr 04, 2025' />
              </div>
              <div className='mb-3'>
                <label>Employee No</label>
                <input type='text' className='form-control' name='empNo' value={newEntry.empNo} onChange={handleChange} />
              </div>
              <div className='mb-3'>
                <label>Name</label>
                <input type='text' className='form-control' name='name' value={newEntry.name} onChange={handleChange} />
              </div>
              <div className='mb-3'>
                <label>Time</label>
                <input type='text' className='form-control' name='time' value={newEntry.time} onChange={handleChange} placeholder='12:30 AM' />
              </div>
              <div className='mb-3'>
                <label>Period</label>
                <select className='form-select' name='period' value={newEntry.period} onChange={handleChange}>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' data-bs-dismiss='modal'>Cancel</button>
              <button className='btn btn-success' onClick={addEntry}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
