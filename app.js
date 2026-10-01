let currentOrdercode =""
let isordervalid = false;
let totalRevenue = 0;
let totalOrders = 0;
T = true
while(T){
    console.log("=============================================")
    console.log("Hệ Thống thanh toán nhà sách tri thức")
    console.log("=============================================")
    console.log("1. Nhập và kiểm chuẩn mã đơn hàng ")
    console.log("2. Tính tiền đơn sách ")
    console.log("3. Thẩm định mã hóa đơn may mắn ")
    console.log("0. Thoát chương trình ")
    console.log("=============================================")
    
    let choice = prompt("Vui lòng nhập lựa chọn của bạn (0-3):")
    if (choice === null){
        console.log("Lua chon khong hop le, vui long nhap lai")
        continue;
    }
    choice = choice.trim();
    switch (choice) {
        case "1":
            currentOrdercode ="";
            isordervalid = false
            let inputcode = prompt("Nhap ma don hang");
            if(inputcode == null){
                console.log("chua nhap ma don hang");
                break;
            }
            inputcode = inputcode.trim()
            if(inputcode ===""){
                 console.log("chua nhap ma don hang");
                 break;
            }
            let formattedcode = inputcode.toUpperCase();
            if(formattedcode.length <6){
                console.log("Loi, do dai nho hon 6 ki tu");
                break;
            }
            if (formattedcode.startsWith("BOX-")){
                console.log("loi,sai tien to \"BOX-\"");
                break;
            }
            currentOrdercode = formattedcode;
            isordervalid = true; 
            console.log("Nhap ma don hang thanh cong:" + currentOrdercode);
            break;
        case "2":
            let bookconStr;
            let bookcon = 0;
            while(true){
                bookconStr = prompt("Nhap so luong cuon sach:");
                if (bookconStr == null)
                    break;
                bookconStr = bookconStr.trim();
                bookcon = Number(bookconStr);
                if(bookconStr !="" && !isNaN(bookcon)&& Number.isInteger(bookcon) && bookcon >0){
                    break;
                }
                console.log("loi: Gia sach khong hop le. Vui long nhap lai so nguyen > 0");
                if (iprcsStr === null)break;
                let baseCont = bookcon * pricePerBook;
                let discount =0;
                if(bookcon >= 4){
                    discount=Math.round(baseCont * 0.1);
                }
                let packagingfee = Math.round((baseCont - discount)*0.08);
                let totalRevenue = baseCont - discount + packagingfee
                totalRevenue = totalOrders;
                totalOrders += 1;
                console.log("Mã đơn hàng mua sách");
                console.log("Mã đơn hàng" + currentOrdercode);
                console.log("Số lượng" + bookcon);
                console.log("Don gia"+ pricePerBook.tolocaleString("vi-VN")+"VND");
                console.log("Chi phi co so"+ baseCont.tolocaleString("vi-VN")+"VND");
                console.log("phi boc sach va dong goi"+ packagingfee.tolocaleString("vi-VN")+"VND");
                console.log("Tong thanh toan"+ totalPayment.tolocaleString("vi-VN")+"VND");
                currentOrdercode ="";
                isordervalid = false;
                break;
            }
        case "0":
            console.log("=".repeat(50));
            console.log("bao cao tong ket ca ban hang");
            console.log("=".repeat(50));
            console.log("Tong ket ca da thanh toan: "+ totalOrders);
            console.log("Tong doanh thu           :"+ totalRevenue.toLocaleString("vi-VN")+ "VND");
            if(totalOrders === 0){
                let avg = Math.round(totalRevenue/ totalOrders);
                console.log("Doanh thu trung binh :" +avg.toLocaleString("vi-VN")+"VND");
            }
            console.log("=".repeat(50));
            console.log("Chuong trinh da thoat.");
            T = false;
            break;
        
            default:{
                prompt("lua chon khong hop le, vui long nhap lai")
                break;
            }
        }
}

