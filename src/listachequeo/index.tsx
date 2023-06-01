import ProveedorEstado from '@infotrack/presentacion-componentes/proveedorEstado';
import { ServiciosRest } from '@infotrack/utilitarios/servicios';
import React from 'react';

import { estadoInicial, reductor } from './reductorListaChequeo';
import ListaChequeo from './listachequeo';

interface IListaChequeoProps {
    idEmpresa: string;
    seguridad: ServiciosRest;
}

const ComponenteListaChequeo: React.FunctionComponent<IListaChequeoProps> = ({ idEmpresa, seguridad }) => (
    <ProveedorEstado estadoInicial={estadoInicial} reductor={reductor}>
        <ListaChequeo idEmpresa={idEmpresa}/>
    </ProveedorEstado>
);

export default ComponenteListaChequeo;
