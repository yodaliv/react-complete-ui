import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '80%'
        }
    },
}));

export function Form(props) {
    const classes = useStyles();
    
    return (
        <form className={ classes.root } autoComplete='off'>
            { props.children }
        </form>
    )
}
