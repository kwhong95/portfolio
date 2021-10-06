import { useContext } from 'react'
import { LangContext } from '@contexts/Lang'

export const useTranslate = (content: string) => {
  const {
    dispatch: { translate },
  } = useContext(LangContext)

  return translate(content)
}
