import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/admin/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/dashboad/home' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App