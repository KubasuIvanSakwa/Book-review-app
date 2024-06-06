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
        <section className="flex flex-col w-full bg-black text-white h-[100vh] justify-center items-center">
            <section className="flex flex-col border p-3 h-[28rem] rounded-xl justify-center w-[30%]">
                <form className="bg-blue-500 border flex flex-col gap-2">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                </form>
                <button onClick={handleClick}>Sign In with Google</button>
            </section>
        </section>
    )
}

export default Login