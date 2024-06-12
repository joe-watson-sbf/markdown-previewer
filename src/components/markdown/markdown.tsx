import { MarkDownProvider } from '@/context/MarkdownProvider'
import { MarkdownForm } from './markdown-form'
import { MarkdownPreview } from './markdown-preview'

export const Markdown = () => {

  return (
    <MarkDownProvider>
      <div className='my-8 grid md:grid-cols-2 gap-4'>
        <MarkdownForm />
        <MarkdownPreview />
      </div>
    </MarkDownProvider>
  )
}
