import "./CampoTexto.css";

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value);
        props.setValor(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input type="text"
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoTexto;