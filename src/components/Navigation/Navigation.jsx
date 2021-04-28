import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import { authSls } from '../../redux/auth';

const Navigation = () => {
    const isAuth = useSelector(authSls.getIsAuth);

    return (
        <nav>
            <NavLink
                to="/"
                exact
                className={css.link}
                activeClassName={css.activeLink}
            >
                Главная
            </NavLink>

            {isAuth && (
                <NavLink
                    to="/contacts"
                    className={css.link}
                    activeClassName={css.activeLink}
                >
                    Контакты
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;
