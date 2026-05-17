import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const storedUser = localStorage.getItem("userInfo");
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    if(storedUser){
      const parsedUser = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUser({
        name:parsedUser.tendangnhap,
        avatar: `${BASEURL}/media/products/HUIT.jpg`,
      })
    }
  },[]);

  // Hàm xử lý Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/"); // Trở về trang chủ
  };

  return (
    <header className="bg-white py-4 border-b border-gray-100 sticky top-0 z-[100] shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* 1. LOGO */}
        <div className="flex-shrink-0">
          <Link to="/">
          
            <img src={`${import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000"}/media/products/HUIT.jpg`} 
              alt="Logo" 
              className="h-12 object-contain rounded-md"
              onError={(e) => e.target.src = "https://placehold.co/150x50?text=LOGO"}/>
            </Link>
        </div>

        {/* 2. THANH TÌM KIẾM */}
        <div className="flex-grow max-w-xl mx-8">
          <div className="flex w-full">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="w-full border-2 border-green-500 rounded-l-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-300 transition"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 rounded-r-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
        </div>

        {/* 3. KHU VỰC USER & GIỎ HÀNG */}
        <div className="flex items-center space-x-6">
          
          {/* LOGIC HIỂN THỊ: Nếu đã đăng nhập -> Hiện Avatar. Nếu chưa -> Hiện Nút */}
          {isLoggedIn ? (
            // GIAO DIỆN KHI ĐÃ ĐĂNG NHẬP (Có Hover Dropdown)
            <div className="group relative cursor-pointer flex items-center space-x-2 py-2">
              <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-green-500 object-cover" />
              <span className="font-semibold text-gray-700">{user.name}</span>
              
              {/* Menu thả xuống (Dropdown) */}
              <ul className="absolute top-full right-0 bg-white text-gray-800 w-48 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden border border-gray-100">
                <li>
                  <Link to="/profile" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    Xem hồ sơ
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 transition flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // GIAO DIỆN KHI CHƯA ĐĂNG NHẬP
            <div className="flex space-x-2">
              <Link to="/login">
                <button className="border border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full transition font-semibold">
                  Đăng nhập
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition font-semibold">
                  Đăng ký
                </button>
              </Link>
            </div>
          )}
           {/* NÚT GIỎ HÀNG  */}
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-green-600 transition">
            <div className="relative">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            <span className="ml-2 font-semibold hidden md:block">Giỏ hàng</span>
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Header;