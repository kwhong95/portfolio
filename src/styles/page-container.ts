import styled from '@emotion/styled'

export const Container = styled('main')<{ currentSection: number }>`
  height: 100%;

  .scroll-section-${(props) => props.currentSection} {
    .sticky-elem {
      display: block;
    }
  }
`
