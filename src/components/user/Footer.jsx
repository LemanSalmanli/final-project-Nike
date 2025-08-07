import { useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, } from "@mui/material"
import { SlArrowDown } from "react-icons/sl"
import { TbWorld } from "react-icons/tb"
import { Link } from "react-router"

export default function Footer() {
  const [expanded, setExpanded] = useState("")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <footer className=" p-4 lg:p-10 w-full">
        <div className="flex flex-col items-center justify-center gap-12 mb-8">
            <img className="h-4" src="/img/Nike-logo.png" alt="Nike Logo" />
            <div className="flex gap-4 sm:text-lg sm:gap-10 font-medium">
                <Link to="/retail" className="hover:text-gray-500 cursor-pointer">Find a store</Link>
                <p className="hover:text-gray-500 cursor-pointer">Help</p>
                <p className="hover:text-gray-500 cursor-pointer">Join Us</p>
                <p className="hover:text-gray-500 cursor-pointer">Sign In</p>
            </div>
        </div>
        <div id="mobile-footer-accordion" className="mt-8 lg:hidden w-full flex flex-col justify-center items-center">
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} sx={{padding: '16px 0',backgroundColor: 'transparent',boxShadow: 'none',  borderTop: "1px solid #e5e7eb", width: '100%'}}>
                <AccordionSummary>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm font-semibold cursor-pointer">
                            Resources
                        </p>
                        <SlArrowDown className={`text-sm transition-transform duration-300 ${ expanded === "panel1" ? "rotate-180" : ""}`}/>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="text-sm text-[#707072] font-semibold space-y-3 cursor-pointer">
                        <li>Gift Cards</li>
                        <li><Link to="/retail">Find a Store</Link></li>
                        <li>Membership</li>
                        <li>Nike Journal</li>
                        <li>Site Feedback</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={{padding: '16px 0',backgroundColor: 'transparent',boxShadow: 'none',  borderTop: "1px solid #e5e7eb",  width: '100%' }}>
                <AccordionSummary>
                    <div className="flex items-center justify-between w-full">
                        <p className="cursor-pointer text-sm font-semibold">
                            Help
                        </p>
                        <SlArrowDown className={`text-sm transition-transform duration-300 ${ expanded === "panel2" ? "rotate-180" : ""}`}/>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="text-sm text-[#707072] font-semibold space-y-3 cursor-pointer">
                        <li>Get Help</li>
                        <li>Order Status</li>
                        <li>Shipping and Delivery</li>
                        <li>Returns</li>
                        <li>Order Cancellation</li>
                        <li>Payment Options</li>
                        <li>Gift Card Balance</li>
                        <li>Contact Us</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={{padding: '16px 0',backgroundColor: 'transparent',boxShadow: 'none', borderTop: "1px solid #e5e7eb", width: '100%' }}>
                <AccordionSummary>
                    <div className="flex items-center justify-between w-full">
                        <p className="cursor-pointer text-sm font-semibold">
                            Company
                        </p>
                        <SlArrowDown className={`text-sm transition-transform duration-300 ${ expanded === "panel3" ? "rotate-180" : ""}`}/>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="text-sm text-[#707072] font-semibold space-y-3 cursor-pointer">
                        <li>About Nike</li>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Purpose</li>
                        <li>Sustainability</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} sx={{padding: '16px 0',backgroundColor: 'transparent',boxShadow: 'none', borderTop: "1px solid #e5e7eb", width: '100%' }}>
                <AccordionSummary>
                    <div className="flex items-center justify-between w-full">
                        <p className=" cursor-pointer text-sm font-semibold">
                            Promotions & Discounts
                        </p>
                        <SlArrowDown className={`text-sm transition-transform duration-300 ${ expanded === "panel4" ? "rotate-180" : ""}`}/>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="text-sm text-[#707072] font-semibold space-y-3 cursor-pointer">
                        <li>Student</li>
                        <li>Military</li>
                        <li>Teacher</li>
                        <li>First Responders & Medical Professionals</li>
                        <li>Birthday</li>
                    </ul>
                </AccordionDetails>
            </Accordion> 
            <div className="flex gap-1 items-center w-full border-y border-gray-300 px-4 py-6 text-sm font-semibold cursor-pointer text-[#707072]">
                <TbWorld />
                <h3>United States</h3>
            </div>          
        </div>
        <div id="desktop-footer" className="lg:flex justify-between hidden items-start  py-12 border-t border-gray-300">
            <div>
                <h3 className="text-sm font-semibold cursor-pointer mb-8">
                    Resources
                </h3>
                <ul className="text-sm text-[#707072] font-semibold space-y-4 cursor-pointer">
                    <li>Gift Cards</li>
                    <li><Link to="/retail">Find a Store</Link></li>
                    <li>Membership</li>
                    <li>Nike Journal</li>
                    <li>Site Feedback</li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold cursor-pointer mb-8">
                    Help
                </h3>
                <ul className="text-sm text-[#707072] font-semibold space-y-4 cursor-pointer">
                    <li>Get Help</li>
                    <li>Order Status</li>
                    <li>Shipping and Delivery</li>
                    <li>Returns</li>
                    <li>Order Cancellation</li>
                    <li>Payment Options</li>
                    <li>Gift Card Balance</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold cursor-pointer mb-8">
                    Company
                </h3>
                <ul className="text-sm text-[#707072] font-semibold space-y-4 cursor-pointer">
                    <li>About Nike</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Purpose</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold cursor-pointer mb-8">
                    Promotions & Discounts
                </h3>
                <ul className="text-sm text-[#707072] font-semibold space-y-4 cursor-pointer">
                    <li>Student</li>
                    <li>Military</li>
                    <li>Teacher</li>
                    <li>First Responders & Medical Professionals</li>
                    <li>Birthday</li>
                </ul>
            </div>
            <div className="flex gap-3 items-center text-sm font-semibold cursor-pointer text-[#707072]">
                <TbWorld />
                <h3>United States</h3>
            </div>
        </div>
        <div className="text-sm text-[#707072] font-semibold space-y-4 cursor-pointer py-6 lg:flex items-center gap-4">
            <h3>&copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved</h3>
            <ul className="space-y-4 lg:flex gap-4 items-center">
                <li className="hover:text-black flex gap-2 items-center whitespace-nowrap">Guides <SlArrowDown /> </li>
                <li className="hover:text-black whitespace-nowrap">Terms of Sale</li>
                <li className="hover:text-black whitespace-nowrap">Terms of Use</li>
                <li className="hover:text-black whitespace-nowrap">Nike Privacy Policy</li>
                <li className="hover:text-black whitespace-nowrap flex gap-2">
                    <img src="/img/image.png" alt="" />
                    Your Privacy Choices
                </li>
                <li className="hover:text-black whitespace-nowrap mb-4">CA Supply Chains Act</li>
            </ul>
        </div>
    </footer>
  );
}
