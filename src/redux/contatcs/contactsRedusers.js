import { createReducer } from '@reduxjs/toolkit';

const { combineReducers } = require('redux');

const defaultItems = [
  { id: 1, name: 'Jack', number: '123' },
  { id: 2, name: 'Bob', number: '123' },
  { id: 3, name: 'John', number: '123' },
  { id: 4, name: 'Mike', number: '123' },
];

const itemsReducer = createReducer(defaultItems, {
  'phonebook/CreateContact': (state, action) => [...state, action.payload],
  'phonebook/DeleteContact': (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  'phonebook/FilterContacts': (_, action) => action.payload,
});

const contactReducer = combineReducers({
  items: itemsReducer,
  filterString: filterReducer,
});

export default contactReducer;

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'phonebook/FilterContacts':
//       return payload;

//     default:
//       return state;
//   }
// };
// const itemsReducer = (state = defaultItems, { type, payload }) => {
//   switch (type) {
//     case 'phonebook/CreateContact':
//       return [...state, payload];
//     case 'phonebook/DeleteContact':
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
