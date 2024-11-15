
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

function App() {
  return (
    <section className={styles.body}>
      <HamMenu>
      <Magneto style={{position:'sticky' , top:0 , left:0}}>
        <HamMenuBurger />
      </Magneto>
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

      <div amplitudex={3} amplitudey={3} periodx={0.1} periody={0.1} className={styles.magnetButton}>
        <p>
          Hover Me!
        </p>
      </div>
    </section>
  )
}

export default App
