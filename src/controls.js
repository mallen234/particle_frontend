// controls.js
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import '../style.css'
import { TextureLoader } from "three";


export const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0;
  return controls;
};