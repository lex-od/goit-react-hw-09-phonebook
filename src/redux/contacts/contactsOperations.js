import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loadContacts = createAsyncThunk(
    'contacts/loadContacts',
    async () => (await axios.get('/contacts')).data,
);

const addContact = createAsyncThunk(
    'contacts/addContact',
    async contact => (await axios.post('/contacts', contact)).data,
);

const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async id => (await axios.delete(`/contacts/${id}`)) && id,
);

const contactsOperations = { loadContacts, addContact, deleteContact };
export default contactsOperations;
