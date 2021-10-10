export type objsType = {
  container: any
}

export type sectionInfoType = {
  id: number
  type: 'sticky' | 'normal'
  heightNum: number
  scrollHeight: number
  objs: objsType | any
}

export const sectionInfo: sectionInfoType[] = [
  {
    id: 1,
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {},
  },
  {
    id: 2,
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {},
  },
]
