import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RegisterPage() {
  const navigate = useNavigate();
  
  // 1. SỬA Ở ĐÂY: Đổi tên biến cho khớp 100% với thẻ name="" ở dưới
  const [formData, setFormData] = useState({
    email: "",
    tenDangNhap: "",   // Sửa tendangnhap -> tenDangNhap
    matKhau: "",       // Sửa matkhau -> matKhau
    xacNhanMatKhau: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (formData.matKhau !== formData.xacNhanMatKhau) {
      setError("Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại!");
      return; 
    }

    if (formData.matKhau.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";
    
    try {
      const response = await fetch(`${BASEURL}/api/register/`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(response.ok){
        alert("Đăng ký thành công! Hệ thống sẽ chuyển bạn đến trang Đăng nhập.");
        navigate("/login");
      }
      else{
        setError(data.error);
      }
    } catch(error){
      setError("Lỗi kết nối đến máy chủ!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100">
          
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Tạo Tài Khoản</h2>
            <p className="mt-2 text-sm text-gray-500">
              Trở thành thành viên để nhận nhiều ưu đãi hấp dẫn
            </p>
          </div>
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <p className="text-sm text-red-700 font-semibold">{error}</p>
            </div>
          )}

          <form className="mt-4 space-y-5" onSubmit={handleSubmit}>  
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
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tên đăng nhập</label>
              <input
                name="tenDangNhap"
                type="text"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                placeholder="Viết liền không dấu"
                value={formData.tenDangNhap} // 3. Đã sửa value
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mật khẩu</label>
                <input
                  name="matKhau"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="Ít nhất 6 ký tự"
                  value={formData.matKhau} // 4. Đã sửa value
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
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 shadow-md hover:shadow-lg"
              >
                ĐĂNG KÝ TÀI KHOẢN
              </button>
            </div>
          </form>
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