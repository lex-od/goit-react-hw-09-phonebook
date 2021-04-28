import { useSelector } from 'react-redux';
import css from './AppBar.module.scss';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSls } from '../../redux/auth';

export default function AppBar() {
    const isAuth = useSelector(authSls.getIsAuth);

    return (
        <header className={css.header}>
            <Navigation />
            {isAuth ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
