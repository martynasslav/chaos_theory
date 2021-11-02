import "./grid/grid.js"
import "./points.js"

var canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 600;

var grid = new Grid(canvas);

var pointStyle = {
    'static' : {
        'text' : {"colour": "white"},
        'shape' : {"colour": "red", "fill": true},
        'size' : 1,
        'rotation' : 0
    },
    'dynamic' : {
        'shape' : {"colour": "black", "fill": true}
    }
}

var points = generatePoints(2000);
points.forEach(e => {
    grid.addCircle(e.x, e.y, 0.3, pointStyle.dynamic.shape);
});

var staticPoints = {
    'A' : {
        'shape' : grid.addPolygon(4, p[0].x, p[0].y, pointStyle.static.size, pointStyle.static.rotation, pointStyle.static.shape),
        'text' : grid.addText("A", p[0].x, p[0].y, "center", pointStyle.static.text)
    },
    'B' : { 
        'shape' : grid.addPolygon(4, p[1].x, p[1].y, pointStyle.static.size, pointStyle.static.rotation, pointStyle.static.shape),
        'text' : grid.addText("B", p[1].x, p[1].y, "center", pointStyle.static.text)
    },
    'C' : {
        'shape' : grid.addPolygon(4, p[2].x, p[2].y, pointStyle.static.size, pointStyle.static.rotation, pointStyle.static.shape),
        'text' : grid.addText("C", p[2].x, p[2].y, "center", pointStyle.static.text)
    }
};

document.body.appendChild(canvas);