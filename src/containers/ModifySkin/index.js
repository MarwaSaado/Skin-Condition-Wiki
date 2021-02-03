import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Container } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Layout from "../../components/layouts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function ModifySkin(props) {
    const { t } = useTranslation();
    const history = useHistory();
    return (
        <Layout>
            <Grid
                container
                justify="space-around"
                alignItems="center"
                style={{ minHeight: "100vh", width: "100%" }}
            >
                <Grid item xs={10} sm={6}>
                    <Paper elevation={3} className="login">
                        <Container>
                            <Formik
                                initialValues={{
                                    id: "",
                                    cond: "",
                                    desc: ""
                                }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.id) {
                                        errors.id = t("Required");
                                    }
                                    if (!values.cond) {
                                        errors.cond = t("Required");
                                    }
                                    if (!values.desc) {
                                        errors.desc = t("Required");
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { resetForm }) => {
                                    let data = {
                                        id: values.id,
                                        condition: values.cond,
                                        description: values.desc
                                    };
                                    axios.put("http://localhost:5000/api/modifySkinCondition", data).then((res) => {
                                        console.log(res.data.data)
                                        if (res.data.success === 1 && res.data.data.affectedRows == 1) {
                                            console.log(res.data);
                                            toast.success("Update Complete Successfully");
                                            history.push('/')
                                        }
                                        else {
                                            toast.error("Sorry ,Check your Data");
                                            resetForm({ values: { id: "", cond: "", desc: "" } })
                                        }
                                    }).catch((err) => {

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
                                                <h1 style={{ marginTop: "30px" }}>Update Skin Condition</h1>
                                            </Grid>
                                            <Grid item>
                                                <Field
                                                    component={TextField}
                                                    name="id"
                                                    type="text"
                                                    label={t("ID")}
                                                    variant="outlined"
                                                    className="textField"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Field
                                                    component={TextField}
                                                    name="cond"
                                                    type="text"
                                                    label={t("Condition")}
                                                    variant="outlined"
                                                    className="textField"
                                                />{" "}
                                            </Grid>
                                            <Grid item>
                                                <Field
                                                    component={TextField}
                                                    name="desc"
                                                    type="text"
                                                    label={t("Description")}
                                                    variant="outlined"
                                                    className="textField"
                                                />{" "}
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    disabled={isSubmitting}
                                                    onClick={submitForm}
                                                    className="save"
                                                >
                                                    {t("update")}
                                                </Button>
                                            </Grid>{" "}
                                            <Grid item>
                                                {" "}
                                            </Grid>
                                        </Grid>{" "}
                                    </Form>
                                )}
                            </Formik>
                        </Container>{" "}
                    </Paper>
                </Grid>{" "}
            </Grid>
        </Layout>
    );
}

export default ModifySkin;