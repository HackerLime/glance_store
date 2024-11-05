import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  brandIds: number[];
  typeIds: number[];
  price: { from: number, to: number }
  sortBy: 'default' | 'from expensive' | 'from cheaper'
}

const initialState: TInitialState = {
  brandIds: [],
  typeIds: [],
  price: { from: 0, to: 0 },
  sortBy: 'default'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleBrandId(state, { payload }) {
      const brand = payload
      if (state.brandIds.includes(brand)) {
        state.brandIds = state.brandIds.filter(cur => cur !== brand)
      } else {
        state.brandIds.push(brand)
      }
    },
    toggleTypeId(state, { payload }) {
      const type = payload
      if (state.typeIds.includes(type)) {
        state.typeIds = state.typeIds.filter(cur => cur !== type)
      } else {
        state.typeIds.push(type)
      }
    }
    ,
    addPriceRange(state, action: PayloadAction<{ from: number, to: number }>) {
      state.price = action.payload
    },
    addSortByStatus(state, action: PayloadAction<'default' | 'from expensive' | 'from cheaper'>) {
      state.sortBy = action.payload
    }
  },
})

export const { toggleBrandId, toggleTypeId, addPriceRange, addSortByStatus } = filterSlice.actions
export default filterSlice.reducer