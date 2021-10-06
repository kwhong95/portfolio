import { Container } from '@styles/page-container'
import { useTranslate } from '@hooks/useTranslate'

export const MainPage: React.FC = () => {
  return (
    <Container>
      <h1>{useTranslate('mainpage')}</h1>
    </Container>
  )
}
