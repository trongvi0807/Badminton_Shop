import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RegisterPage() {
  const navigate = useNavigate();
  
  // State chứa dữ liệu form (Các tên biến này tôi đặt khớp với ý tưởng Database của bạn)
  const [formData, setFormData] = useState({
    hoTen: "",
    email: "",
    tenDangNhap: "",
    matKhau: "",
    xacNhanMatKhau: ""
  });

  // State để hiển thị thông báo lỗi (nếu có)
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Nếu người dùng đang gõ lại, xóa thông báo lỗi cũ đi
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // 1. Kiểm tra logic cơ bản: Mật khẩu có khớp không?
    if (formData.matKhau !== formData.xacNhanMatKhau) {
      setError("Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại!");
      return; // Dừng lại, không gửi dữ liệu
    }

    if (formData.matKhau.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }

    // 2. Nếu mọi thứ OK, chuẩn bị gửi lên Django
    console.log("Dữ liệu chuẩn bị gửi lên Django:", formData);
    
    // Giả lập Đăng ký thành công
    alert("Giả lập Đăng ký thành công! Hệ thống sẽ chuyển bạn đến trang Đăng nhập.");
    navigate("/login"); // Chuyển hướng người dùng về trang đăng nhập
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
        {/* Khung Form Đăng ký (Rộng hơn trang đăng nhập một chút) */}
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100">
          
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Tạo Tài Khoản</h2>
            <p className="mt-2 text-sm text-gray-500">
              Trở thành thành viên để nhận nhiều ưu đãi hấp dẫn
            </p>
          </div>

          {/* Khung hiển thị lỗi (chỉ hiện ra khi có lỗi) */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <p className="text-sm text-red-700 font-semibold">{error}</p>
            </div>
          )}

          <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
            
            {/* Hàng 1: Họ tên & Email (Chia 2 cột trên màn hình lớn) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Họ và tên</label>
                <input
                  name="hoTen"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="Nhập họ và tên"
                  value={formData.hoTen}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Hàng 2: Tên đăng nhập */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tên đăng nhập</label>
              <input
                name="tenDangNhap"
                type="text"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                placeholder="Viết liền không dấu"
                value={formData.tenDangNhap}
                onChange={handleChange}
              />
            </div>

            {/* Hàng 3: Mật khẩu & Xác nhận (Chia 2 cột) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mật khẩu</label>
                <input
                  name="matKhau"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="Ít nhất 6 ký tự"
                  value={formData.matKhau}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Xác nhận mật khẩu</label>
                <input
                  name="xacNhanMatKhau"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="Gõ lại mật khẩu"
                  value={formData.xacNhanMatKhau}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Nút Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 shadow-md hover:shadow-lg"
              >
                ĐĂNG KÝ TÀI KHOẢN
              </button>
            </div>
          </form>

          {/* Dòng điều hướng về Đăng nhập */}
          <div className="text-center mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-600">Bạn đã có tài khoản? </span>
            <Link to="/login" className="font-bold text-green-600 hover:text-green-500 transition">
              Đăng nhập tại đây
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RegisterPage;