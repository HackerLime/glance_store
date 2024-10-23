type TDeviceInfoObj = { title: string, description: string }

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
  info?: TDeviceInfoObj[]
}

export type TBrandAndTypeResponse = {
  id: number;
  name: string;
}