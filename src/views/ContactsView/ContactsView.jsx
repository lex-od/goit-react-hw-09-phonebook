import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import css from './ContactsView.module.scss';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { contactsSls, contactsOps } from '../../redux/contacts';

const ContactsView = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(contactsSls.getLoading);
    const error = useSelector(contactsSls.getError);

    useEffect(() => {
        dispatch(contactsOps.loadContacts());
    }, [dispatch]);

    return (
        <div className={css.contactsView}>
            <h1 className={css.contactsTitle}>Мои контакты</h1>

            <h2 className={css.addContactTitle}>Добавить</h2>
            <ContactForm />

            <h2 className={css.contactListTitle}>Список</h2>
            <Filter />
            {isLoading && (
                <Loader
                    type="ThreeDots"
                    color="#ffc966"
                    // height={50}
                    width={100}
                    timeout={0}
                    className={css.loader}
                />
            )}
            {error && (
                <p className={css.error}>
                    Что-то пошло не так! {error.name}: {error.message}
                </p>
            )}
            <ContactList />
        </div>
    );
};

export default ContactsView;
