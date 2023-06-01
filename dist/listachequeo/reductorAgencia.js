var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { TipoFormulario } from '@infotrack/presentacion-transversales/interfacesComunes';
import { acciones } from './interfaces';
export var estadoInicial = {
    entidadAgencia: null,
    estadoFormulario: false,
    recargarTabla: true,
    tipoFormulario: TipoFormulario.Creacion,
};
export var reductor = function (estado, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case acciones.CAMBIAR_ESTADO_FORMULARIO: {
            return __assign(__assign({}, estado), { entidadAgencia: payload ? payload.entidadAgencia : null, estadoFormulario: !estado.estadoFormulario, tipoFormulario: payload ? payload.tipoFormulario : estado.tipoFormulario });
        }
        case acciones.RECARGAR_TABLA:
            return __assign(__assign({}, estado), { recargarTabla: !estado.recargarTabla });
        default:
            return estado;
    }
};
