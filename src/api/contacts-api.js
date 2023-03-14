import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://640e3bb71a18a5db838bcdfe.mockapi.io',
});

export const getAllContacts = () => contactsInstance.get('/contacts');

export const deleteContact = id => {
  return contactsInstance.delete(`/contacts/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/contacts', data);
};
