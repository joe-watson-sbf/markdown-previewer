import { useMarkDown } from '@/context/MarkdownProvider'

export const PreviewSettings = () => {
  const { editorFontSize, setEditorFontSize, defaultTheme, themeList, handleChangeTheme } = useMarkDown()

  

  return (
    <div className='flex justify-between gap-x-8 gap-y-2 flex-wrap items-center'>
      <div className='flex text-sm items-center gap-2 whitespace-nowrap'>
        Font Size: <input
          type='range'
          className='max-w-28 text-xs'
          min='16' max='50'
          value={editorFontSize} onChange={(e) => setEditorFontSize(+e.target.value)} />
        {editorFontSize}px
      </div>

      <div className='flex gap-2 items-center'>
        <span className='text-sm'>Theme:</span>
        <select className='border rounded-md p-1 text-sm'
          defaultChecked={true}
          defaultValue={defaultTheme}
        onChange={handleChangeTheme}>
          {themeList.map(currentTheme => (
            <option key={currentTheme} value={currentTheme}>{currentTheme}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
