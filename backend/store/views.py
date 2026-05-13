from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Sanpham,Loaisanpham
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
