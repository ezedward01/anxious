function DanhSachNguoiDung() {
    this.layDSND = function () {
        return axios({
            url: 'https://60dfc934abbdd9001722d48b.mockapi.io/ThongTin',
            method: 'GET' 
        });

    }
    this.themNguoiDung = function (nguoiDung) {
        //post dung de them moi du lieu
        //data la du lieu can them vao co so du lieu
        return axios({
            url: 'https://60dfc934abbdd9001722d48b.mockapi.io/ThongTin',
            method: 'POST',
            data: nguoiDung, 
        })
    }
    this.xoaND = function(id){
        return axios({
            url : `https://60dfc934abbdd9001722d48b.mockapi.io/ThongTin/${id}`,
            method: 'DELETE',
        })
    }
    this.xemND = function(id){
        return axios({
            url : `https://60dfc934abbdd9001722d48b.mockapi.io/ThongTin/${id}`,
            method: 'GET',
        })
    }
    this.capNhatND = function(id,nguoiDung){
        return axios({
            url : `https://60dfc934abbdd9001722d48b.mockapi.io/ThongTin/${id}`,
            method: 'PUT',
            data: nguoiDung
        })
    }

    this.timKiemND = function(dsnd,chuoiTK){
        return dsnd.filter(function(nd){
            return nd.hoTen.toLowerCase().indexOf(chuoiTK.toLowerCase() ) !== -1;
        })
}
}
