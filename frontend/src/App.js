import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Project from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './actions/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <div>Loading</div>
      ) :( <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contacts" element={<Contact />} />
  
          <Route path="/account" element={<Login />} />
        </Routes>
  
        <Footer />
        </> 
       )}
    </Router>
    
      )
  
}

export default App;
