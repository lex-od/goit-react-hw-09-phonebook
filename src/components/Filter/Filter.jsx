import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './Filter.module.scss';
import { contactsSls, contactsActs } from '../../redux/contacts';

const Filter = ({ value, dispChange }) => (
    <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispChange(e.target.value)}
        placeholder="Поиск..."
        className={css.input}
    />
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    dispChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: contactsSls.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    dispChange: value => dispatch(contactsActs.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
