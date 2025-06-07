import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Home() {
  const emp = {
    id: 1,
    name: 'Alice Smith',
    username: 'asmith',
    email: 'alice@example.com',
    phone: '555-123-4567',
    website: 'alicesmith.io',
    company: {
      name: 'Creative Minds',
      catchPhrase: 'Design your dreams',
      bs: 'creative agency',
    },
    address: {
      suite: 'Unit 7B',
      street: 'Sunset Boulevard',
      city: 'Dream City',
      zipcode: '67890',
      geo: {
        lat: '37.7749',
        lng: '-122.4194',
      },
    },
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row m-3'>
          <div className='col-md-4 mb-4'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{emp.name}</h5>
                <p className='card-text'>
                  <b>Username:</b> {emp.username} <br />
                  <b>Email:</b> {emp.email} <br />
                  <b>Phone:</b> {emp.phone} <br />
                  <b>Website:</b> {emp.website} <br />
                  <b>Company:</b> {emp.company.name} <br />
                  <b>CatchPhrase:</b> {emp.company.catchPhrase} <br />
                  <b>Business:</b> {emp.company.bs} <br />
                  <b>Address:</b> {emp.address.suite}, {emp.address.street},{' '}
                  {emp.address.city}, {emp.address.zipcode} <br />
                  <b>Geo:</b> Lat: {emp.address.geo.lat}, Lng:{' '}
                  {emp.address.geo.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
