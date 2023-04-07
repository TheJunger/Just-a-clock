const ceros = n => {
    if (n.toString().length < 2){return "0".concat(n);}
    else return n;
}

const actualizarHora = () => {
    const time = new Date();
    let hora = ceros(time.getHours());
    let minutos = ceros(time.getMinutes());
    let segundos = ceros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}
actualizarHora();

setInterval(actualizarHora,1000);