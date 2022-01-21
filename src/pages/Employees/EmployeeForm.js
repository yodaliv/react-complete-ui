import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '80%'
        }
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px ${theme.spacing(1)}px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        }
    }
}));

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {

    const classes = useStyles();
    const [values , setValues] = useState(initialFValues);
    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })

        console.log(values);
    }
    return(
        <form className={ classes.root }>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined" 
                        label="Full name" 
                        name="fullName"
                        value={ values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        variant="outlined" 
                        label="Email" 
                        name="emil"
                        value={ values.email}
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </form>
    )
}