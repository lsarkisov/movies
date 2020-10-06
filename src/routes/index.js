import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom'
import NoMatch from 'components/no-match'
import Movies from 'components/movies'
import Movie from 'components/movie'
import Actor from 'components/actor'
import SearchResult from 'components/search/search-result'

const routes = [
  { path: '/movie', Component: Movie },
  { path: '/actor/:id', Component: Actor },
  { path: '/search', Component: SearchResult },
]

const privateRoutes = []

function Routes() {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('token') && localStorage.getItem('role') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>

        {routes.map(({ path, Component }) => (
          <Route path={path} key={path}>
            <Component />
          </Route>
        ))}

        {privateRoutes &&
          privateRoutes.map(({ path, Component }) => (
            <PrivateRoute path={path} key={path}>
              <Component />
            </PrivateRoute>
          ))}

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default withRouter(Routes)
