import PropTypes from 'prop-types'
import './Card.css'

// ES6
export default function Card(props) {
    return (
      <div className="card">
        <div className="thumb">
            <img width="100" src={props.imagem}/>
        </div>
        <span>{props.nome}</span>
      </div>
    )
}
  
Card.propTypes = {
    nome: PropTypes.string,
    imagem: PropTypes.string
}
