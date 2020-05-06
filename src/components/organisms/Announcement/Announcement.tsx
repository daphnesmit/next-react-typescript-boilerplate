import VisuallyHidden from '@reach/visually-hidden'
import React, { FC } from 'react'

import { Announcement as AnnoucementType, useAnnouncement } from '@/context/Announcement'

export const Announcement: FC<AnnoucementType> = ({ message }) => {
  return (
    <VisuallyHidden>
      <div aria-live="polite" aria-atomic="true">
        {message}
      </div>
    </VisuallyHidden>
  )
}

export const AnnouncementCenter: FC = () => {
  const { announcements } = useAnnouncement()

  return (
    <>
      {announcements.map(announcement => (
        <Announcement key={announcement.id} message={announcement.message} />
      ))}
    </>
  )
}
