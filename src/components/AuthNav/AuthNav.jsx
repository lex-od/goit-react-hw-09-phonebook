import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            className={css.link}
            activeClassName={css.activeLink}
        >
            Регистрация
        </NavLink>
        <NavLink
            to="/login"
            className={css.link}
            activeClassName={css.activeLink}
        >
            Логин
        </NavLink>
    </div>
);

export default AuthNav;
