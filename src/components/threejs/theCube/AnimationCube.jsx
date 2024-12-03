import React, { useEffect } from 'react'
import * as THREE from 'three';

function AnimationCube() {
  const { innerHeight , innerWidth} = window;
  useEffect(()=>{
    // import Scene , mesh , camera and renderer
    const scene = new THREE.Scene()

    const gemetry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color : 'blue'})
    const mesh = new THREE.Mesh(gemetry , material);
    mesh.position.set(0.5,0.5,0.5);
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(75 , innerWidth/ innerHeight  , 1, 2000);
    camera.position.z = 3;
    scene.add(camera)

    console.log(mesh.position.distanceTo(camera.position));
    
    const canvas = document.querySelector(".canvas");
    const renderer = new THREE.WebGLRenderer({canvas})
    renderer.setSize(innerWidth,innerHeight);

    // look directly at anything with Vector 3
    //camera.lookAt(mesh.position)
    
    // Clock 
    const Clock = new THREE.Clock();
    const animate = ()=>{
      const elapsedTime = Clock.getElapsedTime();

      mesh.rotation.x += 0.01;
      mesh.rotation.z += 0.01;
      mesh.rotation.y += 0.01;

      mesh.position.x = Math.sin(elapsedTime)
      mesh.position.y = Math.cos(elapsedTime)

      renderer.render(scene , camera)

      window.requestAnimationFrame(animate)
    }
    animate()

    return ()=> animate
  },[])
  
  return (
  <canvas className='canvas sticky top-0 left-0'>

  </canvas>
    )
}

export default AnimationCube
