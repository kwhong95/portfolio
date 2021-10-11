export type objsType = {
  container: any
}

export type sectionInfoType = {
  id: number
  type: 'sticky' | 'normal'
  heightNum: number
  scrollHeight: number
  objs: objsType
}

export const sectionInfo: sectionInfoType[] = [
  {
    id: 1,
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: null,
    },
  },
  {
    id: 2,
    type: 'normal',
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: null,
    },
  },
]
