import { Link, useLocation } from "react-router-dom"
import Search from "../components/Search"
import { useEffect, useRef } from "react"
import dropDown from '../../public/drop-down.svg'
import upload from '../../public/upload.svg'
import user from '../../public/user.svg'
import back from '../../public/back.svg'

function Nav() {
    
    const searchRef = useRef(null)
    const loginRef = useRef(null)
    const backRef = useRef(null)
    const ulRef = useRef(null)

    let location = useLocation()

    useEffect(() => {
        if(location.pathname == '/login') {
            searchRef.current.classList.add('hidden')
            loginRef.current.classList.add('hidden')

            backRef.current.classList.remove('hidden')
            backRef.current.classList.add('flex')

            ulRef.current.classList.remove('flex')
            ulRef.current.classList.add('hidden')
        } else {
            searchRef.current.classList.remove('hidden')
            loginRef.current.classList.remove('hidden')

            backRef.current.classList.add('hidden')
            backRef.current.classList.remove('flex')

            ulRef.current.classList.add('flex')
            ulRef.current.classList.remove('hidden')
        }
    }, [location])

    return (
        <section className="flex flex-col z-[55] relative">
            <section className="h-[4rem]">
                <ul ref={ulRef} className="flex w-full h-full p-2 items-center justify-end gap-2 text-lg text-white relative right-6 mt-2">
                    <li className="flex items-center gap-1 mr-[1.4rem] cursor-pointer">upload <span><img src={upload} className="w-[1.6rem]"/></span></li>
                    <li className="pr-[1.4rem] border-r mr-[1.4rem] cursor-pointer">about</li>
                    <li className="w-[2rem] h-[2rem] flex justify-center relative items-center rounded-full"><img src={user} className="w-full" /></li>
                    <li className="flex items-center gap-1 ml-[1.5rem] cursor-pointer">
                        <Link 
                            className=""
                            to="/login"
                            ref={loginRef}
                        >
                            profile
                        </Link>
                        <span><img src={dropDown} className="w-[1.6rem]"/></span>
                    </li>
                </ul>
                <div className="flex justify-end p-1">
                    <Link
                        className="bg-[#8E8E8E] text-[#272626] p-1 rounded-2xl text-center flex justify-end mt-3 w-[4rem]"
                        to=".."
                    ref={backRef}
                    >
                        <img src={back} className="w-[2rem]"/>
                    </Link> 
                </div>

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