import { FC } from 'react'
import { SadDevices } from 'shared/assets/img/sadDevices'
import styles from './SadMessage.module.css'

type TSadMessage = {
  message: string
}

export const SadMessage: FC<TSadMessage> = ({ message }) => {
  return (
    <div className={styles.sadMessage__wrapper}>
      <label className={styles.sadMessage__title}>{message}</label>
      <SadDevices />
    </div>
  )
}
