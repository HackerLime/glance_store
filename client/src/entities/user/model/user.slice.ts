import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
      state.user = action.payload
      state.isAuth = true
    },
    logOutAction(state) {
      state.user = null
      state.isAuth = false
    }
  },


})

export const { loginAction, logOutAction } = userSlice.actions
export default userSlice.reducer