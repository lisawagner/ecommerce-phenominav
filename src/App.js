import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Favourites from './pages/Favourites'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
