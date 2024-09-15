import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './constants/routes'

function App() {

  return (
    <div className="bg-zinc-100 min-h-screen">
      <RouterProvider router={routes()}>
      </RouterProvider>
    </div>
  )
}

export default App
