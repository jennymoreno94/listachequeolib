import { Button, Checkbox, Grid, Radio, TextField } from '@material-ui/core';
import React from 'react';
var Opcion = function (_a) {
    var id = _a.id, /*texto,*/ eliminarElemento = _a.eliminarElemento, esMultipleRespuesta = _a.esMultipleRespuesta, esOtraOpcion = _a.esOtraOpcion;
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { style: { marginTop: '20px' } },
            React.createElement(Grid, { container: true, xs: 12, sm: 12, spacing: 5, alignItems: "center" },
                React.createElement(Grid, { item: true, xs: 1, sm: 1 }, esMultipleRespuesta ? React.createElement(Checkbox, { disabled: true }) : React.createElement(Radio, { disabled: true })),
                React.createElement(Grid, { item: true, xs: 8, sm: 8 }, esOtraOpcion ?
                    React.createElement(TextField, { disabled: true, fullWidth: true, required: true, name: "Secci\u00F3n", label: "Secci\u00F3n", defaultValue: "Otro", variant: "outlined", style: { marginLeft: '5px' } }) :
                    React.createElement(TextField, { fullWidth: true, required: true, name: "Secci\u00F3n", label: "Secci\u00F3n", variant: "outlined", style: { marginLeft: '5px' } })),
                React.createElement(Grid, { item: true, xs: 2, sm: 2 },
                    React.createElement(Button, { onClick: function () { return eliminarElemento(id); }, color: "secondary", variant: "contained", size: "medium" }, "Eliminar"))))));
};
export default Opcion;
