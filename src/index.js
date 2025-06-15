import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter } from 'react-router-dom';  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <React.StrictMode>
    <HashRouter basename="/Flipkart-Website"> {/* 👈 Yeh line badli */}
      <App />
    </HashRouter>
  </React.StrictMode>
</Provider>
);

reportWebVitals();
