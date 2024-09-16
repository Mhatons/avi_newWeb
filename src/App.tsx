import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './constants/routes'

function App() {

  return (
    <div className="backgroundImage bg-zinc-100 overflow-y-scroll h-screen">
      <div className='backgroundColor overflow-y-scroll h-screen'>
        <RouterProvider router={routes()}>
        </RouterProvider>
      </div>
    </div>
  )
}

export default App
