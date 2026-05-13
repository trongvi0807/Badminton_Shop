function Navbar() {
    const menuItems = ["TRANG CHỦ", "SẢN PHẨM", "KHUYẾN MÃI", "GIỎ HÀNG", "ĐƠN HÀNG", "LIÊN HỆ"];
  
    return (
      <nav className="bg-[#38b259] text-white"> 
        <ul className="container mx-auto flex justify-center space-x-10 py-3 font-semibold text-sm uppercase tracking-wide">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-yellow-200 cursor-pointer transition flex items-center">
              {item}
              {}
              {item === "SẢN PHẨM" && (
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;    