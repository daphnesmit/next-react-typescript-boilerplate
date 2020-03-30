import dynamic from 'next/dynamic'

export const RichTextEditor = dynamic(() => import('./RichTextEditor'), {
  loading: () => <div />,
  ssr: false,
})
