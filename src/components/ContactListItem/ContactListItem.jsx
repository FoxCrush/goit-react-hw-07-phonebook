import PropTypes from 'prop-types';

function ContactListItem(props) {
  const { name, number, id } = props;
  return (
    <li>
      {name}: {number}
      <button
        type="button"
        className="deleteButton"
        onClick={() => props.deleteMethod(id)}
      >
        delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  deleteMethod: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};

export default ContactListItem;
