export type TPattern = {
  value: RegExp;
  message: string
}

export const emailPattern: TPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  message: '*Неверный формат Email'
}

export const passwordPattern: TPattern = {
  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\.]).{8,}$/,
  message: '*Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и специальные символы.'
} 