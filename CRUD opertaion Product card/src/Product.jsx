import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from './Navbar';
import { NavLink } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);

  const DeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product');
    }
  };

  const fetchProducts = () => {
    axios
      .get('http://localhost:3000/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='row m-3'>
        {products.map((product) => (
          <div className='col-md-4 mb-4' key={product.id}>
            <div className='card h-100'>
              <img
                src={product.image}
                className='card-img-top img-thumbnail'
                alt={product.name}
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.description}</p>
                <p className='fw-bold text-primary'>{product.price}</p>
              </div>
              <div className='card-footer d-flex gap-2'>
                <button className='btn btn-success w-25'>Cart</button>
                <button
                  className='btn btn-danger w-25'
                  onClick={() => DeleteProduct(product.id)}
                >
                  Delete
                </button>

                <NavLink
                  className='btn btn-primary w-25'
                  to={`/edit/${product.id}`}
                >
                  Edit
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
