
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
import { Magneto } from 'aventure';
import MagneticContainer from './animation-wrappers/magnetic.jsx';

function App() {
  return (
    <section className={`${styles.body} `}>
      <HamMenu>
        <HamMenuBurger />
        <HamMenuBar>

          <HamMenuTitle>Navigation</HamMenuTitle>

          <HamMenuContent animateDelay='0.05'>
            <HamMenuLink> main link 1sadfsdf </HamMenuLink>
            <HamMenuLink> main link 2 </HamMenuLink>
            <HamMenuLink> main link 3 </HamMenuLink>
            <HamMenuLink> main link 4 </HamMenuLink>
            <HamMenuLink> main link 5 </HamMenuLink>
          </HamMenuContent>

          <HamMenuSubContent animateDelay='0.3'>
            <HamMenuSubLink href="https://awwards.com">  Awwards  </HamMenuSubLink>
            <HamMenuSubLink href="https://facebook.com"> Facebook </HamMenuSubLink>
            <HamMenuSubLink href="https://facebook.com"> Facebook </HamMenuSubLink>
            <HamMenuSubLink href="https://facebook.com"> Facebook </HamMenuSubLink>
            <HamMenuSubLink href="https://facebook.com"> Facebook </HamMenuSubLink>
          </HamMenuSubContent>

        </HamMenuBar>
      </HamMenu>


      <div className={styles.buttonBody}>
        <Link className={`${styles.navButtons} threejs `} to={`3dmodels`}>3d Animations</Link>
        <Link className={`${styles.navButtons} scrollAni`} to={`buttons`}>Scroll Animations</Link>
      </div>

      <MagneticContainer amplitudex={3} amplitudey={3} periodx={0.1} periody={0.1} className="bg-red-300">
        <p>
          Hover Me!
        </p>
      </MagneticContainer>
    </section>
  )
}

export default App
