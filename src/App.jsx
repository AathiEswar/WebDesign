
import './App.css'
import styles from './assets/css/styles.module.scss'
import { Link } from "react-router-dom";
import HamMenu from './components/hammenu/hammenu.jsx';
import HamMenuBurger from './components/hammenu/hammenu-burger.jsx';
import { HamMenuBar } from './components/hammenu/hammenu-bar.jsx';
import { HamMenuMainContents, HamMenuMainLink, HamMenuSubLink, HamMenuTitle } from './components/hammenu/index.jsx';

function App() {
  const links = [
    {
      title: "Homesadfsdfsafasdfasfsadfsdf",
      href: '/',
    },
    {
      title: "Buttons",
      href: "/work",
    },
    {
      title: "3dModels",
      href: "about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Home",
      href: '/',
    },
    {
      title: "Buttons",
      href: "/work",
    },
    {
      title: "3dModels",
      href: "about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  const subLinks = [
    {
      title: "Facebook",
      href: '/',
    },
    {
      title: "Dribble",
      href: "/work",
    },
    {
      title: "Awwards",
      href: "about",
    },
    {
      title: "Instagram",
      href: "/contact",
    },
  ];



  return (
    <section className={styles.body}>
      <HamMenu>

        <HamMenuBurger />

        <HamMenuBar links={links} subLinks={subLinks}>

          <HamMenuTitle as={"p"}>
            Navigation
          </HamMenuTitle>

          <HamMenuMainContents>
            <HamMenuMainLink style={{ color: 'black' }}>
              This is main link
            </HamMenuMainLink>
          </HamMenuMainContents>

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
