import { createContext, useReducer, FC } from 'react'
import { langReducer } from './langReducer'
import { ContextProps, LangActionType, LangStateProps } from './type'

import eng from '@assets/i18n/eng.json'
import kor from '@assets/i18n/kor.json'

const localStorageLang = localStorage.getItem('language')
const initialState = {
  language: localStorageLang ? localStorageLang : 'EN',
}

export const LangContext = createContext({} as ContextProps)

export const LangState: FC<LangStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, initialState)

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang)
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    })
  }

  const translate = (key: string) => {
    const { language } = state
    let langData: { [key: string]: string } = {}

    if (language === 'ENG') {
      langData = eng
    } else if (language === 'KOR') {
      langData = kor
    }

    return langData[key]
  }

  return (
    <LangContext.Provider
      value={{ state, dispatch: { setLanguage, translate } }}
    >
      {children}
    </LangContext.Provider>
  )
}
