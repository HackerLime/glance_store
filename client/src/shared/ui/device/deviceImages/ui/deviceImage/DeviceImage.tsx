import { FC } from 'react'
import styles from './DeviceImage.module.css'
type TDeviceImageProps = {
  deviceImage: string
}

export const DeviceImage: FC<TDeviceImageProps> = ({ deviceImage }) => {

  return (
    <div className={styles.deviceImage__wrapper} >
      <img className={styles.deviceImage__image} src={import.meta.env.VITE_API_URL + '/' + deviceImage} />
    </div>
  )
}
