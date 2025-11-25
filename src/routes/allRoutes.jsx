import AdminDashboard from "../pages/admin/adminDashboard";
import LoginPage from "../pages/LoginPage";
import MemberOnboardingPage from "../pages/MemberOnboardingPage";
import MemberDashboard from "../pages/members/MemberDashboard";

const adminRoutes = [
  {path: '', component: <AdminDashboard />}
]

const memberRoutes = [
  {path: '', component: <MemberDashboard />}
]

const publicRoutes = [
  {path: 'auth-login', component: <LoginPage />},
  {path: 'members-onboarding', component: <MemberOnboardingPage />},
]

export {adminRoutes, memberRoutes, publicRoutes};