// scene.js
import * as THREE from "three";
import '../style.css'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const createScene = () => {
  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({ color: 0xffa500 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  const light_2 = new THREE.AmbientLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);

  return { scene, mesh, light };
};

