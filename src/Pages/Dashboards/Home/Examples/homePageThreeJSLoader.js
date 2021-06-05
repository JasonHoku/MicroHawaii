import * as THREE from "three/build/three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
export function InitFrontPage() {
  var renderer, scene, camera, composer, circle, skelet, particle, mouseX, mouseY, mhText;

  init();
  animate();
  function init() {
    window.lastMouseMove = undefined;
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.domElement.style.top = "-150px";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.position = "absolute";
    (renderer.domElement.style.maxWidth = "100%"), (renderer.domElement.style.zIndex = 100);
    renderer.domElement.className = "ThreeJSScene";
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    document.querySelector("#ThreeJSSceneContainer").appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    scene.add(camera);

    circle = new THREE.Object3D();
    skelet = new THREE.Object3D();
    particle = new THREE.Object3D();

    scene.add(particle);

    const gltfLoader = new GLTFLoader();

    const url = "/GLTFs/SquareMH.gltf";
    gltfLoader.load(url, (gltf) => {
      console.log(gltf);
      const root = gltf.scene;
      scene.add(root.children[2]);
    });

    console.log(scene);

    setTimeout(() => {
      for (let i = 0; i < scene.children.length; i++) {
        if (scene.children[i].name === "Text") {
          mhText = scene.children[i];
          console.log(mhText);
        }
      }
    }, 250);

    if (window.innerWidth < 1000) {
      camera.position.set(0, 0, 23);
    } else {
      camera.position.set(0, 0, 16);
    }

    var geometry = new THREE.TetrahedronGeometry(1, 0);

    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading,
    });

    for (var i = 0; i < 100; i++) {
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      mesh.position.multiplyScalar(10 + Math.random() * 100);
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

    document.addEventListener("mousemove", onDocumentMouseMove);

    function onDocumentMouseMove(event) {
      // console.log(event);
      mouseX = event.movementX;
      mouseY = event.movementY;
      window.lastMouseMove = mouseX + mouseY / 10;
    }
  }

  function onWindowResize() {
    if (window.innerWidth < 1000) {
      camera.position.set(0, 0, 23);
    } else {
      camera.position.set(0, 0, 16);
    }

    camera.updateProjectionMatrix();
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);

    particle.rotation.x += 0.0;
    particle.rotation.y -= 0.002;

    renderer.clear();
    if (mhText) {
      mhText.rotation.z -= 0.002;
      mhText.rotation.z += window.lastMouseMove / 100;
    }
    renderer.render(scene, camera);

    if (window.lastMouseMove !== 0) {
      window.lastMouseMove = 0.002;
    }
  }
}
