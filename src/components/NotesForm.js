import React from "react";
import {Box, Button, Stack} from "@mui/material";
import {Form, Formik} from "formik";
import {InputField} from "./InputField";
import * as yup from "yup";

export const NotesForm = ({ onSubmit, initialTitle = "", initialDescription = "" }) => {
    return (
        <Box>
            <Formik
                initialValues={{title: initialTitle, description: initialDescription}}
                onSubmit={(values, formikHelpers) => {
                    onSubmit(values);
                    formikHelpers.resetForm();
                }}
                validationSchema={yup.object().shape({
                    title: yup.string().label("Title").required().min(4).max(20),
                    description: yup.string().label("Description").required().min(8).max(1000)
                })}
            >
                <Form>
                    <Stack spacing={3}>
                        <InputField label="Title" name="title" />
                        <InputField label="Descriptions"  multiline="true" name="description" />
                        <Button type="submit" variant="contained" fullWidth> Submit </Button>
                    </Stack>
                </Form>
            </Formik>
        </Box>
    )
}