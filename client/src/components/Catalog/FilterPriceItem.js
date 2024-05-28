import React from 'react'
import classes from './FilterPriceItem.module.css'
import Form from 'react-bootstrap/Form'
const FilterPriceItem = (props) => {
	return (
		<div className={classes.myPriceInputWrapper} {...props}>
			<Form.Control type='number' className={classes.myPriceInput} placeholder={props.placeholder} />
		</div>
	)
}

export default FilterPriceItem