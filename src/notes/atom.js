const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
ctx.translate(window.innerWidth/2, window.innerHeight/2);

const drawAtom = ({x, y}) => {
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
}

const display = (atoms, time) => {
    atoms.forEach(atom => {
        drawAtom(atom.positionAt(time));
    });
}

const clearCanvas = () => {
    ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
}

const scale = (value, factor) => {
    return value * factor;
}

const translate = (value, n) => {
    return value + n;
}

class Atom {
    constructor(positionAt) {
        this.positionAt = positionAt;
    }
}

let populate = () => {
    let atoms = [];
    for (let i=0; i<20; i++) {
        atoms.push(new Atom(t => {
            // base circle
            let x = Math.sin(t/20) * 40;
            let y = Math.cos(t/20) * 40;
            // transforms
            if (i < 5) {

            } else if ()
            x = translate(x, i*10);

            return {x, y};
        }))
    }
    return atoms;
}

let time = 0;

let atoms = populate();

setInterval(() => {
    time += 1;
    display(atoms, time);
    if (time > 200) {
        time = 0;
        clearCanvas();
    }
}, 40);
