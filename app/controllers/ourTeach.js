var danhSachND = new DanhSachNguoiDung();
function getElm(id) {
    return document.getElementById(id);
}

var layDanhSachND = function () {
    danhSachND.layDSND().then(function (result) {       
        console.log(result.data);      
        var newArr = []    
        for(var i=0;i<result.data.length;i++){      
            if(result.data[i].loaiND==="GV"){
                newArr.push(result.data[i]);
            }           
        }  
        renderData(newArr);
    }).catch(function (error) {
        console.log(error)
    })
}
layDanhSachND();

function renderData(arr) {
    var content = '';
    arr.map(function (arrItem, index) {
        content += `
            <div class="col-lg-3 col-md-6 product-content__item">
                <div class="item-img">
                    <img src="${arrItem.hinhAnh}">
                </div>
                <div class="item-text">
                    <p style="color:#b61984">${arrItem.ngonNgu}</p>
                    <h3>${arrItem.hoTen}</h3>
                    <p> ${arrItem.moTa}</p>
                </div>
             </div>
            `
    })
    getElm('danhSachND').innerHTML = content;
}

