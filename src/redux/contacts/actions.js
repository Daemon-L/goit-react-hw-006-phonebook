import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction('addContacts');
export const removeContacts = createAction('removeContacts');
export const filterContacts = createAction('filterContacts');