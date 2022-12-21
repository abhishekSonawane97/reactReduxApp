import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const Thalislice = createSlice({
  name: 'customThali',
  initialState,
  reducers: {
    addItems: (state,action) => {

      state.items = ([...state.items, action.payload]);
      // console.log(state.items);
    },

  },
})

export const { addItems, } = Thalislice.actions

export default Thalislice.reducer