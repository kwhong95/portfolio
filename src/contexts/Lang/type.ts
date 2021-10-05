import { ReactNode } from 'react'

export enum LangActionType {
  SET_LANGUAGE = 'SET_LANGUAGE',
}

export interface LangState {
  language: string
}

export interface LangStateProps {
  children: ReactNode
}

export interface SetLanguageAction {
  type: typeof LangActionType.SET_LANGUAGE
  payload: string
}
