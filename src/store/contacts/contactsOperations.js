import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { normalizeContact } from 'services/normalize';

axios.defaults.baseURL =
    'https://murmuring-reaches-74476-7a9ce3386298.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:5000/api';

export const hendleFetchContact = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            let array = [];
            const { data } = await axios.get('/contacts');
            data.map(contact => {
                return array.push(normalizeContact(contact));
            });
            return array;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleFetchContactById = createAsyncThunk(
    'contacts/getContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/contacts/${contactId}`);
            const res = normalizeContact(data);
            return res;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

// export const hendleFetchContactById = createAsyncThunk(
//     'contacts/fetchContact',
//     async (contactId, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`/contacts/${contactId}`);
//             return response.data;
//         } catch (err) {
//             rejectWithValue(err.message);
//         }
//     }
// );

export const hendleAddContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', newContact);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleEditContact = createAsyncThunk(
    'contacts/editContact',
    async (arg, { rejectWithValue }) => {
        const { contactId, values } = arg;
        try {
            const response = await axios.patch(
                `/contacts/${contactId}`,
                values
            );
            return response.data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);
