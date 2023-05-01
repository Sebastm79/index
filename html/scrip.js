setTimeout(cambiaMensaje,3000)

function cambiaMensaje(){
    document.getElementById("prime-loading-message").innerText = "HAPPY BIRTHDAY TITA<3!";
    document.getElementById("loading-message").innerText = "Felices 16 mi peque";
}

setTimeout(function () {
    alert("Recibiras un mensaje!")
}, 2400)