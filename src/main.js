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

const { scene, sun, earth, mars, light } = createScene();
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

// const loop = () => {
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(loop);
// }
let time = 0;


fetch('src/data/data.json')
  .then(response => {
    console.log('made it here')
    if (!response.ok) {
      console.log('made it here 2')
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(d => {
    // Process the JSON data here
    const data1 = d;
    console.log(data1[0].planets[0]['Sun'].x,data1[0].planets[0]['Sun'].y,data1[0].planets[0]['Sun'].z);
    console.log(data1.length)

    sun.position.set(data1[0].planets[0]['Sun'].x,data1[0].planets[0]['Sun'].y,data1[0].planets[0]['Sun'].z);
    earth.position.set(data1[0].planets[0]['Earth'].x,data1[0].planets[0]['Earth'].y,data1[0].planets[0]['Earth'].z);
    mars.position.set(data1[0].planets[0]['Mars'].x,data1[0].planets[0]['Mars'].y,data1[0].planets[0]['Mars'].z);

    const loop = () => {
      // controls.update();
    
      if (time < data1.length){
      
        sun.position.set(data1[time].planets[0]['Sun'].x,data1[time].planets[0]['Sun'].y,data1[time].planets[0]['Sun'].z);
        earth.position.set(data1[time].planets[0]['Earth'].x,data1[time].planets[0]['Earth'].y,data1[time].planets[0]['Earth'].z);
        mars.position.set(data1[time].planets[0]['Mars'].x,data1[time].planets[0]['Mars'].y,data1[time].planets[0]['Mars'].z);
        
        // console.log(sun.position,earth.position,mars.position);
      }
      

      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    
      time +=1;
    }
    loop()

  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.log(error)
  });
