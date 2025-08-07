import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/route'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
     <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router}/>
    </Provider>
)
