import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterContacts,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

const { combineReducers } = require('redux');

const defaultItems = [
  { id: 1, name: 'Jack', number: '123' },
  { id: 2, name: 'Bob', number: '123' },
  { id: 3, name: 'John', number: '123' },
  { id: 4, name: 'Mike', number: '123' },
];

const itemsReducer = createReducer(defaultItems, {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const contactReducer = combineReducers({
  items: itemsReducer,
  filterString: filterReducer,
  loading: loadingReducer,
});

export default contactReducer;
