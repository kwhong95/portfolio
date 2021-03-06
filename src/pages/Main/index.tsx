import { useRef, useEffect, useState } from 'react'
import { Container } from '@styles/page-container'
import { useTranslate } from '@hooks/useTranslate'
import { ScrollSection } from '@styles/scroll-section-style'
import { sectionInfo, sectionInfoType } from './section-info'
import { useScroll } from '@hooks/useScroll'
// import listReactFiles from 'list-react-files'

export const MainPage: React.FC = () => {
  const containerSelectorRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScroll()
  const SectionInfo: sectionInfoType[] = sectionInfo
  const [currentSection, setCurrentSection] = useState<number>(0)
  const [enterNewSection, setEnterNewSection] = useState<boolean>(false)
  let prevScrollHeight = 0

  const setCanvasImages = () => {
    const importAll = (r: any) => {
      return r.keys().map(r)
    }
    const allImages = importAll(
      require.context('../../assets/video', false, /.jpg$/)
    )
    console.log(allImages)
    SectionInfo[0].objs.videoImages.push(allImages)
  }

  const setLayout = () => {
    for (let i = 0; i < SectionInfo.length; i++) {
      if (containerSelectorRef.current) {
        const containerNode = containerSelectorRef.current
        SectionInfo[i].objs.container = containerNode.childNodes[i]
        SectionInfo[i].scrollHeight =
          sectionInfo[i].heightNum * window.innerHeight
        if (SectionInfo[i].type === 'sticky') {
          SectionInfo[i].objs.canvas = containerNode.childNodes[i]
            .childNodes[0] as HTMLCanvasElement | null | undefined
          SectionInfo[i].objs.messages = containerNode.childNodes[i].childNodes
          SectionInfo[i].objs.context =
            SectionInfo[i].objs.canvas?.getContext('2d')
        } else if (SectionInfo[i].type === 'normal') {
          SectionInfo[i].scrollHeight =
            SectionInfo[i].objs.container.offsetHeight
        }
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
    const scrollRatio = currentYOffset / scrollHeight

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight
      const partScrollEnd = values[2].end * scrollHeight
      const partScrollHeight = partScrollEnd - partScrollStart

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
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
    const scrollRatio = currentYOffset / scrollHeight

    switch (currentSection) {
      case 0:
        const sequence = calcValues(values.imageSequence, currentYOffset)

        console.log(sequence)

        if (scrollRatio <= 0.22) {
          objs.messages[1].style.opacity = calcValues(
            values.message1_opacity_in,
            currentYOffset
          )
          objs.messages[1].style.transform = `translateY(${calcValues(
            values.message1_translateY_in,
            currentYOffset
          )}%)`
        } else {
          objs.messages[1].style.opacity = calcValues(
            values.message1_opacity_out,
            currentYOffset
          )
          objs.messages[1].style.transform = `translateY(${calcValues(
            values.message1_translateY_out,
            currentYOffset
          )}%)`
        }

        if (scrollRatio <= 0.42) {
          objs.messages[2].style.opacity = calcValues(
            values.message2_opacity_in,
            currentYOffset
          )
          objs.messages[2].style.transform = `translateY(${calcValues(
            values.message2_translateY_in,
            currentYOffset
          )}%)`
        } else {
          objs.messages[2].style.opacity = calcValues(
            values.message2_opacity_out,
            currentYOffset
          )
          objs.messages[2].style.transform = `translateY(${calcValues(
            values.message2_translateY_out,
            currentYOffset
          )}%)`
        }

        if (scrollRatio <= 0.62) {
          objs.messages[3].style.opacity = calcValues(
            values.message3_opacity_in,
            currentYOffset
          )
          objs.messages[3].style.transform = `translateY(${calcValues(
            values.message3_translateY_in,
            currentYOffset
          )}%)`
        } else {
          objs.messages[3].style.opacity = calcValues(
            values.message3_opacity_out,
            currentYOffset
          )
          objs.messages[3].style.transform = `translateY(${calcValues(
            values.message3_translateY_out,
            currentYOffset
          )}%)`
        }

        if (scrollRatio <= 0.82) {
          objs.messages[4].style.opacity = calcValues(
            values.message4_opacity_in,
            currentYOffset
          )
          objs.messages[4].style.transform = `translateY(${calcValues(
            values.message4_translateY_in,
            currentYOffset
          )}%)`
        } else {
          objs.messages[4].style.opacity = calcValues(
            values.message4_opacity_out,
            currentYOffset
          )
          objs.messages[4].style.transform = `translateY(${calcValues(
            values.message4_translateY_out,
            currentYOffset
          )}%)`
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
    setCanvasImages()
    console.log(SectionInfo)
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
        <canvas className="sticky-elem" width="1920" height="1080" />
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
          <strong>?????? ????????? ??????</strong>
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
