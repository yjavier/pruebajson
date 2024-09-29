import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isFixed: false,
        isOpen: false,
    },
    reducers: {
        setFixed: (state, action) => {
            state.isFixed = action.payload;
        },
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { setFixed, toggleMenu } = headerSlice.actions;

export default headerSlice.reducer;
