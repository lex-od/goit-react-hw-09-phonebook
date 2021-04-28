import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.scss';
import { contactsOps } from '../../redux/contacts';

const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <>
            <span className={css.name}>{name}:</span>
            <span className={css.number}>{number}</span>
            <button
                className={css.deleteContact}
                type="button"
                onClick={() => dispatch(contactsOps.deleteContact(id))}
            >
                Удалить
            </button>
        </>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactItem;
