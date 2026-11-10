/** Letras dibujadas con coordenadas SVG: no utiliza imágenes ni tipografías. */
function Logo() {
    return (
        <svg
            className="menu-logo"
            viewBox="0 0 686 130"
            width="686"
            height="130"
            aria-hidden="true"
            focusable="false"
        >
            <g transform="translate(32 15) skewX(-14)" fill="#fff">
                {/* P: el segundo contorno crea el espacio interior. */}
                <path fillRule="evenodd" d="M0 100V0H52C80 0 91 14 91 36S77 72 50 72H29V100ZM29 24V48H47C58 48 63 44 63 36S58 24 47 24Z" />
                {/* L */}
                <path d="M94 0H123V74H163L151 100H94Z" />
                {/* O */}
                <path fillRule="evenodd" d="M208 -2C242 -2 262 18 262 50S242 102 208 102 154 82 154 50 174 -2 208 -2ZM208 25C193 25 184 34 184 50S193 75 208 75 232 66 232 50 223 25 208 25Z" />
                {/* T */}
                <path d="M253 0H344V27H313V100H284V27H253Z" />
                {/* I: corte horizontal como en la referencia. */}
                <path d="M350 0H380V24H350ZM350 29H380V100H350Z" />
                {/* A: cuerpo blanco y base amarilla independientes. */}
                <g className="logo-letter-a">
                    {/* Contorno cerrado, hueco triangular y separación de las letras vecinas. */}
                    <path
                        fillRule="evenodd"
                        d="M388 70 416 0H439L469 100H442L433 73H388ZM410 52H427L421 32Z"
                    />
                    {/* La base respeta la misma línea inferior (y=100) que las otras letras. */}
                    <path className="logo-a-accent" fill="#ffd600" d="M391 81H413L420 100H383Z" />
                </g>
                {/* R */}
                <path fillRule="evenodd" d="M473 100V0H525C551 0 565 13 565 34 565 49 558 59 546 64L570 100H535L514 69H502V100ZM502 24V46H521C531 46 537 43 537 35S531 24 521 24Z" />
                {/* T */}
                <path d="M555 0H646V27H615V100H586V27H555Z" />
            </g>
        </svg>
    )
}

export default Logo
