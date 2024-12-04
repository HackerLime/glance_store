import { TPattern } from 'pages/AuthPage/lib';
import { FC } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './AuthPageInput.module.css';

type TAuthPageInput = {
  labelText: string;
  placeholderText: string;
  isError?: string
  register: UseFormRegister<FieldValues>;
  name: string;
  requiredText: string;
  pattern?: TPattern
  type?: 'email' | 'password'
}


export const AuthPageInput: FC<TAuthPageInput> = ({ labelText, placeholderText, isError, register, name, requiredText, pattern, type }) => {
  return (
    <fieldset className={styles.formFieldset}>
      <label className={styles.formInputLabel}>
        {labelText}
      </label>
      <input
        type={type}
        className={styles.formInput}
        placeholder={placeholderText}
        {...register(name, {
          required: requiredText,
          pattern
        })}
      />
      {isError && <p className={styles.formErrorMessage}>{isError}</p>}
    </fieldset>
  )
}
