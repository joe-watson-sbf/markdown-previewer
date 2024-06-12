import { FilePen } from '../icons'
import { useMarkDown } from '@/context/MarkdownProvider'

export const MarkdownForm = () => {

  const { content, handleOnChangeContent } = useMarkDown()

  return (
    <div className='space-y-2'>
      <h1 className='text-sm text-gray-600 flex items-center gap-2'> <FilePen/>Content</h1>
      <textarea onChange={(e) => handleOnChangeContent(e.target.value)}
        placeholder='Write or paste your markdown here...'
        value={content}
        className='placeholder:opacity-50 leading-normal flex md:min-h-[70dvh] min-h-[40dvh] w-full rounded-md border border-slate-200 focus:border-gray-500 outline-none bg-background px-3 py-2' />
    </div>
  )
}



