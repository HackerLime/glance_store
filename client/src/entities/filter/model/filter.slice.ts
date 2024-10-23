import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  brands: [],
  types: [],
  price: { min: 0, max: 1 }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleBrandsFilter(state, action) {

    },
    toggleTypesFilter(state) {

    },
    setPriceFilter(state, action) {
      state.price += action.payload
    },
  },
})

export const { toggleBrandsFilter, toggleTypesFilter, setPriceFilter } = filterSlice.actions
export default filterSlice.reducer