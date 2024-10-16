
export const DeviceTypeBrandName = ({ device, typeName, brandName }) => {

	return (
		<div style={{
			margin: '0 0 24px 0',
			lineHeight: '38px',

			color: 'rgb(12, 12, 12)'
		}}>
			<p style={{ fontWeight: 600, fontSize: 32 }}>{typeName}</p>
			<p style={{ fontWeight: 500, fontSize: 30 }}> {brandName} </p>
			<p style={{ fontSize: 28 }}>{device.name}</p>
		</div>
	)
}