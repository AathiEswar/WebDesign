import React, { useEffect } from 'react'
import * as Three from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import gsap from 'gsap';
import { EffectComposer, RenderPass, AfterimagePass, UnrealBloomPass } from 'three/examples/jsm/Addons'
import { PointsMaterial } from 'three';

function FleetLogo() {
  useEffect(() => {
    const textColor = 0x419CCB;
    const endColor = new Three.Color(0xFFFFFF); // White

    const scene = new Three.Scene();
    scene.background = new Three.Color(0x000000); 
    const targetColor = new Three.Color(0x419CCB);

    const bgColor = { r: scene.background.r, g: scene.background.g, b: scene.background.b };

    gsap.to(bgColor, {
      r: targetColor.r,
      g: targetColor.g,
      b: targetColor.b,
      duration: 2,
      delay: 11,
      onUpdate: () => {
        scene.background.setRGB(bgColor.r, bgColor.g, bgColor.b);
      },
    });

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
    const edgesMaterial = new Three.LineBasicMaterial({ color: bgColor, linewidth: 2 })
    const edges = new Three.LineSegments(edgesGeometry, edgesMaterial);

    const biggerEdgesGeometry = new Three.EdgesGeometry(biggerCubeGeometry);
    const biggerEdgesMaterial = new Three.LineBasicMaterial({ color: bgColor, linewidth: 2 });
    const biggerEdges = new Three.LineSegments(biggerEdgesGeometry, biggerEdgesMaterial);

    const sphereGeometry = new Three.SphereGeometry(0.002, 8, 8);
    const sphereMaterial = new Three.MeshBasicMaterial({ color: 0xffffff })
    const sphere = new Three.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 0, 0);
    scene.add(sphere);

    const sphereGeometry2 = new Three.SphereGeometry(0.002, 8, 8);
    const sphereMaterial2 = new Three.MeshBasicMaterial({ color: 0xffffff })
    const sphere2 = new Three.Mesh(sphereGeometry2, sphereMaterial2);
    sphere2.position.set(0, 0, 0);
    scene.add(sphere2);

    const spotLight = new Three.SpotLight(0xffffff, 1);
    const spotLightBiggerCube = new Three.SpotLight(0xffffff, 1);

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
        depth: 1,
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
      sphere.add(cube);
      sphere.add(edges)

      const yPositionBiggerCube = (yPosition - (cubeSize + biggerCubeSize) / 2);
      const xPositionBiggerCueb = xPosition + 0.4;
      biggerEdges.position.set(xPositionBiggerCueb, yPositionBiggerCube, 0);
      biggerCube.position.set(xPositionBiggerCueb, yPositionBiggerCube, 0);
      biggerCube.castShadow = true;
      biggerCube.receiveShadow = true;
      sphere2.add(biggerCube);
      sphere2.add(biggerEdges);

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
      console.log(smallCubePosX, smallCubePosY, BigCubePosX, BigCubePosY);

      sphere.rotation.x = 1.3
      sphere2.rotation.x = 1.3

      const timeline = gsap.timeline({ repeat: -1, ease: "power2.inOut" });
      timeline.from(sphere.rotation, {
        z: 0,
        delay: 3,
      })
        .to(sphere.rotation, {
          z: Math.PI * 2,
          duration: 4,
        })
        .from(sphere2.rotation, {
          z: 0,
          delay: 1,
        })
        .to(sphere2.rotation, {
          z: Math.PI * 2,
          duration: 4,
        })
      gsap.to(textColor, {
        r: endColor.r,
        g: endColor.g, 
        b: endColor.b,
        duration: 3, 
        delay: 2, 
        onUpdate: () => {
          const animatedColor = new Three.Color(textColor.r, textColor.g, textColor.b);
          materials.forEach((material) => {
            material.color.set(animatedColor);
          });
        },
      });

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
      4000
    );


    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const canvas = document.querySelector('.canvas');
    const ambientLight = new Three.AmbientLight(textColor, 1.5);
    scene.add(ambientLight);

    const directionalLight = new Three.DirectionalLight(textColor, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // text color animations
    gsap.to(textColor, {
      r: endColor.r,
      g: endColor.g, 
      b: endColor.b,
      duration: 3, 
      delay: 11,
      onUpdate: () => {
        // Update the color of all relevant materials and lights during animation
        const animatedColor = new Three.Color(endColor.r, endColor.g, endColor.b);
        ambientLight.color.set(animatedColor);
        directionalLight.color.set(animatedColor);

        // Update cube and edge colors if needed
        cubeMaterial.color.set(animatedColor);
        edgesMaterial.color.set(animatedColor);
        biggerCubeMaterial.color.set(animatedColor);
        biggerEdgesMaterial.color.set(animatedColor);
      },
    });

    const renderer = new Three.WebGLRenderer({ canvas });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(2)

    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new Three.Vector2(innerWidth, innerHeight), 0.5, 0.1, 0.1); // Strength, radius, threshold
    const afterPass = new AfterimagePass();
    afterPass.uniforms['damp'].value = 0.7;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    // composer.addPass(bloomPass);
    // composer.addPass(afterPass);

    let clock = new Three.Clock();

    function animate() {
      let time = clock.getElapsedTime();

      cube.position.y = smallCubePosY + 1.5 + Math.sin(time) * 0.7;
      cube.rotation.x = 2.5
      cube.rotation.y = 0.7
      cube.rotation.z = 1.4
      edges.position.y = cube.position.y
      edges.rotation.x = cube.rotation.x
      edges.rotation.y = cube.rotation.y
      edges.rotation.z = cube.rotation.z
      biggerCube.position.y = (BigCubePosY + 1 + Math.cos(time));
      biggerCube.rotation.x = 2.5;
      biggerCube.rotation.y = 0.7;
      biggerCube.rotation.z = 1.4;
      biggerEdges.position.y = biggerCube.position.y
      biggerEdges.rotation.x = biggerCube.rotation.x
      biggerEdges.rotation.y = biggerCube.rotation.y
      biggerEdges.rotation.z = biggerCube.rotation.z

      composer.render(scene, camera);

      window.requestAnimationFrame(animate);
    }
    animate();
  }, [])
  return (
    <canvas className='canvas logo-canvas'></canvas>
  )
}

export default FleetLogo
