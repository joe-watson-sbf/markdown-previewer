import { Markdown } from './components/markdown/markdown';

export default function App() {
  return (
    <main className='2xl:container 2xl:mx-auto p-4'>
      <div className='text-center bg-slate-100 max-w-lg mx-auto p-4 rounded-lg'>
        <h1 className='text-xl font-semibold'>Markdown Editor</h1>
        <p className='text-muted-foreground text-sm'>Write markdown on the left, see the html preview on the right.</p>
      </div>
      <Markdown />
    </main>
  )
}
