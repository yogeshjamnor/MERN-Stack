import React from 'react';
import Student from './Student';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const student_data = [
      {
        id: 1,
        name: 'Rahul Sharma',
        age: 17,
        grade: '12th',
        school: 'Green Valley School',
        address: 'Delhi, India',
      },
      {
        id: 2,
        name: 'Sneha Verma',
        age: 16,
        grade: '11th',
        school: 'Bright Future Academy',
        address: 'Mumbai, India',
      },
      {
        id: 3,
        name: 'Amit Gupta',
        age: 15,
        grade: '10th',
        school: 'Sunrise Public School',
        address: 'Lucknow, India',
      },
      {
        id: 4,
        name: 'Pooja Patel',
        age: 14,
        grade: '9th',
        school: 'St. Xavier School',
        address: 'Ahmedabad, India',
      },
      {
        id: 5,
        name: 'Rohan Mehta',
        age: 18,
        grade: '12th',
        school: 'National Public School',
        address: 'Bangalore, India',
      },
    ];

    return (
      <div className='container-fluid'>
        <h1 className='text-center bg-primary text-white p-2'>
          Student Records
        </h1>
        <div className='row'>
          {student_data.map((student) => (
            <div className='col-md-4 mb-4' key={student.id}>
              <Student
                name={student.name}
                age={student.age}
                grade={student.grade}
                school={student.school}
                address={student.address}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
