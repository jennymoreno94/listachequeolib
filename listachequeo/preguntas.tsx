import { Button, Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Autocomplete } from '@material-ui/lab';

import Abierta from "./abierta";
import Seleccion from "./seleccion";



 const tipoPregunta = [
    { tipo_pregunta: 'Selección', id: 1 },
    { tipo_pregunta: 'Abierta', id: 2 },
    { tipo_pregunta: 'Fecha', id: 3 },

];

export interface FormularioProps {
    // Propiedades del componente
}


interface Option {
    tipo_pregunta: string;
    id: number;
}

interface Respuesta {
    id: number;
    pregunta: string;
    respuesta: string;
}

const Preguntas: React.FunctionComponent<FormularioProps> = () => {
    const [pregunta, setPregunta] = useState("");
    const alCambiarPregunta = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPregunta(event.target.value);
    };

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [requerido, setRequerido] = React.useState(false);

    const agregarRequerido = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequerido(event.target.checked);
    };

    const guardarPregunta = () => {

    };

    const cambiarAutocomplete = (
        value: Option[]) => {
        setSelectedOptions(value);
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Card variant="outlined" style={{ marginTop: '10px' }}>
                        <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                            <Typography variant="h6">Componente de Preguntas</Typography>
                        </Grid>
                        <CardContent>
                            <Grid container spacing={2} >

                                <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }} spacing={2}>

                                    <Button
                                        onClick={guardarPregunta}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"
                                        style={{ marginRight: '10px' }}

                                    >
                                        Duplicar Pregunta
                                    </Button>
                                    <Button
                                        onClick={guardarPregunta}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"
                                        style={{ marginRight: '10px' }}

                                    >
                                        Eliminar Pregunta
                                    </Button>
                                    <Button
                                        onClick={guardarPregunta}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"


                                    >
                                        Guardar Pregunta
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="Pregunta"
                                        label="Pregunta"
                                        multiline
                                        onChange={alCambiarPregunta}
                                        variant="outlined"
                                        value={pregunta}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Autocomplete
                                        multiple
                                        onChange={(_, value) => {
                                            if (value.length > 2) {

                                            }
                                            cambiarAutocomplete(value);
                                        }}
                                        options={tipoPregunta}
                                        getOptionLabel={(option) => option.tipo_pregunta}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                label="Tipo Respuesta"

                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        value="requerido"
                                        control={<Switch
                                            onChange={agregarRequerido}
                                            color="primary" name="requerido" />}
                                        label="Requerido"
                                        style={{ marginLeft: '10px' }}
                                    />
                                </Grid>

                            </Grid>
                            {
                                selectedOptions.map(map => {
                                    switch (map.id) {
                                        case 1:
                                            return (
                                                <Seleccion />
                                            );
                                        case 2:
                                            return (
                                                <Abierta />
                                            );

                                        case 3:
                                            return (
                                                <Grid item xs={8} sm={8}>
                                                    <TextField
                                                        fullWidth
                                                        required
                                                        name="Texto"
                                                        label="Texto"
                                                        disabled
                                                        variant="outlined"
                                                        style={{ marginLeft: '5px' }}
                                                    />
                                                </Grid>
                                            );

                                        default:
                                            return null;
                                    }
                                })
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Preguntas;