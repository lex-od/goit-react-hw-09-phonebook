import { lazy, Suspense, useEffect } from 'react';
import { Redirect, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
// import css from './styles/Phonebook.module.scss';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOps } from './redux/auth';

const { HOME, CONTACTS, REGISTER, LOGIN } = routes;

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOps.getCurrentUser());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <AppBar />

            <Suspense
                fallback={
                    <Loader
                        type="ThreeDots"
                        color="#ffc966"
                        width={100}
                        timeout={0}
                    />
                }
            >
                <Switch>
                    <PublicRoute path={HOME} exact>
                        <HomeView />
                    </PublicRoute>

                    <PrivateRoute path={CONTACTS} redirectTo={LOGIN}>
                        <ContactsView />
                    </PrivateRoute>

                    <PublicRoute
                        restricted
                        path={REGISTER}
                        redirectTo={CONTACTS}
                    >
                        <RegisterView />
                    </PublicRoute>

                    <PublicRoute restricted path={LOGIN} redirectTo={CONTACTS}>
                        <LoginView />
                    </PublicRoute>

                    <Redirect to={HOME} />
                </Switch>
            </Suspense>
        </Container>
    );
};

export default Phonebook;
