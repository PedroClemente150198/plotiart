import MuestraMarca from './MuestraMarca'
import './Inicio.css'

const especialidades = ['Diseño gráfico', 'Sublimación', 'Tarjetas & publicidad']

function Inicio() {
  return (
    <section
      id="inicio"
      className="landing-section inicio"
      aria-labelledby="inicio-title"
      tabIndex={-1}
    >
      <div className="inicio-hero">
        <div className="inicio-content">
          <p className="inicio-eyebrow"><span aria-hidden="true" /> ESTUDIO CREATIVO · PLOTIART</p>
          <h1 id="inicio-title" className="inicio-title">
            Tu idea.<br />Nuestro diseño.<br /><span>Algo único.</span>
          </h1>
          <p className="inicio-description">
            Hacemos que tu marca se vea y se sienta diferente. Diseño, sublimación
            y detalles personalizados que hablan por ti.
          </p>
          <div className="inicio-actions">
            <a className="inicio-button" href="#contacto">
              Hagamos tu idea realidad <span aria-hidden="true">↗</span>
            </a>
            <a className="inicio-secondary" href="#portafolio">
              Explora el portafolio <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="inicio-note">
            <span className="inicio-note-icon" aria-hidden="true">✳</span>
            <p>Para tu emprendimiento, tu marca<br /><strong>o ese regalo que quieres hacer especial.</strong></p>
          </div>
        </div>

        <MuestraMarca />
      </div>

      <div className="inicio-specialties" aria-label="Especialidades de Plotiart">
        <p>DE TU IMAGINACIÓN<br /><strong>AL MUNDO REAL.</strong></p>
        <ul>
          {especialidades.map((especialidad) => (
            <li key={especialidad}><span aria-hidden="true">✳</span>{especialidad}</li>
          ))}
        </ul>
        <a href="#servicios" aria-label="Conoce todos nuestros servicios">↘</a>
      </div>
    </section>
  )
}

export default Inicio
