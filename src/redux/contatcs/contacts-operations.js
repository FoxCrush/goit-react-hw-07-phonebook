/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

axios.defaults.baseURL = 'https://633dbec1f2b0e623dc7aa05f.mockapi.io/';

const createContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post('contacts', contact)
      .then(({ data }) => {
        dispatch(addContactSuccess(data));
      })
      .catch(error => dispatch(addContactError(error)));
  };

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => dispatch(deleteContactError(error)));
};

export default {
  createContact,
  deleteContact,
};
