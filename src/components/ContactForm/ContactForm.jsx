import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.scss';
import config from '../../json/ContactFormConfig.json';
import { contactsSls, contactsOps } from '../../redux/contacts/';

export default function ContactForm() {
    const dispatch = useDispatch();

    const contacts = useSelector(contactsSls.getAllContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                console.warn(`Тип поля "${name}" не обрабатывается!`);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isContactExists()) {
            alert(`Контакт "${name}" уже существует`);
            return;
        }

        dispatch(contactsOps.addContact({ name, number }));

        setName('');
        setNumber('');

        function isContactExists() {
            const normName = name.toLowerCase();

            return contacts.some(({ name }) => name.toLowerCase() === normName);
        }
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <input
                type="text"
                name="name"
                pattern={config.INPUT_NAME_PATTERN}
                title={config.INPUT_NAME_TITLE}
                value={name}
                onChange={handleChange}
                required
                className={css.input}
                placeholder="Имя..."
            />
            <input
                type="tel"
                name="number"
                pattern={config.INPUT_TEL_PATTERN}
                title={config.INPUT_TEL_TITLE}
                value={number}
                onChange={handleChange}
                required
                className={css.input}
                placeholder="Телефон..."
            />
            <button className={css.addContact}>Добавить контакт</button>
        </form>
    );
}
