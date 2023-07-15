import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "redux/contactsSlice";

export const ContactForm = () => {
  const dispatch = useDispatch();

 
  const handleInputSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact(name, number));

    form.reset();
  };
  

    return (
      <div>
        <form onSubmit={handleInputSubmit} className={css.form}>
          <label className={css.formLabel}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={css.formInput}
            />
          </label>

          <label className={css.formLabel}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={css.formInput}
            />
          </label>

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  
}

