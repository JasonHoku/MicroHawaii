import * as THREE from "three/build/three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

var renderer, scene, camera, composer, circle, skelet, particle, mouseX, mouseY, mhText;
setTimeout(() => {
  init();
  animate();
}, 1000);
function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.zIndex = 0;
  (renderer.domElement.style.maxWidth = "100%"), (renderer.domElement.style.zIndex = 100);
  renderer.domElement.className = "ThreeJSBG";
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.querySelector("#bgEffectDOM").appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  scene.add(camera);

  particle = new THREE.Object3D();

  scene.add(particle);

  const gltfLoader = new GLTFLoader();

  if (window.innerWidth < 1000) {
    camera.position.set(0, 0, 230);
  } else {
    camera.position.set(0, 0, 160);
  }

  var geometry = new THREE.TetrahedronGeometry(1, 0);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
  });

  for (var i = 0; i < 100; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(50 + Math.random() * 700);
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }

  var ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 1);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x420089, 1);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.updateProjectionMatrix();
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  particle.rotation.y -= 0.0004;

  particle.rotation.y -= window.lastMouseMove / 1000 || 0;
  renderer.clear();

  renderer.render(scene, camera);

}
