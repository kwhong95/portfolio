import { Container } from '@styles/page-container'
import { useTranslate } from '@hooks/useTranslate'

export const MainPage: React.FC = () => {
  return (
    <Container>
      <section className="scroll-section">
        <h1>{useTranslate('mainTitle')}</h1>
        <div className="sticky-elem">
          <p>{useTranslate('mainMessage1')}</p>
          <br />
          <p>{useTranslate('mainMessage2')}</p>
        </div>
        <div className="sticky-elem">
          <p>{useTranslate('mainMessage3')}</p>
          <br />
          <p>{useTranslate('mainMessage4')}</p>
        </div>
        <div className="sticky-elem">
          <p>{useTranslate('mainMessage5')}</p>
          <br />
          <p>{useTranslate('mainMessage6')}</p>
        </div>
        <div className="sticky-elem">
          <p>{useTranslate('mainMessage7')}</p>
          <br />
          <p>{useTranslate('mainMessage8')}</p>
        </div>
      </section>
    </Container>
  )
}
