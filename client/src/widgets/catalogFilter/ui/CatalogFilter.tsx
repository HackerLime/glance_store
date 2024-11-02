import { RootState } from 'app/store/store'
import { addPriceRange, toggleBrandId, toggleTypeId } from 'entities/filter'
import { FilterSortBy, FilterWithCheck, FilterWithPrice } from 'features/filter'
import { FC, useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useDispatch, useSelector } from 'react-redux'
import { SVGFilterIcon } from 'shared/assets/icons'
import type { TPriceState } from 'widgets/catalogFilter/types'
import { PriceRangeParams, TCatalogFilterProps } from '../types'
import { getFromTo } from '../utils'
import styles from './CatalogFilter.module.css'

export const CatalogFilter: FC<TCatalogFilterProps> = ({ isMobile, isDesktop, types, brands, devices }) => {

  const filter = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch()
  const [hashedPrice, setHashedPrice] = useState({ from: 0, to: 0 })
  const [prices, setPrices] = useState<TPriceState>({ from: '', to: '' })

  useEffect(() => {
    setHashedPrice(getFromTo(devices))
  }, [])

  useEffect(() => {
    const fromTo = getFromTo(devices)
    if (!filter.price.from && !filter.price.to) {
      dispatch(addPriceRange(fromTo))
    }
  }, [])

  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const [isCancelVisible, setIsCancelVisible] = useState(false)

  const closeOffCanvas = () => setShowOffCanvas(false)
  const openOffCanvas = () => setShowOffCanvas(true)

  const toggleBrandIdAction = (brandId: number): void => {
    dispatch(toggleBrandId(brandId))
  }
  const toggleTypeIdAction = (typeId: number): void => {
    dispatch(toggleTypeId(typeId))
  }

  const addPriceRangeAction: PriceRangeParams = (from, to) => {
    setIsCancelVisible(true)
    dispatch(addPriceRange({ from, to }))
  }
  const cancelVisibleAction: () => void = () => {
    setPrices({ from: '', to: '' })
    setIsCancelVisible(false)
    dispatch(addPriceRange(hashedPrice))
  }


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
              <FilterSortBy />
              <div className={styles.catalogsFilter__filters_container}>
                <FilterWithPrice
                  defFrom={filter.price.from}
                  defTo={filter.price.to}
                  isCancelVisible={isCancelVisible}
                  addPriceRangeAction={addPriceRangeAction}
                  cancelVisibleAction={cancelVisibleAction}
                  prices={prices}
                  setPrices={setPrices}
                />
                <FilterWithCheck toggleAction={toggleTypeIdAction} lable='Тип устройства' filterParams={types} />
                <FilterWithCheck toggleAction={toggleBrandIdAction} lable='Брэнд устройства' filterParams={brands} />
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
        <FilterSortBy />
        <div className={styles.catalogsFilter__filters_container}>
          <FilterWithPrice
            defFrom={filter.price.from}
            defTo={filter.price.to}
            isCancelVisible={isCancelVisible}
            addPriceRangeAction={addPriceRangeAction}
            cancelVisibleAction={cancelVisibleAction}
            prices={prices}
            setPrices={setPrices}
          />
          <FilterWithCheck toggleAction={toggleTypeIdAction} lable='Тип устройства' filterParams={types} />
          <FilterWithCheck toggleAction={toggleBrandIdAction} lable='Брэнд устройства' filterParams={brands} />
        </div>
      </aside>
    )

  }


}
