import React, { useEffect } from 'react'
import * as Three from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

function FleetLogo() {
  useEffect(() => {
    const textColor = 0x419CCB;
    const scene = new Three.Scene();
    scene.background = new Three.Color(0xffffff);
    const group = new Three.Group();

    const cubeSize = 0.25;
    const biggerCubeSize = 0.35;

    const cubeGeometry = new Three.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new Three.MeshStandardMaterial({ color: textColor });
    const cube = new Three.Mesh(cubeGeometry, cubeMaterial);

    const biggerCubeGeometry = new Three.BoxGeometry(biggerCubeSize, biggerCubeSize, biggerCubeSize);
    const biggerCubeMaterial = new Three.MeshStandardMaterial({ color: textColor });
    const biggerCube = new Three.Mesh(biggerCubeGeometry, biggerCubeMaterial);

    const edgesGeometry = new Three.EdgesGeometry(cubeGeometry);
    const edgesMaterial = new Three.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    const edges = new Three.LineSegments(edgesGeometry, edgesMaterial);

    const biggerEdgesGeometry = new Three.EdgesGeometry(biggerCubeGeometry);
    const biggerEdgesMaterial = new Three.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    const biggerEdges = new Three.LineSegments(biggerEdgesGeometry, biggerEdgesMaterial);

    const spotLight = new Three.SpotLight(0xffffff, 1);
    const spotLightBiggerCube = new Three.SpotLight(0xffffff, 1);

    // Set up the scene
    scene.add(group);

    const planeGeometry = new Three.PlaneGeometry(1000, 1000);
    const planeMaterial = new Three.ShadowMaterial({ opacity: 0.5 });
    const plane = new Three.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1; 
    plane.receiveShadow = true;  
    scene.add(plane);

    const loader = new FontLoader();

    let smallCubePosX;
    let smallCubePosY;
    let BigCubePosY;
    let BigCubePosX;


    loader.load('/src/fonts/Raleway_Medium.json', function (font) {
      const geometry = new TextGeometry('Fleet Studio', {
        font: font,
        size: 1,
        depth: 0.01,
      });

      geometry.computeBoundingBox();
      const boundingBox = geometry.boundingBox;
      const xOffset = (boundingBox.max.x - boundingBox.min.x) / 2;
      const yOffset = (boundingBox.max.y - boundingBox.min.y) / 2;

      geometry.translate(-xOffset, -yOffset, 0);

      const materials = [
        new Three.MeshPhongMaterial({ color: textColor }),
        new Three.MeshPhongMaterial({ color: textColor })
      ];

      const textMesh1 = new Three.Mesh(geometry, materials);
      group.add(textMesh1);

      const xPosition = (boundingBox.max.x + cubeSize / 2) - 0.3; 
      const yPosition = (boundingBox.max.y + cubeSize / 2) - 0.1;  

      cube.position.set(xPosition, yPosition, 0);
      edges.position.set(xPosition, yPosition, 0);
      cube.castShadow = true;
      cube.receiveShadow = true;
      group.add(cube);
      group.add(edges);

      const yPositionBiggerCube = (yPosition - (cubeSize + biggerCubeSize) / 2) ;  // Below the first cube
      const xPositionBiggerCueb = xPosition + 0.4;
      biggerEdges.position.set(xPositionBiggerCueb, yPositionBiggerCube, 0);
      biggerCube.position.set(xPositionBiggerCueb, yPositionBiggerCube, 0);
      biggerCube.castShadow = true;
      biggerCube.receiveShadow = true;
      group.add(biggerCube);
      group.add(biggerEdges);

      spotLight.position.set(xPosition, yPosition + 5, 5);
      spotLight.target = cube;
      spotLight.castShadow = true;
      scene.add(spotLight);

      spotLightBiggerCube.position.set(xPosition, yPositionBiggerCube + 5, 5);
      spotLightBiggerCube.target = biggerCube;
      spotLightBiggerCube.castShadow = true;
      scene.add(spotLightBiggerCube);

      smallCubePosX = xPosition;
      smallCubePosY = yPosition;
      BigCubePosY = yPositionBiggerCube;
      BigCubePosX = xPositionBiggerCueb;
    });

    scene.add(group)

    const { innerWidth, innerHeight } = window;

    const aspect = innerWidth / innerHeight;
    const cameraWidth = 5; 
    const cameraHeight = cameraWidth / aspect;

    const camera = new Three.OrthographicCamera(
      -cameraWidth,  
      cameraWidth,    
      cameraHeight,  
      -cameraHeight,  
      1,                 
      2000              
    );


    camera.position.set(0, 0, 3); 
    camera.lookAt(0, 0, 0);    
    scene.add(camera);


    // create canvas
    const canvas = document.querySelector('.canvas');
    const ambientLight = new Three.AmbientLight(0xffffff, 2.5); 
    scene.add(ambientLight);

    const directionalLight = new Three.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10); 
    directionalLight.castShadow = false; 
    scene.add(directionalLight);

    const lightHelper = new Three.DirectionalLightHelper(directionalLight, 5);
    scene.add(lightHelper);

    const renderer = new Three.WebGLRenderer({ canvas });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(2)

    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;  
      camera.updateProjectionMatrix();  
      renderer.setSize(innerWidth, innerHeight);  
    });
    let clock = new Three.Clock();

    function animate() {
      let time = clock.getElapsedTime();

      cube.position.y = smallCubePosY + Math.sin(time) * 0.1;
      cube.rotation.x = 1
      cube.rotation.y = 1
      cube.rotation.z = 1
      edges.position.y = smallCubePosY + Math.sin(time) * 0.1;
      edges.rotation.x = 1;
      edges.rotation.y = 1;
      edges.rotation.z = 1
      biggerCube.position.y = BigCubePosY + Math.cos(time) * 0.1;
      biggerCube.rotation.z = 1;
      biggerCube.rotation.y = 1;
      biggerCube.rotation.x = 1;
      biggerEdges.position.y = BigCubePosY + Math.cos(time) * 0.1
      biggerEdges.rotation.x = 1;
      biggerEdges.rotation.y = 1;
      biggerEdges.rotation.z = 1;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    animate();

  }, [])
  return (
    <canvas className='canvas'></canvas>
  )
}

export default FleetLogo
