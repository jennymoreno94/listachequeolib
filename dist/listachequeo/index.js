import ProveedorEstado from '@infotrack/presentacion-componentes/proveedorEstado';
import React from 'react';
import { estadoInicial, reductor } from './reductorListaChequeo';
import ListaChequeo from './listachequeo';
var ComponenteListaChequeo = function (_a) {
    var idEmpresa = _a.idEmpresa, seguridad = _a.seguridad;
    return (React.createElement(ProveedorEstado, { estadoInicial: estadoInicial, reductor: reductor },
        React.createElement(ListaChequeo, { idEmpresa: idEmpresa })));
};
export default ComponenteListaChequeo;
