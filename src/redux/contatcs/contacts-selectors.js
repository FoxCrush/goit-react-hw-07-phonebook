export const getAllContatcs = state => state.contacts.items;
export const getFilterString = state => state.contacts.filterString;
export const getVisibleContacts = state => {
  const { items, filterString } = state.contacts;
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
  return visibleContacts;
};
