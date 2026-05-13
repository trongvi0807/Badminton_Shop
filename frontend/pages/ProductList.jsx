import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  useEffect(() => {
    fetch(`${BASEURL}/api/products/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Lưu dữ liệu lấy được vào state products
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        // Bắt lỗi nếu server sập hoặc sai đường dẫn
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Đang tải dữ liệu...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Lỗi: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-8 py-6 bg-white shadow-md">
        Danh sách Sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.masanpham} product={product} baseUrl={BASEURL}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Không có sản phẩm nào
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductList;