import reactLogo from './assets/react.svg'
import './App.css'
import Calculator from "./Calculator"

function App() {

  return (
    <>
      <div>
        <div className="title">
        <h1 > React Calculator</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
       </a>
        </div>
    <Calculator/>
      </div>
    </>
  )
}

export default App
