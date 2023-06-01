import { TipoFormulario } from '@infotrack/presentacion-transversales/interfacesComunes';
import { AnyAction } from 'redux';
import { acciones, IEstadoListaChequeo as IEstadoListaChequeo } from './interfaces';

export const estadoInicial: IEstadoListaChequeo = {
    estadoFormulario: false,
    recargarTabla: true,
    tipoFormulario: TipoFormulario.Creacion,
};

export const reductor = (estado: IEstadoListaChequeo, { type, payload }: AnyAction) => {
    switch (type) {
        case acciones.CAMBIAR_ESTADO_FORMULARIO: {
            return {
                ...estado,
                entidadAgencia: payload ? payload.entidadAgencia : null,
                estadoFormulario: !estado.estadoFormulario,
                tipoFormulario: payload ? payload.tipoFormulario : estado.tipoFormulario,
            };
        }
        case acciones.RECARGAR_TABLA:
            return {
                ...estado,
                recargarTabla: !estado.recargarTabla,
            };

        default:
            return estado;
    }
};
