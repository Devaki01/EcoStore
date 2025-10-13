import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Carbono from './components/Carbono';
import Blogs from './components/BlogsPage';
import Support from './components/Support';
import NotFoundPage from './components/NotFoundPage';
import SignUp from './components/auth/signUp';
import SignIn from './components/auth/signIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/carbono" element={<Carbono />} />
        <Route path="/values" element={<Blogs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;


