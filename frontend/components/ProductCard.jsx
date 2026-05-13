function ProductCard({product})
{
    
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    return(
        <div className=" bg-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
            <img
            src={`${BASEURL}${product.hinhanhdaidien}`}
            alt={product.tensanpham}
            className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.tensanpham}</h2>
            <p className=" text-gray-600 font-medium">{Number(product.giagoc).toLocaleString("vi-VN")} VNĐ</p>
        </div>
    )
}

export default ProductCard; 