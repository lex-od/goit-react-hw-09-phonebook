import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import css from './ContactsView.module.scss';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { contactsSls, contactsOps } from '../../redux/contacts';

const ContactsView = ({ isLoading, error }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOps.loadContacts());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

ContactsView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
};

const mapStateToProps = state => ({
    isLoading: contactsSls.getLoading(state),
    error: contactsSls.getError(state),
});

export default connect(mapStateToProps)(ContactsView);
