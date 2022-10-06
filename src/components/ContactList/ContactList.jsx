import ContactListItem from 'components/ContactListItem';
import { connect } from 'react-redux';
import contactOperations from 'redux/contatcs/contacts-operations';
import PropTypes from 'prop-types';

function ClassList(props) {
  return (
    <div className="contactListContainer">
      <ul>
        {props.visibleContacts.map(({ id, name, number }) => (
          <ContactListItem
            id={id}
            key={id}
            name={name}
            number={number}
            deleteMethod={props.deleteContact}
          />
        ))}
      </ul>
    </div>
  );
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

const mapStateToProps = state => {
  const { items, filterString } = state.contacts;
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
  return { visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId =>
    dispatch(contactOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
