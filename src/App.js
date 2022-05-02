import { LogoImage } from './assets/svgs'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <header className='appHeader'>
        <LogoImage className='appLogo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='appLink' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
