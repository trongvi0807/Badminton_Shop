function ProductCard({product})
{
    // Use import.meta.env for Vite projects
   // 1. Dùng đúng tên biến môi trường VITE_DJANGO_BASE_URL (thêm backup cổng 8000 cho chắc chắn)
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

// 2. Dùng đúng tên cột trong SQL là "hinhanhdaidien" và ghép thêm /media/products/
    const imageUrl = product.hinhanhdaidien 
        ? `${BASEURL}/media/products/${product.hinhanhdaidien}` 
        : "https://via.placeholder.com/300x200?text=No+Image";
    
    return(
        <div className=" bg-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
            <img
            src={imageUrl}
            alt={product.tensanpham}
            className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.tensanpham}</h2>
            <p className=" text-gray-600 font-medium">{Number(product.giagoc).toLocaleString("vi-VN")} VNĐ</p>
        </div>
    )
}

export default ProductCard;