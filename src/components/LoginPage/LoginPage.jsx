import { useDispatch } from 'react-redux';
import { login } from 'redux/auth-operations';
import TextField from '../TextField/TextField';

import initialState from './initialState';
import fields from './fields';
import useForm from '../../shared/useForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(login(data));
  };
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <button className="btn" type="submit">
          Login in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
