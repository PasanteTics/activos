import React from 'react'
import { Route, Switch } from 'wouter'
import { ActivosPage } from '../pages/ActivosPage'
import { LoginPage } from '../pages/LoginPage'
import { HeaderCustom } from '../components/HeaderCustom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  return (
    <>
      <Switch>
        <Route path={'/login'}>
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        </Route>

        <Route path='/'>
          <PrivateRoute>
            <HeaderCustom />
            <ActivosPage />
          </PrivateRoute>
        </Route>
      </Switch>
    </>
  )
}