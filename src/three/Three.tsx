import { useTheme } from 'styled-components';
import * as THREE from 'three';
import styled from 'styled-components';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

// Canvas
const canvas = document.querySelector('.webgl') as HTMLCanvasElement;

// Camera
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 0.5;
cameraGroup.add(camera);

// Particles
const count = 10000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count; i++) {
  positions[i] = (Math.random() - 0.5) * 1;
}

const particlesGeometry = new THREE.SphereBufferGeometry();

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.005,
  sizeAttenuation: true,
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

// Mouse
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX / sizes.width - 0.5;
  mouse.y = -(e.clientY / sizes.height) + 0.5;
});

// Resize
window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});

// Tick Function
const clock = new THREE.Clock();
let previousTime = 0;

const tick = (): void => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  const parallaxX = mouse.x * 0.5;
  const parallaxY = -mouse.y * 0.5;

  cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 0.04 * deltaTime;
  cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 0.04 * deltaTime;

  particles.rotation.z += 0.00025;

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

const Three = () => {
  const theme = useTheme();
  particlesMaterial.color.set(theme.colors.main);
  return <BlurBackground />;
};

const BlurBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

export default Three;
