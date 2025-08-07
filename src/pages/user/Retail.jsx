import { useState } from "react";
import { HiMagnifyingGlass, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

function Retail() {
    const [showFilters, setShowFilters] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.272985049901!2d49.8371572!3d40.358471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d52ffc2e993%3A0xd2111009aadd4a9!2sNike%20Baku!5e0!3m2!1sen!2saz!4v1753395450054!5m2!1sen!2saz")

    const locationData = [
        {
            name: 'Nike Store Baku Deniz Mall (Partnered)',
            street: '26a, Nafchilar Ave.' ,
            city: 'Baku, AZ1000, AZ' ,
            time: '8:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.272985049901!2d49.8371572!3d40.358471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d52ffc2e993%3A0xd2111009aadd4a9!2sNike%20Baku!5e0!3m2!1sen!2saz!4v1753395450054!5m2!1sen!2saz'
        },
        {                    
            name: 'Nike Store Tbilisi Rustaveli (Partnered)',
            street: '1 Rustaveli St',
            city: 'Tbilisi, Georgia, 0105, GE' ,
            time: '10:00 AM',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205923.46574172442!2d44.64876490007016!3d41.7596596233361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cef6a1e3849%3A0xbd891b1b57658289!2sNike!5e0!3m2!1sen!2saz!4v1753460862026!5m2!1sen!2saz'
        },
        {
            name: 'Nike Store Tbilisi Vazha Pshavela (Partnered)',
            street: '8 Vazha Pshavela Ave.' ,
            city: 'Tbilisi, Georgia, 0160, GE' ,
            time: '10:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.69540874369!2d44.761787540375664!3d41.72709107137834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472e080be5109%3A0x2156d30f013bc2e3!2sNike!5e0!3m2!1sen!2saz!4v1753460955841!5m2!1sen!2saz'
        },
        {
            name: 'NIKE -Grand Majidi Mall',
            street: 'Erbil- Grand Majidi Mall - 1st floor' ,
            city: 'Erbil, Erbil, 00000, IQ' ,
            time: '8:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.1941152872746!2d44.0457022!3d36.2104765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400721df5679946f%3A0x80f89505030b3759!2zTmlrZSB8INmG2KfbjNqp24w!5e0!3m2!1sen!2saz!4v1753461498249!5m2!1sen!2saz'
        },
        {
            name: 'Nike Store Batumi (Partnered)',
            street: '20 Nikoloz Baratashvili St' ,
            city: 'Batumi, Georgia, 6000, GE' ,
            time: '10:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.318072596413!2d41.63465454037158!3d41.64886927138745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067866cadfb0e07%3A0x848ff0affb3b31a7!2sNike!5e0!3m2!1sen!2saz!4v1753461385097!5m2!1sen!2saz'
        },
        {
            name: 'Nike Clearance Store Catania',
            street: 'Strada Provinciale 54' ,
            city: 'Misterbianco, Sicily, 95045, IT' ,
            time: '10:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202507.9766928708!2d14.579426160747982!3d37.52708574154768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131158605dc4ed3b%3A0x1955fc8a482ff171!2sNike%20Clearance%20Store%20Catania!5e0!3m2!1sen!2saz!4v1753470556720!5m2!1sen!2saz'
        },
        {
            name: 'Ankara Factory Store',
            street: 'Akşemsettin Mah. Doğukent Bulv. No:2131K 138' ,
            city: 'Mamak ANKARA, Ankara, 06480, TR' ,
            time: '10:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.561608184697!2d32.932444984707715!3d39.906446498108565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d35023b7ac565f%3A0x956a6208887d28b0!2sNike%20Factory%20Store%20Ankara!5e0!3m2!1sen!2saz!4v1753470826239!5m2!1sen!2saz'
        },
        {
            name: 'Nike Store Madrid Castellana (Partnered)',
            street: 'Paseo de la Castellana 83-85' ,
            city: 'MADRID (Madrid), Community of Madrid, 25046, ES' ,
            time: '10:00 AM' , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2213082307057!2d-3.6967137151035274!3d40.4482384977805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229000e423d0d%3A0xb222cd81cacbdb3c!2sNike%20Store%20Madrid%20-%20Castellana!5e0!3m2!1sen!2saz!4v1753470935833!5m2!1sen!2saz'
        },
    ]
   
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
                        <button
                            onClick={() => setShowFilters(true)}
                            className="flex gap-2 items-center text-lg border-gray-300 hover:border-black cursor-pointer border py-0.5 px-5 rounded-3xl"
                        >
                            Filter <HiOutlineAdjustmentsHorizontal />
                        </button>
                    </div>
                    </div>
                    <div
                        className={`bg-white w-full h-full sm:w-[200px] sm:h-[300px] fixed top-0 left-0 z-50 transition-transform duration-300 ${
                            showFilters ? "translate-y-0" : "-translate-y-full"
                        }`}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h1 className="text-xl font-semibold">Filters</h1>
                            <ImCross
                                className="cursor-pointer"
                                onClick={() => setShowFilters(false)}
                            />
                        </div>

                        <div className="p-4 space-y-4">
                            <h3 className="text-lg" onChange={(e) => setSearch(e.target.value)} >All Stores</h3>
                            <h3 className="text-lg" onChange={(e) => setSearch(e.target.value)} >Nike Stores</h3>
                            <h3 className="text-lg">Nike Value Stores</h3>
                        </div>
                    </div>
                    <div className="sm:hidden px-6 flex items-center gap-4 text-[#707072] text-lg font-semibold ">
                        <button className={`cursor-pointer py-4 ${showMap ? 'border-b-2 text-black' : ''}`} onClick={() => setShowMap(true)}>Map</button>
                        <button className={`cursor-pointer py-4 ${ !showMap ? 'border-b-2 text-black' : ''}`}  onClick={() => setShowMap(false)}>List</button>
                    </div>
                    <div className={ `${showMap ? 'hidden' : 'block'} sm:block `}>
                        <div className="sm:overflow-y-scroll sm:h-[50vh] ">
                            { locationData
                                .filter(store => store.city.toLowerCase().includes(search.toLowerCase()))
                                .map(store => (
                                    <div onClick={() => setLocation(store.location)} 
                                        className="text-base font-medium text-[#707072] border-t cursor-pointer border-gray-400 p-6"
                                        key={store.name}
                                    >
                                        <h3 className="text-black">{store.name}</h3>
                                        <p>{store.street}</p>
                                        <p>{store.city}</p>
                                        <p><span className="text-red-500">Closed</span> • Opens at {store.time}</p>
                                    </div>
                                ))
                            }
                            { locationData.filter(store => store.city.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                                <p className="p-6 text-gray-500">No store found</p>
                            )}                            
                        </div>
                        <div className="text-base font-medium  border-y border-gray-400 p-6">
                            <button className="underline hover:text-gray-500 cursor-pointer">View All Stores</button>
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
