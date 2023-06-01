import { ServiciosRest } from '@infotrack/utilitarios/servicios';
import React from 'react';
interface IListaChequeoProps {
    idEmpresa: string;
    seguridad: ServiciosRest;
}
declare const ComponenteListaChequeo: React.FunctionComponent<IListaChequeoProps>;
export default ComponenteListaChequeo;
