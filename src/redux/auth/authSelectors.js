const getIsAuth = state => state.auth.isAuth;

const getUserEmail = state => state.auth.user.email;

const authSelectors = { getIsAuth, getUserEmail };
export default authSelectors;
