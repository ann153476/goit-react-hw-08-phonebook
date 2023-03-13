import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    error: null,
    isLoading: false,
  },
  reducers: {
    getfilter: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },

  // reducers: {
  //   addContact: {
  //     reducer: (state, { payload }) => {
  //       state.contacts.push(payload);
  //     },
  //     prepare: data => {
  //       return { payload: { id: nanoid(), ...data } };
  //     },
  //   },
  //   deleteContact: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(item => item.id !== payload);
  //   },
  //   getfilter: (state, { payload }) => {
  //     state.filter = payload.toLowerCase();
  //   },
  // },
});

export const contactsReducer = contactSlice.reducer;
export const { getfilter } = contactSlice.actions;

export default contactSlice.reducer;
