import './App.css';
import React from 'react';
import AddContactForm from 'components/AddContactForm';
import ContactList from 'components/ContactList';
import FilterComponent from 'components/Filter';

const App = () => {
  return (
    <section className="phonebookSection">
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <FilterComponent />
      <ContactList />
    </section>
  );
};

export default App;
