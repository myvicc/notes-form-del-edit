import React from "react";
import {TextField} from "@mui/material";
import { useField } from "formik";

export const InputField = ({label = "", multiline = false, name }) => {

    const [{ onChange, onBlur, value }, { touched, error }] =useField(name);
    const isErrorShown = touched && !!error;
    return <TextField
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        fullWidth
        variant="outlined"
        label={label}
        multiline={multiline}
        rows={multiline ? 4 : 1}
        error={isErrorShown}
        helperText={isErrorShown ? error : ""}
    />
}