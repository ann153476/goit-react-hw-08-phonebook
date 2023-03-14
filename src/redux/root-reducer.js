import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts-slice';

import authReduser from '../redux/auth-slice';

export const rootReducer = combineReducers({
  auth: authReduser,
  contacts: contactsReducer,
});
