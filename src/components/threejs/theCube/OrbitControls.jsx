
import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function OrbitCtrl() {

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    const handleWindowSize = () => {

    }

    // Scene , camera , object , renderer
    const scene = new THREE.Scene()

    const canvas = document.querySelector('canvas');
    scene.add(canvas)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 'yellow' })
    )
    scene.add(cube);

    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
    camera.position.z = 3;
    scene.add(camera);

    // controls :
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const animate = () => {

      controls.update();

      renderer.render(scene, camera)

      window.requestAnimationFrame(animate)
    }
    animate();

    const handleDoubleClick = () => {
      if (!document.fullscreenElement) {
        canvas.requestFullscreen();
      }
      else {
        document.exitFullscreen();
      }
    }

    window.addEventListener('dblclick', handleDoubleClick);
    
    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('resize', handleWindowSize);
    }

  }, []);
  
  window.addEventListener('resize', () => {
    camera.aspect(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  return (
    <canvas className='canvas'></canvas>
  )
}