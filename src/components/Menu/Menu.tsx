import { useRef, useState } from 'react'
import logo from '../../assets/plotiart-logo.png'
import './Menu.css'

const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Hablemos de tu idea', href: '#contacto', isContact: true },
]

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleRef = useRef<HTMLButtonElement>(null)

    return (
        <header className="site-header">
            <nav className="menu" aria-label="Navegación principal">
                <a className="menu-brand" href="#inicio" onClick={() => setIsOpen(false)} aria-label="Plotiart, inicio">
                    <img className="menu-logo" src={logo} alt="Plotiart" width={2172} height={724} />
                </a>

                <button
                    ref={toggleRef}
                    className="menu-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="menu-links"
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
                </button>

                <ul
                    className={`menu-links${isOpen ? ' is-open' : ''}`}
                    id="menu-links"
                    onKeyDown={(event) => {
                        if (event.key === 'Escape' && isOpen) {
                            setIsOpen(false)
                            toggleRef.current?.focus()
                        }
                    }}
                >
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                className={link.isContact ? 'menu-contact' : undefined}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                                {link.isContact && <span aria-hidden="true">↗</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Menu
