import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSls } from '../redux/auth';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
    const isAuth = useSelector(authSls.getIsAuth);

    return (
        <Route
            {...routeProps}
            render={props =>
                isAuth && routeProps.restricted ? (
                    <Redirect to={redirectTo} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
