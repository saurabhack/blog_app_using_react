import {useState} from "react"
import { NavLink } from "react-router-dom"
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark} from "react-icons/fa6"
import  "../App.css"
import Modal from "./Modal"

function Navbar(){
    const [isMenuOpen , setIsMenuOpen]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)

    const navItem=[
        {path:"/",link:"Home"},
        {path:"/services",link:"Services"},
        {path:"/about",link:"About"},
        {path:"/blogs",link:"Blog"},
        {path:"/contact",link:"Contact"},
    ]
    const toggelMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const openModel=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false)
    }
    return(
        <>
            <header className="bg-black text-white fixed top-0 left-0 right-0 ">
                <nav className="px-4 py-4 max-w-7xl mx flex justify-between items-center">
                    <a href="/"  className="text-xl font-bold text-white">My <span className="text-orange-500">Blog</span></a>
                
                <ul className="md:flex  gap-12 text-lg hidden">
                    {
                        navItem.map((val,i)=>{
                            return <li className="text-white" key={i}>
                                <NavLink className={({isActive, isPending})=>
                                    isActive ? "active" : isPending ? "pending" : ""
                                } to={val.path} >{val.link}</NavLink>
                            </li>
                        })
                    }
                </ul>
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className="hover:text-orange-500" ><FaFacebook/></a>
                    <a href="/" className="hover:text-orange-500" ><FaDribbble/></a>
                    <a href="/" className="hover:text-orange-500" ><FaTwitter/></a>
                    <button onClick={openModel} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in cursor-pointer">Log in</button>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}/>
                <div  className="md:hidden">
                <button onClick={toggelMenu} className="cursor-pointer">
                    {
                        isMenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5" />
                    }
                     </button>
                </div>
                </nav>
                <div>
                <ul className={`md:hidden  gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0  w-full transition-all ease-out duration-150": "hidden"}`}>
                    {
                        navItem.map((val,i)=>{
                            return <li className="text-black" key={i}>
                                <NavLink onClick={toggelMenu} to={val.path}>{val.link}</NavLink>
                            </li>
                        })
                    }
                </ul>
                </div>
            </header>
        </>
    )
}
export default Navbar