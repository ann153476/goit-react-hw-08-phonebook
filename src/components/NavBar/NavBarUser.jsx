import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getUser } from 'redux/auth-selectors';
import { logout } from 'redux/auth-operations';
import s from './nav-bar-style.module.scss';
const NavBarUser = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h2>hello : {user.name}</h2>
      <button className="btn" onClick={onLogout}>
        Log out
      </button>
      <NavLink to="/contacts" className={s.one__nav}>
        Phone Book
      </NavLink>
    </div>
  );
};
export default NavBarUser;
