// import { useState, useEffect } from 'react'
import { Container } from '@styles/page-container'
import { useTranslate } from '@hooks/useTranslate'
import { ScrollSection } from '@styles/scroll-section-style'
import { sectionInfo, sectionInfoType } from './section-info'

export const MainPage: React.FC = () => {
  const SectionInfo: sectionInfoType[] = sectionInfo

  const setLayout = () => {
    for (let i = 0; i < SectionInfo.length; i++) {
      SectionInfo[i].scrollHeight =
        sectionInfo[i].heightNum * window.innerHeight
    }

    console.log(SectionInfo)
  }

  setLayout()

  return (
    <Container>
      <ScrollSection>
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
