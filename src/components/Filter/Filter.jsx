import { connect } from 'react-redux';
import { filterContacts } from 'redux/contatcs/contactsActions';
import PropTypes from 'prop-types';

function FilterComponent(props) {
  const { filterString, onFilterInputChange } = props;
  return (
    <input
      value={filterString}
      onChange={onFilterInputChange}
      className="clientInputTextfield"
      type="text"
    />
  );
}

FilterComponent.propTypes = {
  filterString: PropTypes.string,
  onFilterInputChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filterString: state.contacts.filterString,
});

const mapDispatchToProps = dispatch => ({
  onFilterInputChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
