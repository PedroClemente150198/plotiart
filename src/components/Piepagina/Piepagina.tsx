import logo from '../../assets/plotiart-logo.png'
import './Piepagina.css'

const currentYear = new Date().getFullYear()

function Piepagina() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-invitation">
          <div>
            <p className="footer-eyebrow">DE LA IDEA A LA REALIDAD</p>
            <h2>Hagamos algo que <span>destaque.</span></h2>
          </div>
          <a className="footer-cta" href="#contacto">
            Cuéntanos tu idea <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-columns">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Plotiart, volver al inicio">
              <img src={logo} alt="Plotiart" width={2172} height={724} />
            </a>
            <p>Diseño, color y creatividad para darle personalidad a tu marca y a tus momentos.</p>
          </div>

          <nav className="footer-navigation" aria-label="Enlaces del pie de página">
            <h3>Explora</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          <div className="footer-services">
            <h3>Lo que creamos</h3>
            <ul>
              <li>Diseño gráfico</li>
              <li>Sublimación personalizada</li>
              <li>Tarjetas y publicidad</li>
            </ul>
            <p className="footer-signature">Tu idea. Nuestro próximo diseño.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {currentYear} Plotiart. Todos los derechos reservados.</small>
          <a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  )
}

export default Piepagina
