const ney = document.querySelector('.ney');
const carrinho = document.querySelector('.carrinho');

const pulo = () => {
    ney.classList.add('pulo');

    setTimeout(() => {
        ney.classList.remove('pulo');
    }, 500)
}

const loop = setInterval(() => {
    
    const carrinhoPosition = carrinho.offsetLeft;
    const neyPosition = +window.getComputedStyle(ney).bottom.replace('px', '');

    if (carrinhoPosition <= 120 && carrinhoPosition < 0 && neyPosition < 30) {
        carrinho.style.animation = 'none';
        carrinho.style.left = `${carrinhoPosition}px`;

        ney.style.animation = 'none';
        ney.style.bottom = `${neyPosition}px`;

        ney.src = './imagens/machucado.png';
        ney.style.width = '160px';
        ney.style.marginleft = '70px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo);