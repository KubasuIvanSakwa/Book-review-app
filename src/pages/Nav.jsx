import { Link, useLocation } from "react-router-dom"
import Search from "../components/Search"
import { useEffect, useRef } from "react";

function Nav() {
    
    const searchRef = useRef(null)
    const loginRef = useRef(null)
    const backRef = useRef(null)

    let location = useLocation()

    useEffect(() => {
        if(location.pathname == '/login') {
            searchRef.current.classList.add('hidden')
            loginRef.current.classList.add('hidden')
            backRef.current.classList.remove('hidden')
            backRef.current.classList.add('block')
        } else {
            searchRef.current.classList.remove('hidden')
            loginRef.current.classList.remove('hidden')
            backRef.current.classList.add('hidden')
            backRef.current.classList.remove('block')
        }
    }, [location])

    return (
        <section className="flex flex-col">
            <section className="h-[4rem] p-4">
                <Link 
                    className="bg-[#8E8E8E] text-[#272626] p-2 rounded-2xl text-center block w-[6rem]"
                    to="/login"
                    ref={loginRef}
                >
                    Login
                </Link>

                <Link 
                    className="bg-[#8E8E8E] text-[#272626] p-2 rounded-2xl text-center  hidden w-[6rem]"
                    to=".."
                    ref={backRef}
                >
                    back
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