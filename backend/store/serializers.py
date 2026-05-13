from rest_framework import serializers
from .models import Sanpham,Loaisanpham

class LoaisanphamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loaisanpham
        fields = '__all__'
class SanphamSerializer(serializers.ModelSerializer):
    maloai = LoaisanphamSerializer(read_only = True)

    class Meta:
        model = Sanpham
        fields = '__all__'

 