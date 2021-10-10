export type sectionInfoType = {
  id: number
  type: 'sticky' | 'normal'
  heightNum: number
  scrollHeight: number
}

export const sectionInfo: sectionInfoType[] = [
  {
    id: 1,
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
  },
  {
    id: 2,
    type: 'normal',
    heightNum: 1,
    scrollHeight: 0,
  },
]
