import Form from 'react-bootstrap/Form';
import classes from './FilterCheckItem.module.css';
export const FilterCheckItem = ({ children, id, setChecked, checked }) => {
	const changeChecked = (id, name, isChecked) => {
		if (isChecked) {
			setChecked([...checked, { id, name, isChecked }])
		} else {
			setChecked([...checked].filter(i => i.id !== id))
		}

	}
	return (
		<div className={classes.checkWrapper}>
			<Form.Check onChange={e => changeChecked(id, children, e.target.checked)} id={id} aria-label={`option ${id}`} style={{ margin: '0 8px 0 0' }} />
			<div><span className={classes.myCheckText}>{children}</span></div>
		</div>
	)
}

