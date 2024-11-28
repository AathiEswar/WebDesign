import React, { useEffect } from 'react'
import * as THREE from 'three';

function TheCube() {
  useEffect(() => {
    //console.log(THREE);
    // create Scene
    const scene = new THREE.Scene();

    // creating a group 
    const group = new THREE.Group();

    // create gemetry and material needed for a mesh 
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({ color: 'green' })
    // create the mesh 
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = 2

    const gemetry2 = new THREE.BoxGeometry(1,1,1);
    const material2 = new THREE.MeshBasicMaterial({color:'red'})
    const mesh2 = new THREE.Mesh(gemetry2,material2);
    mesh2.position.x = 2;
    mesh2.position.y = -2;
    group.add(mesh , mesh2)
    scene.add(group)

    // create camera
    const { innerWidth, innerHeight } = window;
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 2000);
    camera.position.z = 3;
    camera.position.x = 1;
    camera.position.y = -1;
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
