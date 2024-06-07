import Search from "../components/Search"

function Nav() {

    return (
        <section className="flex flex-col">
            <section className="h-[4rem] p-4">
                <button className="bg-[#8E8E8E] text-[#272626] p-1 rounded-2xl text-center  w-[4rem]">Login</button>
            </section>
            <Search />
        </section>
    )
}

export default Nav