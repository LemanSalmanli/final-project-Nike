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
            console.log(user)       
            localStorage.setItem("role", user.user.role)
            localStorage.setItem("token", user.token)
            toast.success("Uğurla giriş edildi")
            navigate('/admin/category')
        } catch (error) {
            toast.error(error?.data?.message || "Giriş zamanı xəta baş verdi")
        }
    };

    return (
        <div className="h-[100vh] w-full flex justify-center items-center">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="mail" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button onClick={handleClick} type="button" className="flex justify-center   w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">{isLoading ? <Loader2 className="animate-spin h-8 w-8" /> : 'Sign in'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
