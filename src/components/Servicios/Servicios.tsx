import { crearEnlaceWhatsApp } from '../../config/contacto'
import './Servicios.css'

const servicios = [
  {
    numero: '01',
    tipo: 'diseno',
    categoria: 'PARA MARCAS CON PERSONALIDAD',
    titulo: 'Diseño gráfico',
    descripcion: 'Una identidad que se reconoce y piezas que cuentan lo que hace especial a tu marca.',
    detalles: ['Identidad visual', 'Piezas publicitarias', 'Diseño para redes'],
    accion: 'Démosle identidad',
  },
  {
    numero: '02',
    tipo: 'sublimacion',
    categoria: 'PARA IDEAS QUE SE PUEDEN TOCAR',
    titulo: 'Sublimación',
    descripcion: 'Llevamos tus diseños a productos que acompañan, sorprenden y se convierten en algo personal.',
    detalles: ['Tazas personalizadas', 'Detalles para regalar', 'Productos para tu marca'],
    accion: 'Personalicemos algo',
  },
  {
    numero: '03',
    tipo: 'publicidad',
    categoria: 'PARA DEJAR UNA BUENA IMPRESIÓN',
    titulo: 'Tarjetas y publicidad',
    descripcion: 'Presenta tu negocio y comparte tus mensajes con piezas pensadas para destacar en el mundo real.',
    detalles: ['Tarjetas de presentación', 'Material promocional', 'Papelería personalizada'],
    accion: 'Hagámonos notar',
  },
]

function Servicios() {
  return (
    <section id="servicios" className="landing-section servicios" aria-labelledby="servicios-title" tabIndex={-1}>
      <div className="servicios-topline">
        <p className="servicios-eyebrow"><span aria-hidden="true" /> LO QUE PODEMOS CREAR JUNTOS</p>
        <span className="servicios-section-label">PLOTIART / SERVICIOS</span>
      </div>

      <div className="servicios-heading">
        <h2 id="servicios-title">Tu idea tiene<br /><span>muchas posibilidades.</span></h2>
        <p>De la primera inspiración al detalle final. Encuentra la forma de darle vida a lo que tienes en mente.</p>
      </div>

      <ul className="servicios-grid">
        {servicios.map((servicio) => (
          <li className={`servicio-card servicio-card--${servicio.tipo}`} key={servicio.tipo}>
            <div className="servicio-visual" aria-hidden="true">
              <div className="servicio-visual-top"><span>{servicio.numero} / PLOTIART</span><span>↗</span></div>
              {servicio.tipo === 'diseno' && <div className="servicio-design-art">
                <div className="servicio-type-sheet"><span>DISEÑO CON CARÁCTER</span><strong>Aa<span>.</span></strong><div><i /><i /><i /><i /></div></div>
                <span className="servicio-design-star">✳</span>
              </div>}
              {servicio.tipo === 'sublimacion' && <div className="servicio-mug-art">
                <span className="servicio-mug-orbit" />
                <div className="servicio-mug"><span className="servicio-mug-handle" /><div className="servicio-mug-face"><span>TU IDEA.<br /><b>TU ESTILO.</b></span><strong>✳</strong></div></div>
                <span className="servicio-mug-sticker">HECHO<br />PARA TI ↗</span>
              </div>}
              {servicio.tipo === 'publicidad' && <div className="servicio-print-art">
                <div className="servicio-print-back"><span>HOLA,<br /><i>mundo.</i></span><small>UNA MARCA QUE DEJA HUELLA</small></div>
                <div className="servicio-print-front"><span>PLOTIART<span>↗</span></span><strong>Las buenas ideas<br />se comparten.</strong><small>DISEÑO & PUBLICIDAD</small></div>
              </div>}
              <span className="servicio-visual-bottom">{servicio.categoria}</span>
            </div>

            <div className="servicio-content">
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <ul className="servicio-details">{servicio.detalles.map((detalle) => <li key={detalle}><span aria-hidden="true">↳</span>{detalle}</li>)}</ul>
              <a
                className="servicio-link"
                href={crearEnlaceWhatsApp(`¡Hola, Plotiart! Me interesa ${servicio.titulo.toLowerCase()}. Me gustaría conversar sobre una idea.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${servicio.accion}: consultar por ${servicio.titulo.toLowerCase()} en WhatsApp (se abre en una pestaña nueva)`}
              >{servicio.accion}<span aria-hidden="true">↗</span></a>
            </div>
          </li>
        ))}
      </ul>
      <p className="servicios-visual-note">Composiciones ilustrativas. Consulta materiales, cantidades y disponibilidad por WhatsApp.</p>

      <div className="servicios-invitation">
        <span className="servicios-invitation-star" aria-hidden="true">✳</span>
        <div><h3>¿Tu idea no cabe en una categoría?</h3><p>Nos gustan los retos creativos. Cuéntanos qué quieres hacer.</p></div>
        <a href="#contacto">Hablemos de tu proyecto <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default Servicios
