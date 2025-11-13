import { Routes, Route  } from "react-router-dom"

function App() {

  return (
    <>
      <h1>Hello React Router!</h1>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
