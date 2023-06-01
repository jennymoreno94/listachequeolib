import { AnyAction } from 'redux';
import { IEstadoListaChequeo as IEstadoListaChequeo } from './interfaces';
export declare const estadoInicial: IEstadoListaChequeo;
export declare const reductor: (estado: IEstadoListaChequeo, { type, payload }: AnyAction) => IEstadoListaChequeo | {
    entidadAgencia: any;
    estadoFormulario: boolean;
    tipoFormulario: any;
    recargarTabla: boolean;
};
