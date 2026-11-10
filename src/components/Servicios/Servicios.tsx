import './Servicios.css'

function Servicios() {
  return (
    <section id="servicios" className="landing-section" aria-labelledby="servicios-title" tabIndex={-1}>
      <h2 id="servicios-title">Servicios</h2>
      <ul className="service-list">
        <li><h3>Diseño gráfico</h3><p>Identidad visual y piezas de publicidad para tu marca.</p></li>
        <li><h3>Sublimación</h3><p>Productos personalizados con tus diseños.</p></li>
        <li><h3>Tarjetas</h3><p>Diseños para presentarte y compartir ocasiones especiales.</p></li>
      </ul>
    </section>
  )
}

export default Servicios
