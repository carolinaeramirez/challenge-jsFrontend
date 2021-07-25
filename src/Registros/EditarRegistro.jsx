import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";
export default function EditarRegistro(props) {
  const params = useParams();
  const [form, setForm] = useState({
    fecha: "",
    concepto: "",
    monto: "",
  });

  const buscarRegistroPorId = async (idRegistro) => {
    try {
      const respuesta = await axios.get(
        "http://localhost:3000/presupuesto/" + params.id,
        form
      );
      setForm(respuesta.data);
    } catch (e) {}
  };

  useEffect(() => {
    if (!params.id) return;
    buscarRegistroPorId(params.id);
  }, [params]);

  const handleChangeFecha = (e) => {
    const newState = JSON.parse(JSON.stringify(form));
    newState.fecha = e.target.value;
    setForm(newState);
  };

  const handleChangeConcepto = (e) => {
    const newState = JSON.parse(JSON.stringify(form));
    newState.concepto = e.target.value;
    setForm(newState);
  };

  const handleChangeMonto = (e) => {
    const newState = JSON.parse(JSON.stringify(form));
    newState.monto = e.target.value;
    setForm(newState);
  };

  const guardar = async () => {
    await axios.put("http://localhost:3000/presupuesto/" + params.id, form);
    props.history.push("/");
  };
  return (
    <div className="form">
      <div >
        <label className="labelFecha">Fecha:</label>
        <input
          className="inputFecha"
          type="date"
          name="fecha"
          placeholder="Fecha aaaa-mm-dd"
          value={Moment.utc(form.fecha).format("YYYY-MM-DD")}
          onChange={handleChangeFecha}
        />
      </div>
      <div>
        <label className="labelConcepto">Concepto:</label>
        <input
          className="inputConcepto"
          type="text"
          name="concepto"
          placeholder="Concepto"
          value={form.concepto}
          onChange={handleChangeConcepto}
        />
      </div>
      <div>
        <label className="labelMonto">Monto:</label>
        <input
          className="inputMonto"
          type="text"
          name="monto"
          placeholder="Monto"
          value={form.monto}
          onChange={handleChangeMonto}
        />
      </div>
      <div className="buttonGuardar">
        <button onClick={guardar}>Guardar</button>
      </div>
    </div>
  );
}
