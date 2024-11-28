import React, { useEffect } from 'react'
import * as THREE from 'three';

function TheCube() {
  useEffect(() => {
    console.log(THREE);
    // create Scene
    const scene = new THREE.Scene();

    // create gemetry and material needed for a mesh 
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 'green' })

    // create the mesh 
    const mesh = new THREE.Mesh(geometry, material);

    // add the mesh to the scene 
    scene.add(mesh)

    // create camera
    const { innerWidth, innerHeight } = window;
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 2000);
    camera.position.z = 3;
    scene.add(camera);

    // create canvas
    const canvas = document.querySelector('.canvas');

    // add renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(innerWidth, innerHeight);
    renderer.render(scene, camera);
    
  }, [])
  return (
    <canvas className='canvas'>

    </canvas>
  )
}

export default TheCube
