
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import './global.css'
import { Gallaria } from './pages/Gallaria/Gallaria'


export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallaria/:id/:name?" element={<Gallaria />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
