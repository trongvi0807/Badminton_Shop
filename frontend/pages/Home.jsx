import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import FeaturedProducts from "../components/FeaturedProducts";
function Home(){
    return(
        <div  className="min-h-screen bg-gray-50 flex flex-col">
            <Header/>
            <Navbar/>
            <main className="flex-grow">
                <Banner/>
                <FeaturedProducts />
            </main>
            <Footer/>
        </div>
    );
}

export default Home;





