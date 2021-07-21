import axios from "axios";
import React, { useState } from "react";

export default function AgregarNuevoRegistro(props) {
  const [form, setForm] = useState({
    fecha: "",
    concepto: "",
    monto: "",
    tipo: "",
  });

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

  const changeTipo = (e) => {
    form.tipo = e.target.value === "ingreso" ? 1 : 0;
  };

  const guardar = async () => {
    await axios.post("http://localhost:3000/presupuesto", form);
    props.history.push("/");
  };


  return (
    <div>
      <input
        type="text"
        name="fecha"
        placeholder="Fecha aaaa/mm/dd"
        value={form.fecha}
        onChange={handleChangeFecha}
      />
      <input
        type="text"
        name="concepto"
        placeholder="Concepto"
        value={form.concepto}
        onChange={handleChangeConcepto}
      />
      <input
        type="tect"
        name="monto"
        placeholder="$ Monto"
        value={form.monto}
        onChange={handleChangeMonto}
      />

      <div onChange={() => changeTipo}>
        <input
          type="radio"
          id="opcionIngreso"
          name="tipo"
          value="ingreso"
          onChange={changeTipo}
        />{" "}
        <label for="opcionIngreso">Ingreso</label>
        <input
          type="radio"
          id="opcionEgreso"
          name="tipo"
          value="egreso"
          onChange={(e) => changeTipo}
        />{" "}
        <label for="opcionEgreso">Egreso</label>
      </div> 
      <button onClick={guardar}>Guardar</button>
      
    </div>
  );
}
