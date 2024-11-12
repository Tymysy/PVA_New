import * as THREE from 'three';
import '@google/model-viewer';

const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

const loader = new THREE.GLTFLoader();
loader.load('model.glb', function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.rotation.y = Math.PI;
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

function openPage() {
    window.location.href = "login.html";
}