import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './styles/index.min.css';
//import './styles/basic.min.css';
import { Provider } from 'react-redux'
import store from "./ReduxStore";
import Background from './Background';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <Provider store={store}>
    <Background>
      <App />
    </Background>
  </Provider>
  
);


