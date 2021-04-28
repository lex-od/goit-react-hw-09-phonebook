import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './RegisterView.module.scss';
import { authOps } from '../../redux/auth';

export default function RegisterView() {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        setRegisterData(state => ({ ...state, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOps.register(registerData));

        setRegisterData({ name: '', email: '', password: '' });
    };

    return (
        <div className={css.registerView}>
            <h1 className={css.title}>Заполните для регистрации</h1>

            <form
                onSubmit={handleSubmit}
                className={css.form}
                autoComplete="off"
            >
                <label className={css.label}>
                    <span className={css.labelText}>Имя</span>
                    <input
                        type="text"
                        name="name"
                        value={registerData.name}
                        onChange={handleChange}
                        className={css.input}
                        required
                    />
                </label>

                <label className={css.label}>
                    <span className={css.labelText}>Почта</span>
                    <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleChange}
                        className={css.input}
                        required
                    />
                </label>

                <label className={css.label}>
                    <span className={css.labelText}>Пароль</span>
                    <input
                        type="password"
                        name="password"
                        value={registerData.password}
                        onChange={handleChange}
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
