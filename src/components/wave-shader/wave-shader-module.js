// position = default position of the vertex 
// vec3 - representation in 3d space 
// vec4 - representation in 4d space 
// gl_Position - converts the local space object to rendering space object
// modelViewMatrix - contains the properties of transformation and transformation for world space to camera space 
// projectionMatrix - how 3d is rendered in 2d
// uVu - render 3d from 2d

// export const vertex = `
//   uniform float uAmplitude ;
//   uniform float uWaveLength ;
//   uniform float uTime;
//   varying vec2 vUv ;

//   void main() {
//     vUv = uv ;
//     vec3 newPos = position;
//     float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
//     newPos.z += wave;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos , 1.0);
//   }
// `

// export const fragment = `
//   uniform sampler2D uTexture ;
//   uniform vec2 uVuvScale ;
//   varying vec2 vUv ;

//   void main() {
//     vec2 uv = (vUv - 0.5 ) * uVuvScale + 0.5 ;
//     vec4 color = texture2D(uTexture , uv );
//     gl_FragColor = color ;
//   }
// `


export const vertex = `
  uniform float uAmplitude ;
  uniform float uWaveLength ;
  uniform float uTime;
  varying vec2 vUv ;

  void main() {
    vUv = uv ;
    vec3 newPos = position;
    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPos.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos , 1.0);
  }
`

export const fragment = `
  uniform sampler2D uTexture ;
  uniform vec2 uVuvScale ;
  varying vec2 vUv ;

  void main() {
    vec2 uv = (vUv - 0.5 ) * uVuvScale + 0.5 ;
    vec4 color = texture2D(uTexture , vUv );
    gl_FragColor = color ;
  }
`
