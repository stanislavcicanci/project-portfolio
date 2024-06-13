import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import work001 from './images/work001.png';
import work002 from './images/work002.png';
import work003 from './images/work003.png';
import heroab from './images/heroab.png';
import plus from './images/plus.svg';


export { work001, work002, work003, plus, heroab };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


