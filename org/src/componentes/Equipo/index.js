import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores } = props;

  const obj = {
    backgroundColor: colorSecundario
  }

  const estiloTitulo = { borderColor: colorPrimario }
  
  return <section className="equipo" style={ obj }>
    <h3 style={ estiloTitulo }>{ titulo}</h3>
    <div className="colaboradores">
      {
        colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index}/> )
      }
    </div>
  </section>
}

export default Equipo