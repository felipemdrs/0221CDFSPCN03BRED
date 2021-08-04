import PropTypes from 'prop-types'
import './BotaoEstiloso.css'

export default function BotaoEstiloso(props) {
    return (
      <button disabled={props.estaDesativado}>{props.nome}</button>
    )
  }
  
  BotaoEstiloso.propTypes = {
    nome: PropTypes.string,
    estaDesativado: PropTypes.bool
  }
  
  BotaoEstiloso.defaultProps = {
    nome: 'Padrão',
    estaDesativado: false
  }
  
  