import { Link, Outlet } from "react-router-dom"

const PublicLayout = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <header>
                <ul>
                    <Link to='/members-onboarding'>Members Onboarding</Link>
                    <Link to='/auth-login' > {!user ? "Login" : user.name }</Link>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            {/* <footer>Default Footer</footer> */}
        </div>
    )
}

export default PublicLayout