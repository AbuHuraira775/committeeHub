import { Navigate, Outlet } from "react-router-dom";

const AdminAuth = ()=>{
    const adminData = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = adminData.role === 'admin';
    return isAdmin ? <Outlet />: <Navigate to="/auth-login"  />; 
}

const MemberAuth = ()=>{
    const memberData = JSON.parse(localStorage.getItem('user') || '{}');
    const isMember = memberData.role === 'member';
    return isMember ? <Outlet />: <Navigate to="/auth-login"  />; 
}

export {AdminAuth, MemberAuth}