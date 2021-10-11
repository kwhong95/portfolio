import { useRef, useEffect, useState } from 'react'
import { Container } from '@styles/page-container'
import { useTranslate } from '@hooks/useTranslate'
import { ScrollSection } from '@styles/scroll-section-style'
import { sectionInfo, sectionInfoType } from './section-info'
import { useScroll } from '@hooks/useScroll'

export const MainPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const SectionInfo: sectionInfoType[] = sectionInfo
  const [currentSection, setCurrentSection] = useState<number>(0)
  let prevScrollHeight = 0

  const setLayout = () => {
    for (let i = 0; i < SectionInfo.length; i++) {
      SectionInfo[i].scrollHeight =
        sectionInfo[i].heightNum * window.innerHeight
      if (mainRef.current) {
        const container = mainRef.current
        SectionInfo[i].objs.container = container.childNodes[i]
        SectionInfo[
          i
        ].objs.container.style.height = `${SectionInfo[i].scrollHeight}px`
      }
    }

    let totalScrollHeight = 0
    for (let i = 0; i < SectionInfo.length; i++) {
      totalScrollHeight += SectionInfo[i].scrollHeight
      if (totalScrollHeight >= window.pageYOffset) {
        setCurrentSection(i)
        break
      }
    }
  }

  const onScrollLoop = () => {
    prevScrollHeight = 0
    for (let i = 0; i < currentSection; i++) {
      prevScrollHeight += sectionInfo[i].scrollHeight
    }

    if (scrollY > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
      setCurrentSection((v) => v + 1)
    }

    if (scrollY < prevScrollHeight) {
      if (currentSection === 0) return
      setCurrentSection((v) => v - 1)
    }
  }

  useEffect(() => {
    window.addEventListener('load', setLayout)
    window.addEventListener('resize', setLayout)
    window.addEventListener('scroll', onScrollLoop)

    return () => {
      window.removeEventListener('load', setLayout)
      window.removeEventListener('resize', setLayout)
      window.removeEventListener('scroll', onScrollLoop)
    }
  })

  return (
    <Container ref={mainRef} onLoad={setLayout} currentSection={currentSection}>
      <ScrollSection className="scroll-section-0">
        <h1>{useTranslate('mainTitle')}</h1>
        <div className="sticky-elem main-message">
          <p>
            {useTranslate('mainMessage1')}
            <br />
            {useTranslate('mainMessage2')}
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            {useTranslate('mainMessage3')}
            <br />
            {useTranslate('mainMessage4')}
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            {useTranslate('mainMessage5')}
            <br />
            {useTranslate('mainMessage6')}
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            {useTranslate('mainMessage7')}
            <br />
            {useTranslate('mainMessage8')}
          </p>
        </div>
      </ScrollSection>
      <ScrollSection>
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          deserunt numquam, voluptates ex incidunt nemo, blanditiis enim laborum
          impedit tempore eum a placeat! Sequi nisi amet error explicabo,
          voluptate pariatur? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Accusantium deserunt numquam, voluptates ex incidunt
          nemo, blanditiis enim laborum impedit tempore eum a placeat! Sequi
          nisi amet error explicabo, voluptate pariatur? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Accusantium deserunt numquam,
          voluptates ex incidunt nemo, blanditiis enim laborum impedit tempore
          eum a placeat! Sequi nisi amet error explicabo, voluptate pariatur?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          deserunt numquam, voluptates ex incidunt nemo, blanditiis enim laborum
          impedit tempore eum a placeat! Sequi nisi amet error explicabo,
          voluptate pariatur? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Accusantium deserunt numquam, voluptates ex incidunt
          nemo, blanditiis enim laborum impedit tempore eum a placeat! Sequi
          nisi amet error explicabo, voluptate pariatur?
        </p>
      </ScrollSection>
    </Container>
  )
}
