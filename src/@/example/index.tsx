import React, { FC } from 'react'
import { Route } from 'react-router'
import ExamplePage from '@/example/example-page'

const Example: FC = () => {
  return <Route path="/example" component={ExamplePage} />
}

Example.displayName = 'Example'

export default Example
export { default as ExampleProvider } from '@/example/example-provider'
