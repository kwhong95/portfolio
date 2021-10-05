import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from '@layouts/Routes'

export const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
