import { Component } from 'react';
import { connect } from 'react-redux';
import css from './RegisterView.module.scss';
import { authOps } from '../../redux/auth';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div className={css.registerView}>
                <h1 className={css.title}>Заполните для регистрации</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={css.form}
                    autoComplete="off"
                >
                    <label className={css.label}>
                        <span className={css.labelText}>Имя</span>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            className={css.input}
                            required
                        />
                    </label>

                    <label className={css.label}>
                        <span className={css.labelText}>Почта</span>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            className={css.input}
                            required
                        />
                    </label>

                    <label className={css.label}>
                        <span className={css.labelText}>Пароль</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            className={css.input}
                            required
                        />
                    </label>

                    <button type="submit" className={css.registerBtn}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    dispRegister: authOps.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
