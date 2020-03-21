import React, { FC } from 'react'
import { Redirect, Route } from 'react-router'
import Example, { ExampleProvider } from '@/example'

const Modules: FC = () => {
  return (
    <ExampleProvider>
      <Example />
      <Route path="/" render={() => <Redirect to="/example" />} exact />
    </ExampleProvider>
  )
}

Modules.displayName = 'Modules'

export default Modules
