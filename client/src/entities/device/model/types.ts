export type TDevice = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  brandId: number;
  typeId: number;
  createdAt: string;
  updatedAt: string
}


export type AsSliderProps = {
  brandName: string;
  typeName: string
  device: TDevice;
  asSliderItem: boolean;
  asListItem?: undefined;
  asBasketListItem?: undefined;
};

export type AsListProps = {
  brandName: string;
  typeName: string
  device: TDevice;
  asSliderItem?: undefined;
  asListItem: boolean;
  asBasketListItem?: undefined;
};

export type AsBasketListProps = {
  brandName: string;
  typeName: string
  device: TDevice;
  asSliderItem?: undefined;
  asListItem?: undefined;
  asBasketListItem: boolean;
};

export type TDeviceItemProps = {
  device: TDevice;
  brandName: string;
  typeName: string
}



export type TDeviceProps = AsSliderProps | AsListProps | AsBasketListProps