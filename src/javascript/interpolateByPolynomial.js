import * as THREE from 'three';
import {Text} from 'troika-three-text'

const gray = 0x6c757d;
const green = 0x43aa8b;
const orange = 0xf3722c;

function interpolateByPolynomial() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas: interpolatePolynomial, antialias: true, alpha: true});
    renderer.setSize(600, 500);
    renderer.setPixelRatio(window.devicePixelRatio);

// Slider Input
    for (let i = 1; i <= 4; i++) {

        document.getElementById('sliderP' + i.toString() + 'x').oninput = function () {
            const sliderValue = document.getElementById('sliderP' + i.toString() + 'x').value;
            const p = dataPoints[i - 1]
            changeValue(p, sliderValue, i-1, 0);
        }

        document.getElementById('sliderP' + i.toString() + 'y').oninput = function () {
            const sliderValue = document.getElementById('sliderP' + i.toString() + 'y').value;
            const p = dataPoints[i - 1]
            changeValue(p, sliderValue, i-1, 1)
        }

    }

// Datenpunkte
    let p1 = [1, -20];
    let p2 = [6, -26];
    let p3 = [10, 0];
    let p4 = [16, 40];

    const dataPoints = [p1, p2, p3, p4];

    MathJax.typesetPromise().then(() => {
        document.getElementById('matrix').innerHTML = updateMatrix(p1, p2, p3, p4)
        MathJax.typesetPromise();
    }).catch((err) => console.log(err.message));
    updatePoints(p1, p2, p3, p4);

    let interpolationGraph = generateGraph(dataPoints);
    interpolationGraph.name = 'interpolationGraph';
    scene.add(interpolationGraph);

    for (let i = 0; i < dataPoints.length; i++) {
        let point = generateDataPoints(dataPoints[i])
        point.name = 'point' + i
        scene.add(point);

        const pText = new Text()
        point.add(pText)

        pText.text = 'p' + (i)
        pText.fontSize = 3
        pText.position.x = dataPoints[i][0]
        pText.position.y = dataPoints[i][1]
        pText.color = orange
        pText.sync()

    }

    createCoordinateSystem(40, scene)


    function changeValue(p, sliderValue, index, axis) {
        p[axis]=sliderValue;

        const newDataPoints = [...dataPoints]
        newDataPoints[index] = p;
        const positions = calculatePositions(newDataPoints[0], newDataPoints[1], newDataPoints[2], newDataPoints[3]);

        const graph = scene.getObjectByName('interpolationGraph');
        graph.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const point = scene.getObjectByName('point' + index);
        point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([p[0], p[1], 0], 3));

        const pText = point.children[0];
        pText.position.x = p[0];
        pText.position.y = p[1];

        const matrix = updateMatrix(newDataPoints[0], newDataPoints[1], newDataPoints[2], newDataPoints[3]);
        MathJax.typesetPromise().then(() => {
            document.getElementById('matrix').innerHTML = matrix
            MathJax.typesetPromise();
        }).catch((err) => console.log(err.message));

        updatePoints(newDataPoints[0], newDataPoints[1], newDataPoints[2], newDataPoints[3]);

    }


// Kamera positionieren
    camera.position.z = 60;

    update(scene, renderer, camera);
}


function generateGraph(dataPoints) {
    const positions = calculatePositions(dataPoints[0], dataPoints[1], dataPoints[2], dataPoints[3])

    const functionGeometry = new THREE.BufferGeometry();
    functionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

// Material und Linie erstellen
    const functionMaterial = new THREE.LineBasicMaterial({color: green});
    return new THREE.Line(functionGeometry, functionMaterial)
}

function calculatePositions(p1, p2, p3, p4) {
    const x1 = p1[0];
    const x2 = p2[0];
    const x3 = p3[0];
    const x4 = p4[0];

    const f1 = p1[1];
    const f2 = p2[1];
    const f3 = p3[1];
    const f4 = p4[1];

// Vandermonde-Matrix
    const vanderMondeMatrix = new THREE.Matrix4();
    vanderMondeMatrix.set(
        1, x1, Math.pow(x1, 2), Math.pow(x1, 3),
        1, x2, Math.pow(x2, 2), Math.pow(x2, 3),
        1, x3, Math.pow(x3, 2), Math.pow(x3, 3),
        1, x4, Math.pow(x4, 2), Math.pow(x4, 3));

    const invertMatrix = vanderMondeMatrix.invert();

    const yVector = new THREE.Vector4();
    yVector.set(f1, f2, f3, f4)

    let aVector = new THREE.Vector4();
    aVector = matrixVectorMultiply(invertMatrix, yVector)

    updateResultFunction(aVector);

    const interpolation = function (x) {
        return aVector.w * Math.pow(x, 3) + aVector.z * Math.pow(x, 2) + aVector.y * x + aVector.x;
    };

    const positions = [];
    for (let x = -20; x <= 20; x += 0.1) {
        const y = interpolation(x);
        positions.push(x, y, 0);
    }
    return positions
}

