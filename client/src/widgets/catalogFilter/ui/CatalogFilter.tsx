import { FilterWithCheck, FilterWithPrice } from 'features/filter'
import { FC, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SVGFilterIcon } from 'shared/assets/icons'
import { TCatalogFilterProps } from '../types'
import styles from './CatalogFilter.module.css'


export const CatalogFilter: FC<TCatalogFilterProps> = ({ isMobile, isDesktop, types, brands, devices }) => {
  console.log(devices)
  const [typeChecked, setTypeChecked] = useState([])
  const [brandChecked, setBrandChecked] = useState([])
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const closeOffCanvas = () => setShowOffCanvas(false)
  const openOffCanvas = () => setShowOffCanvas(true)





  if (isMobile) {
    return (
      <>
        <div
          onClick={() => openOffCanvas()}
          className={styles.MobCatalog__icon_wrapper}>
          <span className={styles.MobCatalog__icons__text}>Фильтр</span>
          <SVGFilterIcon />
        </div>
        <Offcanvas show={showOffCanvas} onHide={closeOffCanvas} responsive="lg">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Фильтр</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={styles.catalogsFilter__wrapper}>
              {/* 							<FilterSortBy sortDevices={sortDevices} filterVariants={variants} />
 */}							<div className={styles.catalogsFilter__filters_container}>
                {/* 								<FilterWithPrice cancelVisible={cancelVisible} sortByPrice={sortByPrice} from={devicePrice.min} to={devicePrice.max} />
 */}								<FilterWithCheck checked={typeChecked} setChecked={setTypeChecked} lable='Тип устройства' filterParams={types} />
                <FilterWithCheck checked={brandChecked} setChecked={setBrandChecked} lable='Брэнд устройства' filterParams={brands} />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }

  if (isDesktop) {
    return (
      <aside className={styles.catalogsFilter__wrapper}>
        {/* 					<FilterSortBy sortDevices={sortDevices} filterVariants={variants} />
	 */}					<div className={styles.catalogsFilter__filters_container}>
          <FilterWithPrice />
          <FilterWithCheck checked={typeChecked} setChecked={setTypeChecked} lable='Тип устройства' filterParams={types} />
          <FilterWithCheck checked={brandChecked} setChecked={setBrandChecked} lable='Брэнд устройства' filterParams={brands} />
        </div>
      </aside>
    )

  }


}
