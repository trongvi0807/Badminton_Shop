function Footer() {
    return (
      <footer className="bg-gray-800 text-white pt-12 pb-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Về Chúng Tôi</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cửa hàng chuyên cung cấp các sản phẩm cầu lông chính hãng, uy tín và chất lượng nhất dành cho những người đam mê thể thao.
              </p>
            </div>
  
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Chính Sách</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="hover:text-green-400 cursor-pointer transition">Chính sách bảo hành</li>
                <li className="hover:text-green-400 cursor-pointer transition">Chính sách đổi trả</li>
                <li className="hover:text-green-400 cursor-pointer transition">Chính sách vận chuyển</li>
                <li className="hover:text-green-400 cursor-pointer transition">Bảo mật thông tin</li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Liên Hệ</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="flex items-center"><span className="mr-2">📍</span> 36 Trịnh Đình Thảo, Tân Phú, TP.HCM</li>
                <li className="flex items-center"><span className="mr-2">📞</span> Hotline: 0344855913</li>
                <li className="flex items-center"><span className="mr-2">✉️</span> Email: vidotrong@gmail.com</li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Đăng Ký Nhận Tin</h4>
              <p className="text-gray-400 text-sm mb-4">Nhận những ưu đãi và khuyến mãi mới nhất từ chúng tôi.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Nhập email..." 
                  className="w-full px-4 py-2 text-gray-900 rounded-l-md outline-none focus:ring-2 focus:ring-green-500" 
                />
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-md transition font-semibold">
                  Gửi
                </button>
              </div>
            </div>
  
          </div>
  
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>© 2026 Bản quyền thuộc về Shop Cầu Lông..</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
