/** Composición ilustrativa en CSS. No representa trabajos reales del portafolio. */
function MuestraMarca() {
  return (
    <div className="inicio-showcase">
      <div className="inicio-artboard" aria-hidden="true">
        <div className="showcase-topline"><span>IDEAS QUE TOMAN FORMA</span><span>↗</span></div>
        <span className="showcase-orbit" />
        <span className="showcase-asterisk">✳</span>

        <div className="showcase-paper">
          <span className="paper-caption">IDENTIDAD CON ACTITUD</span>
          <span className="paper-title">Hazlo<br /><i>tuyo.</i></span>
          <span className="paper-bottom">DISEÑADO PARA DESTACAR <span>↗</span></span>
        </div>

        <div className="showcase-card">
          <span className="card-symbol">p<span>.</span></span>
          <span className="card-wordmark">PLOTIART</span>
          <span className="card-caption">PEQUEÑO FORMATO.<br />GRANDES IDEAS.</span>
        </div>

        <div className="showcase-mug">
          <span className="mug-handle" />
          <div className="mug-body"><span>CREA.<br /><i>BRILLA.</i><br />REPITE.</span><b>✳</b></div>
        </div>

        <div className="showcase-sticker">100%<span>TU ESTILO</span></div>
        <div className="showcase-bottomline"><span>DISEÑO + PERSONALIDAD</span><span>EST. CREATIVO</span></div>
      </div>
      <p className="inicio-showcase-caption"><span aria-hidden="true">↳</span> Una idea, muchas formas de expresarla. <span>Composición ilustrativa.</span></p>
    </div>
  )
}

export default MuestraMarca
