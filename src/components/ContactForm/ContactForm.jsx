import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactForm.module.scss';
import config from '../../json/ContactFormConfig.json';
import { contactsSls, contactsOps } from '../../redux/contacts/';

class ContactForm extends Component {
    static propTypes = {
        dispSubmit: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.isContactExists()) {
            alert(`Контакт "${this.state.name}" уже существует`);
            return;
        }

        this.props.dispSubmit(this.state);

        this.setState({ name: '', number: '' });
    };

    isContactExists() {
        const normName = this.state.name.toLowerCase();

        return this.props.contacts.some(
            ({ name }) => name.toLowerCase() === normName,
        );
    }

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input
                    type="text"
                    name="name"
                    pattern={config.INPUT_NAME_PATTERN}
                    title={config.INPUT_NAME_TITLE}
                    value={name}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    required
                    className={css.input}
                    placeholder="Телефон..."
                />
                <button className={css.addContact}>Добавить контакт</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    contacts: contactsSls.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
    dispSubmit: contact => dispatch(contactsOps.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
