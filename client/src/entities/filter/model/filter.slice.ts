import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  brandIds: number[];
  types: number[];
  price: { min: number, max: number }
}

const initialState: TInitialState = {
  brandIds: [],
  types: [],
  price: { min: 0, max: 1 }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleBrand(state, action) {
      const brandId = action.payload.id
      if (state.brandIds.includes(brandId)) {
        state.brandIds.filter(cur => cur !== brandId)
      } else {
        state.brandIds.push(action.payload)
      }
    },
    toggleType(state, action) {

    },
    setPriceFilter(state, action) {
      state.price += action.payload
    },
  },
})

export const { toggleBrand, toggleType, setPriceFilter } = filterSlice.actions
export default filterSlice.reducer