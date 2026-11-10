import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { contacto, crearEnlaceWhatsApp } from '../../config/contacto'
import RedesSociales from '../RedesSociales/RedesSociales'
import './Contacto.css'

const servicios = ['Diseño gráfico', 'Sublimación', 'Tarjetas & publicidad', 'Tengo otra idea']

function Contacto() {
  const [resumen, setResumen] = useState('')
  const [estadoCopia, setEstadoCopia] = useState('')
  const resumenRef = useRef<HTMLTextAreaElement>(null)

  function prepararConsulta(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const datos = new FormData(event.currentTarget)
    const consulta = [
      '¡Hola, Plotiart! Quiero darle forma a una idea.',
      '',
      `Mi nombre: ${String(datos.get('nombre')).trim()}`,
      `Mi correo: ${String(datos.get('correo')).trim()}`,
      `Me interesa: ${datos.get('servicio')}`,
      '',
      String(datos.get('idea')).trim(),
    ].join('\n')
    setResumen(consulta)
    setEstadoCopia('')
    window.open(crearEnlaceWhatsApp(consulta), '_blank', 'noopener,noreferrer')
  }

  async function copiarConsulta() {
    try {
      await navigator.clipboard.writeText(resumen)
      setEstadoCopia('Consulta copiada. Ya puedes compartirla por el canal que prefieras.')
    } catch {
      resumenRef.current?.focus()
      resumenRef.current?.select()
      setEstadoCopia('Seleccionamos tu consulta para que puedas copiarla manualmente.')
    }
  }

  return (
    <section id="contacto" className="landing-section contacto" aria-labelledby="contacto-title" tabIndex={-1}>
      <div className="contacto-heading">
        <p className="contacto-eyebrow"><span aria-hidden="true" /> EL SIGUIENTE PASO ES CREAR</p>
        <span className="contacto-section-number" aria-hidden="true">PLOTIART / CONTACTO</span>
      </div>

      <div className="contacto-layout">
        <div className="contacto-intro">
          <span className="contacto-star" aria-hidden="true">✳</span>
          <h2 id="contacto-title">Las grandes ideas<br />empiezan con<br /><span>un hola.</span></h2>
          <p className="contacto-description">¿Una marca que está naciendo? ¿Un regalo diferente? Cuéntanos qué tienes en mente y demos juntos el primer paso.</p>

          <ol className="contacto-steps">
            <li><span>01</span><div><h3>Cuéntanos tu idea</h3><p>No necesitas tener todo resuelto.</p></div></li>
            <li><span>02</span><div><h3>Exploremos las posibilidades</h3><p>Diseño, materiales y detalles a tu medida.</p></div></li>
            <li><span>03</span><div><h3>Démosle forma</h3><p>Definimos juntos cómo hacerla realidad.</p></div></li>
          </ol>

          <a className="contacto-personal" href={crearEnlaceWhatsApp('¡Hola, Plotiart! Me gustaría consultar sobre un proyecto.')} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">↗</span><span>¿Prefieres escribir directamente?<strong>WhatsApp · {contacto.whatsappVisible}</strong><small>Se abre en una pestaña nueva.</small></span>
          </a>
          <RedesSociales />
        </div>

        <div className="contacto-form-card">
          <div className="contacto-form-heading"><div><p>HABLEMOS DE TU IDEA</p><h3>¿Qué vamos a crear?</h3></div><span aria-hidden="true">↗</span></div>
          <form onSubmit={prepararConsulta} onChange={() => { setResumen(''); setEstadoCopia('') }}>
            <div className="contacto-fields">
              <div className="contacto-field"><label htmlFor="contacto-nombre">Tu nombre <span aria-hidden="true">*</span></label><input id="contacto-nombre" name="nombre" autoComplete="name" placeholder="¿Cómo te llamas?" required maxLength={100} pattern=".*\S.*" /></div>
              <div className="contacto-field"><label htmlFor="contacto-correo">Tu correo <span aria-hidden="true">*</span></label><input id="contacto-correo" name="correo" type="email" autoComplete="email" placeholder="hola@tumarca.com" required maxLength={254} /></div>
            </div>

            <fieldset className="contacto-service-picker">
              <legend>¿Qué tienes en mente?</legend>
              <div className="contacto-options">{servicios.map((servicio, index) => (
                <label className="contacto-option" key={servicio}><input type="radio" name="servicio" value={servicio} defaultChecked={index === 0} /><span>{servicio}</span></label>
              ))}</div>
            </fieldset>

            <div className="contacto-field contacto-idea"><label htmlFor="contacto-idea">Cuéntanos un poquito más <span aria-hidden="true">*</span></label><textarea id="contacto-idea" name="idea" rows={4} placeholder="Qué te gustaría crear, para quién, cantidades o fecha aproximada…" required minLength={15} maxLength={2000} aria-describedby="contacto-idea-help" /><span id="contacto-idea-help" className="contacto-field-help">Con unas líneas es suficiente. Los campos con * son obligatorios.</span></div>

            <button className="contacto-submit" type="submit">Continuar en WhatsApp <span aria-hidden="true">↗</span></button>
            <p className="contacto-form-note">Se abrirá WhatsApp con tu mensaje. Tú decides cuándo enviarlo.</p>
          </form>

          {resumen && <div className="contacto-summary">
            <p role="status" className="contacto-summary-heading">Tu consulta está lista. Confirma el envío en WhatsApp.</p>
            <a className="contacto-reopen" href={crearEnlaceWhatsApp(resumen)} target="_blank" rel="noopener noreferrer">Abrir WhatsApp de nuevo ↗</a>
            <label htmlFor="contacto-resumen">Tu mensaje, por si necesitas copiarlo</label>
            <textarea id="contacto-resumen" ref={resumenRef} value={resumen} readOnly rows={7} />
            <button type="button" onClick={copiarConsulta}>Copiar consulta <span aria-hidden="true">↗</span></button>
            <p role="status">{estadoCopia}</p>
          </div>}
        </div>
      </div>
      <div className="contacto-bottom"><span>DISEÑAMOS CONTIGO, NO SOLO PARA TI.</span><span aria-hidden="true">✳</span><span>TU PRÓXIMA IDEA EMPIEZA AQUÍ.</span></div>
    </section>
  )
}

export default Contacto
