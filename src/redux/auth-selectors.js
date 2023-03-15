export const isUserLogin = ({ contacts }) => contacts.auth.isLogin;
export const getAuth = ({ contacts }) => {
  const { isLogin, token } = contacts.auth;
  return { isLogin, token };
};
export const getUser = ({ contacts }) => contacts.auth.user;
