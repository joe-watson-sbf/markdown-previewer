import { useMarkDown } from '@/context/MarkdownProvider'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Download } from '../icons';
import { PreviewSettings } from './preview-settings';
import { marked } from 'marked';
import markedCodePreview from 'marked-code-preview'


export const MarkdownPreview = () => {

  const { content, theme, editorFontSize } = useMarkDown()


  const html = marked
    .use({ gfm: true })
    .use(markedCodePreview({ template: content }))
    .parse(content).toString();

  const downloadHtml = () => {

    // get the element by id
    const element = document.getElementById('preview');
    if (!element) {
      alert('No content to download, please write some markdown content first or reload the page!');
      return;
    }
  
    // create a new Blob object with the content of the element
    const file = new Blob([element?.innerHTML], { type: 'text/html' });

    // create a new URL object
    const url = URL.createObjectURL(file);
    
    // create a new anchor element
    const anchor = document.createElement('a');
    
    // set the href attribute to the url
    anchor.setAttribute('href', url);
    
    // set the download attribute to the filename
    anchor.setAttribute('download', 'markdown-preview.html');
    
    // trigger a click event on the anchor
    anchor.click();
  }

  return (
    <div className='space-y-2'>
      <div className='flex gap-x-8 gap-y-2 flex-wrap items-center text-sm justify-between font-medium text-gray-600'>
        <PreviewSettings />
        <button onClick={downloadHtml}
          className='flex items-center hover:scale-110 transition-all duration-500 gap-1 text-muted-foreground'><Download /> HTML</button>
      </div>

      <div id='preview' className=''>
        <div>
          <SyntaxHighlighter language="__html"
            style={theme} wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              padding: '1rem',
              fontSize: `${editorFontSize}px`,
              borderRadius: '0.5rem',
            }}>
            {html}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
