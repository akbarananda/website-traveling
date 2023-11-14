import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forgot" element={<ForgotPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/support" element={<SupportPage/>}/>
        </Routes>
      </Router>
      
    {/* <div class="py-32"></div> */}
    </div>
  );
}

export default App;
