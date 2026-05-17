import traceback
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Sanpham,Hang,Loaisanpham,Taikhoan
from .serializers import SanphamSerializer,LoaisanphamSerializer

@api_view(['GET'])
def get_products(request):
    sanphams = Sanpham.objects.all()
    serializer = SanphamSerializer(sanphams,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    loaisanphams = Loaisanpham.objects.all()
    serializer = LoaisanphamSerializer(loaisanphams,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_menu_category(request):
    menu_data=[]
    danh_sach_loai= Loaisanpham.objects.all()
    for loai in danh_sach_loai: 
        danh_sach_ma_hang = Sanpham.objects.filter(maloai=loai).values_list('mahang',flat=True).distinct()
        danh_sach_hang = Hang.objects.filter(mahang__in=danh_sach_ma_hang).values('mahang','tenhang')
        menu_data.append({
            "maloai":loai.maloai,
            "tenloai":loai.tenloai,
            "hang_san_xuat":list(danh_sach_hang)
        })
    return Response(menu_data)

@api_view(['POST'])
def register_user(request):
    data = request.data
    print(">>> DỮ LIỆU TỪ REACT GỬI LÊN:", data)
    
    # 1. Lấy dữ liệu an toàn bằng .get() và khớp 100% với tên biến trong React
    ten_dang_nhap = data.get('tenDangNhap') # Khớp với name="tenDangNhap" của React
    mat_khau = data.get('matKhau')         # Khớp với name="matKhau" của React
    email = data.get('email')              # Khớp với name="email" của React
    ho_ten = data.get('hoTen')             # Khớp với name="hoTen" của React

    # 2. Kiểm tra validation (tránh trường hơp React gửi dữ liệu rỗng)
    if not ten_dang_nhap:
        return Response({'error': 'Thiếu tên đăng nhập!'}, status=400)
    if not mat_khau:
        return Response({'error': 'Thiếu mật khẩu!'}, status=400)

    # 3. Kiểm tra trùng lặp tài khoản trong Database
    if Taikhoan.objects.filter(tendangnhap=ten_dang_nhap).exists():
        return Response({'error': 'Tên đăng nhập này đã được sử dụng!'}, status=400)
    
    try:
        # 4. Tiến hành tạo tài khoản mới trong Database
        new_user = Taikhoan.objects.create(
            tendangnhap=ten_dang_nhap,  # Cột trong DB (tendangnhap) = dữ liệu từ React
            matkhau=mat_khau,          # Cột trong DB (matkhau) = dữ liệu từ React
            email=email,
            maquyen_id=4               # ID mặc định cho Khách hàng
        )
        return Response({'message': 'Đăng ký tài khoản thành công!'})
        
    except Exception as e:
        print("====== THỦ PHẠM GÂY LỖI 500 LÀ ĐÂY: ======")
        traceback.print_exc()
        return Response({'error': 'Lỗi hệ thống: ' + str(e)}, status=500)    
@api_view(['POST'])
def login_user(request):
    data = request.data
    try:
        user = Taikhoan.objects.get(tendangnhap=data['username'], matkhau=data['password'])
        user_info = {
            'id': user.mataikhoan,
            'username': user.tendangnhap,
            'email': user.email,
            'role': user.maquyen.tenquyen
        }
        return Response({'message': 'Đăng nhập thành công!', 'user': user_info})
        
    except Taikhoan.DoesNotExist:
        return Response({'error': 'Sai tên đăng nhập hoặc mật khẩu!'}, status=400)