
function setup() {
    // dibujarCuadrados();
    // noLoop();
    initializeFields();
    createCanvas(1920, 1080);
    // noStroke();
    background(255, 0, 0);
}

function keyPressed() {
    if (// borramos, ponemos el fondo rojo
    key == 'b') {
        background(255, 0, 0);
    } else {
        dibujarCuadrados();
    }
}

function draw() {
}

function dibujarCuadrados() {
    push();
    translate(random(300), random(300));
    for (var i = 1; i < 10; i++) {
        fill(random(255), random(255), random(255));
        translate(50, 50);
        // Draw rect at original 0,0
        rect(0, 0, 100, 100);
    }
    for (var i2 = 1; i2 < 10; i2++) {
        fill(random(255), random(255), random(255));
        translate(50, -50);
        // Draw rect at original 0,0
        rect(0, 0, 100, 100);
    }
    pop();
}

function initializeFields() {
}
