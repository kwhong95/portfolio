import { MainPage } from '@pages/Main'
import { FC } from 'react'

interface IRoute {
  name: string
  path: string
  exact: boolean
  component: FC | null | any
}

export const routes: IRoute[] = [
  {
    name: 'Main',
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    name: 'About',
    path: '/about',
    exact: true,
    component: null,
  },
  {
    name: 'Project',
    path: '/project',
    exact: true,
    component: null,
  },
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: null,
  },
]
