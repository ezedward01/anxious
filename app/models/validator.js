function Validator() {

    this.kiemTraRong = function (value, spanId, mess) {
        if (!value) {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        } else {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        }
    }
    this.kiemTraKiTu = (value, spanId, mess) => {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if (pattern.test(value)) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        } else {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        }
    }
    this.kiemTraDoDai = function (value, spanId, mess) {
        if (value.length >= 6 && value.length <= 8) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        } else {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        }
    }
    this.kiemTraPassword = (value, spanId, mess) => {
        

        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if ( pattern.test(value)) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        } else {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        }
    }

    this.kiemTraEmail = (value, spanId, mess) => {
        var pattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
        if (pattern.test(value)) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        } else {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        }
    }
    this.kiemTraLoaiND = function (value, spanId, mess) {
        if (value ==="Chọn loại người dùng") {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        } else {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        }
    }
    this.kiemTraLoaiNgonNgu = function (value, spanId, mess) {
        if (value ==="Chọn ngôn ngữ") {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        } else {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        }
    }
    this.ktMoTa = (value, spanId, mess) => {
        if( value.length>60){
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML = mess;
            return false;
        }else{
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML = '';
            return true;
        }
    }


}