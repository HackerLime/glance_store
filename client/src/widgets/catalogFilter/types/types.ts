import type { TBrandAndTypeResponse, TDevice } from "shared/types";

type TDeskFilterProps = {
  isDesktop: boolean;
  isMobile?: undefined;
  types: TBrandAndTypeResponse[];
  brands: TBrandAndTypeResponse[]
  devices: TDevice[]
}
type TMobileFilterProps = {
  isDesktop?: undefined;
  isMobile: boolean;
  types: TBrandAndTypeResponse[];
  brands: TBrandAndTypeResponse[]
  devices: TDevice[]
}



export type TCatalogFilterProps = TDeskFilterProps | TMobileFilterProps

export type PriceRangeParams = (from: number, to: number) => void