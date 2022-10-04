import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContact } from 'redux/contatcs/contactsActions';
import PropTypes from 'prop-types';
class addContactContainer extends Component {
  state = { name: '', number: '' };

  sameContactNameWarning = name => {
    alert(`${name} already exists`);
  };
  checkSameContactName = (contacts, name) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  addContactButtonHandler = () => {
    const { name } = this.state;
    const { items } = this.props;

    if (!this.checkSameContactName(items, name) && name.length > 0) {
      this.props.createContact(this.state);
      this.setState({ name: '', number: '' });
    } else {
      this.sameContactNameWarning(name);
    }
  };

  onInputChangeHandler = e => {
    e.preventDefault();
    const type = e.target.name;
    this.setState({ [type]: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="addContactContainer">
        <h3>Name</h3>Names can't be same
        <input
          value={name}
          onChange={this.onInputChangeHandler}
          className="clientInputTextfield"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. Example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          required
        />
        <h3>Number</h3>
        <input
          value={number}
          onChange={this.onInputChangeHandler}
          className="clientInputTextfield"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must consist of numbers and may contain spaces, dashes, parentheses, and may begin with +"
          required
        />
        <button
          className="addContactButton"
          type="button"
          onClick={this.addContactButtonHandler}
        >
          Add contact
        </button>
      </div>
    );
  }
}

addContactContainer.propTypes = {
  createContact: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  createContact: contact => dispatch(createContact(contact)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addContactContainer);

// {
//   createContact: contact => dispatch(createContact(contact)),
// }
