

const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const enviar = document.getElementById('enviar');
const proyectosId = document.getElementById('proyectos');


const proyectos = [
    {img: "multimedia/drum-kit.png",pag:"https://jul-m2323.github.io/DrumkitJS/", name: "DrumKit"},
    {img: "multimedia/quiz-app.png",pag:"https://jul-m2323.github.io/QuizAppJS/", name: "Quiz App"},
    {img: "multimedia/slappy-diy-shop.png",pag:"https://jul-m2323.github.io/slappy_DIY_mora/shop.html", name: "Slappy DIY Shop"},
    {img: "multimedia/todo-app.png",pag:"https://jul-m2323.github.io/Todo-appJS/", name: "Todo App"}
]

for (element of proyectos){
    $("#proyectos").append(`
        <div class="">
            <div>
                <h3>${element.name}</h3>
                <span><a href="${element.pag}">Visitar</a></span>
            </div>
            <img src="${element.img}" alt="${element.name}">
        </div>
    `);
}

btn.addEventListener("click", () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})
function createHeart () {
    const heart = document.createElement('i');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';dd
    heart.style.animationDuration = 5000 + 'ms';
    heart.innerText = '';

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

enviar.addEventListener("click", () => {
    setInterval(createHeart, 400);
})