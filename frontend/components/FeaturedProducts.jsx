import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL

  useEffect(() => {
    // Gọi API lấy danh sách sản phẩm từ Django
    fetch(`${BASEURL}/api/products/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không thể kết nối đến máy chủ");
        }
        return response.json();
      })
      .then((data) => {
        // MẸO HAY: Dùng .slice(0, 8) để chỉ lấy tối đa 8 sản phẩm hiển thị ra trang chủ
        setProducts(data.slice(0,4));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [BASEURL]); 

  // Nếu đang tải dữ liệu
  if (loading) {
    return <div className="text-center py-10 text-gray-500">Đang tải sản phẩm...</div>;
  }

  // Nếu có lỗi kết nối
  if (error) {
    return <div className="text-center py-10 text-red-500">Lỗi: {error}</div>;
  }

  return (
    <section className="container mx-auto py-12 px-4">
      {/* Tiêu đề khu vực */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-600 uppercase mb-2">Sản Phẩm Nổi Bật</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>

      {/* Lưới hiển thị Card sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.masanpham} product={product} baseUrl={BASEURL} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Hiện chưa có sản phẩm nào.
          </p>
        )}
      </div>
      
      {/* Nút Xem Tất Cả */}
      <div className="text-center mt-10">
        <Link to="/products">
        <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-bold transition duration-300">
          Xem Tất Cả Sản Phẩm
        </button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;