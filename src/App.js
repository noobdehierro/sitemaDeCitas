import React, { useEffect, useState } from "react";
import { Cita } from "./components/Cita";
import { Formulario } from "./components/Formulario";

export const App = () => {

    let citasGuardadas = JSON.parse(localStorage.getItem('citas')) || []


    const [citas, setCitas] = useState(citasGuardadas);

    useEffect(() => {
        localStorage.setItem('citas',JSON.stringify(citas))


    }, [citas])


    const crearCita = cita => {
        setCitas([...citas,cita])
        
    }
    const handleDelete = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id)
        setCitas(nuevasCitas);
    }

    return (
        <div>
            <h1>Administrador de pacientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario 
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                       <h1> {citas.length === 0 ? 'no hay citas' : 'administra tus citas'}</h1>
                        {
                            citas.map(cita => 
                            <Cita 
                                key={cita.id}
                                cita ={cita}
                                handleDelete ={handleDelete}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
