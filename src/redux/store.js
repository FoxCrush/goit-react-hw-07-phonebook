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

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = {
//   contacts: {
//     items: [
// { id: 1, name: 'Alex', number: '123' },
// { id: 2, name: 'Bob', number: '123' },
// { id: 3, name: 'John', number: '123' },
// { id: 4, name: 'Mike', number: '123' },
//     ],
//     filterString: 'test',
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'phonebook/CreateContact':
//       return { contacts: [...state.contacts, action.payload] };
//     case 'phonebook/filterStringContacts':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filterString: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
// const contatcsInitialState = {
//   contacts: {
//     items: [
//       { id: 1, name: 'Alex', number: '123' },
//       { id: 2, name: 'Bob', number: '123' },
//       { id: 3, name: 'John', number: '123' },
//       { id: 4, name: 'Mike', number: '123' },
//     ],
//     filterString: 'test',
//   },
// };
