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
import { Button, Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Autocomplete } from '@material-ui/lab';
import Abierta from "./abierta";
import Seleccion from "./seleccion";
var tipoPregunta = [
    { tipo_pregunta: 'Selección', id: 1 },
    { tipo_pregunta: 'Abierta', id: 2 },
    { tipo_pregunta: 'Fecha', id: 3 },
];
var Preguntas = function () {
    var _a = useState(""), pregunta = _a[0], setPregunta = _a[1];
    var alCambiarPregunta = function (event) {
        setPregunta(event.target.value);
    };
    var _b = useState([]), selectedOptions = _b[0], setSelectedOptions = _b[1];
    var _c = React.useState(false), requerido = _c[0], setRequerido = _c[1];
    var agregarRequerido = function (event) {
        setRequerido(event.target.checked);
    };
    var guardarPregunta = function () {
    };
    var cambiarAutocomplete = function (value) {
        setSelectedOptions(value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(Card, { variant: "outlined", style: { marginTop: '10px' } },
                    React.createElement(Grid, { container: true, spacing: 2, style: { margin: '2px 2px 2px 2px' }, justifyContent: "center" },
                        React.createElement(Typography, { variant: "h6" }, "Componente de Preguntas")),
                    React.createElement(CardContent, null,
                        React.createElement(Grid, { container: true, spacing: 2 },
                            React.createElement(Grid, { container: true, justifyContent: "flex-end", style: { marginTop: '10px' }, spacing: 2 },
                                React.createElement(Button, { onClick: guardarPregunta, color: "secondary", variant: "contained", size: "medium", style: { marginRight: '10px' } }, "Duplicar Pregunta"),
                                React.createElement(Button, { onClick: guardarPregunta, color: "secondary", variant: "contained", size: "medium", style: { marginRight: '10px' } }, "Eliminar Pregunta"),
                                React.createElement(Button, { onClick: guardarPregunta, color: "secondary", variant: "contained", size: "medium" }, "Guardar Pregunta")),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(TextField, { fullWidth: true, required: true, name: "Pregunta", label: "Pregunta", multiline: true, onChange: alCambiarPregunta, variant: "outlined", value: pregunta })),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(Autocomplete, { multiple: true, onChange: function (_, value) {
                                        if (value.length > 2) {
                                        }
                                        cambiarAutocomplete(value);
                                    }, options: tipoPregunta, getOptionLabel: function (option) { return option.tipo_pregunta; }, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { variant: "outlined", label: "Tipo Respuesta" }))); } })),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControlLabel, { value: "requerido", control: React.createElement(Switch, { onChange: agregarRequerido, color: "primary", name: "requerido" }), label: "Requerido", style: { marginLeft: '10px' } }))),
                        selectedOptions.map(function (map) {
                            switch (map.id) {
                                case 1:
                                    return (React.createElement(Seleccion, null));
                                case 2:
                                    return (React.createElement(Abierta, null));
                                case 3:
                                    return (React.createElement(Grid, { item: true, xs: 8, sm: 8 },
                                        React.createElement(TextField, { fullWidth: true, required: true, name: "Texto", label: "Texto", disabled: true, variant: "outlined", style: { marginLeft: '5px' } })));
                                default:
                                    return null;
                            }
                        })))))));
};
export default Preguntas;
