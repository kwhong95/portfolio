import { routes } from '@layouts/Routes'
import { GlobalNav, GlobalNavLinks } from '@styles/nav-style'
import { NavLink } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <>
      <GlobalNav>
        <GlobalNavLinks>
          {routes.map((page, idx) => (
            <NavLink key={idx} to={page.path} activeStyle={{ color: 'red' }}>
              {page.name}
            </NavLink>
          ))}
        </GlobalNavLinks>
      </GlobalNav>
    </>
  )
}
