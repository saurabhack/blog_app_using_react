import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa"
function BlogCart({blogs,currentPage,selectedCategory,pageSize}){
    const filterBlogs=blogs.filter((blog)=>{
        return !selectedCategory  || blog.category ===selectedCategory
    }).slice((currentPage-1)*pageSize, currentPage*pageSize)
    console.log(filterBlogs)

    return (
        <>
        <div className="grid md:grid-cols-3 sm:grid-cols- grid-cols-1 gap-8">{
            filterBlogs.map((blog)=>{
                return <Link to={`/blogs/${blog.id}`}  key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
                    <div >
                        <img src={blog.image} className="w-full"/>
                    </div>
                    <h1 className="mt-4 mb-2 font-bold hover:text-blue-600 pointer-cursor">{blog.title}</h1>
                    <p className="mb-2 text-sm text-gray-400 ">
                          <FaUser className="inline-flex items-center mr-2"/>  {blog.author}
                    </p>
                    <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
                </Link>
            })
            }</div>

        </>
    )
}
export default BlogCart