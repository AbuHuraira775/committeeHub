import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './index.css'
import allRoutes from './routes/allRoutes'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/members-boarding" />} />
        {allRoutes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
      </Routes>
    </>
  )
}

export default App
