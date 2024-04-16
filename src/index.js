import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import work001 from './images/work001.svg';
import work002 from './images/work002.svg';
import work003 from './images/work003.svg';


export { work001, work002, work003 };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


