import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminAuth = ()=>{
    const adminData = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = adminData.role === 'admin';
    console.log(isAdmin)
    return isAdmin ? <Outlet />: <Navigate to="/auth-login"  />; 
}

const MemberAuth = ()=>{
    const memberData = JSON.parse(localStorage.getItem('user') || '{}');
    const isMember = memberData.role === 'member';
    console.log(isMember)
    return isMember ? <Outlet />: <Navigate to="/auth-login"  />; 
}

const PublicAuth = ()=>{
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isLoggedIn = !!user.name;
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    console.log('from',from)
    return isLoggedIn ? <Navigate to='/members-onboarding' /> : <Outlet />;
}

export {AdminAuth, MemberAuth, PublicAuth}