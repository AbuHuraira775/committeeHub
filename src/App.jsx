import { Route, Routes } from 'react-router-dom'
import './index.css'
import allRoutes from './routes/allRoutes'
import Navbar from './components/Navbar'

function App() {

  return (
   <>
   <Routes>
    {allRoutes.map((route,index)=>{
      return <Route key={index} path={route.path} element={route.component} />
    })}
   </Routes>
   </>
  )
}

export default App
