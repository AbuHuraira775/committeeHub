import { Route, Routes } from 'react-router-dom'
import './index.css'
import { adminRoutes, memberRoutes, publicRoutes } from './routes/allRoutes'
import { AdminAuth, MemberAuth } from './routes/routesProtection'
import AdminLayout from './layout/AdminLayout'
import MemberLayout from './layout/MemberLayout'

function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/members-onboarding" />} />
        {allRoutes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
      </Routes> */}
      <Routes>
        {/* <Route path='/admin' element={adminProtectedLayout}>
          {adminRoutes.map((route, ind) => {
            return <Route key={ind} path={route.path} element={route.component} />
          })}
        </Route>
        <Route path='/member' element={memberProtectedLayout}>
          {memberRoutes.map((route, ind) => {
            return <Route key={ind} path={route.path} element={route.component} />
          })}
        </Route> */}


        <Route element={<AdminAuth />}>
          <Route path='/admin' element={<AdminLayout />}>
            {adminRoutes.map((route, ind) => (
              <Route key={ind} path={route.path} element={route.component} />))}
          </Route>
        </Route>

        <Route element={<MemberAuth />}>
          <Route path='/member' element={<MemberLayout />}>
            {memberRoutes.map((route, ind) => {
              return <Route key={ind} path={route.path} element={route.component} />
            })}
          </Route>
        </Route>


        {publicRoutes.map((route, ind) => {
          return <Route key={ind} path={route.path} element={route.component} />
        })}
      </Routes>
    </>
  )
}

export default App
