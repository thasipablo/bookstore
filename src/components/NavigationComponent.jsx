import React from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent = () => (
  <header className="header">
    <div className="container header-content">
      <nav className="navigation">
        <div className="brand">Bookstore CMS</div>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/categories">
          Categories
        </Link>
      </nav>
      <div className="avatar-container">
        <div className="avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
);

export default NavigationComponent;
