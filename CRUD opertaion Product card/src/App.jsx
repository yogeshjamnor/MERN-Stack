import ProductList from './ProductList';
import Product from './Product';
import Form from './Form';
import Edit from './Edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product' element={<Product />} />
          <Route path='/form' element={<Form />} />
          <Route path='/edit/:id' element={<Edit />} />
          {/*fallback routing */}
          <Route path='*' element={'page not found'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
