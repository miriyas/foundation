import { LogoImage } from '../assets/svgs'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <LogoImage className={styles.appLogo} alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={styles.appLink} href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
