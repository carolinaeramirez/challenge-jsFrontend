import React from "react";
import { Link } from "react-router-dom";

export default function PaginaPrincipal() {
  return (
    <div>
      <div>
        <p>Presupuesto Personal</p>
        <Link to={"/registro"}> Registrar nueva operación </Link>
      </div>
    </div>
  );
}
