import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('phonebook/CreateContactRequest');
export const addContactSuccess = createAction('phonebook/CreateContactSuccess');
export const addContactError = createAction('phonebook/CreateContactError');
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

export const deleteContactRequest = createAction(
  'phonebook/DeleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'phonebook/DeleteContactSuccess'
);
export const deleteContactError = createAction('phonebook/DeleteContactError');

export const filterContacts = createAction('phonebook/FilterContacts');
