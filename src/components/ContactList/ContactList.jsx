import React, { Component } from 'react';
import ContactListItem from 'components/ContactListItem';
import { connect } from 'react-redux';
import contactOperations from 'redux/contatcs/contacts-operations';
import PropTypes from 'prop-types';
import { getVisibleContacts } from 'redux/contatcs/contacts-selectors';

class ClassList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className="contactListContainer">
        <ul>
          {this.props.visibleContacts.map(({ id, name, number }) => (
            <ContactListItem
              id={id}
              key={id}
              name={name}
              number={number}
              deleteMethod={this.props.deleteContact}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ClassList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  visibleContacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactOperations.fetchContacts()),
  deleteContact: contactId =>
    dispatch(contactOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
