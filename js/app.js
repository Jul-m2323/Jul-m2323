const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const proyectosId = document.getElementById('proyectos');


const proyectos = [
    {img: ".././multimedia/paint-app.png",pag:"https://jul-m2323.github.io/DrawingApp_JS/", name: "Paint App"},
    {img: ".././multimedia/quiz-app.png",pag:"https://jul-m2323.github.io/QuizAppJS/", name: "Quiz App"},
    {img: ".././multimedia/slappy-diy-shop.png",pag:"https://jul-m2323.github.io/slappy_DIY_mora/shop.html", name: "Slappy DIY Shop"},
    {img: ".././multimedia/todo-app.png",pag:"https://jul-m2323.github.io/Todo-appJS/", name: "Todo App"}
]

for (element of proyectos){
    $("#proyectos").append(`
        <div>
            <div>
                <h3>${element.name}</h3>
                <span><a src="${element.pag}"></a>Visitar</span>
            </div>
            <img src="${element.img}" alt="${element.name}">
        </div>
    `);
}

btn.addEventListener("click", () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})

