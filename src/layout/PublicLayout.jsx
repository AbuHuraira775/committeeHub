import { Link, Outlet } from "react-router-dom"

const PublicLayout = () => {
    const isLoggedIn = localStorage.getItem('user')
    return (
        <div>
            <header>
                <ul>
                    <Link to='/members-onboarding' > Onborad Members</Link>
                    <Link to='/auth-login' > {!isLoggedIn && "Login" }</Link>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Default Footer</footer>
        </div>
    )
}

export default PublicLayout