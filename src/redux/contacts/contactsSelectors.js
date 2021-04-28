import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getFilteredContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normFilter),
        );
    },
);

const contactsSelectors = {
    getAllContacts,
    getFilter,
    getFilteredContacts,
    getLoading,
    getError,
};
export default contactsSelectors;
