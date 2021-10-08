import styled from '@emotion/styled'

export const GlobalNav = styled('nav')`
  height: 44px;
  padding: 0 1rem;
`

export const LocalNav = styled('nav')`
  height: 52px;
  border-bottom: 1px solid #333;
  padding: 0 1rem;
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
