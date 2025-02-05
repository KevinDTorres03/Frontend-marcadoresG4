import { axiosInstance } from "../helpers/axios-config";

const getEquipos = () => {
    return axiosInstance.get('equipo', { 
        headers: {
            'Content-type': 'application/json'   
        }
    })
}

const postEquipos = (data) => {

    const respuesta = axiosInstance.post('equipo', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const putEquipo = (equipoid, data) => {

    const respuesta = axiosInstance.put(`equipo/${equipoid}`, data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const getEquipoId = (tipoEquipoId) => {

    const respuesta = axiosInstance.get(`equipo/${tipoEquipoId}`, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};



export {
    getEquipos,
    postEquipos,
    putEquipo,
    getEquipoId
}