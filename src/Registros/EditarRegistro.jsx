import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <div>
        <input
          type="text"
          name="fecha"
          placeholder="Fecha aaaa-mm-dd"
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
          type="text"
          name="monto"
          placeholder="Monto"
          value={form.monto}
          onChange={handleChangeMonto}
        />
      </div>
      <div>
        <button onClick={guardar}>Guardar</button>
      </div>
    </div>
  );
}
