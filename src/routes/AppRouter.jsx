import React from 'react'
import { Redirect, Route, Switch } from 'wouter'
import { ActivosPage } from '../pages/ActivosPage'

export const AppRouter = () => {
  return (
    <Switch>
        <Route path={'/Activos/Activa'} component={ActivosPage} />
        <Redirect to='/activos' />
    </Switch>    
  )
}