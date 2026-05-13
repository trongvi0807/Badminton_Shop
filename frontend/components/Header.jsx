function Header() {
    return (
      <header className="container mx-auto flex items-center justify-between py-4 px-6 bg-white">
        
        <div className="flex items-center cursor-pointer">
          <img src="HUIT.jpg" alt="Logo" className="h-12 w-auto" /> 
        </div>
  
        <div className="flex-1 max-w-2xl mx-8 relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            className="w-full border-2 border-green-500 rounded-full py-2 px-6 outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="absolute right-0 top-0 h-full bg-green-500 px-6 rounded-r-full text-white hover:bg-green-600 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700">Đăng nhập</button>
          <button className="border-2 border-green-500 text-green-600 px-5 py-2 rounded-full font-medium hover:bg-green-50">Đăng ký</button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full font-medium flex items-center hover:bg-green-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            Giỏ hàng
          </button>
        </div>
  
      </header>
    );
  }
  
  export default Header;