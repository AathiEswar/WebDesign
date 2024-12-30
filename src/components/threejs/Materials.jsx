import { render } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import GUI from 'lil-gui';

function Materials() {
  useEffect(() => {
    const textureManager = new THREE.LoadingManager();
    const gui = new GUI();

    const TextureLoader = new THREE.TextureLoader(textureManager);
    const colorTexture = TextureLoader.load('/textures/door/color.jpg');
    const alphaTexture = TextureLoader.load('/textures/door/alpha.jpg');
    const heightTexture = TextureLoader.load('/textures/door/height.jpg');
    const metalTexture = TextureLoader.load('/textures/door/metalness.jpg');
    const roughTexture = TextureLoader.load('/textures/door/roughness.jpg');
    const ambientTexture = TextureLoader.load('/textures/door/ambientOcclusion.jpg');
    const normalTexture = TextureLoader.load('/textures/door/normal.jpg');
    const matcapTexture = TextureLoader.load('/textures/matcaps/8.png')
    const gradientTexture = TextureLoader.load('/textures/gradient/3.jpg')

    colorTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    const scene = new THREE.Scene();

    const group = new THREE.Group();

    const geometry = new THREE.BoxGeometry(1, 1, 1, 50, 50, 50)

    // // MESH BASIC MATERIAL
    //const material = new THREE.MeshBasicMaterial();
    // material.map = colorTexture
    // material.transparent = true;
    // // alpha used to make texture visible and not visible ( white and black )
    // material.alphaMap = alphaTexture
    // // Side to mention which sides to render ( def to front side )
    // material.side = THREE.DoubleSide

    // // MESH NORMAL MATERIAL ( normal - vertex or pixels information related to camera position )
    // const material = new THREE.MeshNormalMaterial()
    // material.flatShading = true

    // // MESH MATCAP MATERIAL ( fake shadows on an object with just texture )
    // const material = new THREE.MeshMatcapMaterial()
    // material.matcap = matcapTexture;

    // // MESH DEPTH MATERIAL ( fog )
    // const material = new THREE.MeshDepthMaterial()

    // // MESH LAMBER MATERIAL ( needs light to display mesh , meshbasicMaterial + Light )
    // const material = new THREE.MeshLambertMaterial()

    // // MESH PONG MATERIAL ( less performant but better than MeshLamberMaterial)
    // const material = new THREE.MeshPhongMaterial();
    // material.shininess = 1000;
    // material.specular = new THREE.Color(0xff0000)

    // MESH TOON MATERIAL ( inbuilt shadows with texture - cell shading )
    // const material = new THREE.MeshToonMaterial()
    // gradientTexture.minFilter = THREE.NearestFilter;
    // gradientTexture.magFilter = THREE.NearestFilter;
    // material.gradientMap = gradientTexture;

    // MESH STANDARD MATERIAL ( Uses PBR and the standard with all props enabled )
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 1;
    material.roughness = 1;
    // texture 
    material.map = colorTexture
    // light ambient places
    material.aoMap = ambientTexture
    // displacement
    material.displacementMap = heightTexture
    material.displacementScale = 0.1
    // metalness
    material.metalnessMap = metalTexture;
    // roughness
    material.roughnessMap = roughTexture;
    // normal ( fake shadows and depth )
    material.normalMap = normalTexture
    // alpha and transparent
    material.transparent = true;
    material.alphaMap = alphaTexture

    gui.add(material, "metalness")
      .min(0)
      .max(1)
      .step(0.1)
    gui.add(material, "roughness")
      .min(0)
      .max(1)
      .step(0.1)

    // const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    // scene.add(ambientLight)

    // const pointLight = new THREE.PointLight(0xffffff, 30)
    // pointLight.position.x = 1
    // pointLight.position.y = 2
    // pointLight.position.z = 1
    // scene.add(pointLight)

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load("/textures/environmentMap/2k.hdr", (envMap) => {
      envMap.mapping = THREE.EquirectangularReflectionMapping

      scene.background = envMap;
      scene.environment = envMap;
    })

    const mesh = new THREE.Mesh(geometry, material);

    const gemetry2 = new THREE.SphereGeometry(0.5, 12, 12);
    const mesh2 = new THREE.Mesh(gemetry2, material);
    mesh2.position.x = 2;

    const mesh3 = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 16, 32),
      material
    )
    mesh3.position.x = -2
    group.add(mesh, mesh2, mesh3)
    scene.add(group)

    const { innerWidth, innerHeight } = window;
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 2000);
    camera.position.z = 3;
    scene.add(camera);

    const canvas = document.querySelector('.canvas');


    // add renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const handleWindowResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      renderer.render(scene, camera);
    };


    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.7;
    controls.zoomSpeed = 0.8;

    const clock = new THREE.Clock();

    const rotationSpeed = 0.2
    const animate = () => {

      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.y = elapsedTime * rotationSpeed
      mesh2.rotation.y = elapsedTime * rotationSpeed
      mesh3.rotation.y = elapsedTime * rotationSpeed

      mesh.rotation.x = elapsedTime * -rotationSpeed
      mesh2.rotation.x = elapsedTime * -rotationSpeed
      mesh3.rotation.x = elapsedTime * -rotationSpeed

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      renderer.dispose();
    };
  }, [])

  return (
    <canvas className='canvas fixed top-0 left-0'>
    </canvas>
  )
}

export default Materials
