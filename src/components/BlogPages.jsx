import { useState,useEffect } from "react"
import BlogCart from "./BlogCart";
import Pagination from "./Pagination";
import CategorySection from "./CategorySection";
import SideBar from "./SideBar";


function BlogPages(){
    const [blogs,setBlogs]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const pageSize=12
    const [selectedCategory,setSelectedCategory]=useState(null);
    const [activeCategory,setCategory]=useState(null)
    async function blogFetch(){
        const url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
        if(selectedCategory){
            url+=`&category=${selectedCategory}`
        }
        const response=await fetch(url)
        const result=await response.json()
        setBlogs(result)
    }
    useEffect(()=>{
        blogFetch()
    },[currentPage,pageSize,selectedCategory])
    console.log(blogs)

    const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const handleCategoryChange=(category)=>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setCategory(category)

    }

    
    return(
        <>
        <div>
            <div>
                <CategorySection onSelectedCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <BlogCart blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />  
                <div>
                    <SideBar/>
                </div>
            </div>
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
        </>
    )
}
export default BlogPages