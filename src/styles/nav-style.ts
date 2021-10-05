import styled from '@emotion/styled'

export const GlobalNav = styled('nav')`
  height: 44px;
`

export const LocalNav = styled('nav')`
  height: 52px;
  border-bottom: 1px solid #333;
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
  }

  p {
    font-size: 1.2rem;
    margin-right: auto;
    font-weight: bold;
  }
`
