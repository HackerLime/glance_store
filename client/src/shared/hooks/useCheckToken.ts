import { jwtDecode } from 'jwt-decode'

export const useCheckToken = () => {
  const dateNow = Date.now().toString()
  const token = localStorage.getItem('token')
  if (!token) {
    return false
  }
  const { exp } = jwtDecode(token)
  const getMyFormat = (num) => {
    const res = num.toString().split('').splice(0, 10).join('')
    return res
  }
  if (getMyFormat(exp) - getMyFormat(dateNow) > 0) {
    return true
  } else {
    localStorage.removeItem('token')
    return false
  }

}