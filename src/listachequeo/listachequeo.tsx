import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from 'react';

import Preguntas from "./preguntas";


export interface IListaChequeoProps {
    idEmpresa: string;
}
const ListaChequeo: React.FunctionComponent<IListaChequeoProps> = () => {

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

    const [titulo, setTitulo] = React.useState("");
    const [pregunta, setPregunta] = useState("");

    const [componentesAgregados, setComponentesAgregados] = React.useState<React.ReactNode[]>([]);

    const cambiarTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const agregarComponente = () => {
        setComponentesAgregados(prevComponentes => [...prevComponentes, <Preguntas key={prevComponentes.length} />]);
    };

    const cambiarPregunta = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPregunta(event.target.value);
      };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                        <Typography variant="h6">Datos Encuesta</Typography>
                    </Grid>
                    <CardContent>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    name="Título"
                                    label="Título"
                                    onChange={cambiarTitulo}
                                    variant="outlined"
                                    value={titulo}
                                />

                            </Grid>
                        </Grid>
                        <Card variant="outlined" style={{ marginTop: '10px' }}>
                            <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                                <Typography variant="h6">Sección</Typography>
                            </Grid>
                            <CardContent>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            required
                                            name="Sección"
                                            label="Sección"
                                            onChange={cambiarPregunta}
                                            variant="outlined"
                                            value={pregunta}
                                        />

                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            onClick={agregarComponente}
                                            color="primary"
                                            variant="contained"
                                            size="medium"

                                        >
                                            Agregar Preguntas
                                        </Button>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                        {componentesAgregados.map(componente => componente)}

                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
};

export default ListaChequeo;