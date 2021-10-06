import { LangContext } from '@contexts/Lang'
import { useContext } from 'react'
import { LangSelectorWrap } from '@styles/lang-selector-style'

export const LangSelector: React.FC = () => {
  const {
    dispatch: { setLanguage },
  } = useContext(LangContext)

  const selectLanguageHandler = (value: string) => {
    setLanguage(value)
  }

  return (
    <LangSelectorWrap>
      <button onClick={() => selectLanguageHandler('ENG')}>ENG</button>
      <button onClick={() => selectLanguageHandler('KOR')}>KOR</button>
    </LangSelectorWrap>
  )
}
