import { createReducer } from "@reduxjs/toolkit";
import { addContacts, removeContacts, filterContacts } from "./actions";

const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
};

const reducer = createReducer(
    initialState, builder => {
        builder
        .addCase(addContacts, (state, action) => {
            const { id, name, number } = action.payload;
            state.items.push({ id, name, number })
        })
        .addCase(removeContacts, (state, action) => {
            const { id } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items.splice(index, 1);
        })
        .addCase(filterContacts, (state, action) => {
            state.filter = action.payload;
        })
    }
)
export default reducer;