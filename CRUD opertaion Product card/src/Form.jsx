import React, { useState } from 'react';
import NavBar from './Navbar';

function Form() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      alert('Product added successfully');
      setProduct({
        name: '',
        price: '',
        description: '',
        image: '',
      });
    } else {
      alert('Failed to add product');
    }
  };

  return (
    <>
      <NavBar />
      <div className='container-fluid'>
        <h3>Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Product Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='price' className='form-label'>
              Price
            </label>
            <input
              type='text'
              name='price'
              id='price'
              className='form-control'
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='image' className='form-label'>
              Image Path
            </label>
            <input
              type='text'
              name='image'
              id='image'
              className='form-control'
              value={product.image}
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
