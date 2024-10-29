import Form from 'react-bootstrap/Form';
import classes from './FilterCheckItem.module.css';
export const FilterCheckItem = ({ children, id, toggleAction }) => {
	const onChangeHandler = () => {
		toggleAction(id)
	}
	return (
		<div className={classes.checkWrapper}>
			<Form.Check onChange={onChangeHandler} id={id} aria-label={`option ${id}`} style={{ margin: '0 8px 0 0' }} />
			<div><span className={classes.myCheckText}>{children}</span></div>
		</div>
	)
}

