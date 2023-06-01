/// <reference types="react" />
export interface Opcion {
    id: number;
    eliminarElemento: (id: number) => void;
    esMultipleRespuesta: boolean;
    esOtraOpcion: boolean;
}
declare const Opcion: ({ id, eliminarElemento, esMultipleRespuesta, esOtraOpcion }: Opcion) => JSX.Element;
export default Opcion;
