import { Navigate } from 'react-router'

const Auth = ({ children }) => {
    let role = localStorage.getItem('role')
    return (
        role == 'admin' ? children : <Navigate to='/login' />
    )
}

export default Auth