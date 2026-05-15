from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Sanpham,Hang,Loaisanpham
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
