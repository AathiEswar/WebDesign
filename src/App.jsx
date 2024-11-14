
import './App.css'
import styles from './assets/css/styles.module.scss'
import { Link } from "react-router-dom";
import {
  HamMenu,
  HamMenuBurger,
  HamMenuBar,
  HamMenuMainContents,
  HamMenuMainLink,
  HamMenuSubContent,
  HamMenuSubLink,
  HamMenuTitle
} from './components/hammenu/index.jsx';

function App() {
  return (
    <section className={styles.body}>
      <HamMenu>

        <HamMenuBurger />

        <HamMenuBar 
        // style={{backgroundColor : 'rgb(50,50,50)'}}
        >

          <HamMenuTitle>
            Navigation
          </HamMenuTitle>

          <HamMenuMainContents>
            <HamMenuMainLink>
              main link 1
            </HamMenuMainLink>
            <HamMenuMainLink>
              main link 2
            </HamMenuMainLink>
            <HamMenuMainLink>
              main link 3
            </HamMenuMainLink>
            <HamMenuMainLink>
              main link 4
            </HamMenuMainLink>
            <HamMenuMainLink>
              main link 5
            </HamMenuMainLink>

          </HamMenuMainContents>

          <HamMenuSubContent>
            <HamMenuSubLink href="https://awwards.com">
              Awwards
            </HamMenuSubLink>
            <HamMenuSubLink href="https://facebook.com">
              Facebook
            </HamMenuSubLink>
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
