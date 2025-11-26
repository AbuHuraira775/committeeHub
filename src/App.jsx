import { Route, Routes } from 'react-router-dom'
import './index.css'
import { adminRoutes, memberRoutes, publicRoutes } from './routes/allRoutes'
import { AdminAuth, MemberAuth } from './routes/routesProtection'
import AdminLayout from './layout/AdminLayout'
import MemberLayout from './layout/MemberLayout'
import PublicLayout from './layout/PublicLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AdminAuth />}>
          <Route path='/admin' element={<AdminLayout />}>
            {adminRoutes.map((route, ind) => (
              <Route index key={ind} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>

        <Route element={<MemberAuth />}>
          <Route path='/member' element={<MemberLayout />}>
            {memberRoutes.map((route, ind) => (
              <Route key={ind} index path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>

        <Route element={<PublicLayout />}>
          {publicRoutes.map((route, ind) => {
            return <Route key={ind} path={route.path} element={route.component} />
          })}
        </Route>
      </Routes>
    </>
  )
}

export default App
