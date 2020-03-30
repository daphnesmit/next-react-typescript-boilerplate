import React from 'react'

import { AnnouncementProvider } from './Announcement'

interface ContextProviderProps {}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return <AnnouncementProvider>{children}</AnnouncementProvider>
}
