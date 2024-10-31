import { RootState } from 'app/store/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { TBrandAndTypeResponse } from 'shared/types';
import { FilterLabel } from '../../filterLabel';
import { FilterCheckItem } from './FilterCheckItem';

type TFilterWithCheck = {
	lable: string;
	filterParams: TBrandAndTypeResponse[];
	toggleAction: (id: number) => void
}

export const FilterWithCheck: FC<TFilterWithCheck> = ({ lable, filterParams, toggleAction }) => {
	const { brandIds, typeIds } = useSelector((state: RootState) => state.filter)

	return (
		<div style={{ margin: '0 0 20px 0' }}>
			<FilterLabel>{lable} </FilterLabel>
			{
				filterParams.map(i => {
					const isChecked = lable === 'Тип устройства' ? typeIds.includes(i.id) : brandIds.includes(i.id)
					return (
						<FilterCheckItem
							toggleAction={toggleAction}
							id={i.id}
							key={i.name}
							isChecked={isChecked}
						>
							{i.name}
						</FilterCheckItem>
					)
				}
				)
			}
		</div>
	)
}

