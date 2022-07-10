import { createReducer } from "@reduxjs/toolkit";
import { addContacts, removeContacts, filterContacts } from "./actions";

const initialState = {
    items: [],
    filter: ''
};

const reducer = createReducer(
    initialState, builder => {
        builder
        .addCase(addContacts, (state, action) => {
            const { id, name, number } = action.payload;
            state.items.push({
                id,
                name,
                number
            })
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