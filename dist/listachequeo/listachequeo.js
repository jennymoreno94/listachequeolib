var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from 'react';
import Preguntas from "./preguntas";
/*export interface FormularioProps {
   
}*/
var ListaChequeo = function () {
    /*const [contador, setContador] = useState<number>(0);

    const incrementarContador = () => {
      setContador(contador + 1);
    };
  
    return (
      <div>
        <Typography variant="h1">Contador: {contador}</Typography>
        <Button onClick={incrementarContador}>Incrementar</Button>
      </div>
    );*/
    var _a = React.useState(""), titulo = _a[0], setTitulo = _a[1];
    var _b = useState(""), pregunta = _b[0], setPregunta = _b[1];
    var _c = React.useState([]), componentesAgregados = _c[0], setComponentesAgregados = _c[1];
    var cambiarTitulo = function (event) {
        setTitulo(event.target.value);
    };
    var agregarComponente = function () {
        setComponentesAgregados(function (prevComponentes) { return __spreadArray(__spreadArray([], prevComponentes, true), [React.createElement(Preguntas, { key: prevComponentes.length })], false); });
    };
    var cambiarPregunta = function (event) {
        setPregunta(event.target.value);
    };
    return (React.createElement(Grid, { container: true },
        React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(Card, { variant: "outlined" },
                React.createElement(Grid, { container: true, spacing: 2, style: { margin: '2px 2px 2px 2px' }, justifyContent: "center" },
                    React.createElement(Typography, { variant: "h6" }, "Datos Encuesta")),
                React.createElement(CardContent, null,
                    React.createElement(Grid, { container: true, spacing: 2 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(TextField, { fullWidth: true, required: true, name: "T\u00EDtulo", label: "T\u00EDtulo", onChange: cambiarTitulo, variant: "outlined", value: titulo }))),
                    React.createElement(Card, { variant: "outlined", style: { marginTop: '10px' } },
                        React.createElement(Grid, { container: true, spacing: 2, style: { margin: '2px 2px 2px 2px' }, justifyContent: "center" },
                            React.createElement(Typography, { variant: "h6" }, "Secci\u00F3n")),
                        React.createElement(CardContent, null,
                            React.createElement(Grid, { container: true, spacing: 2 },
                                React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                    React.createElement(TextField, { fullWidth: true, required: true, name: "Secci\u00F3n", label: "Secci\u00F3n", onChange: cambiarPregunta, variant: "outlined", value: pregunta })),
                                React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                    React.createElement(Button, { onClick: agregarComponente, color: "primary", variant: "contained", size: "medium" }, "Agregar Preguntas"))))),
                    componentesAgregados.map(function (componente) { return componente; }))))));
};
export default ListaChequeo;
