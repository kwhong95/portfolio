import { routes } from '@layouts/Routes'
import { GlobalNav, LocalNav, NavLinks } from '@styles/nav-style'
import { NavLink } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <>
      <GlobalNav>
        <NavLinks type="global">
          {routes.map((page, idx) => (
            <NavLink key={idx} to={page.path} activeStyle={{ color: 'gray' }}>
              {page.name}
            </NavLink>
          ))}
        </NavLinks>
      </GlobalNav>
      <LocalNav>
        <NavLinks type="local">
          <NavLink to="/">
            <p>KWHong</p>
          </NavLink>
        </NavLinks>
      </LocalNav>
    </>
  )
}
