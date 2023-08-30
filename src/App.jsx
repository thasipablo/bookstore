import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';
import Categories from './pages/Categories';
import Home from './pages/Home';

const App = () => (
  <Router>
    <div className="app">
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
