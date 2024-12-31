import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

function Text3D() {
  useEffect(() => {

    const gui = new GUI();
    /**
    * Textures
    */
    const textureLoader = new THREE.TextureLoader()
    const matcapTexture = textureLoader.load(`/textures/matcaps/${fontPngNum.num}.png`);
    matcapTexture.colorSpace = THREE.SRGBColorSpace

    // Font Loader
    const fontLoader = new FontLoader();
    // Debug
    
    fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
      const textGeometry = new TextGeometry('THREE.JS', {
        // font typeface 
        font: font,
        // size 
        size: 0.5,
        // the thickness of the font 
        depth: 0.2,
        // no of triangles to form that letter
        curveSegments: 5,
        // curves on the fonts 
        bevelEnabled: true,
        bevelOffset: 0,
        // no of segments to create that bevel
        bevelSegments: 4,
        // x and y thickness
        bevelSize: 0.02,
        // z thickness
        bevelThickness: 0.03,
      });
      // this or bounding for centering ( def is sphere )
      textGeometry.center()

      const matMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
      const text = new THREE.Mesh(textGeometry, matMaterial);
      scene.add(text)

      // for optimization
      const torusGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

      for (let i = 0; i < 100; i++) {
        const torus = new THREE.Mesh(torusGeometry, matMaterial);

        torus.position.x = (Math.random() - 0.5) * 10
        torus.position.y = (Math.random() - 0.5) * 10
        torus.position.z = (Math.random() - 0.5) * 10

        torus.rotation.x = Math.random() * Math.PI;
        torus.rotation.y = Math.random() * Math.PI;

        const randomScale = Math.random() * 2;
        torus.scale.set(randomScale, randomScale, randomScale)
        scene.add(torus)
      }
    })

    /**
 * Base
 */

    // Canvas
    const canvas = document.querySelector('.canvas')

    // Scene
    const scene = new THREE.Scene()



    /**
     * Object
     */
    // const cube = new THREE.Mesh(
    //   new THREE.BoxGeometry(1, 1, 1),
    //   new THREE.MeshBasicMaterial()
    // )

    // scene.add(cube)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 1
    camera.position.y = 1
    camera.position.z = 2
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])
  return (
    <canvas className='canvas fixed top-0 left-0'></canvas>
  )
}

export default Text3D
