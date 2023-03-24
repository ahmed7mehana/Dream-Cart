import { createSlice } from '@reduxjs/toolkit'



export const WishlistSlice = createSlice({
  name: 'WishlistSlice',
  initialState:[],
  reducers: {
addwish:(state,action)=>{
  const finditem = state.find((item)=>item.id === action.payload.id)
  if(finditem){
    finditem.quantity +=1
  }else{
    const itemsclone ={...action.payload , quantity:1}
    state.push(itemsclone)
  }
},
deletewish:(state,action)=>{
return state.filter((item)=>item.id !== action.payload)
},
Clear:(state,action)=>{
  return []
  }

  },
})

export const { addwish,deletewish,Clear} = WishlistSlice.actions

export default WishlistSlice.reducer