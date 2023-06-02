import * as THREE from "three"
import './style.css'

// Create a new scene
const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const planet3 = 'Mars';

  // Create the skydome geometry
const geometrySun = new THREE.SphereGeometry(0.1, 64, 64);
const geometryPlanets = new THREE.SphereGeometry(0.1, 64, 64);


const Mmaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const Ematerial = new THREE.MeshStandardMaterial({ color: 0x00FFFF });
const Smaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
const sun = new THREE.Mesh(geometrySun, Smaterial);
const earth = new THREE.Mesh(geometryPlanets, Ematerial);
const moon = new THREE.Mesh(geometryPlanets, Mmaterial);

scene.add(sun,earth,moon)

const light = new THREE.PointLight(0xffffff, 1, 100);
const light_2 = new THREE.AmbientLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 10;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene,camera);

// render it out
// renderer.render(scene,camera)
let time = 0;



fetch('src/data/data.json')
  .then(response => response.json())
  .then(d => {
    // Process the JSON data here
    const data1 = d;
    console.log(data1[0].planets[0]['Sun'].x,data1[0].planets[0]['Sun'].y,data1[0].planets[0]['Sun'].z);
    console.log(data1.length)

    sun.position.set(data1[0].planets[0]['Sun'].x,data1[0].planets[0]['Sun'].y,data1[0].planets[0]['Sun'].z);
    earth.position.set(data1[0].planets[0]['Earth'].x,data1[0].planets[0]['Earth'].y,data1[0].planets[0]['Earth'].z);
    moon.position.set(data1[0].planets[0]['Moon'].x,data1[0].planets[0]['Moon'].y,data1[0].planets[0]['Moon'].z);

    const loop = () => {
      // controls.update();
    
      if (time < data1.length){
        sun.position.set(data1[time].planets[0]['Sun'].x,data1[0].planets[0]['Sun'].y,data1[0].planets[0]['Sun'].z);
        earth.position.set(data1[time].planets[0]['Earth'].x,data1[0].planets[0]['Earth'].y,data1[0].planets[0]['Earth'].z);
        moon.position.set(data1[time].planets[0][planet3].x,data1[0].planets[0][planet3].y,data1[0].planets[0][planet3].z);
        
        // console.log(data1[time].planets[0]['Pluto'].x,data1[0].planets[0]['Pluto'].y,data1[0].planets[0]['Pluto'].z);
      }
    
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    
      time +=1;
    }
    loop()

  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
  });