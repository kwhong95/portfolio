import { css } from '@emotion/react'

export const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }

  body {
    overflow-x: hidden;
    letter-spacing: -0.05em;
    background: #101010;
    color: #fff;
  }

  p {
    line-height: 1.6;
  }
`
