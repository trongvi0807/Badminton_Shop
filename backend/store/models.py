# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User


class Chitietdonhang(models.Model):
    machitiet = models.AutoField(primary_key=True)
    madonhang = models.ForeignKey('Donhang', models.DO_NOTHING, db_column='madonhang', blank=True, null=True)
    machitietsanpham = models.ForeignKey('Chitietsanpham', models.DO_NOTHING, db_column='machitietsanpham', blank=True, null=True)
    soluong = models.IntegerField(blank=True, null=True)
    dongia = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    thanhtien = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'chitietdonhang'

    def __str__(self):
        return f"Chi tiết của đơn hàng#{self.madonhang}"
    

class Chitietsanpham(models.Model):
    machitiet = models.AutoField(primary_key=True)
    masanpham = models.ForeignKey('Sanpham', models.DO_NOTHING, db_column='masanpham', blank=True, null=True)
    mamau = models.ForeignKey('Mausac', models.DO_NOTHING, db_column='mamau', blank=True, null=True)
    masize = models.ForeignKey('Size', models.DO_NOTHING, db_column='masize', blank=True, null=True)
    giaban = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    soluongton = models.IntegerField(blank=True, null=True)
    sku = models.CharField(unique=True, max_length=50)
    hinhanh = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'chitietsanpham'
    def __str__(self):
        return f"Đơn hàng#{self.masanpham} - SKU:{self.sku}"

class Donhang(models.Model):
    madonhang = models.AutoField(primary_key=True)
    ngaydat = models.DateTimeField(blank=True, null=True)
    trangthai = models.CharField(max_length=50, blank=True, null=True)
    tongtien = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    tongtiensaugiam = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    makhachhang = models.ForeignKey('Khachhang', models.DO_NOTHING, db_column='makhachhang', blank=True, null=True)
    tiengiam = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    diachigiaohang = models.CharField(max_length=255, blank=True, null=True)
    sodienthoainhanhang = models.CharField(max_length=15, blank=True, null=True)
    ghichu = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'donhang'
    
    def __str__(self):
        return f"Đơn hàng#{self.madonhang}"

class Giohang(models.Model):
    magiohang = models.AutoField(primary_key=True)
    makhachhang = models.ForeignKey('Khachhang', models.DO_NOTHING, db_column='makhachhang', blank=True, null=True)
    machitietsanpham = models.ForeignKey(Chitietsanpham, models.DO_NOTHING, db_column='machitietsanpham', blank=True, null=True)
    soluong = models.IntegerField(blank=True, null=True)
    ngaythem = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'giohang'

    def __str__(self):
        return f"Giỏ hàng của {self.makhachhang}"

class Hang(models.Model):
    mahang = models.AutoField(primary_key=True)
    tenhang = models.CharField(max_length=100)
    quocgia = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hang'

    def __str__(self):
        return self.tenhang
    

class Khachhang(models.Model):
    makhachhang = models.AutoField(primary_key=True)
    hoten = models.CharField(max_length=100)
    email = models.CharField(max_length=100, blank=True, null=True)
    sodienthoai = models.CharField(max_length=15, blank=True, null=True)
    diachi = models.CharField(max_length=255, blank=True, null=True)
    mataikhoan = models.OneToOneField('Taikhoan', models.DO_NOTHING, db_column='mataikhoan', blank=True, null=True)
    ngaytao = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'khachhang'
    def __str__(self):
        return self.hoten

class Khuyenmai(models.Model):
    makhuyenmai = models.AutoField(primary_key=True)
    tenchuongtrinh = models.CharField(max_length=100)
    mota = models.CharField(max_length=255, blank=True, null=True)
    ngaybatdau = models.DateField(blank=True, null=True)
    ngayketthuc = models.DateField(blank=True, null=True)
    phantramgiam = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    giamtoida = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    soluongsudung = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'khuyenmai'

    def __str__(self):
        return self.tenchuongtrinh

