import { MainPage } from '@pages/Main'
import { FC } from 'react'

interface IRoute {
  name: string
  path: string
  exact: boolean
  component: FC
}

export const routes: IRoute[] = [
  {
    name: 'Main',
    path: '/',
    exact: true,
    component: MainPage,
  },
]
