import React from 'react'
import { Outlet } from 'react-router-dom'

const MemberLayout = () => {
    return (
        <div>
            <header>Member Header</header>
            <main>
                <Outlet />
            </main>
            {/* <footer>Member Footer</footer> */}
        </div>
    )
}

export default MemberLayout