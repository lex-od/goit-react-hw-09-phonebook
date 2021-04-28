import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';
import routes from '../../routes';

const AuthNav = () => (
    <div>
        <NavLink
            to={routes.REGISTER}
            className={css.link}
            activeClassName={css.activeLink}
        >
            Регистрация
        </NavLink>
        <NavLink
            to={routes.LOGIN}
            className={css.link}
            activeClassName={css.activeLink}
        >
            Логин
        </NavLink>
    </div>
);

export default AuthNav;
