// scene.js
import * as THREE from "three";
import '../style.css'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const createScene = () => {
  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(0.1, 64, 64);

  const Mmaterial = new THREE.MeshStandardMaterial({ color: 0x9ec2535 });
  const Ematerial = new THREE.MeshStandardMaterial({ color: 0x00FFFF });
  const Smaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
  const sun = new THREE.Mesh(geometry, Smaterial);
  const earth = new THREE.Mesh(geometry, Ematerial);
  const mars = new THREE.Mesh(geometry, Mmaterial);

  scene.add(sun,earth,mars);

  const light = new THREE.PointLight(0xffffff, 1, 100); 
  const light_2 = new THREE.AmbientLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  light_2.position.set(0, 10, 10);
  scene.add(light,light_2);

  return { scene, sun, earth, mars, light };
};

