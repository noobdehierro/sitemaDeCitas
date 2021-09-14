import React, { useState } from "react";

import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

export const Formulario = ({ crearCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleUpdate = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleCita = (e) => {
    e.preventDefault();

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      console.log(error);
      return;
    }
    setError(false);

    cita.id = uuid();

    crearCita(cita);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos Los Campos Son Obligatorios</p>
      ) : null}
      <form onSubmit={handleCita}>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={handleUpdate}
          value={mascota}
        />

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre dueño de la mascota"
          onChange={handleUpdate}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={handleUpdate}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={handleUpdate}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleUpdate}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}
