import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth-selectors';

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import PhoneBook from './PhoneBook/PhoneBook';

const App = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contacts" element={<PhoneBook />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
