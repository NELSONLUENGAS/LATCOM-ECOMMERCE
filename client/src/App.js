import './App.css';
import Products from './components/Products';
import NavBarUser from './components/User/NavBarUser'
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';
import {Route, Routes } from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import SignIn from './components/SignIn';
import RegistroForm from './components/Registro/Registro';
import Categorias from './components/CrearNuevaCategorie/Categorias'
import Categories from './components/Categories';
import ProductDetail from "./components/ProductDetail/ProductDetail"
import CrearProducto from './components/Agregar producto/CrearProducto';

function App() {
  return (
    <Router>
    <div className="App">  
      <Routes>
        <Route exact path="/CrearProduct" element={<CrearProducto/>}/>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/user/profile" element={<NavBarUser/>}/>
          <Route exact path="/checkout-page" element={<CheckoutPage/>} />
          <Route exact path="/SignIn" element={<SignIn/>}/>
          <Route exact path="/SignUp" element={<RegistroForm/>}/>
          <Route exact path="/checkout-card" element={<CheckoutCard/>}/>
          <Route exact path="/Categories" element={<Categories/>}/>
          <Route exact path="/product/:id" element={<ProductDetail/>}></Route>
          <Route exact path="/categoriess" element={<Categorias/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

