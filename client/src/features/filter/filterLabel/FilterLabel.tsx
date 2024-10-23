import styles from './FilterLabel.module.css'
export const FilterLabel = ({ children }) => {
	return (
		<div className={styles.myLabel}>{children}</div>
	)
}

