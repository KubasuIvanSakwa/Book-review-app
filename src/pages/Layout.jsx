import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import reactBg from '../../public/main-bg.svg'

function Layout() {

    return (
        <section className="bg-[#23272F] h-[100vh] overflow-hidden relative">
                <Nav />
                <img className='fixed right-[-15rem] bottom-[-10rem] w-[50rem]' src={reactBg} />
            <section>
                <Outlet />
            </section>
        </section>
    )
}

export default Layout