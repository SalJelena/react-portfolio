import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <NavBar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
