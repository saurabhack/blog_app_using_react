import Banner from "../components/Banner"
import BlogPages from "../components/BlogPages"

function Home(){
    return(
        <>
        <div>
        <Banner/>
        </div>
        <div className="max-w-7xl mx-auto">
            <BlogPages/>
        </div>
        </>
    )
}
export default Home