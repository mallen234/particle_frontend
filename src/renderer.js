// renderer.js
import * as THREE from "three";
import '../style.css'


export const createRenderer = (canvas, sizes, scene, camera) => {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return renderer;
};