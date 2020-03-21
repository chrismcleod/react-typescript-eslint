import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Modules from '@/root/modules'

export const ROOT_ID = 'react-typescript-eslint-root'

const Root: FC = () => {
  return (
    <BrowserRouter>
      <Modules />
    </BrowserRouter>
  )
}

Root.displayName = 'Root'

export default Root
