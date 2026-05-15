import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
function ProductsPage(){
    const [products,setProducts]=useState([]);
    const[loading,setLoading]=useState(true);
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    useEffect(()=>{
        fetch(`${BASEURL}/api/products/`)
        .then((res)=>res.json())
    .then((data)=>{
        setProducts(data);
        setLoading(false);
    })
    .catch((err)=> console.error(err));
    },[BASEURL]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <Navbar />
          
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="text-sm text-gray-500 mb-6">
              <Link to = "/">Trang chủ</Link> / <span className="text-green-600 font-semibold">Tất cả sản phẩm</span>
            </div>
    
            <h1 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-green-500 pl-4">
              Tất Cả Sản Phẩm
            </h1>
    
            {loading ? (
              <div className="text-center py-20 text-gray-500">Đang tải dữ liệu...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.masanpham} product={product} baseUrl={BASEURL} />
                ))}
              </div>
            )}
          </main>
    
          <Footer />
        </div>
      );
    }
    
    export default ProductsPage;