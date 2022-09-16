import HeaderM from "./components/mobile/Header.mobile"
import NavbarM from "./components/mobile/Navbar.mobile"
import HeaderT from "./components/tablet/Header.tablet"
import FooterT from "./components/tablet/Footer.tablet"
import NavbarD from "./components/desktop/Navbar.desktop"
import Layout from "./pages/Layout"

function App() {
  return (
    <div className="App">
      <HeaderM />
      <HeaderT />
      <NavbarD />
      <Layout />
      <NavbarM />
      <FooterT />
    </div>
  )
}

export default App
