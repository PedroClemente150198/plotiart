import taller from '../../assets/nosotros-taller.png'
import './Nosotros.css'

const valores = [
  { numero: '01', titulo: 'Escuchamos primero', texto: 'Tu idea es el punto de partida. Entendemos qué quieres transmitir antes de empezar a diseñar.' },
  { numero: '02', titulo: 'Creamos con intención', texto: 'Colores, formas y materiales que tienen sentido para tu marca y para las personas a las que quieres llegar.' },
  { numero: '03', titulo: 'Cuidamos los detalles', texto: 'Del primer boceto a la pieza final, buscamos que cada detalle se sienta pensado para ti.' },
]

function Nosotros() {
  return (
    <section id="nosotros" className="landing-section nosotros" aria-labelledby="nosotros-title" tabIndex={-1}>
      <div className="nosotros-heading">
        <p className="nosotros-eyebrow"><span aria-hidden="true" /> DETRÁS DE CADA IDEA</p>
        <span className="nosotros-section-label">PLOTIART / NOSOTROS</span>
      </div>

      <div className="nosotros-layout">
        <figure className="nosotros-figure">
          <div className="nosotros-photo-frame">
            <img className="nosotros-photo" src={taller} alt="Imagen ilustrativa de una mesa de trabajo con muestras de impresión y materiales de diseño y sublimación" width={1448} height={1086} loading="lazy" decoding="async" />
            <span className="nosotros-photo-tag"><span aria-hidden="true">✳</span> DONDE LAS IDEAS TOMAN FORMA</span>
          </div>
          <div className="nosotros-photo-note"><span aria-hidden="true">↳</span><span>Diseño que se piensa. Detalles que se sienten.</span></div>
          <figcaption>Imagen de referencia generada. Próximamente, nuestro espacio real.</figcaption>
        </figure>

        <div className="nosotros-story">
          <p className="nosotros-small-title">MUCHO MÁS QUE IMPRIMIR</p>
          <h2 id="nosotros-title">Ponemos creatividad.<br />Tú pones <span>la esencia.</span></h2>
          <p className="nosotros-lead">Detrás de una marca, un regalo o un emprendimiento, siempre hay algo que merece ser contado.</p>
          <p className="nosotros-description">En Plotiart conectamos el diseño gráfico con lo que puedes tocar: tarjetas, publicidad y productos personalizados. Nos gusta transformar una idea en algo que puedas mostrar, compartir y hacer tuyo.</p>
          <p className="nosotros-description">No necesitas llegar con un diseño terminado. Podemos empezar con una referencia, una conversación o ese “tengo una idea” que todavía está tomando forma.</p>
          <div className="nosotros-manifesto"><span aria-hidden="true">“</span><p>Que se vea bien.<br /><strong>Que se sienta tuyo.</strong></p><span className="nosotros-manifesto-star" aria-hidden="true">✳</span></div>
          <a className="nosotros-link" href="#contacto">Conversemos sobre tu proyecto <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="nosotros-values" aria-label="Nuestra forma de trabajar">
        {valores.map((valor) => (
          <article className="nosotros-value" key={valor.numero}>
            <span className="nosotros-value-number">{valor.numero}<span aria-hidden="true">↗</span></span>
            <h3>{valor.titulo}</h3>
            <p>{valor.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Nosotros
