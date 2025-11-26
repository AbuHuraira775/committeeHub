import AdminDashboard from "../pages/admin/AdminDashboard";
import LoginPage from "../pages/public/LoginPage";
import MemberOnboardingPage from "../pages/public/MemberOnboardingPage";
import MemberDashboard from "../pages/members/MemberDashboard";
import CommitteeManagement from "../pages/admin/CommitteeManagement ";
import CreateCommittee from "../pages/admin/CreateCommittee";
import MemberManagement from "../pages/admin/MemberManagement";
import ScheduleDraw from "../pages/admin/ScheduleDraw";
import DrawHistory from "../pages/admin/DrawHistory";
import MemberCommittees from "../pages/members/MemberCommittees";
import MemberProfile from "../pages/members/MemberProfile";
import About from "../pages/public/About";
import CommitteesList from "../pages/public/CommitteesList";
import Contact from "../pages/public/Contact";
import Home from "../pages/public/Home";

const adminRoutes = [
  { path: '', element: <AdminDashboard /> },
  { path: 'committees', element: <CommitteeManagement /> },
  { path: 'committees/create', element: <CreateCommittee /> },
  { path: 'members', element: <MemberManagement /> },
  { path: 'draws/schedule', element: <ScheduleDraw /> },
  { path: 'draws/history', element: <DrawHistory /> },
]

const memberRoutes = [
  { path: '', element: <MemberDashboard /> },
  { path: 'committees', element: <MemberCommittees /> },
  { path: 'profile', element: <MemberProfile /> },
]

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/auth-login', component: <LoginPage />},
  { path: '/members-onboarding', component: <MemberOnboardingPage />},
  { path: '/about', element: <About /> },
  { path: '/committees', element: <CommitteesList /> },
  { path: '/contact', element: <Contact /> }
]

export {adminRoutes, memberRoutes, publicRoutes};