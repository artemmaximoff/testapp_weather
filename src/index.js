import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


