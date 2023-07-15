import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";


  export const getContacts = (contacts, filteredContacts) => {
  if (filteredContacts === '') {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts.filter)
    );
  }
};

  
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(state => state.filters);
  const visibleContacts = getContacts(contacts, filteredContacts);


  return (
    <ul className="listBox">
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.listBox}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
  
}

