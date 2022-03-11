import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages';
import Services from './pages/services';
import SignUp from './pages/signup';
import Navbar from './components/Navbar/Navbar';

const App= () => {
  return (
    <Router>
     <Navbar />
     <main>
       <Routes>
         <Route path='/wwp/' exact element={<Home/>} />
         <Route path='/' exact element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/contact' element={<Contact/>} />
          <Route path='/signup' element={<SignUp/>} />
       </Routes>
      </main>
    </Router>
  );
}

export default App;
