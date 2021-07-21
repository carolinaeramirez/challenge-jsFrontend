import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function PaginaPrincipal() {
  const [lista, setLista] = React.useState([]);
  const [error, setError] = React.useState("");

  const traerRegistros = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/presupuesto");
      setLista(respuesta.data);
      setError("");
    } catch (e) {
      if (error.message === "Network error") {
        setError("NO SE PUEDE CONECTAR AL SERVIDOR");
      } else {
        setError("no se puede traer la lista");
      }
    }
  };

  React.useEffect(() => {
    traerRegistros();
  },[] );

  const borrarRegistro = async (idRegistroABorrar) => {
    console.log("hola", idRegistroABorrar);
    try {
      await axios.delete(
        "http://localhost:3000/presupuesto/" + idRegistroABorrar
      );
      traerRegistros();
    } catch (e) {}
  };

  return (
    <div>
      <div>
        <p>Presupuesto Personal</p>
        <Link to={"/registroForm"}> Registrar nueva operación </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lista.map((unRegistro, index) => (
            <tr key={index}>
              <td>{unRegistro.fecha}</td>
              <td>{unRegistro.concepto}</td>
              <td>{unRegistro.monto}</td>
              <td>{unRegistro.tipo}</td>
              <td>
                {" "}
                <Link
                  to=""
                  className="linkAcciones"
                  onClick={() => borrarRegistro(unRegistro.id)}
                >Borrar
                </Link>
              </td>
              <td><Link to={"/presupuesto/editar/" + unRegistro.id}>Editar</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
