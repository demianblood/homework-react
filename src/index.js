import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.css';
import {App} from './App';
import storeConfig from "./store/store.config";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={storeConfig}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

