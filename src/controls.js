// controls.js
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import '../style.css'


export const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  return controls;
};