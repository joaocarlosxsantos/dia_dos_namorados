// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const close = document.querySelector('.close');

    document.querySelectorAll('.gallery-item img').forEach(image => {
        image.addEventListener('click', () => {
            lightboxImg.src = image.src;
            lightboxCaption.innerText = image.alt;
            lightbox.style.display = 'flex';
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && e.target !== lightboxCaption) {
            lightbox.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Data alvo em UTC para evitar problemas de fuso horário
    const targetDate = new Date(Date.UTC(2022, 10, 11, 0, 0, 0)); // Mês 10 porque janeiro é 0

    function updateCountup() {
        const currentDate = new Date(); // Data atual
        const difference = currentDate.getTime() - targetDate.getTime(); // Diferença em milissegundos

        if (difference < 0) {
            console.error('A data alvo é no futuro. Verifique a data.');
            return;
        }

        // Calculando o tempo passado
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Atualizando os elementos HTML
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Atualiza o contador a cada segundo
    setInterval(updateCountup, 1000);
    updateCountup(); // Chama a função imediatamente para evitar o atraso de 1 segundo na inicialização
});
