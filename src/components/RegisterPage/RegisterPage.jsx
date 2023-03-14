import { useDispatch } from 'react-redux';
import { register } from 'redux/auth-operations';
import TextField from '../TextField/TextField';

import useForm from '../../shared/useForm';

import initialState from './initialState';
import fields from './fields';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(register(data));
  };
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <TextField value={name} onChange={handleChange} {...fields.name} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
