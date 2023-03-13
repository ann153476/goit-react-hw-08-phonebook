import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

import s from '../App.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.contacts);

  const filterValue = useSelector(state => state.contacts.contacts.filter);
  const filterContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filterValue) || number.includes(filterValue)
  );

  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {filterContacts.length === 0 ? (
          <h2>no such contact found</h2>
        ) : (
          filterContacts.map(item => {
            return (
              <li key={item.id} className={s.flex}>
                <div className={s.box__contact}>
                  <p>{item.name}</p>
                  <p>{item.number}</p>
                </div>

                <button
                  className={s.btn}
                  type="submit"
                  onClick={() => {
                    dispatch(deleteContact(item.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ContactList;
