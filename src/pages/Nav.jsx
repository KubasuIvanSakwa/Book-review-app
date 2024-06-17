import { Link, useLocation } from "react-router-dom"
import Search from "../components/Search"
import { useEffect, useRef } from "react";

function Nav() {
    
    const searchRef = useRef(null)

    let location = useLocation()

    useEffect(() => {
        if(location.pathname == '/login') {
            searchRef.current.classList.add('hidden')
        } else {
            searchRef.current.classList.remove('hidden')
        }
    }, [location])

    return (
        <section className="flex flex-col">
            <section className="h-[4rem] p-4">
                <Link 
                    className="bg-[#8E8E8E] text-[#272626] p-1 rounded-2xl text-center  w-[4rem]"
                    to="/login"
                >
                    Login
                </Link>
            </section>
            <div
                className=""
                ref={searchRef}
            >
                <Search />
            </div>
        </section>
    )
}

export default Nav