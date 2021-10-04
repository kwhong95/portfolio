import ReactDOM from 'react-dom'
import { Global } from '@emotion/react'
import { GlobalStyle } from '@styles/global-style'
import { App } from '@layouts/App'

ReactDOM.render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>,
  document.querySelector('#root')
)
