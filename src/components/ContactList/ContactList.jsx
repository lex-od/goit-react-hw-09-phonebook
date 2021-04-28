import { useSelector } from 'react-redux';
import css from './ContactList.module.scss';
import ContactItem from '../ContactItem';
import { contactsSls } from '../../redux/contacts';

export default function ContactList() {
    const contacts = useSelector(contactsSls.getFilteredContacts);

    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li className={css.contactItem} key={id}>
                    <ContactItem id={id} name={name} number={number} />
                </li>
            ))}
        </ul>
    );
}
