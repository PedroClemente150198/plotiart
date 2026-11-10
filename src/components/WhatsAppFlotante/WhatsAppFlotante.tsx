import { crearEnlaceWhatsApp } from '../../config/contacto'
import './WhatsAppFlotante.css'

function WhatsAppFlotante() {
  return (
    <a
      className="whatsapp-flotante"
      href={crearEnlaceWhatsApp('¡Hola, Plotiart! Me gustaría conversar sobre una idea.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a Plotiart por WhatsApp (se abre en una pestaña nueva)"
    >
      <span className="whatsapp-flotante-texto" aria-hidden="true">¿Creamos algo?</span>
      <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.8 31.2l7.8-2A15.1 15.1 0 1 0 16 .8Zm0 27.6c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.5 12.5 0 1 1 16 28.4Zm6.9-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2l-1.2 1.4c-.2.2-.4.3-.8.1-1.1-.5-2.1-1.1-3-1.9-.8-.7-1.5-1.6-2-2.5-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.9c-.3-.7-.6-.6-.8-.6H11c-.3 0-.7.1-1 .5-.9.8-1.4 2-1.4 3.2 0 1.9 1.4 3.7 1.6 4 .2.3 2.8 4.3 6.8 6 1 .4 1.7.7 2.3.8 1 .3 1.9.2 2.6.2.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
      </svg>
    </a>
  )
}

export default WhatsAppFlotante
