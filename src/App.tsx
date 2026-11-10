import './App.css'
import Menu from './components/Menu/Menu'
import Inicio from './components/Inicio/Inicio'
import Servicios from './components/Servicios/Servicios'
import Portafolio from './components/Portafolio/Portafolio'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contactos/Contacto'
import Piepagina from './components/Piepagina/Piepagina'
import WhatsAppFlotante from './components/WhatsAppFlotante/WhatsAppFlotante'

function App() {
  return (
    <>
      <Menu />
      <main className="landing">
        <Inicio />
        <Servicios />
        <Portafolio />
        <Nosotros />
        <Contacto />
      </main>
      <Piepagina />
      <WhatsAppFlotante />
    </>
  )
}

export default App
