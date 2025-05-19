import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';

function ProductList() {
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
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className='container-fluid p-0' style={{ minHeight: '100vh' }}>
      <NavBar />
      <div className='container mt-4'>
        <div className='row'>
          {products.length > 0 ? (
            products.map((product) => (
              <div className='col-lg-4 col-md-6 mb-4' key={product.id}>
                <div className='card h-100 shadow-sm'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='card-img-top img-fluid'
                    style={{
                      height: '250px',
                      objectFit: 'contain',
                      padding: '10px',
                    }}
                  />
                  <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.description}</p>
                    <p className='fw-bold text-primary'>{product.price}</p>
                  </div>
                  <div className='card-footer d-flex gap-2'>
                    <button className='btn btn-success w-50'>Cart</button>
                    <button
                      className='btn btn-danger w-50'
                      onClick={() => DeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center'>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
