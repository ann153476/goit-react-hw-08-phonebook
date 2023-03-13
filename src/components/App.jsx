import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.contacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter></Filter>
      {contacts.length === 0 ? (
        <div>
          <h2>There is no contacts</h2>
        </div>
      ) : (
        <ContactList />
      )}
    </>
  );
};

export default App;
