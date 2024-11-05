type TSortVariant = {
  id: number;
  name: string;
  sortKey: 'default' | 'from cheaper' | 'from expensive'
}

export const sortVariants: TSortVariant[] = [
  {
    id: 1,
    name: 'По умолчанию',
    sortKey: 'default'
  },
  {
    id: 2,
    name: 'Сначала Дороже',
    sortKey: 'from expensive'
  },
  {
    id: 3,
    name: 'Сначала Дешевле',
    sortKey: 'from cheaper'
  }
]