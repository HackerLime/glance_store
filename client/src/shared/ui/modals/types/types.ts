import type { TBrandAndTypeResponse } from 'shared/types'
type TShowModalParam = boolean
type TSetShowModalParam = (arg: boolean) => void
export type TModalProps = { show: TShowModalParam, setShow: TSetShowModalParam }

type TInfoStateItem = { number: number, title: string, description: string }
export type TInfoState = TInfoStateItem[] | []


export type TSelectedItemState = TBrandAndTypeResponse | null