import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import './apps/settings/style-switcher.scss'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);

