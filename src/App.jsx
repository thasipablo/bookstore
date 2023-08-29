import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';
import Categories from './pages/Categories';
import Home from './pages/Home';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <NavigationComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
