import { useSelector } from 'react-redux';
import NavBar from 'components/NavBar/NavBar';
import NavBarUser from 'components/NavBar/NavBarUser';
import { isUserLogin } from 'redux/auth-selectors';
const Header = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className="my__header">
      <h1>Phonebook</h1>

      {isLogin ? <NavBarUser /> : <NavBar />}
    </div>
  );
};
export default Header;
