import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './Navbar';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error('Error loading product:', err);
        alert('Failed to load product');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/products/${id}`, product);
      alert('Product updated successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error updating product:', err);
      alert('Failed to update product');
    }
  };

  return (
    <div className='container-fluid'>
      <NavBar />
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Product Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Price</label>
          <input
            type='text'
            className='form-control'
            name='price'
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-control'
            name='description'
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Image URL</label>
          <input
            type='text'
            className='form-control'
            name='image'
            value={product.image}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Update Product
        </button>
      </form>
    </div>
  );
}

export default Edit;
