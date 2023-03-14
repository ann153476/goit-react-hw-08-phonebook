import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts-operations';
import { NavLink } from 'react-router-dom';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts.contacts.contacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <NavLink to="/" className="btn">
        Go Back
      </NavLink>
      <h1>Phone Book</h1>
      <ContactForm />
      <Filter></Filter>
      {contacts.length === 0 ? (
        <div>
          <h2>There is no contacts</h2>
        </div>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
export default PhoneBook;
