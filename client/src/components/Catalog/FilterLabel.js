import React from 'react'
import classes from './FilterLabel.module.css'
const FilterLabel = ({ children }) => {
	return (
		<div className={classes.myLabel}>{children}</div>
	)
}

export default FilterLabel