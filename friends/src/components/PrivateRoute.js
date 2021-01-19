import React from 'react'
import { render } from 'react-dom'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = () => {

    return(
        <Route 
            {...rest}
            render={
              ( {location} ) => {
                  return localStorage.getItem("token") ? (
                      children
                  ) : (
                      <Redirect to { {pathname: "/login", state: {from: location} } } />
                  )

              }  
            }/>
    )
}