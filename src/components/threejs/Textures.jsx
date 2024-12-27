import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/* 
TYPES OF TEXTURES : 
  Color - apply image 
  Displacement - add terrains with subdivisions
  Metalness
  Roughness 
  Normal - terrain wiht no subdivisions
  Ambient - fake shadows
  ALpha - masks

  EVERY THING IS BASED ON PBR - Physics Based Rendering
*/
function Textures() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const loadingTexture = new THREE.LoadingManager();
    loadingTexture.onStart = () => { console.log("Texture Started"); }
    loadingTexture.onLoad = () => { console.log("Texture Loaded"); }
    loadingTexture.onProgress = () => { console.log("Texture Progress"); }
    loadingTexture.onError = () => { console.log("Texture Error"); }

    const TextureLoader = new THREE.TextureLoader(loadingTexture)
    const colorTexture = TextureLoader.load('/textures/aot.jpg');
    const alphaTexture = TextureLoader.load('/textures/door/alpha.jpg');
    const heightTexture = TextureLoader.load('/textures/door/height.jpg');
    const metalTexture = TextureLoader.load('/textures/door/metalness.jpg');
    const roughTexture = TextureLoader.load('/textures/door/roughness.jpg');
    const ambientTexture = TextureLoader.load('/textures/door/ambientOcclusion.jpg');
    const normalTexture = TextureLoader.load('/textures/door/normal.jpg');

    colorTexture.colorSpace = THREE.SRGBColorSpace
    colorTexture.minFilter = THREE.NearestFilter
    colorTexture.generateMipmaps = false;
    colorTexture.magFilter = THREE.NearestFilter
    // Transformations of Texture :
    /* 
      Offset 
      rotations 
      center
      mirror 
      repeat ( wrapS and wrapT )

    */

    /*
      Texture Properties : 
        Size 
        Weight
        Data
    */

    // Create geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: colorTexture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Get canvas and create renderer
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.render(scene, camera);

    const handleWindowResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      renderer.render(scene, camera);
    };

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth transitions
    controls.dampingFactor = 0.1; // Friction-like effect
    controls.rotateSpeed = 0.7; // Rotation speed
    controls.zoomSpeed = 0.8; // Zoom speed

    // Animation loop
    const animate = () => {
      controls.update(); // Required for damping effect
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas className="canvas-texture" ref={canvasRef}></canvas>;
};

export default Textures
