import { Delta, Sources } from 'quill'
import ReactQuill from 'react-quill'

interface RichTextEditorProps {
  value?: string
  onChange?: (content: string, delta: Delta, source: Sources, editor: any) => void
}

const RichTextEditorComponent: React.FC<RichTextEditorProps> = ({ value = '', onChange }) => {
  return (
    <ReactQuill
      modules={{
        toolbar: [
          [{ header: [2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
      }}
      value={value}
      onChange={onChange}
    />
  )
}

export default RichTextEditorComponent
