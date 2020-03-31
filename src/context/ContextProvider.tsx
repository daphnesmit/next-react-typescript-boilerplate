import React from 'react'
import { SWRConfig } from 'swr'

import { AnnouncementProvider } from './Announcement'

interface ContextProviderProps {}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        suspense: false, // Can only be used clientSide
      }}>
      <AnnouncementProvider>{children}</AnnouncementProvider>
    </SWRConfig>
  )
}
