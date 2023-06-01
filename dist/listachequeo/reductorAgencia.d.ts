import { AnyAction } from 'redux';
import { IEstadoAgencia } from './interfaces';
export declare const estadoInicial: IEstadoAgencia;
export declare const reductor: (estado: IEstadoAgencia, { type, payload }: AnyAction) => any;
