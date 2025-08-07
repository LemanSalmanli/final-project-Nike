import { ImCross } from 'react-icons/im'

const Modal = ({ open, setOpen, children }) => {
    return (
        <>
            <div className={`${open ? 'absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-100 h-[90%] overflow-y-scroll  bg-white block rounded-3xl p-3' : 'static hidden'}`}>
                <div className='w-full flex justify-end mb-5'>
                    <button
                        onClick={() => setOpen(false)}
                        className='px-4 py-3 font-semibold rounded bg-gray-600 cursor-pointer text-gray-100'>
                        <ImCross />
                    </button>
                </div>
                {children}
            </div>
            <div className={open ? 'fixed z-10 inset-0 bg-black/50' : ''}></div>
        </>
    )
}

export default Modal
