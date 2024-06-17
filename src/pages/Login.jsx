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
                <form className="bg-blue-500 border flex flex-col gap-2">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>
                        Sign In
                    </button>
                </form>
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