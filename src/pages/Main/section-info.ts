export type objsType = {
  container: Node | any
  messages?: NodeList | null
}

export type sectionInfoType = {
  id: number
  type: 'sticky' | 'normal'
  heightNum: number
  scrollHeight: number
  objs: objsType
  values?: any
}

export const sectionInfo: sectionInfoType[] = [
  {
    id: 1,
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: null,
      messages: null,
    },
    values: {
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
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
