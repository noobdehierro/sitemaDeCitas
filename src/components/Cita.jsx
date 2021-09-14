import React from 'react'
import PropTypes from "prop-types";


export const Cita = ({cita,handleDelete}) => {

const {mascota,propietario,fecha,hora,sintomas,id}= cita;

    return (
        <div className='cita'>
            <p>Mascota <span>{mascota}</span></p>
            <p>propietario <span>{propietario}</span></p>
            <p>fecha <span>{fecha}</span></p>
            <p>hora <span>{hora}</span></p>
            <p>sintomas <span>{sintomas}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={()=>handleDelete(id)}

            >Elimiinar &times;</button>


        </div>
    )
}

Cita.propTypes ={
    cita: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}
