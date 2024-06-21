import { auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth"

function Login() {
    const handleClick = () => {
        signInWithPopup( auth , provider )
        .then((data) => {
            localStorage.setItem('token', data.user.accessToken)
            window.location.href = '/'
            console.log(data)
        })
    }

    return (
        <section className="flex flex-col w-ful text-white h-[100vh] justify-center items-center bg-[#23272F]">
            <section className="flex flex-col border relative bottom-[4rem] p-3 h-[28rem] rounded-xl justify-center w-[30%]">
                <form className="flex flex-col gap-2 h-[10rem] items-center">
                    <input type="email" className="bg-[#949596] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-black/80 rounded-sm" placeholder="example@email.com" />
                    <input type="password" placeholder="Password" className="bg-[#949596] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-black/80 rounded-sm"/>
                    <button
                        className="mt-[1rem] w-[6rem] h-[2.1rem] p-1 rounded-[1rem] border border-white"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-[0.6rem] flex gap-2 relative w-full items-center justify-center">
                    <hr className="border-[#909192]/80 w-[30%]" />
                    <p className="text-[#909192]/80 text-xl">or</p>
                    <hr className="border-[#909192]/80 w-[30%]" />
                </div>
                <button 
                    onClick={handleClick}
                    className="bg-white/10 p-2 mt-4 w-[10rem] self-center shadow-lg text-white/80  hover:bg-white/50 hover:text-white"
                >
                    Sign In with Google
                </button>
            </section>
        </section>
    )
}

export default Login