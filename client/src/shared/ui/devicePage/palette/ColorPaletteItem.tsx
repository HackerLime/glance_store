
const ColorPaletteItem = ({ color }) => {
	return (
		<div
			style={
				{ backgroundColor: `${color}`, border: '1px solid rgb(69,69,69)', width: 41, height: 39, borderRadius: '8px', cursor: 'pointer' }
			}></div>
	)
}

export default ColorPaletteItem