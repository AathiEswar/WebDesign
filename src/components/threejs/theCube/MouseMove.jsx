
import React, { useEffect } from 'react'
import * as THREE from 'three';

export default function MouseMove() {

  useEffect(()=>{
    const { innerWidth , innerHeight} = window;
    // Scene , camera , object , renderer
    const scene = new THREE.Scene()

    const canvas = document.querySelector('canvas');
    scene.add(canvas)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshBasicMaterial({color : 'yellow'})
    )
    scene.add(cube);

    const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,1,1000);
    camera.position.z = 3;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas});
    renderer.setSize(innerWidth , innerHeight);

    const cursor = {
      x : 0,
      y : 0
    }

    window.addEventListener('mousemove' , (event)=>{
      cursor.x = event.clientX / innerWidth - 0.5;
      cursor.y = event.clientY / innerHeight - 0.5;
    })

    const animate = ()=>{

      camera.position.x = -1* Math.sin(cursor.x * Math.PI * 2) * 2
      camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
      
      camera.lookAt(cube.position)

      renderer.render(scene , camera)

      window.requestAnimationFrame(animate)
    }
    animate();

  },[])
  return (
    <canvas className='canvas'></canvas>
  )
}