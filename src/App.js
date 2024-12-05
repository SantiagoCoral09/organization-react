import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';

function App() {

  const [mostrarForm, actualizarMostrar] = useState(true);

  //Ternario==> condicion ? seMuestra : noMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  return (
    <div>
      <Header></Header>
      {/* Si mostrar es true se muestra el formulario sino solo sale un div vacio */}
      {/* {mostrarForm === true ? <Formulario></Formulario> : <div></div>} */}
      {/* {mostrarForm ? <Formulario></Formulario> : <></>} */}
      {mostrarForm && <Formulario></Formulario>}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>

    </div>
  );
}

export default App;
