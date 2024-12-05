import "./ListaDesplegable.css";

const ListaDesplegable = (props) => {
    // Metodo map para el arreglo: -> arreglo.map((equipo, index)=>{
    // return <option></option>;
    // 
    // })
    const equipos = ["Programación", "Front End", "Data Science", "DevOps", "UX y Diseño", "Móvil", "Innovación y Gestión"];

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value);
        props.setValor(e.target.value);
    }

    return <div className="lista-desplegable">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>;
            })}
        </select>
    </div>
}

export default ListaDesplegable;