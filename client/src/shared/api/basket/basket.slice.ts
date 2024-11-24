import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TDevice } from 'shared/types';

type TPriceState = {
  id: number;
  price: number;
}

type TBasketSliceState = {
  totalCount: number;
  checkedDevices: TDevice[];
  changedPriceState: TPriceState[]
};

const initialState: TBasketSliceState = {
  totalCount: 0,
  checkedDevices: [],
  changedPriceState: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    toggleCheckedDevice(state, action: PayloadAction<TDevice>) {
      const deviceIndex = state.checkedDevices.findIndex(device => device.id === action.payload.id);
      if (deviceIndex !== -1) {
        state.checkedDevices.splice(deviceIndex, 1);
      } else {
        state.checkedDevices.push(action.payload);
      }
    },

    changePriceById(state, action: PayloadAction<{ id: number, price: number }>) {
      const deviceIndex = state.changedPriceState.findIndex(device => device.id === action.payload.id);
      if (deviceIndex !== -1) {
        state.changedPriceState[deviceIndex].price = action.payload.price
      } else {
        state.changedPriceState.push(action.payload)
      }

    },
    setTotalCount(state, action: PayloadAction<number>) {
      if (state.totalCount !== action.payload) {
        state.totalCount = action.payload
      }

    },
  },
});

export const { toggleCheckedDevice, changePriceById, setTotalCount } = basketSlice.actions;
export default basketSlice.reducer;
