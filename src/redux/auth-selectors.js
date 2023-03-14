export const isUserLogin = ({ contacts }) => contacts.auth.isLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getUser = ({ contacts }) => contacts.auth.user;
