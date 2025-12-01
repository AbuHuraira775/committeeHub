import { Button } from "antd"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link, Outlet } from "react-router-dom"

const PublicLayout = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <header>
                <ul className="flex items-end justify-end mt-5 mr-5">
                    <Link to='/members-onboarding'><Button type="primary"  shape='round'>Onboard Members <AiOutlineArrowRight /></Button></Link>
                    {/* <Link to='/auth-login' > {!user ? "Login" : user.name }</Link> */}
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