import Navbar from './component/Navbar';
import Home from './component/Home';
import Form from './component/Form';
import Edit from './component/Edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/delete/:id' element={'Employee Deleted'} />
          <Route path='/add' element={<Form />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
