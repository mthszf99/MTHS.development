const imagem = document.getElementById("imagens");
const imagens = document.querySelectorAll("#imagens imagens");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > imagens.length - 1){
        idx = 0;
    }

    imagem.style.transform = `translateX(${-idx * 200}px)`;
}

setInterval(carrossel, 1800);