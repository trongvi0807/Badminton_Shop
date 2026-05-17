import { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoginPage(){
    const navigate = useNavigate();
    const[formData, setFormData]=useState({
        usename:"",
        password:""
    });

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL ;
        try{
          const response = await fetch(`${BASEURL}/api/login/`,{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body :  JSON.stringify(formData),
          });
          const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await response.json();
              if (response.ok) {
                localStorage.setItem("userInfo", JSON.stringify(data.user));
                alert("Đăng nhập thành công!");
                navigate("/");
              } else {
                setError(data.error || "Login failed");
              }
} else {
  // This handles the 500 error HTML response
  setError("Server error: The backend returned an invalid response.");
}
        }
        catch{}
      };

return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        {/* Khung Form Đăng nhập */}
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100">
          
          {/* Phần Tiêu đề */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Đăng Nhập</h2>
            <p className="mt-2 text-sm text-gray-500">
              Chào mừng bạn quay lại với hệ thống mua sắm
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Ô Tên đăng nhập */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tên đăng nhập</label>
                <input
                  name="username"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="Nhập tên đăng nhập"
                  value={formData.tendangnhap}
                  onChange={handleChange}
                />
              </div>
              
              {/* Ô Mật khẩu */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mật khẩu</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-200"
                  placeholder="••••••••"
                  value={formData.matkhau}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Ghi nhớ & Quên mật khẩu */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Ghi nhớ tài khoản
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-semibold text-green-600 hover:text-green-500 transition">
                  Quên mật khẩu?
                </Link>
              </div>
            </div>

            {/* Nút Đăng nhập */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 shadow-md hover:shadow-lg"
              >
                ĐĂNG NHẬP
              </button>
            </div>
          </form>

          {/* Dòng điều hướng sang Đăng ký */}
          <div className="text-center mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-600">Bạn chưa có tài khoản? </span>
            <Link to="/register" className="font-bold text-green-600 hover:text-green-500 transition">
              Đăng ký ngay
            </Link>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default LoginPage;