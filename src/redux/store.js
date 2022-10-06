import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contatcs/contactsRedusers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// axios
//   .get('contacts')
//   .then(response => console.log('response', response.data))
//   .catch(error => console.log);

// axios
//   .get('contacts')
//   .then(response => console.log('response', response.data))
//   .catch(error => console.log);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const storeWithPersistor = {
//   store,
//   persistor,
// };

export default store;
