import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contatcs/contactsRedusers';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import axios from 'axios';

axios.defaults.baseURL = 'https://633dbec1f2b0e623dc7aa05f.mockapi.io/';

axios
  .get('contacts')
  .then(response => console.log('response', response.data))
  .catch(error => console.log);

axios
  .post('contacts', { name: 'Mike', number: '123' })
  .then(function (response) {
    console.log(response);
  });
axios
  .get('contacts')
  .then(response => console.log('response', response.data))
  .catch(error => console.log);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const rootPersistConfig = {
  key: 'storage',
  storage,
  blacklist: ['filterString'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(rootPersistConfig, contactReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const storeWithPersistor = {
  store,
  persistor,
};

export default storeWithPersistor;
