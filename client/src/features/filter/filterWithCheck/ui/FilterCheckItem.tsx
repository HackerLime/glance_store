import { FC } from 'react';
import Form from 'react-bootstrap/Form';
import classes from './FilterCheckItem.module.css';

type TFilterCheckItem = {
	children: string;
	id: number;
	toggleAction: (id: number) => void;
	isChecked: boolean
}

export const FilterCheckItem: FC<TFilterCheckItem> = ({ children, id, toggleAction, isChecked }) => {
	const onChangeHandler = () => {
		toggleAction(id)
	}
	return (
		<div className={classes.checkWrapper}>
			<Form.Check onChange={onChangeHandler} id={String(id)} checked={isChecked} aria-label={`option ${id}`} style={{ margin: '0 8px 0 0' }} />
			<div><span className={classes.myCheckText}>{children}</span></div>
		</div>
	)
}

