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
    deleteItems: (state,action) => {
      const arr = []
      state.items.filter((ele)=>{
        if(ele.name!==action.payload.name){
          arr.push(ele)
        }
      })
      state.items = ([...arr]);
      // state.items = ([...state.items, action.payload]);
      // console.log(state.items);
    },

  },
})

export const { addItems, deleteItems} = Thalislice.actions

export default Thalislice.reducer