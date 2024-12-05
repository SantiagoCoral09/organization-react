import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaDesplegable from "../ListaDesplegable";
import Boton from "../Boton";
const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejar el envio", event);
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        };
        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                setValor={setNombre}
            ></CampoTexto>
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            ></CampoTexto>
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValor={setFoto}
            ></CampoTexto>
            <ListaDesplegable
                valor={equipo}
                setValor={setEquipo}
            ></ListaDesplegable>
            <Boton>Crear</Boton>
        </form>

    </section>
}

export default Formulario;