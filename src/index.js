import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from './data/firebase'
import { FirebaseAppProvider } from 'reactfire'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig = {firebaseConfig} >
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

