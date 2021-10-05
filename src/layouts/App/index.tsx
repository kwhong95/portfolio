import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from '@layouts/Routes'
import { Navigation } from '@layouts/Navigation'
import { LangState } from '@contexts/Lang'

export const App = () => {
  return (
    <BrowserRouter>
      <LangState>
        <Navigation />
        <Switch>
          {routes.map((page, idx) => (
            <Route
              key={idx}
              path={page.path}
              exact={page.exact}
              component={page.component}
            />
          ))}
        </Switch>
      </LangState>
    </BrowserRouter>
  )
}
