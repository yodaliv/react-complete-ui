import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
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
    const [value , setValue] = useState();
    return(
        <form>
            <Grid>
                
            </Grid>
        </form>
    )
}