import React from 'react'
import Form from 'react-bootstrap/Form';
import classes from './FilterCheckItem.module.css'
const FilterCheckItem = ({ children, id }) => {
	return (
		<div className={classes.checkWrapper}>
			<Form.Check id={id} aria-label={`option ${id}`} style={{ margin: '0 8px 0 0' }} />
			<div><span className={classes.myCheckText}>{children}</span></div>
		</div>
	)
}

export default FilterCheckItem