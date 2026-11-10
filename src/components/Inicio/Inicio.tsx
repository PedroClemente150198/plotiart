import './Inicio.css'

function Inicio() {
  return (
    <section
      id="inicio"
      className="landing-section inicio"
      aria-labelledby="inicio-title"
      tabIndex={-1}
    >
      <p className="inicio-eyebrow">PLOTIART · DISEÑO & PUBLICIDAD</p>
      <h1 id="inicio-title" className="inicio-title">Tus ideas merecen destacar.</h1>
      <p>Diseño gráfico, sublimación y tarjetas para darle forma a tu próxima idea.</p>
      <a className="inicio-button" href="#servicios">Conoce nuestros servicios ↗</a>
    </section>
  )
}

export default Inicio
