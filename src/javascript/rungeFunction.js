import * as THREE from 'three';
import {Text} from 'troika-three-text'
import * as math from "mathjs";

const gray = 0x6c757d;
const green = 0x43aa8b;
const orange = 0xf3722c;
const yellow = 0xf9c74f;
const red = 0xf94144;
const blue = 0x277da1;


function rungeFunction() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas: rFunction, antialias: true, alpha: true});
    renderer.setSize(600, 500);
    renderer.setPixelRatio(window.devicePixelRatio);

// Datenpunkte
    const defaultValue = 4;
    let dataPoints = calculateDataPoints(defaultValue);
    document.getElementById('n').innerHTML = defaultValue.toString()


    let interpolationGraph = generateGraph(dataPoints);
    interpolationGraph.name = 'interpolationGraph';
    scene.add(interpolationGraph);

    const slider = document.getElementById('range')

    slider.oninput = function () {
        let n=4;
        let color = 0x43aa8b;
        const value = slider.value;
        switch (value){
            case '0':
                n=4;
                color = yellow
                document.getElementById('n').innerHTML = n.toString()
                break;
            case '1':
                n=10;
                color = orange;
                document.getElementById('n').innerHTML = n.toString()
                break;
            case '2':
                n=25;
                color = red;
                document.getElementById('n').innerHTML = n.toString()
                break;
        }
        dataPoints = calculateDataPoints(n);
        const positions = calculatePositions(dataPoints)

        const graph = scene.getObjectByName('interpolationGraph');
        graph.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        graph.material = new THREE.LineBasicMaterial({color: color});

    }

    for (let i = 0; i < dataPoints.length; i++) {
        let point = generateDataPoints(dataPoints[i])
        point.name = 'point' + i
        scene.add(point);

        const pText = new Text()
        point.add(pText)

        pText.text = 'p' + (i + 1)
        pText.fontSize = 0.3
        pText.position.x = dataPoints[i][0]
        pText.position.y = dataPoints[i][1]
        pText.color = blue
        pText.sync()

    }

    let rungeGraph = generateRungeGraph()
    scene.add(rungeGraph);

    createCoordinateSystem(5, scene)

    camera.position.z = 8;
    update(scene, renderer, camera);
}

function generateRungeGraph() {
    const positions = [];
    for (let x = -5; x <= 5; x += 0.1) {
        const y = runge(x);
        positions.push(x, y, 0);
    }

    const functionGeometry = new THREE.BufferGeometry();
    functionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const functionMaterial = new THREE.LineBasicMaterial({color: green});
    return new THREE.Line(functionGeometry, functionMaterial)
}

function runge(x) {
    return 1 / (1 + Math.pow(x, 2))
}

function generateGraph(dataPoints) {
    const positions = calculatePositions(dataPoints)

    const functionGeometry = new THREE.BufferGeometry();
    functionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const functionMaterial = new THREE.LineBasicMaterial({color: green});
    return new THREE.Line(functionGeometry, functionMaterial)
}

function calculatePositions(dataPoints) {
    // Vandermonde-Matrix
    const vanderMondeArray = []
    for (let i = 0; i < dataPoints.length; i++) {
        let col = []
        for (let j = 0; j < dataPoints.length; j++) {
            let dataPoint = Math.pow(dataPoints[i][0], j);
            col.push(dataPoint)
        }
        vanderMondeArray.push(col);
    }
    const copyVanderMondeArray = [];
    vanderMondeArray.forEach((dataPoint) => copyVanderMondeArray.push([...dataPoint]))


    console.log(math.det(copyVanderMondeArray))
    const inverseMatrix = math.inv(copyVanderMondeArray);


    const fArray = [];
    for (let j = 0; j < dataPoints.length; j++) {
        let dataPoint = dataPoints[j][1];
        fArray.push(dataPoint);
    }
    const fMatrix = math.matrix(fArray);

    let aArray = [];
    let aMatrix = math.multiply(inverseMatrix, fMatrix);
    aMatrix.forEach((dataPoint)=> aArray.push(dataPoint))
    aArray = aArray.reverse();

    const interpolation = function (x) {
        let result = 0;
        for (let i = 0; i < dataPoints.length; i++) {
            result += aArray[i] * Math.pow(x, dataPoints.length - i-1)
        }
        return result
    }

    const positions = [];
    for (let x = -5; x <= 5; x += 0.1) {
        const y = interpolation(x);
        positions.push(x, y, 0);
    }
    return positions
}

function generateDataPoints(dataPoint) {
    // Datenpunkte zeichnen die interpoliert werden sollen
    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute([dataPoint[0], dataPoint[1], 0], 3));
    const dotMaterial = new THREE.PointsMaterial({size: 4, sizeAttenuation: false, color: blue});
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

function update(scene, renderer, camera) {
    renderer.render(scene, camera);
    requestAnimationFrame(function () {
        update(scene, renderer, camera)
    });
}

function calculateDataPoints(n) {
    let dataPoints = []
    for (let i = 0; i <= n; i++) {
        let dataPoint = [];
        dataPoint[0] = -5 + 10 * (i / n);
        dataPoint[1] = runge(dataPoint[0])
        dataPoints.push(dataPoint);
    }
    console.log(dataPoints)
    return dataPoints;

}

rungeFunction();
