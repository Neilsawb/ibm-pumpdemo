import { createSlice } from '@reduxjs/toolkit';

export const sensorSlice = createSlice({
    name: "sensors",
    initialState: { value: {temp: 0, flowrateOne: 0, flowrateTwo: 0,
    flowrateThree: 0, fanspeed: 0, pumpspeed: 0}},
    reducers: {
        newMessage:(state, action) => {
            state.value = action.payload;
        },
    },
});

export const {newMessage} = sensorSlice.actions;

export default sensorSlice.reducer;
