import { LangContext } from '@contexts/Lang'
import { useContext } from 'react'

export const LangSelector: React.FC = () => {
  const {
    dispatch: { setLanguage },
  } = useContext(LangContext)

  const selectLanguageHandler = (value: string) => {
    setLanguage(value)
  }

  return (
    <ul>
      <button onClick={() => selectLanguageHandler('ENG')}>ENG</button>
      <button onClick={() => selectLanguageHandler('KOR')}>KOR</button>
    </ul>
  )
}
