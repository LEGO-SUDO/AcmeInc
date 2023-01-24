import Home from './pages/Home'
import Signup from './pages/Signup'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Menu from './pages/Menu'

ChartJS.register(ArcElement, Tooltip, Legend)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='products' element={<Products />} />
          <Route path='menu' element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <Home />
    // <Signin/>
  )
}

export default App
