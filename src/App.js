import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Carbono from './components/Carbono';
import Blogs from './components/BlogsPage';
import Support from './components/Support';
import {useEffect, useState} from "react";


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
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/carbono" element={<Carbono />} />
          <Route path="/values" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Router>
  );
}

export default App;


