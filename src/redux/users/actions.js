import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('DELETE_CONTACT');
export const addContact = createAction('ADD_CONTACT');
export const updateFilter = createAction('UPDATE_FILTER');
