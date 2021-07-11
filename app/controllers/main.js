var danhSachND = new DanhSachNguoiDung();
var validator = new Validator();
function getElm(id) {
    return document.getElementById(id);
}

var layDanhSachND = function () {
    danhSachND.layDSND().then(function (result) {
        // console.log(result.data);
        //hien thi data len trang admin
        showData(result.data);
        setLocal(result.data);
    }).catch(function (error) {
        console.log(error)
    })
}

layDanhSachND();



//them nguoi dung
function themND() {
    //lay thong tin tu form
    var taiKhoan = getElm('TaiKhoan').value;
    var hoTen = getElm('HoTen').value;
    var matKhau = getElm('MatKhau').value;
    var email = getElm('Email').value;
    var loaiND = getElm('loaiNguoiDung').value;
    var ngonNgu = getElm('loaiNgonNgu').value;
    var moTa = getElm('MoTa').value;
    var hinhAnh = getElm('HinhAnh').value;

    var isValidate = true;
    isValidate &= validator.kiemTraRong(taiKhoan, 'tbTaiKhoan', '(*)tài khoản không được để trống');

    isValidate &= validator.kiemTraKiTu(hoTen, 'tbHoTen', '(*)  họ tên không được để trống, không chứa số và ký tự đặc biệt') && validator.kiemTraRong(hoTen, 'tbHoTen', '(*)họ tên không được để trống');

    isValidate &= validator.kiemTraPassword(matKhau, 'tbMatKhau', '(*)Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt');

    isValidate &= validator.kiemTraRong(email, 'tbEmail', '(*)email ko duoc rong') && validator.kiemTraEmail(email, 'tbEmail', '(*)Nhập sai email');

    isValidate &= validator.kiemTraRong(hinhAnh, 'tbHinhAnh', '(*)hình ảnh không được để trống');
    isValidate &= validator.kiemTraLoaiND(loaiND, 'tbLoaiND', '(*) loại người dùng không được để trống');
    isValidate &= validator.kiemTraLoaiNgonNgu(ngonNgu, 'tbLoaiNN', '(*)ngôn ngữ không được để trống');
    isValidate &= validator.kiemTraRong(moTa, 'tbMoTa', '(*)mô tả không được để trống') && validator.ktMoTa(moTa, 'tbMoTa', '(*)không được nhập lớn hơn 60 kí tự');

    if (!isValidate) {
        return;
    }
    // khoi tao doi tuong nguoiDung tu lop doi tuong NguoiDung

    var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);

    //goi api de luu data xuong co so dl

    danhSachND.themNguoiDung(nguoiDung).then(function (result) {
        layDanhSachND();
    }).catch(function (error) {
        console.log(error)
    })


}

