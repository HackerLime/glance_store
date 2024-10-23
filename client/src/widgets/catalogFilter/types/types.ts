import type { TBrandAndTypeResponse } from "shared/types";



type TDeskFilterProps = {
  isDesktop: boolean;
  isMobile?: undefined;
  types: TBrandAndTypeResponse[];
  brands: TBrandAndTypeResponse[]
}
type TMobileFilterProps = {
  isDesktop?: undefined;
  isMobile: boolean;
  types: TBrandAndTypeResponse[];
  brands: TBrandAndTypeResponse[]
}

export type TCatalogFilterProps = TDeskFilterProps | TMobileFilterProps