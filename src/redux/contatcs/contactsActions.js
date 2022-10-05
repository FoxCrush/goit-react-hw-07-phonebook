import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const filterContacts = createAction('phonebook/FilterContacts');
export const deleteContact = createAction('phonebook/DeleteContact');
export const createContact = createAction(
  'phonebook/CreateContact',
  ({ name, number }) => ({
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  })
);
