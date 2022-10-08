import './App.css';
import React from 'react';
import AddContactForm from 'components/AddContactForm';
import ContactList from 'components/ContactList';
import FilterComponent from 'components/Filter';
import { BallTriangle } from 'react-loader-spinner';

const App = () => {
  return (
    <section className="phonebookSection">
      <h1>Phonebook</h1>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      <AddContactForm />
      <h2>Contacts</h2>
      <FilterComponent />
      <ContactList />
    </section>
  );
};

export default App;
