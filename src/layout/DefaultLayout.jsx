import { Outlet } from "react-router-dom"

const DefaultLayout = ()=>{
    return (
        <div>
        <header>Default Header</header>
        <main>
            <Outlet />
        </main>
        <footer>Default Footer</footer>
    </div>
    )
}

export default DefaultLayout