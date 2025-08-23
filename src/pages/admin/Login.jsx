import { useState } from "react"
import { useNavigate } from "react-router"
import { Loader2 } from "lucide-react"
import { useLoginMutation } from "../../store/nikeApi"
import { toast } from "react-toastify"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { isLoading }] = useLoginMutation()
    const navigate = useNavigate()
    const handleClick = async (e) => {
        try {
            const user = await login({ email, password }).unwrap()
            localStorage.setItem("role", user.user.role)
            localStorage.setItem("token", user.token)
            toast.success("Uğurla giriş edildi")
            navigate('/admin/category')
        } catch (error) {
            toast.error(error?.data?.message || "Giriş zamanı xəta baş verdi")
        }
    }

    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-8 px-4">
            <div className="flex gap-4 items-center">
                <img className="h-6" src="/img/Nike-logo.png" alt="Jordan Logo" />
                <img className="h-10" src="/img/Jumpman_logo.png" alt="Converse Logo" />
            </div>
            <h1 className="my-3 text-3xl">Enter your email to sign in.</h1>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div class="relative">
                        <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-[#111111] appearance-none  focus:outline-none focus:ring-0 focus:border-[#111111] peer" placeholder="" />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#111111]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email*</label>
                    </div>
                    <div class="relative">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-[#111111] appearance-none  focus:outline-none focus:ring-0 focus:border-[#111111] peer" placeholder="" />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#111111]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password*</label>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={handleClick} type="button" className="flex justify-center bg-black text-white  px-8 py-3 font-semibold rounded-3xl cursor-pointer hover:bg-[#707072]">{isLoading ? <Loader2 className="animate-spin h-8 w-8" /> : 'Sign in'}</button>
                </div>
            </form>
        </div>
    )
}

export default Login
