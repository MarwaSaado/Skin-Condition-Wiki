import React from 'react';
import Layout from '../../components/layouts';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Formik, Form } from "formik";
import { Button, Paper, Grid, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from 'react';


const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

export default function BasicTable() {
    const [row, setRows] = useState([]);
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Layout>
            <Grid
                container
                justify="space-around"
                alignItems="center"
                style={{ minHeight: "50vh", width: "90%" }}
            >
                <Grid item xs={10} sm={6}>
                    <Paper elevation={3} className="login">
                        <Container>
                            <Formik
                                initialValues={{
                                }}
                                validate={(values) => {
                                    const errors = {};
                                    return errors;
                                }}
                                onSubmit={(values) => {
                                    console.log("asd");
                                    let data = {
                                        isCreated: localStorage.getItem("id")
                                    }
                                    axios.post("http://localhost:5000/api/viewAllCreatedSkinCondition", data).then((res) => {
                                        if (res.data.success === 1) {
                                            console.log(res.data);
                                            setRows(res.data.data);
                                        }
                                    }).catch((err) => {
                                        console.log(err);
                                    })
                                }}
                            >
                                {({ submitForm, isSubmitting }) => (
                                    <Form>
                                        <Grid
                                            container
                                            alignItems="center"
                                            justify="space-between"
                                            direction="column"
                                            spacing={4}
                                        >
                                            <Grid item>
                                                <h1 style={{ marginTop: "30px" }}>Refresh the List</h1>
                                            </Grid>

                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    disabled={isSubmitting}
                                                    onClick={submitForm}
                                                    className="save"
                                                >
                                                    {t("Submit")}
                                                </Button>

                                            </Grid>{" "}

                                        </Grid>{" "}
                                    </Form>
                                )}
                            </Formik>
                        </Container>{" "}
                    </Paper>
                </Grid>{" "}
            </Grid>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Condition ID</TableCell>
                            <TableCell>Condition</TableCell>
                            <TableCell align="center">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.cond}</TableCell>
                                <TableCell align="center">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}