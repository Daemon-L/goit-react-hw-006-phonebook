import { createReducer } from "@reduxjs/toolkit";
import { addTodoNew, removeTodoNew } from "./actionsNew";

const initialState = {
    list: []
};

const reducer = createReducer(
    initialState, builder => {
        builder
        .addCase(addTodoNew, (state, action) => {
            const { id, content } = action.payload;
            state.list.push({
                id,
                content
            })
        })
        .addCase(removeTodoNew, (state, action) => {
            const { id } = action.payload;
            const index = state.list.findIndex(item => item.id === id);
            // console.log('Hello', state.list.length);
            state.list.splice(index, 1);
        })
    }
)

export default reducer;