import AdminDashboard from "../pages/admin/adminDashboard";
import LoginPage from "../pages/public/LoginPage";
import MemberOnboardingPage from "../pages/MemberOnboardingPage";
import MemberDashboard from "../pages/members/MemberDashboard";

const adminRoutes = [
  { path: 'dashboard', element: <AdminDashboard /> },
  { path: 'committees', element: <CommitteeManagement /> },
  { path: 'committees/create', element: <CreateCommittee /> },
  { path: 'members', element: <MemberManagement /> },
  { path: 'members/create', element: <CreateMember /> },
  { path: 'draws', element: <DrawManagement /> },
  { path: 'draws/schedule', element: <ScheduleDraw /> },
  { path: 'draws/history', element: <DrawHistory /> },
  { path: 'payments', element: <PaymentRecords /> },
  { path: 'reports', element: <Reports /> },
  { path: 'settings', element: <SystemSettings /> },
  { path: 'users', element: <UserManagement /> }
]

const memberRoutes = [
  { path: 'dashboard', element: <MemberDashboard /> },
  { path: 'committees', element: <MemberCommittees /> },
  { path: 'draws', element: <MemberDraws /> },
  { path: 'profile', element: <MemberProfile /> },
  { path: 'payments', element: <MemberPayments /> },
  { path: 'notifications', element: <MemberNotifications /> }
]

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: 'auth-login', component: <LoginPage />},
  { path: 'members-onboarding', component: <MemberOnboardingPage />},
  { path: '/about', element: <About /> },
  { path: '/committees', element: <CommitteesList /> },
  { path: '/contact', element: <Contact /> }
]

export {adminRoutes, memberRoutes, publicRoutes};