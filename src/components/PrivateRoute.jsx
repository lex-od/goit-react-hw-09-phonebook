import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSls } from '../redux/auth';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
    const isAuth = useSelector(authSls.getIsAuth);

    return (
        <Route
            {...routeProps}
            render={props =>
                isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
            }
        />
    );
};

export default PrivateRoute;
