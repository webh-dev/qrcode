const button = document.getElementById("button")
const qrCode = document.getElementById("qrcode")
const qrText = document.getElementById("qrcodetext")

button.addEventListener("click", () => {
    console.log(qrText.value)
    qrCode.classList.add("active")
    new QRCode(qrCode,{
        text: qrText,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
})

qrText.addEventListener("keypress", (e) => {
    if(!e.target.value) {
        qrCode.classList.remove("active")
        setTimeout(() => {
            qrCode.innerHTML = ""
        },150)
    } else {
        return
    }
})