import { createAction } from '@reduxjs/toolkit';
//add
export const addContactRequest = createAction('phonebook/CreateContactRequest');
export const addContactSuccess = createAction('phonebook/CreateContactSuccess');
export const addContactError = createAction('phonebook/CreateContactError');
//fetch
export const fetchContactRequest = createAction(
  'phonebook/FetchContactRequest'
);
export const fetchContactSuccess = createAction(
  'phonebook/FetchContactSuccess'
);
export const fetchContactError = createAction('phonebook/FetchContactError');
//delete
export const deleteContactRequest = createAction(
  'phonebook/DeleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'phonebook/DeleteContactSuccess'
);
export const deleteContactError = createAction('phonebook/DeleteContactError');
//filter
export const filterContacts = createAction('phonebook/FilterContacts');

// export const createContact = createAction(
//   'phonebook/CreateContact',
//   ({ name, number }) => ({
//     payload: {
//       name,
//       number,
//       id: uuidv4(),
//     },
//   })
// );
// export const deleteContact = createAction('phonebook/DeleteContact');
