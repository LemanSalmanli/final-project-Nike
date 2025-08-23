import { useState } from "react";
import { HiMagnifyingGlass, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { locationData } from "../../data/location";

function Retail() {
    const [showMap, setShowMap] = useState(false)
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.272985049901!2d49.8371572!3d40.358471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d52ffc2e993%3A0xd2111009aadd4a9!2sNike%20Baku!5e0!3m2!1sen!2saz!4v1753395450054!5m2!1sen!2saz")

    return (
        <div className="py-4 relative sm:flex w-full">
            <div className="w-full sm:w-[50%]">
                <div className="px-6">
                    <h1 className="py-4 text-2xl mb-4 font-semibold">Find a Nike Store</h1>
                    <div className="px-4 py-2 rounded-lg my-4 text-2xl items-center flex gap-2 border">
                        <HiMagnifyingGlass />
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Location" className="w-full p-2 outline-none border-0 focus:border-0 focus:ring-0 appearance-none"/>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2 sm:py-4">
                        <h3 className="text-[#707072] text-sm font-semibold">
                            <span>{locationData.length}</span> Stores Near You
                        </h3>
                    </div>
                </div>
                <div className="sm:hidden px-6 flex items-center gap-4 text-[#707072] text-lg font-semibold ">
                    <button className={`cursor-pointer py-4 ${showMap ? 'border-b-2 text-black' : ''}`} onClick={() => setShowMap(true)}>Map</button>
                    <button className={`cursor-pointer py-4 ${ !showMap ? 'border-b-2 text-black' : ''}`}  onClick={() => setShowMap(false)}>List</button>
                </div>
                <div className={ `${showMap ? 'hidden' : 'block'} sm:block `}>
                    <div className="sm:overflow-y-scroll sm:h-[62vh] ">
                        {locationData
                            .filter(store => store.city.toLowerCase().includes(search.toLowerCase()))
                            .map(store => (
                                <div onClick={() => setLocation(store.location)} 
                                    className="text-base font-normal text-[#707072] border-t cursor-pointer border-gray-400 p-6"
                                    key={store.name}
                                >
                                    <h3 className="text-black">{store.name}</h3>
                                    <p>{store.street}</p>
                                    <p>{store.city}</p>
                                    <p><span className="text-red-500">Closed</span> • Opens at {store.time}</p>
                                </div>
                            ))
                        }
                        {locationData.filter(store => store.city.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                            <p className="p-6 text-gray-500">No store found</p>
                        )}                            
                    </div>
                </div>                        
            </div>
            <div className={ `${showMap ? 'block' : 'hidden'} sm:block w-full h-[90vh]`}>
                <iframe src={location} className="w-full h-full border-0" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Retail;
