
import { Link } from 'react-router-dom';
import './App.css'
import styles from './assets/css/styles.module.scss'
import Spline from '@splinetool/react-spline';

import {
  HamMenu,
  HamMenuBurger,
  HamMenuBar,
  HamMenuContent,
  HamMenuLink,
  HamMenuSubContent,
  HamMenuSubLink,
  HamMenuTitle
} from './components/hammenu/index.jsx';

import useMediaQuery from './hooks/responsive/useMediaQuery/useMediaQuery.js';

function App() {
  const query = useMediaQuery({ queryProp: "hello" })

  const handleLoad = (spline) => {
    // Ensure the spline scene is properly loaded
    console.log("spline:" , spline);
    try {
      const controls = spline.scene.getControl(); // Get camera controls
      if (controls) {
        controls.enableZoom = false; // Disable zoom
      } else {
        console.error("Controls object is unavailable.");
      }
    } catch (error) {
      console.error("Error accessing scene controls:", error);
    }
  };

  return (
    <>
      <section className={`${styles.body} `}>
        <HamMenu>
          <HamMenuBurger />
          <HamMenuBar>

            <HamMenuTitle>Navigation</HamMenuTitle>

            <HamMenuContent animateDelay='0.05'>
              <HamMenuLink> main link 1 </HamMenuLink>
              <HamMenuLink> main link 2 </HamMenuLink>
              <HamMenuLink> main link 3 </HamMenuLink>
              <HamMenuLink> main link 4 </HamMenuLink>
              <HamMenuLink> main link 5 </HamMenuLink>
            </HamMenuContent>

            <HamMenuSubContent animateDelay='0.3'>
              <HamMenuSubLink href="https://awwards.com">  Awwards  </HamMenuSubLink>
              <HamMenuSubLink href="https://facebook.com"> Facebook </HamMenuSubLink>
              <HamMenuSubLink href="https://facebook.com"> Instagram </HamMenuSubLink>
              <HamMenuSubLink href="https://facebook.com"> LinkedIn </HamMenuSubLink>
            </HamMenuSubContent>

          </HamMenuBar>
        </HamMenu>


        <div className={styles.buttonBody}>
          <Link className={`${styles.navButtons} threejs `} to={`3dmodels`}>3d Animations</Link>
          <Link className={`${styles.navButtons} page-transitions`} to={`page-transitions`}>Page Transitions</Link>
          <Link className={`${styles.navButtons} scrollAni`} to={`threejs`}>Three Js</Link>
          <Link className={`${styles.navButtons} scrollAni`} to={`r3f`}>R3F</Link>
        </div>

        {/* <Magneto className={`${styles.magnetButton} absolute top-[50%] left-[50%]`} amplitudex={1} amplitudey={1} periodx={0.1} periody={0.1}>
        <p>
          {"Hover Me!"}
        </p>
      </Magneto> */}

        <main>
          <Spline
            scene="https://prod.spline.design/3bqFNwedkW6Pq86w/scene.splinecode"

          />
          <div className='bg-white absolute bottom-[-10px] right-4 w-60 h-20'></div>
        </main>


      </section>
    </>
  )
}

export default App
