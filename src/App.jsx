import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewStudent from './pages/ViewStudent';
import UpdateStudent from './pages/UpdateStudent';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-student' element={<AddStudent />} />
          <Route path='/view-student' element={<ViewStudent />} />
          <Route path='/update-student/:id' element={<UpdateStudent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;