import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

function Footer(){
    return(
        <>
        <div className="bg-gray-800">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div >
                    <div className="grid grid-cols-2 gap-5 row-lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category</p>
                            <ul className="mt-2 space-y-2 ">
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">News</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">World</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Gmes</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">References</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Apples</p>
                            <ul className="mt-2 space-y-2 ">
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">web</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">eCommerce</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Bussiness</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Portfolio</a>
                                </li>
                            </ul>
                        </div> 
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Cherry</p>
                            <ul className="mt-2 space-y-2 ">
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Media</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Broucher</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">NonProfite</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Education</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-300 transition-colors duration-300 hover:text-orange-500">Projects</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Subscribe For Updates</p>
                            <form className="mt-4 flex flex-col md:flex-row">
                                <input type="email" name="" id="" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none " />
                                <br></br>
                                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white hover:bg-orange-400 focus:outline-none border">Submit</button>
                            </form>
                            <p className="mt-4 text-sm text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis itaque quo expedita obcaecati est dolorum nam laudantium quis molestias, quisquam in, nihil eaque facere incidunt, unde alias adipisci vitae? Aspernatur.</p>
                        </div> 
                       
                    </div> 
                        
                </div>
                <div className="flex flex-col justify-between pt-5 pb-30  border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500"> © Copyright 2024  | All Right Reserved</p>
                    <div  className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-400"><FaTwitter className="h-6 w-6 "/></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-400"><FaInstagram className="h-6 w-6 "/></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-400"><FaFacebook className="h-6 w-6 "/></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer