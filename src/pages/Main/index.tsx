import { useRef, useEffect, useState } from 'react'
import { Container } from '@styles/page-container'
import { useTranslate } from '@hooks/useTranslate'
import { ScrollSection } from '@styles/scroll-section-style'
import { sectionInfo, sectionInfoType } from './section-info'
import { useScroll } from '@hooks/useScroll'

export const MainPage: React.FC = () => {
  const containerSelectorRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const SectionInfo: sectionInfoType[] = sectionInfo
  const [currentSection, setCurrentSection] = useState<number>(0)
  const [enterNewSection, setEnterNewSection] = useState<boolean>(false)
  let prevScrollHeight = 0

  const setLayout = () => {
    for (let i = 0; i < SectionInfo.length; i++) {
      SectionInfo[i].scrollHeight =
        sectionInfo[i].heightNum * window.innerHeight
      if (containerSelectorRef.current) {
        const containerNode = containerSelectorRef.current
        let sectionObjs = SectionInfo[i].objs.container
        sectionObjs = containerNode.childNodes[i]
        sectionObjs.style.height = `${SectionInfo[i].scrollHeight}px`
        SectionInfo[i].objs.messages = containerNode.childNodes[i].childNodes
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

  const scrollLoop = () => {
    setEnterNewSection(false)
    for (let i = 0; i < currentSection; i++) {
      prevScrollHeight += sectionInfo[i].scrollHeight
    }

    if (scrollY > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
      setEnterNewSection(true)
      setCurrentSection((v) => v + 1)
    }

    if (scrollY < prevScrollHeight) {
      setEnterNewSection(true)
      if (currentSection === 0) return
      setCurrentSection((v) => v - 1)
    }

    if (enterNewSection) return

    playAnimation()
  }

  const calcValues = (values: any, currentYOffset: number) => {
    let rv = 0
    const scrollHeight = SectionInfo[currentSection].scrollHeight
    const scrollRatio: string | number =
      currentYOffset / sectionInfo[currentSection].scrollHeight

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight
      const partScrollEnd = values[2].end * scrollHeight
      const partScrollHeight = partScrollEnd - partScrollStart

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollHeight) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0]
      } else if (currentYOffset < partScrollStart) {
        rv = values[0]
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1]
      } else {
        rv = scrollRatio * (values[1] - values[0]) + values[0]
      }

      return rv
    }
  }

  const playAnimation = () => {
    const objs = SectionInfo[currentSection].objs
    const values = SectionInfo[currentSection].values
    const currentYOffset = scrollY - prevScrollHeight
    const scrollHeight = SectionInfo[currentSection].scrollHeight
    const scrollRatio = (scrollY - prevScrollHeight) / scrollHeight

    switch (currentSection) {
      case 0:
        const message1_opacity_in = calcValues(
          values.message1_opacity_in,
          currentYOffset
        )
        const message1_opacity_out = calcValues(
          values.message1_opacity_out,
          currentYOffset
        )
        const message1_translateY_in = calcValues(
          values.message1_translateY_in,
          currentYOffset
        )
        const message1_translateY_out = calcValues(
          values.message1_translateY_out,
          currentYOffset
        )

        if (scrollRatio <= 0.22) {
          objs.messages[1].style.opacity = message1_opacity_in
          objs.messages[1].style.transform = `translateY(${message1_translateY_in}%)`
        } else {
          objs.messages[1].style.opacity = message1_opacity_out
          objs.messages[1].style.transform = `translateY(${message1_translateY_out}%)`
        }

        break
      case 1:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('load', setLayout)
    window.addEventListener('resize', setLayout)
    window.addEventListener('scroll', scrollLoop)

    return () => {
      window.removeEventListener('load', setLayout)
      window.removeEventListener('resize', setLayout)
      window.removeEventListener('scroll', scrollLoop)
    }
  })

  return (
    <Container
      ref={containerSelectorRef}
      onLoad={setLayout}
      currentSection={currentSection}
    >
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
