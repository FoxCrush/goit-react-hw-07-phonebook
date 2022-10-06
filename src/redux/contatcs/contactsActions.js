import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://633dbec1f2b0e623dc7aa05f.mockapi.io/';

export const filterContacts = createAction('phonebook/FilterContacts');
export const deleteContact = createAction('phonebook/DeleteContact');
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

export const createContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch({ type: 'phonebook/CreateContactRequest' });

    axios
      .post('contacts', contact)
      .then(({ data }) => {
        dispatch({ type: 'phonebook/CreateContactSuccess', payload: data });
      })
      .catch(error =>
        dispatch({ type: 'phonebook/CreateContactError', payload: error })
      );
  };
