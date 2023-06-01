import { TipoFormulario } from '@infotrack/presentacion-transversales/interfacesComunes';
import React from 'react';
export interface IFormularioAgenciaVistaProps {
    accionCrearEditar: () => void;
    alCambiarValor: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    cerrarFormulario: () => void;
    estadoFormulario: boolean;
    esMovil: boolean;
    tipoFormulario: TipoFormulario;
}
export interface IEstadoListaChequeo {
    estadoFormulario: boolean;
    recargarTabla: boolean;
    tipoFormulario: TipoFormulario;
}
export declare enum acciones {
    CAMBIAR_ESTADO_FORMULARIO = "CAMBIAR_ESTADO_FORMULARIO",
    RECARGAR_TABLA = "RECARGAR_TABLA"
}
