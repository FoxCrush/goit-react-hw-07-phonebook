import 'modern-normalize/modern-normalize.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from 'redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={storeWithPersistor.persistor}> */}
      <App tab="home" />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
