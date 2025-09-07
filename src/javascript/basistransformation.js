import * as THREE from 'three';
import {Text} from 'troika-three-text'

const gray = 0x6c757d;
const green = 0x43aa8b;
const orange = 0xf3722c;
const blue = 0x277da1;
const red = 0xf94144;



function basisFunction() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas: bFunction, antialias: true, alpha: true});
    renderer.setSize(600, 500);
    renderer.setPixelRatio(window.devicePixelRatio);

    let p0Graph = generateGraph(green, "p0");
    scene.add(p0Graph);
    let p1Graph = generateGraph(orange, "p1");
    scene.add(p1Graph);
    let m0Graph = generateGraph(blue, "m0");
    scene.add(m0Graph);
    let m1Graph = generateGraph(red, "m1");
    scene.add(m1Graph);

    createCoordinateSystem(1, scene)

    camera.position.z = 1;
    camera.position.x = 0.5;
    camera.position.y = 0.5;
    update(scene, renderer, camera);
}

function createCoordinateSystem(size, scene) {
    // Geometrie für x-Achse erstellen
    const xAxisGeometry = new THREE.BufferGeometry();
    const xAxisPositions = [0, 0, 0, size, 0, 0];
    xAxisGeometry.setAttribute('position', new THREE.Float32BufferAttribute(xAxisPositions, 3));

// Material für x-Achse
    const xAxisMaterial = new THREE.LineBasicMaterial({color: gray});
    const xAxisLine = new THREE.Line(xAxisGeometry, xAxisMaterial);

// Geometrie für y-Achse erstellen
    const yAxisGeometry = new THREE.BufferGeometry();
    const yAxisPositions = [0, 0, 0, 0, size, 0];
    yAxisGeometry.setAttribute('position', new THREE.Float32BufferAttribute(yAxisPositions, 3));

// Material für y-Achse
    const yAxisMaterial = new THREE.LineBasicMaterial({color: gray});
    const yAxisLine = new THREE.Line(yAxisGeometry, yAxisMaterial);

    scene.add(xAxisLine);
    scene.add(yAxisLine);

    const Text0 = new Text()
    xAxisLine.add(Text0)

    Text0.text = '0'
    Text0.fontSize = 0.05
    Text0.position.x = 0
    Text0.color = gray
    Text0.sync()

    const Textx1 = new Text()
    xAxisLine.add(Textx1)

    Textx1.text = '1'
    Textx1.fontSize = 0.05
    Textx1.position.x = size
    Textx1.color = gray
    Textx1.sync()

    const Texty1 = new Text()
    yAxisLine.add(Texty1)

    Texty1.text = '1'
    Texty1.fontSize = 0.05
    Texty1.position.y = size
    Texty1.color = gray
    Texty1.sync()
}
function generateGraph(color, func) {
    const positions = calculatePositions(func)

    const functionGeometry = new THREE.BufferGeometry();
    functionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const functionMaterial = new THREE.LineBasicMaterial({color: color});
    return new THREE.Line(functionGeometry, functionMaterial)
}

function calculatePositions(func) {
    let calculateFunction = ()=>{};
    switch (func){
        case 'p0':
            calculateFunction = (x)=>{
                return 2*Math.pow(x, 3)-3*Math.pow(x, 2)+1;
            }
            break;
        case 'p1':
            calculateFunction = (x)=>{
                return -2*Math.pow(x, 3)+3*Math.pow(x, 2);
            }
            break;
        case 'm0':
            calculateFunction = (x)=>{
                return Math.pow(x, 3)-2*Math.pow(x, 2)+x;
            }
            break;
        case 'm1':
            calculateFunction = (x)=>{
                return Math.pow(x, 3)-Math.pow(x, 2);
            }
            break;
    }
    let positions = [];
    for (let x = 0; x <= 1; x += 0.1) {
        const y = calculateFunction(x);
        positions.push(x, y, 0);
    }
    return positions;
}

function update(scene, renderer, camera) {
    renderer.render(scene, camera);
    requestAnimationFrame(function () {
        update(scene, renderer, camera)
    });
}
basisFunction();