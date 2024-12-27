
import './App.css'
import styles from './assets/css/styles.module.scss'
import { Link } from "react-router-dom";
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
import SimpleTransition from './components/transitions/Simple/SimpleTransition.jsx';


function App() {
  const query = useMediaQuery({ queryProp: "hello" })
  return (
    <SimpleTransition>

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
          <Link className={`${styles.navButtons} scrollAni`} to={`threejs`}>Three Js</Link>
          <Link className={`${styles.navButtons} scrollAni`} to={`r3f`}>R3F</Link>
        </div>

        {/* <Magneto className={`${styles.magnetButton} absolute top-[50%] left-[50%]`} amplitudex={1} amplitudey={1} periodx={0.1} periody={0.1}>
        <p>
          {"Hover Me!"}
        </p>
      </Magneto> */}
      </section>
    </SimpleTransition>
  )
}

export default App
