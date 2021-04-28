import { Component } from 'react';
import { connect } from 'react-redux';
import css from './LoginView.module.scss';
import { authOps } from '../../redux/auth';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispLogin(this.state);

        this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className={css.loginView}>
                <h1 className={css.title}>Заполните для входа</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={css.form}
                    autoComplete="off"
                >
                    <label className={css.label}>
                        <span className={css.labelText}>Почта</span>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                            className={css.input}
                        />
                    </label>

                    <label className={css.label}>
                        <span className={css.labelText}>Пароль</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                            className={css.input}
                        />
                    </label>

                    <button type="submit" className={css.loginBtn}>
                        Войти
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    dispLogin: authOps.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
