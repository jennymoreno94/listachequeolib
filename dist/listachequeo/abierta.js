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
import { Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
var tipoDatos = [
    { tipo_dato: 'Texto', id: 1 },
    { tipo_dato: 'Número', id: 2 },
];
var Abierta = function () {
    var _a = useState({ tipo_dato: '', id: 0 }), tipoDato = _a[0], setTipoDato = _a[1];
    var _b = React.useState(false), opcionNoAplica = _b[0], setOpcionNoAplica = _b[1];
    var _c = React.useState(false), opcionTomarFoto = _c[0], setTomarFoto = _c[1];
    var _d = React.useState(false), opcionRespuestaLarga = _d[0], setRespuestaLarga = _d[1];
    var seleccionarTipoDato = function (value) {
        setTipoDato(value);
    };
    var agregarOpcionNoAplica = function (event) {
        setOpcionNoAplica(event.target.checked);
    };
    var agregarTomarFoto = function (event) {
        setTomarFoto(event.target.checked);
    };
    var agregarRespuestaLarga = function (event) {
        setRespuestaLarga(event.target.checked);
    };
    return (React.createElement(Grid, { container: true },
        React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(Card, { variant: "outlined", style: { marginTop: '30px' } },
                React.createElement(CardContent, null,
                    React.createElement(Grid, { container: true, spacing: 2, style: { margin: '2px 2px 2px 2px' }, justifyContent: "center" },
                        React.createElement(Typography, { variant: "h6" }, "Abierta")),
                    React.createElement(CardContent, null,
                        React.createElement(Grid, { container: true, spacing: 2 },
                            React.createElement(Grid, { container: true, alignItems: "center" },
                                React.createElement(Grid, { item: true, xs: 4, sm: 4 },
                                    React.createElement(Autocomplete, { onChange: function (_, value) {
                                            return seleccionarTipoDato(value ? value : null);
                                        }, 
                                        //onChange={handleAutocompleteChange}
                                        options: tipoDatos, getOptionLabel: function (option) { return option.tipo_dato; }, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { variant: "outlined", label: "Tipo Dato" }))); }, value: tipoDato })),
                                (tipoDato === null || tipoDato === void 0 ? void 0 : tipoDato.tipo_dato) === 'Texto' ? React.createElement(FormControlLabel, { value: "no-aplica", control: React.createElement(Switch, { onChange: agregarRespuestaLarga, color: "primary", name: "no-aplica" }), label: "Respuesta Larga", style: { marginLeft: '10px' } }) : null,
                                React.createElement(FormControlLabel, { value: "no-aplica", control: React.createElement(Switch, { onChange: agregarOpcionNoAplica, color: "primary", name: "no-aplica" }), label: "No Aplica", style: { marginLeft: '10px' } }),
                                React.createElement(FormControlLabel, { value: "tomar-foto", control: React.createElement(Switch, { onChange: agregarTomarFoto, color: "primary", name: "tomar-foto" }), label: "Tomar Foto", style: { marginLeft: '10px' } })),
                            (tipoDato === null || tipoDato === void 0 ? void 0 : tipoDato.tipo_dato) ? React.createElement(Grid, { container: true, spacing: 2, style: { marginTop: '2px' }, alignItems: "flex-start" },
                                React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                    React.createElement(TextField, { disabled: true, fullWidth: true, required: true, variant: "outlined", rows: opcionRespuestaLarga ? 2 : 0, multiline: opcionRespuestaLarga ? true : false, value: "Ingresar su respuesta de tipo ".concat(tipoDato === null || tipoDato === void 0 ? void 0 : tipoDato.tipo_dato, " ").concat(opcionRespuestaLarga ? 'con respuesta larga' : '') }))) : null)))))));
};
export default Abierta;
