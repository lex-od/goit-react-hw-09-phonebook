import { connect } from 'react-redux';
import css from './AppBar.module.scss';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSls } from '../../redux/auth';

const AppBar = ({ isAuth }) => (
    <header className={css.header}>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
);

const mapStateToProps = state => ({
    isAuth: authSls.getIsAuth(state),
});

export default connect(mapStateToProps)(AppBar);
