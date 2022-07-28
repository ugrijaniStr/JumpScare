//PATE THIS TO CONSOLE
//jumpScare(seconds);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function jumpScare(time) {
    for(let i = 0; i < time; i++) {
        await sleep(i * 1000);
    }

    const slika = document.createElement('img');
    const zvuk = document.createElement('audio');
    const style = document.createElement('style');

    zvuk.id = "muzikica";

    document.head.appendChild(style);
    slika.className = 'jumpScareImgStyle';

    zvuk.setAttribute(
        'src',
        'https://sendeyo.com/updownload/file/script/09939c79dfd2497fe7931202aff34c43.mp3',
    );

    slika.setAttribute(
        'src',
        'https://media.discordapp.net/attachments/967009280777666601/1002126318554595358/unknown.png',
    );

    style.innerHTML = `
    .jumpScareImgStyle {
        width: 100%; 
        height: 100%; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        position: relative;
        z-index: 10000;
    }`;

    document.body.appendChild(slika);
    document.body.appendChild(zvuk);
    document.getElementById('muzikica').play();

    console.log(`%c JUMPSCARE POKRENUT`,"color: red; font-weight: bold;");
}
