import PropTypes from 'prop-types';
import css from './ContactItem.module.scss';

const ContactItem = ({ id, name, number, onBtnClick }) => (
    <>
        <span className={css.name}>{name}:</span>
        <span className={css.number}>{number}</span>
        <button
            className={css.deleteContact}
            type="button"
            onClick={() => {
                onBtnClick(id);
            }}
        >
            Удалить
        </button>
    </>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired,
};

export default ContactItem;
