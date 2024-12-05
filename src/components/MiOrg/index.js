// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks: funcionalidades para trabajar con el funcionamiento de react
    // useState
    // const [nombre, funcionActualizada] = useState(valorInicial);
    // const [nombre, actualizarNombre] = useState("Santiago");

    console.log(props);

    // const [mostrar, actualizarMostrar] = useState(true);
    // console.log(useState());

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", mostrar);
    //     actualizarMostrar(!mostrar);

    // }

    return (
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg;