import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
function Navbar() {
    const [categories,setCategories]=useState([])
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL

    useEffect(()=>{
      fetch(`${BASEURL}/api/menu-categories/`)
      .then((res)=>res.json())
    .then((data) => setCategories(data))
    .catch((err)=> console.error("This error for post menu",err));
    },[BASEURL]);
    return (
      // THÊM z-50 để thanh menu này luôn nổi lên trên cùng
      <nav className="bg-[#38b259] text-white relative z-50">
        <ul className="container mx-auto flex justify-center space-x-10 font-semibold text-sm uppercase tracking-wide">
          
          <li className="hover:text-yellow-200 cursor-pointer transition flex items-center py-4">
           <Link to="/">TRANG CHỦ</Link>
          </li>
  
          {/* NÚT SẢN PHẨM: ĐƯỢC CHỈ ĐỊNH LÀ "group" ĐỂ TẠO HIỆU ỨNG HOVER */}
          <li className="group relative cursor-pointer transition flex items-center py-4">
            <span className="group-hover:text-yellow-200 transition">SẢN PHẨM</span>
            <svg className="w-4 h-4 ml-1 group-hover:text-yellow-200 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  
            {/* CẤP 1: MENU DỌC CHỨA LOẠI SẢN PHẨM */}
            <ul className="absolute top-full left-0 bg-white text-gray-800 w-56 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              
              {/* Lặp qua danh sách Loại sản phẩm */}
              {categories.map((loai) => (
                <li key={loai.maloai} className="group/sub relative border-b border-gray-100 last:border-none">
                  <div className="px-4 py-3 hover:bg-green-50 hover:text-green-600 flex justify-between items-center transition">
                    {loai.tenloai}
                    
                    {/* Nếu có hãng con thì hiện mũi tên */}
                    {loai.hang_san_xuat.length > 0 && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    )}
                  </div>
  
                  {/* CẤP 2: MENU BAY NGANG CHỨA CÁC HÃNG */}
                  {loai.hang_san_xuat.length > 0 && (
                    <ul className="absolute top-0 left-full bg-white text-gray-800 w-48 shadow-xl rounded-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ml-1">
                      
                      {loai.hang_san_xuat.map((hang) => (
                        <li key={hang.mahang} className="px-4 py-3 hover:bg-green-50 hover:text-green-600 border-b border-gray-100 last:border-none transition">
                          {hang.tenhang}
                        </li>
                      ))}
                      
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="hover:text-yellow-200 cursor-pointer transition flex items-center py-4">KHUYẾN MÃI</li>
          <li className="hover:text-yellow-200 cursor-pointer transition flex items-center py-4">GIỎ HÀNG</li>
          <li className="hover:text-yellow-200 cursor-pointer transition flex items-center py-4">ĐƠN HÀNG</li>
          <li className="hover:text-yellow-200 cursor-pointer transition flex items-center py-4">LIÊN HỆ</li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;    