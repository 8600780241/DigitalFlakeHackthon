
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Product from './Components/Product';
import Category from './Components/Category';
import AddProduct from './Components/AddProduct';
import AddCategory from './Components/AddCategory';
import EditCategory from './Components/EditCategory';
import EditProduct from './Components/EditProduct';
import DeleteC from './Components/DeleteCategory';
import DeleteP from './Components/DeleteProduct';
import Header from './Components/Header';
import Logout from './Components/Logout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/category' element={<Category />} />
          <Route path='/addCategory' element={<AddCategory />} />
          <Route path='/addproduct' element={< AddProduct />} />
          <Route path='/editCategory/:id' element={<EditCategory />} />
          <Route path='/editproduct/:id' element={< EditProduct />} />
          <Route path='/deleteCategory/:id' element={<DeleteC />} />
          <Route path='/deleteProduct/:id' element={<DeleteP />} />
          <Route path='/header' element={<Header />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
