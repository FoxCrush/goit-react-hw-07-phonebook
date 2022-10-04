import 'modern-normalize/modern-normalize.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import storeWithPersistor from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// old
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={storeWithPersistor.store}>
      <PersistGate loading={null} persistor={storeWithPersistor.persistor}>
        <App tab="home" />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
