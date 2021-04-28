import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './LoginView.module.scss';
import { authOps } from '../../redux/auth';

export default function LoginView() {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const handleChange = ({ target: { name, value } }) => {
        setLoginData(state => ({ ...state, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOps.logIn(loginData));

        setLoginData({ email: '', password: '' });
    };

    return (
        <div className={css.loginView}>
            <h1 className={css.title}>Заполните для входа</h1>

            <form
                onSubmit={handleSubmit}
                className={css.form}
                autoComplete="off"
            >
                <label className={css.label}>
                    <span className={css.labelText}>Почта</span>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                        className={css.input}
                    />
                </label>

                <label className={css.label}>
                    <span className={css.labelText}>Пароль</span>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
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
