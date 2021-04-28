import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.scss';
import { authSls, authOps } from '../../redux/auth';

const UserMenu = () => {
    const dispatch = useDispatch();

    const email = useSelector(authSls.getUserEmail);

    return (
        <div className={css.container}>
            <span className={css.email}>{email}</span>
            <button
                type="button"
                onClick={() => dispatch(authOps.logOut())}
                className={css.logoutBtn}
            >
                Выйти
            </button>
        </div>
    );
};

export default UserMenu;