getElm('btnThemNguoiDung').addEventListener('click', function () {
    getElm('form').reset();
    var modalFooter = document.querySelector('.modal-footer');
    modalFooter.innerHTML = `<button class="btn btn-success" onclick="themND()" id="themND">Thêm Người Dùng</button>`;

})
//xoa nguoi dung
function xoaNguoiDung(id) {
    danhSachND.xoaND(id).then(function (result) {
        alert('bạn đã xóa thành công!');
        layDanhSachND();
    }).catch(function (error) {
        console.log(error)
    })
}
//xem nguoi nguoiDung
function xemNguoiDung(id) {
    danhSachND.xemND(id).then(function (result) {
        console.log(result.data);
        // mở modal dung jquery
        // $("#myModal").modal()
        // mở modal dùng JS, click vao button thêm mới
        getElm('btnThemNguoiDung').click();
        getElm('TaiKhoan').value = result.data.taiKhoan;
        getElm('HoTen').value = result.data.hoTen;
        getElm('MatKhau').value = result.data.matKhau;
        getElm('Email').value = result.data.email;
        getElm('HinhAnh').value = result.data.hinhAnh;
        getElm('loaiNguoiDung').value = result.data.loaiND;
        getElm('MoTa').value = result.data.moTa;
        getElm('loaiNgonNgu').value = result.data.ngonNgu;
        getElm('themND').style.display = 'none';
        var modalFooter = document.querySelector('.modal-footer');
        modalFooter.innerHTML = `<button class="btn btn-success" onclick="capNhatND('${result.data.id}')" >Cập Nhật</button>`

    }).catch(function (error) {
        console.log(error)
    })
}
// cap nhat nguoi dung
function capNhatND(id) {
    var taiKhoan = getElm('TaiKhoan').value;
    var hoTen = getElm('HoTen').value;
    var matKhau = getElm('MatKhau').value;
    var email = getElm('Email').value;
    var loaiND = getElm('loaiNguoiDung').value;
    var ngonNgu = getElm('loaiNgonNgu').value;
    var moTa = getElm('MoTa').value;
    var hinhAnh = getElm('HinhAnh').value;
    var isValidate = true;
    isValidate &= validator.kiemTraRong(taiKhoan, 'tbTaiKhoan', '(*)tài khoản không được để trống');

    isValidate &= validator.kiemTraKiTu(hoTen, 'tbHoTen', '(*)  họ tên không được để trống, không chứa số và ký tự đặc biệt') && validator.kiemTraRong(hoTen, 'tbHoTen', '(*)họ tên không được để trống');

    isValidate &= validator.kiemTraPassword(matKhau, 'tbMatKhau', '(*)Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt');

    isValidate &= validator.kiemTraRong(email, 'tbEmail', '(*)email ko duoc rong') && validator.kiemTraEmail(email, 'tbEmail', '(*)Nhập sai email');

    isValidate &= validator.kiemTraRong(hinhAnh, 'tbHinhAnh', '(*)hình ảnh không được để trống');
    isValidate &= validator.kiemTraLoaiND(loaiND, 'tbLoaiND', '(*) loại người dùng không được để trống');
    isValidate &= validator.kiemTraLoaiNgonNgu(ngonNgu, 'tbLoaiNN', '(*)ngôn ngữ không được để trống');
    isValidate &= validator.kiemTraRong(moTa, 'tbMoTa', '(*)mô tả không được để trống') && validator.ktMoTa(moTa, 'tbMoTa', '(*)không được nhập lớn hơn 60 kí tự');

    if (!isValidate) {
        return;
    }

    var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);
    danhSachND.capNhatND(id, nguoiDung).then(function (result) {
        layDanhSachND();
        //an modal sau khi cap nhat thanh cong
        document.querySelector('#myModal .close').click();
        // id la myModal class: close.
    }).catch(function (error) {
        console.log(error)
    })
}
//show data len trang admin
function showData(arr) {
    var content = '';
    arr.map(function (arrItem, index) {
        content += `
                <tr>
                <td>${arrItem.id}</td>
                <td>${arrItem.taiKhoan}</td>
                <td>${arrItem.matKhau}</td>
                <td>${arrItem.hoTen}</td>
                <td>${arrItem.email}</td>
                <td>${arrItem.ngonNgu}</td>
                <td>${arrItem.loaiND}</td>
                <td>
                <button class="btn btn-success" onclick="xemNguoiDung(${arrItem.id})">Sửa</button>
                <button  class="btn btn-danger" onclick="xoaNguoiDung(${arrItem.id})">Xóa</button>
                </td>          
                </tr>
            `
    })
    getElm('tblDanhSachNguoiDung').innerHTML = content;

}

getElm('ipTimKiem').addEventListener('keyup', function () {
    var dsnd = getLocal();
    var chuoiTK = getElm('ipTimKiem').value;
    var mangTimKiem = danhSachND.timKiemND(dsnd, chuoiTK);
    showData(mangTimKiem);
});
function setLocal(arr) {
    localStorage.setItem('DSND', JSON.stringify(arr))
}
function getLocal() {
    if (localStorage.getItem('DSND')) {
        return JSON.parse(localStorage.getItem('DSND'));
    }
}

