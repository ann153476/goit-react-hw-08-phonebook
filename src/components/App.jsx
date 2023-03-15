import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import PhoneBook from './PhoneBook/PhoneBook';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
