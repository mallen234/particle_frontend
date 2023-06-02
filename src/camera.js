// camera.js
import * as THREE from "three";
import '../style.css'


export const createCamera = (sizes) => {
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 20;
  return camera;
};