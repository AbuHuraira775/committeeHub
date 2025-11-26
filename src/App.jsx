import { Route, Routes } from 'react-router-dom'
import './index.css'
import { adminRoutes, memberRoutes, publicRoutes } from './routes/allRoutes'
import { AdminAuth, MemberAuth, PublicAuth } from './routes/routesProtection'
import AdminLayout from './layout/AdminLayout'
import MemberLayout from './layout/MemberLayout'
import PublicLayout from './layout/PublicLayout'
import { useEffect } from 'react'
import LoginPage from './pages/public/LoginPage'
import Home from './pages/public/Home'

function App() {
  let isLoginPage
  let isLoggedIn

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    isLoggedIn = !!user.name;
    isLoginPage = window.location.pathname === '/auth-login'
  }, [])

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

        {/* <Route element={<PublicAuth />}> */}
          <Route element={<PublicLayout />}>
            {publicRoutes.map((route, ind) => (
              <Route key={ind} path={route.path} element={route.element} />
            ))}
          </Route>
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
