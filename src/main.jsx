import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentComponent from './components/ParentComp.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
);
