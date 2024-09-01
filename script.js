let imgbox = document.getElementById("imgbox")
let qrimage = document.getElementById("qrimage")
let qrtext = document.getElementById("qrtext")


function generate(){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x3150&data=" + qrtext.value;
}