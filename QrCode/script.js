document.addEventListener("DOMContentLoaded", () => {
  let qrtext = document.getElementById("qr-text");
  let generateBtn = document.getElementById("generate-btn");
  let downloadBtn = document.getElementById("download-btn");
  let qrcodeDiv = document.getElementById("qrcode");
  let qrcode = null;

  generateBtn.addEventListener("click", () => {
    const text = qrtext.value.trim(); 

    if (!text) {
      alert("Please Enter Some Text Or URL");
      return;
    }

    qrcodeDiv.innerHTML = "";

    qrcode = new QRCode(qrcodeDiv, {
      text: text,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = "block"; 
  });

  downloadBtn.addEventListener("click", () => {
    let canvas = qrcodeDiv.querySelector("canvas"); 

    if (!canvas) return;

    let link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  qrtext.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      generateBtn.click();
    }
  });
});