import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/rootReducer'

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

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


