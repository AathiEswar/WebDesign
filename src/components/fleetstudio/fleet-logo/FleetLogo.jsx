import React, { useEffect } from 'react'
import * as Three from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

function FleetLogo() {
  useEffect(() => {
    const textColor = 0x419CCB;
    // create Scene
    const scene = new Three.Scene();
    scene.background = new Three.Color(0xffffff);
    // creating a group 
    const group = new Three.Group();

    const loader = new FontLoader();

    // const geometry = new Three.BoxGeometry(1, 1, 1)
    // const material = new Three.MeshBasicMaterial({ color: textColor })
    // // create the mesh 
    // const mesh = new Three.Mesh(geometry, material);

    // group.add(mesh)

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

      const cubeSize = 0.2; // Size of the first cube
      const biggerCubeSize = 0.25; // Size of the second (bigger) cube

      // Create the first cube (small one)
      const cubeGeometry = new Three.BoxGeometry(cubeSize, cubeSize+0.1, cubeSize);
      const cubeMaterial = new Three.MeshStandardMaterial({ color: textColor }); // Red color (for better lighting/shadow effects)
      const cube = new Three.Mesh(cubeGeometry, cubeMaterial);

      // Position the first cube at the top-right corner of the text
      const xPosition = boundingBox.max.x + cubeSize / 2;  // Right of the text
      const yPosition = boundingBox.max.y + cubeSize / 2;  // Above the text

      cube.position.set(xPosition, yPosition, 0);  // Set the cube's position
      cube.castShadow = true;  // Make the cube cast shadows
      cube.receiveShadow = true;  // Allow the cube to receive shadows
      group.add(cube); // Add the cube to the group

      // Create edges for the first cube
      const edgesGeometry = new Three.EdgesGeometry(cubeGeometry);  // Create edges from the cube geometry
      const edgesMaterial = new Three.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });  // White color for the edges
      const edges = new Three.LineSegments(edgesGeometry, edgesMaterial); // Create line segments for the edges

      // Position the edges at the same location as the first cube
      edges.position.set(xPosition, yPosition, 0);
      cube.rotation.set(0.5, 0, 0.5);  // Cube rotation
      edges.rotation.set(0.5, 0, 0.5); // Edge rotation
      group.add(edges);

      // Create a spotlight to illuminate the first cube
      const spotLight = new Three.SpotLight(0xffffff, 1);
      spotLight.position.set(xPosition, yPosition + 5, 5);  // Position the spotlight above and slightly in front of the cube
      spotLight.target = cube;  // Direct the spotlight to the first cube
      spotLight.castShadow = true;  // Make the spotlight cast shadows
      scene.add(spotLight);

      // Optional: Add a helper to visualize the spotlight's position
      const spotLightHelper = new Three.SpotLightHelper(spotLight);
      scene.add(spotLightHelper);

      // Add ambient light to provide general illumination
      const ambientLight = new Three.AmbientLight(0x404040, 1);  // Low intensity light to soften shadows
      scene.add(ambientLight);

      // Create the ground or surface for shadows to be cast on
      const planeGeometry = new Three.PlaneGeometry(1000, 1000);
      const planeMaterial = new Three.ShadowMaterial({ opacity: 0.5 });
      const plane = new Three.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -1;  // Place the plane just below the cubes
      plane.receiveShadow = true;  // Let the plane receive the cubes' shadows
      scene.add(plane);

      // Create the second (bigger) cube
      const biggerCubeGeometry = new Three.BoxGeometry(biggerCubeSize, biggerCubeSize+0.2, biggerCubeSize);
      const biggerCubeMaterial = new Three.MeshStandardMaterial({ color: textColor });
      const biggerCube = new Three.Mesh(biggerCubeGeometry, biggerCubeMaterial);

      // Position the second cube below the first cube
      const yPositionBiggerCube = yPosition - (cubeSize + biggerCubeSize) / 2;  // Below the first cube

      biggerCube.position.set(xPosition + 0.3, yPositionBiggerCube - 0.3, 0);  // Set the position of the bigger cube
      biggerCube.castShadow = true;
      biggerCube.receiveShadow = true;
      group.add(biggerCube); // Add the bigger cube to the group

      // Create edges for the second cube
      const biggerEdgesGeometry = new Three.EdgesGeometry(biggerCubeGeometry);
      const biggerEdgesMaterial = new Three.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
      const biggerEdges = new Three.LineSegments(biggerEdgesGeometry, biggerEdgesMaterial);

      biggerEdges.position.set(xPosition + 0.3, yPositionBiggerCube - 0.3, 0);
      biggerCube.rotation.set(0.5, 0, 0.5);
      biggerEdges.rotation.set(0.5, 0, 0.5);
      group.add(biggerEdges);

      // Add a spotlight to illuminate the second cube (same position as the first cube's light)
      const spotLightBiggerCube = new Three.SpotLight(0xffffff, 1);
      spotLightBiggerCube.position.set(xPosition, yPositionBiggerCube + 5, 5);  // Adjust the position slightly above the bigger cube
      spotLightBiggerCube.target = biggerCube;
      spotLightBiggerCube.castShadow = true;
      scene.add(spotLightBiggerCube);

      // Optional: Add a helper to visualize the spotlight's position
      const spotLightHelperBiggerCube = new Three.SpotLightHelper(spotLightBiggerCube);
      scene.add(spotLightHelperBiggerCube);

      // Create the ground or surface for shadows (same as before)
      scene.add(plane); // Ensure the plane is still in the scene

    });

    scene.add(group)

    // create camera
    const { innerWidth, innerHeight } = window;
    const camera = new Three.PerspectiveCamera(75, innerWidth / innerHeight, 1, 2000);
    camera.position.z = 3;
    scene.add(camera);


    // create canvas
    const canvas = document.querySelector('.canvas');
    const ambientLight = new Three.AmbientLight(0xffffff, 2.5); // Soft white light
    scene.add(ambientLight);

    // Create a Directional Light (positioned to avoid shadows on the text)
    const directionalLight = new Three.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10); // Position the light behind or above the text
    directionalLight.castShadow = false; // No shadow casting from this light
    scene.add(directionalLight);

    // Optional: Add a helper to visualize the directional light position
    const lightHelper = new Three.DirectionalLightHelper(directionalLight, 5);
    scene.add(lightHelper);

    const renderer = new Three.WebGLRenderer({ canvas });
    renderer.setSize(innerWidth, innerHeight);
    let x = 1;
   
    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;  // Update aspect ratio
      camera.updateProjectionMatrix();  // Recompute the projection matrix
      renderer.setSize(innerWidth, innerHeight);  // Update the renderer size
    });
    function animate() {
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
