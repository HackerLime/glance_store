import ColorPaletteItem from './ColorPaletteItem'

const ColorPalette = ({ palette }) => {

	return (
		<div>
			<h2 style={{ lineHeight: '19px', fontSize: 16, color: 'rgb(69,69,69)', margin: '0 0 24px 0' }}>Цвет: Наследуется</h2>
			<div className='d-flex justify-content-between' style={{ maxWidth: 181, margin: '0 0 32px 0' }}>
				{palette.map(i =>
					<ColorPaletteItem border={i.border} key={i.id} color={i.color} />
				)}
			</div>
		</div>
	)
}

export default ColorPalette