class Loaisanpham(models.Model):
    maloai = models.AutoField(primary_key=True)
    tenloai = models.CharField(max_length=100)
    mota = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'loaisanpham'

    def __str__(self):
        return self.tenloai

class Mausac(models.Model):
    mamau = models.AutoField(primary_key=True)
    tenmau = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'mausac'

    def __str__(self):
        return self.tenmau
    
class Nhacungcap(models.Model):
    manhacungcap = models.AutoField(primary_key=True)
    tennhacungcap = models.CharField(max_length=100)
    diachi = models.CharField(max_length=255, blank=True, null=True)
    sodienthoai = models.CharField(max_length=15, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nhacungcap'

    def __str__(self):
        return self.tennhacungcap 
    
class Phanhoi(models.Model):
    maphanhoi = models.AutoField(primary_key=True)
    noidung = models.CharField(max_length=255, blank=True, null=True)
    ngayphanhoi = models.DateTimeField(blank=True, null=True)
    danhgia = models.IntegerField(blank=True, null=True)
    makhachhang = models.ForeignKey(Khachhang, models.DO_NOTHING, db_column='makhachhang', blank=True, null=True)
    masanpham = models.ForeignKey('Sanpham', models.DO_NOTHING, db_column='masanpham', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'phanhoi'

    def __str__(self):
        return f"Phản hồi từ{self.makhachhang} cho {self.masanpham}"

class Phanquyen(models.Model):
    maquyen = models.AutoField(primary_key=True)
    tenquyen = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'phanquyen'

    def __str__(self):
        return self.tenquyen



class Sanpham(models.Model):
    masanpham = models.AutoField(primary_key=True)
    tensanpham = models.CharField(max_length=100)
    mota = models.TextField(blank=True, null=True)
    giagoc = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    hinhanhdaidien = models.CharField(max_length=255, blank=True, null=True)
    maloai = models.ForeignKey(Loaisanpham, models.DO_NOTHING, db_column='maloai', blank=True, null=True)
    manhacungcap = models.ForeignKey(Nhacungcap, models.DO_NOTHING, db_column='manhacungcap', blank=True, null=True)
    mahang = models.ForeignKey(Hang, models.DO_NOTHING, db_column='mahang', blank=True, null=True)
    makhuyenmai = models.ForeignKey(Khuyenmai, models.DO_NOTHING, db_column='makhuyenmai', blank=True, null=True)
    cosize = models.BooleanField(blank=True, null=True)
    comau = models.BooleanField(blank=True, null=True)
    ngaytao = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sanpham'

    def __str__(self):
        return self.tensanpham
    

class Size(models.Model):
    masize = models.AutoField(primary_key=True)
    tensize = models.CharField(max_length=20)
    loaisize = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'size'

    def __str__(self):
        return f"{self.loaisize} - {self.tensize}"
    

class Taikhoan(models.Model):
    mataikhoan = models.AutoField(primary_key=True)
    tendangnhap = models.CharField(unique=True, max_length=50)
    matkhau = models.CharField(max_length=255)
    email = models.CharField(max_length=100, blank=True, null=True)
    maquyen = models.ForeignKey(Phanquyen, models.DO_NOTHING, db_column='maquyen', blank=True, null=True)
    ngaytao = models.DateTimeField(auto_now_add=True,blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'taikhoan'


    def __str__(self):
        return self.tendangnhap

class Thongsovot(models.Model):
    mathongso = models.AutoField(primary_key=True)
    machitiet = models.ForeignKey(Chitietsanpham, models.DO_NOTHING, db_column='machitiet', blank=True, null=True)
    docanbang = models.CharField(max_length=50, blank=True, null=True)
    trongluong = models.CharField(max_length=10, blank=True, null=True)
    docung = models.CharField(max_length=50, blank=True, null=True)
    chieudai = models.CharField(max_length=20, blank=True, null=True)
    succang = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'thongsovot'

    def __str__(self):
        return f"Thông số của {self.machitiet}"