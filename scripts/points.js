var a = 100;

var p = [
    {
        'x' : 0, 'y' : a * Math.sqrt(3) / 4
    },
    {
        'x' : a / 2, 'y' : -a * Math.sqrt(3) / 4 
    },
    {
        'x' : -a / 2, 'y' : -a * Math.sqrt(3) / 4 
    }
]

function getRandom(max, min) {
    if (arguments.length == 1) {
        return Math.floor(Math.random() * (max + 1));
    }
    else {
        return getRandom(max - min) + min;
    }
}

function getRandomPoint(min, max) {
    return { 'x' : getRandom(min, max), 'y' : getRandom(min, max) };
}

function getMiddlePoint(A, B) {
    return {
        'x' : (A.x + B.x) / 2,
        'y' : (A.y + B.y) / 2
    };
}

function generatePoints(iterations) {
    let c_point = p[0];
    let points = [];

    while(iterations > 0) {
        let dir = getRandom(2);

        points.push(c_point);
        c_point = getMiddlePoint(c_point, p[dir]);

        --iterations;
    }

    return points;
}
