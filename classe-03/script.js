const genero = document.querySelector('#genero');
const musica = document.querySelector('#musica');
const botaoMais = document.querySelector('.button--mais');
const musicasTrap = [
    "Don't Judge Me (feat. Swae Lee & Future)",
    'Walk It Talk It (feat. Drake)',
    'Matuê 777-666',
    'Matuê É Sal',
    'Stop The Madness (feat. Gunna)',
    'GOOBA',
    'SICKO MODE',
    'Post Malone - Saint-Tropez',
    'Powerglide (feat. Juicy J)',
    'Flosstradamus feat. Casino - Mosh Pit'
];
const musicasRock = [
    'Smells Like Teen Spirit',
    'Smoke on the Water',
    'Enter Sandman',
    "Bon Jovi Livin' on a Prayer",
    'Born to Be Wild',
    'Seven Nation Army',
    'Rock and Roll All Nite',
    'Pink Floyd Another Brick in the Wall',
    "Guns N' Roses Sweet Child O' Mine",
    'You Really Got Me'
];
const musicasEletronica = [
    'Avicii Wake Me Up',
    'Alok Hear Me Now',
    'The Nights',
    'Happier',
    "Don't Cry For Me",
    'Party On My Own',
    'Alive (It Feels Like)',
    "Don't Say Goodbye",
    'Piece Of Your Heart',
    'OK Not to Be OK'
];

genero.addEventListener('change', () => {
    if (genero.value === 'trap') {
        musica.classList.remove('none');
        botaoMais.classList.remove('none');
        musica.value = musicasTrap[Math.floor(Math.random() * 10)];
    }
    if (genero.value === 'rock') {
        musica.classList.remove('none');
        botaoMais.classList.remove('none');
        musica.value = musicasRock[Math.floor(Math.random() * 10)];
    }
    if (genero.value === 'eletronica') {
        musica.classList.remove('none');
        botaoMais.classList.remove('none');
        musica.value = musicasEletronica[Math.floor(Math.random() * 10)];
    }
});

botaoMais.addEventListener('click', () => {
    if (genero.value === 'trap') {
        musica.value = musicasTrap[Math.floor(Math.random() * 10)];
    }
    if (genero.value === 'rock') {
        musica.value = musicasRock[Math.floor(Math.random() * 10)];
    }
    if (genero.value === 'eletronica') {
        musica.value = musicasEletronica[Math.floor(Math.random() * 10)];
    }
});