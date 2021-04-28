import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { contactsActs, contactsOps } from './';

const { changeFilter } = contactsActs;
const { loadContacts, addContact, deleteContact } = contactsOps;

const itemsReducer = createReducer([], {
    [loadContacts.fulfilled]: (_, { payload }) => payload,

    [addContact.fulfilled]: (state, { payload }) => [...state, payload],

    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [loadContacts.pending]: () => true,
    [loadContacts.fulfilled]: () => false,
    [loadContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
    [loadContacts.pending]: () => null,
    [loadContacts.rejected]: (_, { error }) => error,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, { error }) => error,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, { error }) => error,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer,
});
