var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Button, Card, CardContent, FormControlLabel, Grid, Switch, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Opcion from './opcion';
var Seleccion = function () {
    var _a = useState([{ id: 1, otraOpcion: false }]), opciones = _a[0], setOpciones = _a[1];
    var _b = React.useState(false), multipleRespuestas = _b[0], setMultiplesRespuestas = _b[1];
    var _c = React.useState(false), opcionNoAplica = _c[0], setOpcionNoAplica = _c[1];
    var _d = React.useState(false), respuestasObligatorias = _d[0], setRespuestasObligatorias = _d[1];
    var _e = React.useState(false), otraOpcion = _e[0], setOtraOpcion = _e[1];
    var agregarOpcion = function (otraOpcion) {
        debugger;
        var nuevoElemento = {
            id: opciones.length + 1,
            texto: "",
            otraOpcion: otraOpcion
        };
        setOpciones(__spreadArray(__spreadArray([], opciones, true), [nuevoElemento], false));
        var miOpcion = opciones.some(function (elemento) { return elemento.otraOpcion === true; });
        if (miOpcion || otraOpcion) {
            setOtraOpcion(true);
        }
    };
    var eliminarElemento = function (id) {
        debugger;
        var nuevosElementos = opciones.filter(function (elemento) { return elemento.id !== id; });
        var isOtraOpcion = nuevosElementos.some(function (elemento) { return elemento.otraOpcion === true; });
        setOpciones(nuevosElementos);
        if (isOtraOpcion) {
            setOtraOpcion(true);
        }
        else {
            setOtraOpcion(false);
        }
    };
    var agregarMultipleRespuestas = function (event) {
        setMultiplesRespuestas(event.target.checked);
    };
    var agregarOpcionNoAplica = function (event) {
        setOpcionNoAplica(event.target.checked);
    };
    var agregarRespuestasObligatorias = function (event) {
        setRespuestasObligatorias(event.target.checked);
    };
    return (React.createElement(Grid, { container: true },
        React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(Card, { variant: "outlined", style: { marginTop: '30px' } },
                React.createElement(CardContent, null,
                    React.createElement(Grid, { container: true, spacing: 2, style: { margin: '2px 2px 2px 2px' }, justifyContent: "center" },
                        React.createElement(Typography, { variant: "h6" }, "Selecci\u00F3n")),
                    React.createElement(CardContent, null,
                        React.createElement(Grid, { container: true, spacing: 2 },
                            React.createElement(Grid, { container: true, alignItems: "flex-start" },
                                React.createElement(Grid, { item: true, xs: 12, sm: 12 },
                                    React.createElement(Button, { onClick: function () { return agregarOpcion(false); }, color: "secondary", variant: "contained", size: "medium" }, "Adicionar Opci\u00F3n"),
                                    React.createElement(Button, { disabled: otraOpcion, onClick: function () { return agregarOpcion(true); }, color: "secondary", variant: "contained", size: "medium", style: { marginLeft: '10px' } }, "Otra Opci\u00F3n"),
                                    React.createElement(FormControlLabel, { value: "multiple-respuestas", control: React.createElement(Switch, { onChange: agregarMultipleRespuestas, color: "primary", name: "multiple-respuesta" }), label: "Multiple Respuestas", style: { marginLeft: '10px' } }),
                                    React.createElement(FormControlLabel, { value: "no-aplica", control: React.createElement(Switch, { onChange: agregarOpcionNoAplica, color: "primary", name: "no-aplica" }), label: "No Aplica", style: { marginLeft: '10px' } }),
                                    multipleRespuestas ? React.createElement(FormControlLabel, { value: "respuestas-obligatorias", control: React.createElement(Switch, { onChange: agregarRespuestasObligatorias, color: "primary", name: "no-aplica" }), label: "Respuestas Obligatorias", style: { marginLeft: '10px' } }) : null)),
                            React.createElement(Grid, { item: true, xs: 6, md: 12, sm: 6 },
                                React.createElement(Grid, { container: true }, opciones.map(function (elemento) { return (React.createElement(Opcion, { key: elemento.id, id: elemento.id, esMultipleRespuesta: multipleRespuestas, 
                                    /*texto={elemento.texto}*/
                                    eliminarElemento: eliminarElemento, esOtraOpcion: elemento.otraOpcion })); }))))))))));
};
export default Seleccion;
