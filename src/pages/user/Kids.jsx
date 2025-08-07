function Kids() {
    return (
        <div>
            <div className="bg-[#F5F5F5] py-4 text-center text-xs underline font-semibold">
                <h5>Up to 50% Off Select Styles: Use code SPORT</h5>    
            </div>
            <div className="lg:flex items-center w-full py-6 px-8 lg:px-12 font-semibold sticky top-0 z-10 bg-white ">
                <div className="w-[5%] text-2xl mb-4 lg:mb-0">Kids</div>
                <div className="w-[95%] space-x-8 lg:text-center text-base overflow-x-auto scroll-hide whitespace-nowrap">
                    <span className="hover:text-gray-500 cursor-pointer">Shoes</span>
                    <span className="hover:text-gray-500 cursor-pointer">Clothing</span>
                    <span className="hover:text-gray-500 cursor-pointer">Accessories</span>
                    <span className="hover:text-gray-500 cursor-pointer">Shop by Color</span>
                </div>
            </div>
            <div className="relative flex">
                <img className="object-center w-full md:hidden" src="/img/kids-slide-3.jpg" alt="Card 1" />
                <img className="object-center w-full hidden md:block" src="/img/kids-slide-3-full.jpg" alt="Card 1 Full" />
                <div className="text-white w-[90%] md:w-[50%] font-semibold absolute bottom-18 left-1/2 -translate-x-1/2 text-center space-y-2">
                    <h5 className="text-base">Sabrina 3</h5>
                    <h3 className="text-5xl font-extrabold">THE HOOPERS BLUEPRINT</h3>
                    <h5 className="text-base">Build your game like the best in Sabrina's latest  collection.</h5>
                    <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                        Shop
                    </button>      
                </div>                     
            </div>
            
        </div>
    )
}

export default Kids
