export type INavDropdown = {
  id: number
  name: string
  path: string
}

export type IHeaderNavItems = {
  id: number
  name: string
  path: string
  dropdown: INavDropdown[]
}
