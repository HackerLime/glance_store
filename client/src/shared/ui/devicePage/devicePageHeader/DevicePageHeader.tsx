import { Link } from 'react-router-dom'
import { SVGLessThan } from 'shared/assets/icons'
import { SHOP_ROUTE } from 'shared/routerPaths'
export const DevicePageHeader = ({ breadCrumbs, backText }) => {
	return (
		<div style={{ margin: '0 0 40px 0' }}>
			<div className='d-flex align-items-center' style={{ margin: '0 0 32px 0' }}><Link style={{ textDecoration: 'none', color: '#ABABAB', fontSize: '16' }} to={SHOP_ROUTE}>Главная/ </Link><h2 style={{ fontSize: 14, lineHeight: '19px', color: '#838383' }}> {breadCrumbs}</h2></div>
			<div className='d-flex align-items-center' style={{ maxWidth: 285 }}>
				<Link to={SHOP_ROUTE}>
					<SVGLessThan />
				</Link>
				<h6 style={{ color: 'rgb(12,12,12)', fontSize: 32, lineHeight: "38px", whiteSpace: 'nowrap' }} >{backText}</h6> </div>
		</div>
	)
}

