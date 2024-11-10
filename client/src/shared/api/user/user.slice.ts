import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
const initialState = {
  user: null,
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
      localStorage.setItem('token', action.payload)
      state.user = jwtDecode(action.payload)
      state.isAuth = true
    },
    logOutAction(state) {
      localStorage.removeItem('token')
      state.user = null
      state.isAuth = false
    }
  },
})

export const { loginAction, logOutAction } = userSlice.actions
export default userSlice.reducer