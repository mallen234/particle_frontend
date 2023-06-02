import '../style.css' 
// main.js
import * as THREE from "three";
import { createScene } from "/src/scene";
import { createCamera } from "/src/camera";
import { createRenderer } from "/src/renderer";
import { createControls } from "/src/controls";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const { scene, mesh, light } = createScene();
const camera = createCamera(sizes);
const canvas = document.querySelector(".webgl");
const renderer = createRenderer(canvas, sizes, scene, camera);
const controls = createControls(camera, canvas);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}

loop();