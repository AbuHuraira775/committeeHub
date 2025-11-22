import LoginPage from "../pages/LoginPage";
import MemberOnboardingPage from "../pages/MemberOnboardingPage";

const allRoutes = [
  {path: 'members-boarding', component: <MemberOnboardingPage />},
  {path: 'login', component: <LoginPage />}
]

export default allRoutes;