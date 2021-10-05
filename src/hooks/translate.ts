import { useContext } from 'react'
import { LangContext } from '@contexts/Lang'

export const TransLangHook = ({ content }: { content: string }) => {
  const {
    dispatch: { translate },
  } = useContext(LangContext)

  return translate(content)
}
