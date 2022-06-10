function signinacc() {

    var email = document.frmDoimatkhau.txtemail.value;
    var mk = document.frmDoimatkhau.psmk.value;
    var ok = true;

    if (email.length == 0) {
        document.getElementById("loiemail").innerHTML = "Hãy điền thông tin email";
        ok = false;
    } else {
        document.getElementById("loiemail").innerHTML = "";
    }

    if (mk.length == 0) {
        document.getElementById("loimk").innerHTML ="Hãy điền mật khẩu";
        ok = false;
    } else {
        document.getElementById("loimk").innerHTML ="";
} 

    if (ok) {
        alert("Đăng nhập thành công");
        return true;
    } else {
        return false;
    }
}
