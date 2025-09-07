import * as THREE from 'three';
import {Text} from 'troika-three-text'

const gray = 0x6c757d;
const green = 0x43aa8b;
const orange = 0xf3722c;
const blue = 0x277da1;




function hermiteInterpolation() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas: hInterpolation, antialias: true, alpha: true});
    renderer.setSize(600, 500);
    renderer.setPixelRatio(window.devicePixelRatio);

    let p0 = [0,2];
    let p1 = [1,3];
    let derivativeP0 = [0, 4];
    let derivativeP1 = [1, -2];

    let dataPoints = [p0, p1, derivativeP0, derivativeP1];

    for (let i = 0; i < dataPoints.length-2; i++) {
        let point = generateDataPoints(dataPoints[i])
        point.name = 'point' + i
        scene.add(point);

        const pText = new Text()
        point.add(pText)

        pText.text = 'p' + (i+1)
        pText.fontSize = 0.2
        pText.position.x = dataPoints[i][0]
        pText.position.y = dataPoints[i][1]
        pText.color = blue;
        pText.sync()

    }

    let interpolationGraph = generateGraph(dataPoints);
    interpolationGraph.name = 'hermiteGraph';
    scene.add(interpolationGraph);

    let tanget1 = generateTanget(p0, derivativeP0, 0);
    interpolationGraph.name = 'tanget1';
    scene.add(tanget1);

    let tanget2 = generateTanget(p1, derivativeP1, 1);
    interpolationGraph.name = 'tanget2';
    scene.add(tanget2);

    createCoordinateSystem(5, scene)

    camera.position.z = 8;
    update(scene, renderer, camera);
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
    xText.fontSize = 0.5
    xText.position.x = -size
    xText.color = gray
    xText.sync()

    const yText = new Text()
    yAxisLine.add(yText)

    yText.text = 'f'
    yText.fontSize = 0.5
    yText.position.y = -size
    yText.color = gray
    yText.sync()
}

function generateGraph(dataPoints) {
    const positions = calculatePositions(dataPoints)

    const functionGeometry = new THREE.BufferGeometry();
    functionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const functionMaterial = new THREE.LineBasicMaterial({color: green});
    return new THREE.Line(functionGeometry, functionMaterial)
}

function generateTanget(p, m, num) {
    let positions = [];
    for (let x = p[0]-1; x <= p[0]+1; x += 0.1) {
        const y = calculateTanget(m, p, x);
        positions.push(x, y, 0);
    }

    const functionGeometry = new THREE.BufferGeometry();
    functionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const functionMaterial = new THREE.LineBasicMaterial({color: orange});

    const tangentLine = new THREE.Line(functionGeometry, functionMaterial)
    const tText = new Text()
    tangentLine.add(tText)
    console.log(positions)
    tText.text = 'm' + num.toString();
    tText.fontSize = 0.2
    tText.position.x = positions[positions.length-3]
    tText.position.y = positions[positions.length-2]
    tText.color = orange
    tText.sync()

    return tangentLine;
}

function calculatePositions(dataPoints){
    let f1 = dataPoints[0][1];
    let f2 = dataPoints[1][1];
    let m1 = dataPoints[2][1];
    let m2 = dataPoints[3][1];

    let x1 = dataPoints[0][0];
    let x2 = dataPoints[1][0];



    const matrix = new THREE.Matrix4();
    matrix.set(
        1, x1, Math.pow(x1, 2), Math.pow(x1, 3),
        0, 1, 2*x1, 3*Math.pow(x1, 2),
        1, x2, Math.pow(x2, 2), Math.pow(x2, 3),
        0, 1, 2*x2, 3*Math.pow(x2, 2));

    const inverseMatrix = matrix.invert();

    const fVector = new THREE.Vector4();
    fVector.set(f1, m1, f2, m2)

    let aVector = matrixVectorMultiply(inverseMatrix, fVector);

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

function generateDataPoints(dataPoint) {
    // Datenpunkte zeichnen die interpoliert werden sollen
    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute([dataPoint[0], dataPoint[1], 0], 3));
    const dotMaterial = new THREE.PointsMaterial({size: 4, sizeAttenuation: false, color: blue});
    return new THREE.Points(dotGeometry, dotMaterial);

}
function calculateTanget(derevationPoint, point, x) {
    return derevationPoint[1]*(x-point[0])+point[1];
}

function updateResultFunction(aVector) {
    MathJax.typesetPromise().then(() => {
        document.getElementById('resultPolynomial').innerHTML = '\\[ p(x)= '+ Math.round(aVector.w * 100) / 100 +'+'+ Math.round(aVector.z * 100) / 100+'x^1+'+ Math.round(aVector.y * 100) / 100+'x^2+'+ Math.round(aVector.x * 100) / 100+'x^3 \\]'
        MathJax.typesetPromise();
    }).catch((err) => console.log(err.message));

}

function update(scene, renderer, camera) {
    renderer.render(scene, camera);
    requestAnimationFrame(function () {
        update(scene, renderer, camera)
    });
}
hermiteInterpolation();
