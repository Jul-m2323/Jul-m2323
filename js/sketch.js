let particulas = [];
const num = 1000;

const noiseScale = 0.01;

function setup () {
    createCanvas(1920, 937);
    for (let i = 0; i < num; i++) {
        particulas.push(createVector(random(width), random(height)));    
    }
    strokeWeight(2);
    stroke(195, 3, 254);
}

function draw (){
    background(0);
    for(let i = 0; i < num; i++){
        let p = particulas[i]
        point(p.x, p.y);
        let n = noise(p.x * noiseScale, p.y * noiseScale);
        let a = TAU * n;
        p.x += cos(a);
        p.y += sin(a);
    }
}