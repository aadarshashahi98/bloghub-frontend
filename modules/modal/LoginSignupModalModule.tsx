import { Login } from "./components/Login"
import { SignUp } from "./components/Signup"
import { IoIosClose } from "react-icons/io";

export function LoginSignupModalModule({
    login,
    setLogin,
    signup,
    setSignup,
    onLoginSuccess
}: {
    login: boolean,
    setLogin: any,
    signup: boolean,
    setSignup: any,
    onLoginSuccess?: () => void
}) {

    if (!login && !signup) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            
            <div className="bg-white p-10 rounded-lg relative w-[40vw]">
                <button
                    className="absolute top-8 right-6 p-1 border border-black text-sm cursor-pointer duration-500 hover:text-red-500"
                    onClick={() => {
                        setLogin(false);
                        setSignup(false);
                    }}
                >
                    <IoIosClose size={20} className="hover:scale-110"/>
                </button>
                {login && (
                    <Login 
                        setLogin={setLogin} 
                        setSignup={setSignup} 
                        onLoginSuccess={onLoginSuccess}
                    />
                )}
                {signup && <SignUp setLogin={setLogin} setSignup={setSignup} />}
            </div>

        </div>
    )
}