import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSls } from '../redux/auth';

export default function PublicRoute({
    restricted,
    redirectTo,
    children,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSls.getIsAuth);

    return (
        <Route {...routeProps}>
            {isLoggedIn && restricted ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}
