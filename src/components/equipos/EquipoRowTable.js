import React from 'react';
import { Link } from 'react-router-dom';

export const EquipoRowTable = ({ equipo }) => {
    return (
        <tr>
            <td><img src={equipo.foto}/></td>
            <td>{equipo.nombre}</td>
            <td>{equipo.descripcion}</td>
            <td>{equipo.pais}</td>
            <td>{equipo.estado}</td>
            <td>{equipo.fechaCreacion}</td>
            <td>{equipo.fechaActualizacion}</td>

            <td><Link type="button" className="btn btn-success" to={`equipo/edit/${equipo._id}`}>Editar</Link></td>
            <td><input type="button" className="btn btn-danger" value="Eliminar"/></td>

        </tr>
    )
}
//onClick={eliminarEquipo(equipo._id)}