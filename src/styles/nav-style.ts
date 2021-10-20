import styled from '@emotion/styled'

export const GlobalNav = styled('nav')`
  position: absolute;
  height: 44px;
  padding: 0 1rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`

export const LocalNav = styled('nav')`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #333;
  padding: 0 1rem;
  z-index: 5;
`

interface NavLinksTypes {
  type: 'global' | 'local'
}

export const NavLinks = styled('div')<NavLinksTypes>`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;

  justify-content: ${(props) => props.type === 'global' && 'space-between'};

  & > a {
    font-size: ${(props) => props.type === 'local' && '.8em'};
    margin-right: ${(props) => (props.type === 'global' ? '0' : 'auto')};
  }

  & > button {
    margin-left: 2em;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`
