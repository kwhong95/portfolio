import ReactDOM from 'react-dom'
import { App } from './App'
import { Global } from '@emotion/react'
import { GlobalStyle } from './styles/global-style'

ReactDOM.render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>,
  document.querySelector('#root')
)
