import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import RoutedPages from './pages/Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RoutedPages/> */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
