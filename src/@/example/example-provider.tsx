import React, { FC, createContext, useContext } from 'react'

const ExampleContext = createContext<any>({} as any)

export const useExample = () => useContext(ExampleContext)

const ExampleProvider: FC = props => {
  const { children } = props

  return (
    <ExampleContext.Provider value={{ example: 'example context' }}>
      {children}
    </ExampleContext.Provider>
  )
}

ExampleProvider.displayName = 'Example.ExampleProvider'

export default ExampleProvider
