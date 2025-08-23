import './App.css';
import './styles/theme.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import Carbono from './components/Carbono';
import Blogs from './components/BlogsPage';
import Support from './components/Support';
import { useEffect, useState } from "react";
import NotFoundPage from './components/NotFoundPage';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from the backend API
    fetch('/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/product/:id" element={<ProductDetailsPage />} />
          <Route path="/carbono" element={<Carbono />} />
          <Route path="/values" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


