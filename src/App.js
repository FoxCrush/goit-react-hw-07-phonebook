import './App.css';
import React from 'react';
import AddContactForm from 'components/AddContactForm';
import ContactList from 'components/ContactList';
import FilterComponent from 'components/Filter';
import Spinner from 'components/spinner';

const App = () => {
  return (
    <section className="phonebookSection">
      <h1>Phonebook</h1>
      <Spinner />
      <AddContactForm />
      <h2>Contacts</h2>
      <FilterComponent />
      <ContactList />
    </section>
  );
};

export default App;
