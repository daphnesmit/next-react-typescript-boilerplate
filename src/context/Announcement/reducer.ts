export type Announcement = {
  message: string
  timeOut?: number
  id?: number
}

type AnnouncementAdd = {
  type: 'ADD'
  data: Announcement
}

type AnnouncementRemove = {
  type: 'REMOVE'
  id: number
}

type Action = AnnouncementAdd | AnnouncementRemove
type State = Announcement[]

export const reducer = (prevState: State, payload: Action) => {
  switch (payload.type) {
    case 'REMOVE':
      const newState = prevState.filter(item => item.id !== payload.id)

      return [...newState]
    case 'ADD':
      return [payload.data, ...prevState]
    default:
      return prevState
  }
}