function generateDataPoints(dataPoint) {
    // Datenpunkte zeichnen die interpoliert werden sollen
    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute([dataPoint[0], dataPoint[1], 0], 3));
    const dotMaterial = new THREE.PointsMaterial({size: 4, sizeAttenuation: false, color: orange});
    return new THREE.Points(dotGeometry, dotMaterial);

}

function createCoordinateSystem(size, scene) {
    // Geometrie für x-Achse erstellen
    const xAxisGeometry = new THREE.BufferGeometry();
    const xAxisPositions = [-size, 0, 0, size, 0, 0];
    xAxisGeometry.setAttribute('position', new THREE.Float32BufferAttribute(xAxisPositions, 3));

// Material für x-Achse
    const xAxisMaterial = new THREE.LineBasicMaterial({color: gray});
    const xAxisLine = new THREE.Line(xAxisGeometry, xAxisMaterial);

// Geometrie für y-Achse erstellen
    const yAxisGeometry = new THREE.BufferGeometry();
    const yAxisPositions = [0, -size, 0, 0, size, 0];
    yAxisGeometry.setAttribute('position', new THREE.Float32BufferAttribute(yAxisPositions, 3));

// Material für y-Achse
    const yAxisMaterial = new THREE.LineBasicMaterial({color: gray});
    const yAxisLine = new THREE.Line(yAxisGeometry, yAxisMaterial);

    scene.add(xAxisLine);
    scene.add(yAxisLine);

    const xText = new Text()
    xAxisLine.add(xText)

    xText.text = 'x'
    xText.fontSize = 3
    xText.position.x = -size
    xText.color = gray
    xText.sync()

    const yText = new Text()
    yAxisLine.add(yText)

    yText.text = 'f'
    yText.fontSize = 3
    yText.position.y = -size
    yText.color = gray
    yText.sync()
}

function matrixVectorMultiply(matrix, vector) {
    const m = matrix.elements;

    const a1 = m[0] * vector.x + m[4] * vector.y + m[8] * vector.z + m[12] * vector.w
    const a2 = m[1] * vector.x + m[5] * vector.y + m[9] * vector.z + m[13] * vector.w
    const a3 = m[2] * vector.x + m[6] * vector.y + m[10] * vector.z + m[14] * vector.w
    const a4 = m[3] * vector.x + m[7] * vector.y + m[11] * vector.z + m[15] * vector.w

    const resultVector = new THREE.Vector4();
    resultVector.set(a1, a2, a3, a4)
    return resultVector;
}

function update(scene, renderer, camera) {
    renderer.render(scene, camera);
    requestAnimationFrame(function () {
        update(scene, renderer, camera)
    });
}

function updateMatrix(p1, p2, p3, p4) {
    return "\\[\\left[\\begin{array}{cccc}\n" +
        "    1 & " + p1[0].toString() + " & " + p1[0].toString() + "^2 & " + p1[0].toString() + "^3\t\\\\\n" +
        "    1 & " + p2[0].toString() + " & " + p2[0].toString() + "^2 & " + p2[0].toString() + "^3\t\\\\\n" +
        "    1 & " + p3[0].toString() + " & " + p3[0].toString() + "^2 & " + p3[0].toString() + "^3\t\\\\\n" +
        "    1 & " + p4[0].toString() + " & " + p4[0].toString() + "^2 & " + p4[0].toString() + "^3\n" +
        "    \\end{array}\\right]\ \\cdot \\left[\\begin{array}{cccc}\n" +
        "    a_0 \t\\\\\n" +
        "    a_1 \t\\\\\n" +
        "    a_2 \t\\\\\n" +
        "    a_3 \n" +
        "    \\end{array}\\right] =  \\left[\\begin{array}{cccc}\n" +
        "    " + p1[1].toString() + " \t\\\\\n" +
        "    " + p2[1].toString() +  "\t\\\\\n" +
        "    " + p3[1].toString() +  "\t\\\\\n" +
        "    " + p4[1].toString() +  "\n" +
        "    \\end{array}\\right]\\]";
}

function updatePoints(p1, p2, p3, p4) {
    document.getElementById("p1x").innerHTML = p1[0].toString();
    document.getElementById("p1y").innerHTML = p1[1].toString();

    document.getElementById("p2x").innerHTML = p2[0].toString();
    document.getElementById("p2y").innerHTML = p2[1].toString();

    document.getElementById("p3x").innerHTML = p3[0].toString();
    document.getElementById("p3y").innerHTML = p3[1].toString();

    document.getElementById("p4x").innerHTML = p4[0].toString();
    document.getElementById("p4y").innerHTML = p4[1].toString();
}
function updateResultFunction(aVector) {
    document.getElementById('resultPolynomial').innerHTML = '\\[ p(x)= '+ Math.round(aVector.w * 100) / 100 +'+'+ Math.round(aVector.z * 100) / 100+'x^1+'+ Math.round(aVector.y * 100) / 100+'x^2+'+ Math.round(aVector.x * 100) / 100+'x^3 \\]'

}
interpolateByPolynomial();
