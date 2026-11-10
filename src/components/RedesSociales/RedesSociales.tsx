import { redesSociales } from '../../config/contacto'
import './RedesSociales.css'

type RedesSocialesProps = {
  tema?: 'claro' | 'oscuro'
}

function RedesSociales({ tema = 'claro' }: RedesSocialesProps) {
  return (
    <div className={`redes-sociales redes-sociales--${tema}`}>
      <p className="redes-sociales-title">Más ideas en nuestras redes</p>
      <ul>
        {redesSociales.map((red) => (
          <li key={red.tipo}>
            <a href={red.url} target="_blank" rel="noopener noreferrer" aria-label={`${red.descripcion} (se abre en una pestaña nueva)`}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false">
                {red.tipo === 'instagram' ? (
                  <>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                  </>
                ) : (
                  <path d="M14 22V13H17L17.5 9.5H14V7.3C14 6.3 14.3 5.5 15.8 5.5H17.7V2.3C17.1 2.2 16 2 14.8 2C11.9 2 10 3.8 10 7V9.5H7V13H10V22H14Z" fill="currentColor" />
                )}
              </svg>
              {red.nombre}<span className="redes-sociales-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RedesSociales
